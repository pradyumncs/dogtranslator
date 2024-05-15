import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import { Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Sideselfie = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  const handleNextPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate('Analyzing');
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const fileUri = result.assets[0].uri;
      setImage(fileUri);

      // Store the image in AsyncStorage
      await AsyncStorage.setItem('sideSelfie', fileUri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.timeText}>Upload Side Selfie</Text>
      </View>
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <ImageBackground
            source={require('../../assets/faceimage/sideface.jpg')}
            style={styles.image}
          >
            <View style={styles.buttonContainer}>
            
            </View>
          </ImageBackground>
        )}
      </View>

      <TouchableOpacity onPress={pickImage}>
        <LinearGradient
          colors={['rgba(58, 131, 244, 0.8)', 'rgba(9, 181, 211, 0.8)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            padding: 15,
            width: 250,
          }}
        >
          <Text style={[styles.buttonText, { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }]}>
            Upload a Side Selfie
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {image && (
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={handleNextPress}>
            <LinearGradient
              colors={['rgba(58, 131, 244, 0.8)', 'rgba(9, 181, 211, 0.8)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 15,
                width: 250,
              }}
            >
              <Text style={[styles.buttonText, { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }]}>
                Next
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  timeText: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 12,
  },
  image: {
    width: 400,
    height: 400,
    marginVertical: 20,
    borderRadius: 10, 
  },
  imageContainer: {
    shadowColor: 'red', 
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Sideselfie;
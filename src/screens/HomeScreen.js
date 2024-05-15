import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';

const HomeScreen = () => {
  const navigation = useNavigation();


  const handleNextPress = () => {
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate('Frontselfie')
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.timeText}>Face Scan</Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../assets/faceimage/manhome.png')}
          style={styles.image}
        >
          <View style={styles.buttonContainer}>
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
                <Text style={[styles.buttonText, { fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }]}>
                  Begin Scan
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 40, color: '#FFFFFF' }}>
        Get your ratings and recommendations
      </Text>
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
    justifyContent: 'space-between',
    width: '100%',
  },
  timeText: {
    fontSize: 26,
    marginTop: 20,
    padding: 20,
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
    borderRadius: 10, // Add border radius
  },
  imageContainer: {
    shadowColor: 'red', // Change shadow color to red
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
    fontSize: 24,
  },
});

export default HomeScreen;
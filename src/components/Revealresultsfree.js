import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-elements';
import * as Progress from 'react-native-progress';

const Revealresultsfree = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [pulseAnimation, setPulseAnimation] = useState(new Animated.Value(1));
  const [avatarImage, setAvatarImage] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('frontSelfie').then((fileUri) => {
      if (fileUri) {
        setAvatarImage({ uri: fileUri });
      }
    });
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.2,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseAnimation]);

  const handleNextPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate('Sideselfie');
  };

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, { alignItems: 'center' }]}>
        <Text style={styles.timeText}>Reveal your Results 👑</Text>
      </View>

      <View style={styles.containers}>
        <View style={styles.avatarContainer}>
        <Avatar
            source={avatarImage}
            size={140}
            rounded
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>Overall</Text>
            <Image
              source={require('../../assets/faceimage/blur2.png')}
              style={{
                width: 100,
                height: 50,
                borderRadius: 10,
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
            <Progress.Bar progress={1.0} width={110} color={'#00ff60'} />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>Potential</Text>
            <Image
              source={require('../../assets/faceimage/blur2.png')}
              style={{
                width: 100,
                height: 50,
                borderRadius: 10,
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
            <Progress.Bar progress={1.0} width={110} color={'#00ff60'} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>Masculinity</Text>
            <Image
              source={require('../../assets/faceimage/blur2.png')}
              style={{
                width: 100,
                height: 50,
                borderRadius: 10,
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
            <Progress.Bar progress={1.0} width={110} color={'#00ff60'} />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>Jawline</Text>
            <Image
              source={require('../../assets/faceimage/blur2.png')}
              style={{
                width: 100,
                height: 50,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <Progress.Bar progress={1.0} width={110} color={'#00ff60'} />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>Skin quality</Text>
            <Image
              source={require('../../assets/faceimage/blur2.png')}
              style={{
                width: 100,
                height: 50,
                borderRadius: 10,
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
            <Progress.Bar progress={1.0} width={110} color={'#00ff60'} />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>Cheekbones</Text>
            <Image
              source={require('../../assets/faceimage/blur2.png')}
              style={{
                width: 100,
                height: 50,
                borderRadius: 10,
                overflow: 'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            />
            <Progress.Bar progress={1.0} width={110} color={'#00ff60'} />
          </View>
        </View>
      </View>

      <TouchableOpacity style={{ alignItems: 'center', marginBottom:40 }}>
        <Animated.View
          style={{
            transform: [{ scale: pulseAnimation }],
          }}
        >
          <LinearGradient
            colors={['#FF4D4D', '#FF0000']}
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
            <Text
              style={[
                styles.buttonText,
                { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
              ]}
            >
              👑 Get Pro
            </Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
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
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusText: {
    fontSize: 12,
  },
  image: {
    width: 400,
    height: 500,
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
    marginTop: 200 /* reduced margin top */,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 15,
  },
  containers: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:50
    /* reduced margin top */
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  section: {
    width: '40%',
    marginVertical: 15,
    alignItems: 'center',
  },
  sectionText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  hiddenText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Revealresultsfree;
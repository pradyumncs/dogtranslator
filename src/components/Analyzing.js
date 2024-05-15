import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Analyzing = () => {
  const navigation = useNavigation();
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);
  const [avatarImage2, setAvatarImage2] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('sideSelfie').then((fileUri) => {
      if (fileUri) {
        setAvatarImage({ uri: fileUri });
      }
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('frontSelfie').then((fileUri) => {
      if (fileUri) {
        setAvatarImage2({ uri: fileUri });
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('ActualRevealresults');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Analyzing Your Face...</Text>
      <Text style={styles.heading2}>This will take a minute</Text>
      <View style={styles.avatarContainer}>
        <Avatar source={avatarImage} size={100} rounded containerStyle={styles.avatar} />
        <Avatar source={avatarImage2} size={100} rounded containerStyle={styles.avatar} />
      </View>
      <LottieView
        source={require('../../assets/faceimage/animations.json')}
        autoPlay
        loop
        onAnimationFinish={() => setAnimationLoaded(true)}
        style={styles.animation}
      />
      {animationLoaded && <Text style={styles.text}>Animation Loaded!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 60,
  },
  heading2: {
    fontSize: 20,
   
    color: 'grey',
    marginBottom: 60,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatar: {
    marginHorizontal: 10,
  },
  animation: {
    width: 350,
    height: 350,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Analyzing;
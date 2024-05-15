import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';

import textingGuyAnimation from '../../assets/faceimage/animations.json';
import womanHeadAnimation from '../../assets/animations/womanhead.json';
import textingGirlAnimation from '../../assets/animations/textinggirl.json';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleDone = () => {
    navigation.navigate('storyselectionscreen');
    setItem('onboarded', '1');
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>{t('done')}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: '#add8e6',
            image: (
              <View style={styles.lottie}>
              <LottieView
        source={require('../../assets/animations/score.json')}
        autoPlay
        loop
        speed={0.5} 
        style={styles.animation}
      />
              </View>
            ),
            title: t('wel1'),
            subtitle: t('sub1'),
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View style={styles.lottie}>
               
               <LottieView
        source={require('../../assets/animations/score.json')}
        autoPlay
        loop
        speed={0.5} 
        style={styles.animation}
      />
              </View>
            ),
            title: t('wel2'),
            subtitle: t('sub2'),
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View style={styles.lottie}>
                 <LottieView
        source={require('../../assets/animations/score.json')}
        autoPlay
        loop
        speed={0.5} 
        style={styles.animation}
      />
              </View>
            ),
            title: t('wel3'),
            subtitle: t('sub3'),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
  },
  animation: {
    width: 350,
    height: 350,
  },
});
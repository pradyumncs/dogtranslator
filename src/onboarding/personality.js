import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Slider } from '@rneui/themed';
import {
  useFonts,
  Poppins_600SemiBold,
  
} from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';
const PersonalitySlider = ({ route }) => {
  const [shyValue, setShyValue] = useState(0.5);
  const [pessimisticValue, setPessimisticValue] = useState(0.5);
  const [ordinaryValue, setOrdinaryValue] = useState(0.5);
  const navigation = useNavigation();
  const { t } = useTranslation();

  const { selectedImage } = route.params;


  const getImageSource = (imageNumber) => {
    const imageMap = {
      82: require('../../assets/Characterraw/1.png'),
        83: require('../../assets/Characterraw/2.png'),
        84: require('../../assets/Characterraw/3.png'),
        85: require('../../assets/Characterraw/4.png'),
        86: require('../../assets/Characterraw/5.png'),
        87: require('../../assets/Characterraw/6.png'),
        88: require('../../assets/Characterraw/7.png'),
        89: require('../../assets/Characterraw/8.png'),
        90: require('../../assets/Characterraw/9.png'),
        91: require('../../assets/Characterraw/10.png'),
      // Assuming it goes up to 12.png
      // ... add more mappings as needed
    };
  
    return imageMap[imageNumber] || require('../../assets/Characterraw/1.png'); // Default image if no match
  };





  let [fontsLoaded] = useFonts({
     
    Poppins_600SemiBold,
    
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
const handleNextPress = () => {
  console.log('Next pressed');
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  navigation.navigate('whattodoingame')
};

  return (
    <View style={styles.container}>
    
      <LinearGradient
        colors={['#ffafbd88', '#ffc3a088']} // Example gradient colors with transparency
        style={styles.gradient}
      >
        <Image
       source={getImageSource(selectedImage)} // Replace with your actual background image path
      style={styles.backgroundImage}
      resizeMode="cover"
    />
        <Text style={styles.title}>{t('on8tit')}</Text>
        {/* Add your image here */}
        <View style={styles.slidersContainer}>
          <View style={styles.sliderContainer}>
            <Text style={styles.label}>{t('on8sub11')}</Text>
            <Slider
                style={styles.slider}
                value={shyValue}
                onValueChange={setShyValue}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                thumbTintColor="#FFFFFF" // Color of the thumb
                thumbTouchSize={{ width: 40, height: 40 }} // Increase touch area
                thumbStyle={styles.thumbStyle} 
                // Custom style for the thumb
/>
            <Text style={styles.label}>{t('on8sub12')}</Text>
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.label}>{t('on8sub21')}</Text>
            <Slider
  style={styles.slider}
  value={pessimisticValue}
  onValueChange={setPessimisticValue}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  thumbTintColor="#FFFFFF" // Color of the thumb
  thumbTouchSize={{ width: 40, height: 40 }} // Increase touch area
  thumbStyle={styles.thumbStyle} // Custom style for the thumb
/>
            <Text style={styles.label}>{t('on8sub22')}</Text>
          </View>

          <View style={styles.sliderContainer}>
            <Text style={styles.label}>{t('on8sub31')}</Text>
            <Slider
  style={styles.slider}
  value={ordinaryValue}
  onValueChange={setOrdinaryValue}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  thumbTintColor="#FFFFFF" // Color of the thumb
  thumbTouchSize={{ width: 40, height: 40 }} // Increase touch area
  thumbStyle={styles.thumbStyle} // Custom style for the thumb
/>
            <Text style={styles.label}>{t('on8sub32')}</Text>
          </View>
        </View>
    
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>{t('next')}</Text>
      </TouchableOpacity>
      </LinearGradient>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', // Push content to the top and bottom
      },
      backgroundImage: {
        position: 'absolute', // Position image absolutely to cover the whole screen
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      },
  gradient: {
    flex: 1,
    justifyContent: 'center', // Center content in the gradient
    alignItems: 'center',
    paddingTop: 60, // Add padding for the status bar and title
  },
  title: {
    fontSize: 35, // Increased font size
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute', // Position the title absolutely at the top
    top: 0,
    alignSelf: 'center',
    paddingTop: 40, // Space from the top of the screen
    width: '100%',
    textAlign: 'center',
    fontFamily:'Poppins_600SemiBold',
  },
  slidersContainer: {
    width: '100%', // Ensure sliders container takes the full width
    paddingHorizontal: 20, // Padding on the sides
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, // Increase space between sliders
  },
  label: {
    color: 'red',
    fontSize: 22, 
    fontFamily:'Poppins_600SemiBold',// Increased font size for labels
  },
  slider: {
    flex: 1,
    marginHorizontal: 30,
    height: 50,  // Space around the slider
  },
  nextButton: {
    backgroundColor: '#00BFFF', 
    borderRadius: 20,
    position: 'absolute',
    bottom: 15,
    width: '85%',
    alignItems: 'center',
    padding: 8,
    // Button width
  },
  nextButtonText: {
    color: 'white',
    fontSize: 28, // Increased font size for button text
    textAlign: 'center',
    fontFamily:'Poppins_600SemiBold',
  },
  thumbStyle: {
    height: 20, // Increase the height for a larger thumb
    width:20, // Increase the width for a larger thumb
    borderRadius: 25, // Make the thumb rounded
  },
});

export default PersonalitySlider;

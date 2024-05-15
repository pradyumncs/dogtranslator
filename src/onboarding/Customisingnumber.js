import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Alert } from 'react-native';

import { Input, Button } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import {
  useFonts,
  Poppins_600SemiBold,
  
} from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';



const Customisingnumber = () => {
  // You can handle the pronoun selection and navigation in these functions
    const [backgroundColor, setBackgroundColor] = useState('#ebedf0');
    const [showNextButton, setShowNextButton] = useState(false);
    const navigation = useNavigation();
    const { t } = useTranslation();
    useEffect(() => {
      const nextButtonTimer = setTimeout(() => {
        setShowNextButton(true);
      }, 11000); // Delay in milliseconds
  
      // Cleanup function to clear the timer when the component unmounts
      return () => clearTimeout(nextButtonTimer);
    }, []);
    
    let [fontsLoaded] = useFonts({
     
      Poppins_600SemiBold,
      
    });
    useEffect(() => {
        // Change the background color to black after 3 seconds
        const timer = setTimeout(() => {
          setBackgroundColor('black');
        }, 11000);
    
        return () => clearTimeout(timer);
      }, []);
  

      const handleNextPress = () => {
        console.log('Next pressed');
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        navigation.navigate('yourname')
      };
  
  

  return (
    <SafeAreaView style={styles.container}>
    
        <View style={styles.header}>
          
        </View>

        
        <Text style={styles.greeting}>{t('on2tit')} </Text>

        <View style={styles.content}>

        <LottieView
        source={require('../../assets/animations/progress1.json')}
        autoPlay
        loop={false}
        speed={0.3} 
        style={styles.animation}
      />
         
        
        </View>

        {showNextButton && (
        <Button
          title={t('next')}
          onPress={handleNextPress}
          buttonStyle={styles.nextButton}
          titleStyle={{
            fontSize: 23,
            fontFamily: 'Poppins_600SemiBold',
          }}
        />
      )}
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebedf0'
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  backButton: {
    color: 'black',
    fontSize: 18,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 27,
    color: 'black',
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'Poppins_600SemiBold'
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  pronounButton: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    width: 200,
    
     // Set a fixed width or use 'paddingHorizontal' for wider buttons
  },
  nextButton: {
    backgroundColor: '#00BFFF', // You can change the color to match your design
    borderRadius: 20,
    height: 60, // Fixed height for the button
    marginBottom: 20,
    marginRight:20,
    marginLeft:20,
  },
  selectedText: {
    color: 'white', 
    fontSize: 18,// Text color for selected button
  },
  unselectedText: {
    color: 'black',
    fontSize: 18, // Text color for unselected button
  },
  nextButtonText: {
    color: 'white', // Next button text color
  },

  buttontextText: {
    color: '#ebedf0',
    fontSize: 22,// Text color for selected button
  },
  animation: {
    width: 350,
    height: 350,
  },
  
});

export default Customisingnumber;

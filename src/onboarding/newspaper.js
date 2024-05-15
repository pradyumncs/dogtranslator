import React , { useState } from 'react';
import { useCallback } from 'react';
import { Image} from 'react-native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Button } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_600SemiBold,
  
} from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import * as Haptics from 'expo-haptics';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';
const Spendfreetime = () => {
  // You can handle the pronoun selection and navigation in these functions
  const navigation = useNavigation();
    const [selectedPronoun, setSelectedPronoun] = React.useState('Fun');
    const [progress, setProgress] = useState(0.75);
    const { t } = useTranslation();
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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate('finalloading')
  };

  
  const handlePronounPress = (pronoun) => {
    setSelectedPronoun(pronoun); // Set the selected pronoun
    console.log(pronoun);
  };

  
  const getPronounButtonStyle = (pronoun) => ({
    ...styles.pronounButton,
    backgroundColor: selectedPronoun === pronoun ? 'black' : 'transparent',
    borderColor: selectedPronoun === pronoun ? 'white' : 'black',
  });

  

  return (
    <SafeAreaView style={styles.container}>
         <Progress.Bar progress={progress} width={null} borderWidth={0} />
         <LinearGradient
          colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
          style={StyleSheet.absoluteFillObject}
        >
        <View style={styles.header}>
          
        </View>

        
        <Text style={styles.greeting}>{t('on11tit')}</Text>

        <View style={styles.content}>
         
        
        
        <Image source={require('../../assets/images/newspaper/1.png')} style={styles.logoImage}/>
        <Image source={require('../../assets/images/newspaper/2.png')} style={styles.logoImage}/>
        <Image source={require('../../assets/images/newspaper/3.png')} style={styles.logoImage}/>
        <Image source={require('../../assets/images/newspaper/4.png')} style={styles.logoImage}/>
        <Image source={require('../../assets/images/newspaper/5.png')} style={styles.logoImage}/>
      
        </View>

        <Button title={t('next')} onPress={handleNextPress} buttonStyle={styles.nextButton}  titleStyle={{
    fontSize: 25, // Example font size
    fontFamily: 'Poppins_600SemiBold' // Your custom font family
  }} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 26,
    color: 'white',
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'Poppins_600SemiBold',
    marginRight:20,
    marginLeft:20,
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
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold' // Text color for selected button
  },
  logoImage: {
    width: '100%', // or a fixed width
    height: 45, // or a fixed height
    opacity: 0.8,
    resizeMode: 'contain', // or 'cover', depending on your needs
    marginTop: 30, // space between images
  },
  unselectedText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold'  // Text color for unselected button
  },
  nextButtonText: {
    color: 'white', // Next button text color
  },
  imagesContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  
});

export default Spendfreetime;

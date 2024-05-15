import React , { useState } from 'react';
import { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Button } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_600SemiBold,
  
} from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';
const Gender= () => {
  // You can handle the pronoun selection and navigation in these functions
  const navigation = useNavigation();
  const { t } = useTranslation();
    const [selectedPronoun, setSelectedPronoun] = React.useState('Male');

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
    navigation.navigate('Finalloading')
  };

  
  const handlePronounPress = (pronoun) => {
    setSelectedPronoun(pronoun); // Set the selected pronoun
    console.log(pronoun);
  };

  
  const getPronounButtonStyle = (pronoun) => ({
    ...styles.pronounButton,
    backgroundColor: selectedPronoun === pronoun ? 'black' : 'white',
    borderColor: selectedPronoun === pronoun ? '#fef8f4' : '#fef8f4',
    borderRadius: 15,
  });
  

  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
          style={StyleSheet.absoluteFillObject}
        >
        <View style={styles.header}>
          
        </View>

        
        <Text style={styles.greeting}>{t('on5tit')}</Text>

        <View style={styles.content}>
         
        
          <Button
            title={t('on5op1')}
            size='lg'
            onPress={() => handlePronounPress('Male')}
            buttonStyle={getPronounButtonStyle('Male')}
            titleStyle={selectedPronoun === 'Male' ? styles.selectedText : styles.unselectedText}
            
            icon={{
              name: 'user',
              type: 'font-awesome',
              size: 25,
              color: '#2986cc',
            }}
            iconRight
            iconContainerStyle={{ marginLeft: 10 }}
         
          />
          <Button
            title={t('on5op2')}
            size='lg'
            onPress={() => handlePronounPress('Female')}
            buttonStyle={getPronounButtonStyle('Female')}
            titleStyle={selectedPronoun === 'Female' ? styles.selectedText : styles.unselectedText}
            icon={{
              name: 'user',
              type: 'font-awesome',
              size: 25,
              color: '#c90076',
            }}
            iconRight
            iconContainerStyle={{ marginLeft: 10}}
          />

<Button
            title={t('on5op3')}
            size='lg'
            onPress={() => handlePronounPress('Other')}
            buttonStyle={getPronounButtonStyle('Other')}
            titleStyle={selectedPronoun === 'Other' ? styles.selectedText : styles.unselectedText}
           
          />
          
          
        </View>

        <Button title={t('next')}onPress={handleNextPress} buttonStyle={styles.nextButton}  titleStyle={{
    fontSize: 23, // Example font size
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
    fontSize: 35,
    color: 'black',
    marginTop: 32,
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
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold' // Text color for selected button
  },
  unselectedText: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold'  // Text color for unselected button
  },
  nextButtonText: {
    color: 'white', // Next button text color
  },
  
});

export default Gender;

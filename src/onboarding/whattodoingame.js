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
import * as Progress from 'react-native-progress';
import * as Haptics from 'expo-haptics';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';
const Whattodoingame = () => {
  // You can handle the pronoun selection and navigation in these functions
  const navigation = useNavigation();
    const [selectedPronoun, setSelectedPronoun] = React.useState('Adventure');
    const [progress, setProgress] = useState(0.3);
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
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate('spendfreetime')
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
         <Progress.Bar progress={progress} width={null} borderWidth={0} />
         <LinearGradient
          colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
          style={StyleSheet.absoluteFillObject}
        >
        <View style={styles.header}>
          
        </View>

        
        <Text style={styles.greeting}>{t('on9tit')}</Text>

        <View style={styles.content}>
         
        
          <Button
            title={t('on9op1')}
            size='lg'
            onPress={() => handlePronounPress('Love')}
            buttonStyle={getPronounButtonStyle('Love')}
            titleStyle={selectedPronoun === 'Love' ? styles.selectedText : styles.unselectedText}
          />
          <Button
            title={t('on9op2')}
            size='lg'
            onPress={() => handlePronounPress('Adventure')}
            buttonStyle={getPronounButtonStyle('Adventure')}
            titleStyle={selectedPronoun === 'Adventure' ? styles.selectedText : styles.unselectedText}
          />
         
          <Button
            title={t('on9op3')}
            size='lg'
            onPress={() => handlePronounPress('Fun')}
            buttonStyle={getPronounButtonStyle('Fun')}
            titleStyle={selectedPronoun === 'Fun' ? styles.selectedText : styles.unselectedText}
          />
          <Button
            title={t('on9op4')}
            size='lg'
            onPress={() => handlePronounPress('Funas')}
            buttonStyle={getPronounButtonStyle('Funas')}
            titleStyle={selectedPronoun === 'Funas' ? styles.selectedText : styles.unselectedText}
          />
          
            <Button
            title={t('on9op5')}
            size='lg'
            onPress={() => handlePronounPress('Mystery')}
            buttonStyle={getPronounButtonStyle('Mystery')}
            titleStyle={selectedPronoun === 'Mystery' ? styles.selectedText : styles.unselectedText}
          />
          
        </View>

        <Button title={t('next')}onPress={handleNextPress} buttonStyle={styles.nextButton}  titleStyle={{
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
    marginTop: 30,
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
    fontSize: 30,
    color: 'black',
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'Poppins_600SemiBold',
    
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
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold' // Text color for selected button
  },
  unselectedText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold'  // Text color for unselected button
  },
  nextButtonText: {
    color: 'white', // Next button text color
  },
  
});

export default Whattodoingame;

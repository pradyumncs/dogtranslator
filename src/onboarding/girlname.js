import React , { useState } from 'react';
import { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Input, Button } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_600SemiBold,
  
} from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';
const YourNameScreen = ({ route }) => {
  // You can handle the pronoun selection and navigation in these functions
  const navigation = useNavigation();
    const [selectedPronoun, setSelectedPronoun] = React.useState('Romance');
    const [name, setName] = useState('');
    const { selectedImage } = route.params;
    const { t } = useTranslation();

    console.log(selectedImage);

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
    navigation.navigate('personalitySlider', { selectedImage: selectedImage })
    console.log(selectedImage)
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
      <ImageBackground
        // The colors prop determines the colors of the gradient
        source={getImageSource(selectedImage)}
        style={{...styles.gradient, opacity: 0.95}}
      >
        <View style={styles.header}>
          
        </View>

        
        <Text style={styles.greeting}>{t('on7tit')}</Text>

        <View style={styles.content}>
         
        
        <Input
          placeholder={t('on7subt')}
          onChangeText={setName}
          value={name}
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.input}
          inputStyle={{
            fontSize: 29, // Example font size
            fontFamily: 'Poppins_600SemiBold', 
            color: 'red' 
            // Your custom font family
          }}
        />
          
        </View>

        <Button title={t('next')} onPress={handleNextPress} buttonStyle={styles.nextButton}  titleStyle={{
    fontSize: 25, // Example font size
    fontFamily: 'Poppins_600SemiBold' // Your custom font family
  }} />
      </ImageBackground>
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
  },
  selectedText: {
    color: 'white', 
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold' // Text color for selected button
  },
  unselectedText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold'  // Text color for unselected button
  },
  nextButtonText: {
    color: 'white', // Next button text color
  },
   inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  
});

export default YourNameScreen;

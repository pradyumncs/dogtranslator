import React, { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Poppins_600SemiBold,
  
} from '@expo-google-fonts/poppins';
import { Input, Button } from '@rneui/base';
import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';
const girlsData = [
  require('../../assets/Characterraw/1.png'),
    require('../../assets/Characterraw/2.png'),
    require('../../assets/Characterraw/3.png'),
    require('../../assets/Characterraw/4.png'),
    require('../../assets/Characterraw/5.png'),
    require('../../assets/Characterraw/6.png'),
    require('../../assets/Characterraw/7.png'),
    require('../../assets/Characterraw/8.png'),
    require('../../assets/Characterraw/9.png'),
    require('../../assets/Characterraw/10.png'),


  
  // ... add more as needed
];

const ChooseGirlScreen = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(girlsData[0]);

  const [selectedIndex, setSelectedIndex] = useState(0); // New state to track the selected index
  const navigation = useNavigation();
  const handleSelectImage = (img, index) => {
    setSelectedImage(img);
    setSelectedIndex(index); 
    console.log()// Update the selected index
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
    navigation.navigate('girlname', { selectedImage: selectedImage })
    
    console.log(selectedImage)
  };

  return (
    <LinearGradient
      colors={['#ffafbd', '#ffc3a0']} // Example gradient colors
      style={styles.container}
      
    >
      <View style={styles.titleContainer}>
      <Text style={styles.greeting}>{t('on6tit')}</Text>
        
      </View>
      <Image source={selectedImage} style={styles.mainImage} />
      <View style={styles.scrollViewWrapper}>
  
        <ScrollView 
          horizontal={true} 
          contentContainerStyle={styles.scrollViewContainer}
          showsHorizontalScrollIndicator={false}
          
        >
            
          {girlsData.map((img, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelectImage(img, index)}>
              <Image source={img} style={[
                  styles.smallImage,
                  selectedIndex === index && styles.smallImageSelected, // Apply selected style if index matches
              ]} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ padding: 10 }}></View>
      
        <Button title={t('next')} onPress={handleNextPress} buttonStyle={styles.nextButton}  titleStyle={{
    fontSize: 25, // Example font size
    fontFamily: 'Poppins_600SemiBold' // Your custom font family
  }} />
       
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Align items vertically to center
    alignItems: 'center',
  },
  greeting: {
    fontSize: 35,
    color: 'black',
    marginTop: 34,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'Poppins_600SemiBold',
    marginRight:20,
    marginLeft:20,
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  mainImage: {
    width: '100%',
    height: '100%', // Adjust the size as required
   
   // Space between the image and the ScrollView
  },
  scrollViewWrapper: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
  },
  scrollViewContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  scrollView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background for the ScrollView
  },
  smallImage: {
    width: 62,
    height: 62,
    borderRadius: 35,
    marginHorizontal: 5,
    borderWidth: 3,
    borderColor: 'transparent', // Border color is transparent by default
},
smallImageSelected: {
  borderColor: 'red', 
  // Border color changes to blue when selected
},
nextButton: {
  backgroundColor: '#00BFFF', // You can change the color to match your design
  borderRadius: 20,
  height: 60, // Fixed height for the button
  marginBottom: 20,
  marginRight:20,
    marginLeft:20,
},
  nextButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default ChooseGirlScreen;

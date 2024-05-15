import React, { useState, useEffect, useRef } from 'react';
// ... other imports ...
import { Animated } from 'react-native';
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
import Lottie from 'lottie-react-native';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';

const Finalloading = () => {
  // You can handle the pronoun selection and navigation in these functions
  const navigation = useNavigation();
    const [selectedPronoun, setSelectedPronoun] = React.useState('Fun');
    const [progress, setProgress] = useState(0.75);
    const [showFinalizingText, setShowFinalizingText] = useState(true);
    const [showBoostingAffection, setShowBoostingAffection] = useState(false);
    const [showThirdText, setShowThirdText] = useState(false);
    const { t } = useTranslation();
  
    const fadeFinalizing = useRef(new Animated.Value(1)).current; // Initial opacity for text
    const fadeBoosting = useRef(new Animated.Value(0)).current; // Initial opacity for text
    const fadeThirdText = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        const navigationTimer = setTimeout(() => {
          navigation.navigate('mytabs');
        }, 9500); // Set the delay to 9000ms (9 seconds)
    
        // Clear the timeout if the component is unmounted
        return () => clearTimeout(navigationTimer);
      }, [navigation]);
  
    const [userData, setUserData] = useState({
        name: "Shen",
        age: 26,
        image: require('../../assets/images/userimages/1.jpg'), // Replace with actual image path
        rating: 5,
        description: t('on12rev1')
      });
      
      useEffect(() => {
        const timer = setTimeout(() => {
          setUserData({
            name: "Maria",
            age: 24,
            image: require('../../assets/images/userimages/2.jpg'), // Replace with actual image path
            rating: 4.5,
            description: t('on12rev2')
          });
    
          // Set another timeout to update the userData after 3 seconds
          const secondTimer = setTimeout(() => {
            setUserData({
              name: "Sam",
              age: 30,
              image: require('../../assets/images/userimages/3.jpg'), // Replace with actual image path for Jack
              rating: 4.8,
              description: t('on12rev3')
            });
          }, 3000); // This will trigger 3 seconds after the first update
    
          // Clear the second timeout if the component is unmounted
          return () => clearTimeout(secondTimer);
    
        }, 3000);
    
        // Clear the first timeout if the component is unmounted
        return () => clearTimeout(timer);
      }, []); 
// Initial opacity for text
  
    useEffect(() => {
        // Start by fading out the 'Finalizing AI friend creation' text
        const finalizingTimer = setTimeout(() => {
          Animated.timing(fadeFinalizing, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }).start(() => {
            // After the text fades out, start fading in 'Boosting affection'
            setShowBoostingAffection(true);
            Animated.timing(fadeBoosting, {
              toValue: 1,
              duration: 1000,
              useNativeDriver: true,
            }).start(() => {
              // After 'Boosting affection' fades in, wait 2 seconds, then fade it out
              setTimeout(() => {
                Animated.timing(fadeBoosting, {
                  toValue: 0,
                  duration: 1000,
                  useNativeDriver: true,
                }).start(() => {
                  // Once 'Boosting affection' fades out, fade in the third text
                  setShowThirdText(true);
                  Animated.timing(fadeThirdText, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                  }).start();
                });
              }, 1000);
            });
          });
        }, 1000);
    
        // Clear the timeout if the component is unmounted
        return () => {
          clearTimeout(finalizingTimer);
        };
      }, []);


      
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
      <LinearGradient
        colors={['rgba(58, 131, 244,0.4)', 'rgba(9, 181, 211, 0.4)']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Lottie 
            source={require('../../assets/animations/progress2.json')} 
            autoPlay  
            loop={false} 
            speed={0.5} 
            style={styles.lottieStyle} // Apply custom style for Lottie
          />
          
        </View>
        <View style={styles.textContainer}>
          <Animated.Text style={[styles.animatedText, {opacity: fadeFinalizing}]}>
           {t('on12tit1')}
          </Animated.Text>
          {showBoostingAffection && (
            <Animated.Text style={[styles.animatedText, {opacity: fadeBoosting}]}>
              {t('on12tit2')}
            </Animated.Text>
          )}
          {showThirdText && (
            <Animated.Text style={[styles.animatedText, {opacity: fadeThirdText}]}>
               {t('on12tit3')}
            </Animated.Text>
          )}
        </View>
          {/* ... Images ... */}
        

          <View style={styles.profileCard}>
          <Image source={userData.image} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>{userData.name}, {userData.age}</Text>
            <Text style={styles.stars}>★★★★★</Text>
            <Text style={styles.description}>{userData.description}</Text>
          </View>
        </View>
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
    justifyContent: 'center', // Center Lottie in the header
    padding: 10, // Add padding if needed
  },
  lottieStyle: {
    width: 250, // Adjust the width to make Lottie smaller
    height: 250, // Adjust the height to make Lottie smaller
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
  logoImage: {
    width: '100%', // or a fixed width
    height: 50, // or a fixed height
    opacity: 0.8,
    resizeMode: 'contain', // or 'cover', depending on your needs
    marginTop: 30, // space between images
  },
  unselectedText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold'  // Text color for unselected button
  },
  nextButtonText: {
    color: 'white', // Next button text color
  },
  imagesContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  boostingText: {
    // Style for the "Boosting affection" text
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 4
  },
  finalizingText: {
    // Style for the "Finalizing AI friend creation" text
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    marginVertical: 4,
    marginTop:60
  },
  profileContainer: {
    // Style for the user profile container
    alignItems: 'center',
    marginVertical: 20
  },
  profileImage: {
    // Style for the user's image
    width: 100,
    height: 100,
    borderRadius: 50
  },
  profileName: {
    // Style for the user's name and age text
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4
  },
  stars: {
    // Style for the stars rating, you might want to use a rating component instead
    color: '#FFD700',
    fontSize: 20,
    marginVertical: 4
  },
  friendText: {
    // Style for the "Found a friend in Replika..." text
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 4
  },
  textContainer: {
    position: 'absolute',
    top: '50%', // Adjust the position to match your design
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    position: 'absolute', // Position text absolutely
  },
  profileCard: {
    // Semi-transparent background
    backgroundColor:"white", // Rounded corners
    padding: 30, // Inner spacing
    marginHorizontal: 20, // Side margins
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    shadowColor: '#000',
    borderRadius:10, // Shadow color
    shadowOffset: {
      width: 0,
      height: 1, // Shadow direction
    },
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 1.41, // Shadow blur radius
    elevation: 8, // Elevation for Android
    margin: 20, // Adjust this to position the card over other elements if necessary
  },
  profileDetails: {
    alignItems: 'center', // Align text and rating in the center
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular image
    marginBottom: 10, // Space between image and text
  },
  profileName: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  stars: {
    color: '#FFD700', // Gold color for stars
  },
  description: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  
});

export default Finalloading;

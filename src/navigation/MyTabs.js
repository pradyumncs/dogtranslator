import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import TinderLikeScreen from '../screens/TinderLikeScreen';
import Characterscreen from '../screens/Characterscreen';
import {
  useFonts,
  Poppins_600SemiBold,
  
} from '@expo-google-fonts/poppins';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';
import StoreScreen from '../screens/StoreScreen';
import Voicescreen from '../screens/Voicescreen';
// If you are using SplashScreen

const Tab = createBottomTabNavigator();

export default function MyTabs() {
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

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'StoreScreen') {
            iconName = 'compass';
          } else if (route.name === 'Explore') {
            iconName = 'card-search';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins_600SemiBold',
          fontSize:11
        },
        tabBarStyle: {
          backgroundColor: '#fff9f4',
          height: 60, // Adjust the height of the tab bar here
          paddingBottom: 5, // Optional: adjust padding for better positioning of labels and icons // Set the background color of the tab bar
        },
      })}
    >
      <Tab.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={{
          tabBarLabel: t('foryou'),
         
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
   
    </Tab.Navigator>
  );
}

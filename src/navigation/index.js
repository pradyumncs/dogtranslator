import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { getItem } from '../utils/asyncStorage';
import StorySelectionScreen from '../onboarding/StorySelectionScreen';
import Customisingnumber from '../onboarding/Customisingnumber';
import YourNameScreen from '../onboarding/name';
import Age from '../onboarding/Age';
import Gender from '../onboarding/gender';
import MyTabs from './MyTabs';
import TinderLikeScreen from '../screens/TinderLikeScreen';
import Characterscreen from '../screens/Characterscreen';
import Frontselfie from '../components/Frontselfie';
import Sideselfie from '../components/Sideselfie';
import Revealresultsfree from '../components/Revealresultsfree';
import Analyzing from '../components/Analyzing';
import StoreScreen from '../screens/StoreScreen';
import Explorecharacterchatscreen from '../chat/Explorecharacterchatscreen';
import ActualRevealresults from '../components/ActualRevealresults';
import Voicescreen from '../screens/Voicescreen';
import Finalloading from '../onboarding/Finaloading';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(()=>{
    checkIfAlreadyOnboarded();
  },[])

  const checkIfAlreadyOnboarded = async ()=>{
    let onboarded = await getItem('onboarded');
    if(onboarded==1){
      // hide onboarding
      setShowOnboarding(false);
    }else{
      // show onboarding
      setShowOnboarding(true);
    }
  }

  if(showOnboarding==null){
    return null;
  }

  if(!showOnboarding) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboardingscreen" screenOptions={{headerShown: false}}>    
      <Stack.Screen name="onboardingscreen" component={OnboardingScreen} />
      <Stack.Screen name="storyselectionscreen" component={StorySelectionScreen} />
      <Stack.Screen name="customisingnumber" component={Customisingnumber} />
      <Stack.Screen name="yourname" component={YourNameScreen} />
      <Stack.Screen name="age" component={Age} />
      <Stack.Screen name="gender" component={Gender} />
      <Stack.Screen name="Finalloading" component={Finalloading} />
      <Stack.Screen name="mytabs" component={MyTabs} />
      <Stack.Screen name="Frontselfie" component={Frontselfie} />
         <Stack.Screen name="Sideselfie" component={Sideselfie} />
         <Stack.Screen name="Analyzing" component={Analyzing} />
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Voicescreen" component={Voicescreen} />
         <Stack.Screen name="Revealresultsfree" component={Revealresultsfree} />
         <Stack.Screen name="ActualRevealresults" component={ActualRevealresults} />
         <Stack.Screen name="StoreScreen" component={StoreScreen} />
         <Stack.Screen name="Explorecharacterchatscreen" component={Explorecharacterchatscreen} />
      </Stack.Navigator>
      </NavigationContainer>
      )
} 
else {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="mytabs" screenOptions={{headerShown: false}}>    
         <Stack.Screen name="mytabs" component={MyTabs} />
         <Stack.Screen name="Frontselfie" component={Frontselfie} />
         <Stack.Screen name="Sideselfie" component={Sideselfie} />
         <Stack.Screen name="Analyzing" component={Analyzing} />
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Voicescreen" component={Voicescreen} />
         <Stack.Screen name="Revealresultsfree" component={Revealresultsfree} />
         <Stack.Screen name="ActualRevealresults" component={ActualRevealresults} />
         <Stack.Screen name="StoreScreen" component={StoreScreen} />
         <Stack.Screen name="Explorecharacterchatscreen" component={Explorecharacterchatscreen} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}}

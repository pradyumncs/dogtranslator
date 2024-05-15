import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { storeColors } from '../theme';


export default function GameCard({game}) {
    const [isFavourite, setFavourite] = useState(false);
  return (
    <View className="mr-4 relative">
      <Image source={game.image} className="w-80 h-60 rounded-3xl"/>
      <LinearGradient colors={['transparent', 'transparent']} 
        className="absolute p-4 h-full w-full flex justify-between rounded-3xl">
        <View className="flex-row justify-end">
          
        </View>
        <View className="space-y-1">
         
            <Text className="text-xl font-bold text-white">
                {game.title}
            </Text>
           
        </View>
      </LinearGradient>
    </View>
  )
}
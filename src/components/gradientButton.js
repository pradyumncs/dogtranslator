// GradientButton.js
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientButton({ navigation, setSelectedGame, game, ...props }) {
  return (
    <LinearGradient
      colors={['rgba(9, 181, 211, 0.9)', 'rgba(58, 131, 244,0.9)']}
      end={{ x: 1, y: 1 }}
      start={{ x: 0.1, y: 0.2 }}
      className={`rounded-full ${props.containerClass}`}
    >
      <TouchableOpacity
        className={`p-3 px-4 ${props.buttonClass}`}
        onPress={() => {
          if (navigation && props.onPress) {
            props.onPress();
            setSelectedGame(game.id); // Update the selectedGame state
          }
        }}
      >
        <Text className="text-white font-bold">{props.value}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
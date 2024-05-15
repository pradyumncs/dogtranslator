import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Voicescreen = () => {
  const [streak, setStreak] = useState(0);
  const [lastDate, setLastDate] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('streak').then((streak) => {
      if (streak) {
        const { count, date } = JSON.parse(streak);
        setStreak(count);
        setLastDate(new Date(date));
      } else {
        const today = new Date();
        setStreak(1);
        AsyncStorage.setItem('streak', JSON.stringify({ count: 1, date: today.toISOString() }));
        setLastDate(today);
      }
    });
  }, []);

  useEffect(() => {
    const today = new Date();
    const lastDateCopy = new Date(lastDate);
    lastDateCopy.setDate(lastDateCopy.getDate() + 1);

    if (lastDateCopy.toDateString() === today.toDateString()) {
      setStreak((prevStreak) => prevStreak + 1);
      AsyncStorage.setItem('streak', JSON.stringify({ count: streak + 1, date: today.toISOString() }));
    } else {
      setStreak(1);
      AsyncStorage.setItem('streak', JSON.stringify({ count: 1, date: today.toISOString() }));
    }
  }, [lastDate, streak]);

  return (
    <View>
      <View style={{ backgroundColor: 'black', padding: 10 }}>
        <Text style={{ fontSize: 24, color: '#fff' }}>
          Daily Streak: {streak === 1 ? '1 day 🔥' : `${streak} days 🔥`}
        </Text>
      </View>
    </View>
  );
};

export default Voicescreen;
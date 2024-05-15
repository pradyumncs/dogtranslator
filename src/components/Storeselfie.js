import { View, Text, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Storeselfie = () => {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('frontSelfie').then(uri => {
      setImageUri(uri);
    });
  }, []);


  return (
      <View>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 400, height: 400 }} />
      ) : (
        <Text>No image found</Text>
      )}
    </View>
  )
}

export default Storeselfie
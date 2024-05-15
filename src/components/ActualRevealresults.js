import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-elements';
import * as Progress from 'react-native-progress';

const ActualRevealresults = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [pulseAnimation, setPulseAnimation] = useState(new Animated.Value(1));
  const [avatarImage, setAvatarImage] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('frontSelfie').then((fileUri) => {
      if (fileUri) {
        setAvatarImage({ uri: fileUri });
      }
    });
  }, []);

  const handleNextPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    navigation.navigate('Sideselfie');
  };

  const masculinityScore = getRandomScore();
  const jawlineScore = getRandomScore();
  const skinQualityScore = getRandomScore();
  const cheekbonesScore = getRandomScore();

  const overallScore = Math.round((masculinityScore + jawlineScore + skinQualityScore + cheekbonesScore) / 4);
  const potentialScore = overallScore + Math.floor(Math.random() * (20 - 1 + 1) + 1);

  function getRandomScore() {
    let score;
    const random = Math.random();

    if (random < 0.5) {
      score = Math.floor(Math.random() * (75 - 60 + 1) + 60); // 50% chance of score between 60-75 (yellowish green)
    } else if (random < 0.7) {
      score = Math.floor(Math.random() * (90 - 80 + 1) + 80); // 20% chance of score between 80-90 (light green)
    } else if (random < 0.85) {
      score = Math.floor(Math.random() * (95 - 90 + 1) + 90); // 15% chance of score between 90-95 (green)
    } else if (random < 0.95) {
      score = Math.floor(Math.random() * (98 - 95 + 1) + 95); // 10% chance of score between 95-98 (dark green)
    } else {
      score = 99; // 5% chance of score 99 (darker green)
    }

    return Math.min(score, 100); // Ensure the score doesn't exceed 100
  }

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, { alignItems: 'center' }]}>
        <Text style={styles.timeText}>Reveal your Results 👑</Text>
      </View>

      <View style={styles.containers}>
        <View style={styles.avatarContainer}>
          <Avatar
            source={avatarImage}
            size={140}
            rounded
          />
        </View>

        <View style={styles.cardContainer}>
        <LinearGradient
  colors={['#333333', '#000000']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.card}
>
            <Text style={styles.sectionText}>Overall</Text>
            <Text style={styles.numberreveal}>{overallScore}</Text>
            <Progress.Bar progress={overallScore / 100} width={110} height={8} color={getProgressBarColor(overallScore)} />
          </LinearGradient>
          <LinearGradient
  colors={['#333333', '#000000']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.card}
>
            <Text style={styles.sectionText}>Potential</Text>
            <Text style={styles.numberreveal}>{Math.min(potentialScore, 100)}</Text>
            <Progress.Bar progress={Math.min(potentialScore, 100) / 100} width={110} height={8} color={getProgressBarColor(Math.min(potentialScore, 100))} />
          </LinearGradient>
        </View>

        <View style={styles.cardContainer}>
        <LinearGradient
  colors={['#333333', '#000000']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.card}
>
            <Text style={styles.sectionText}>Masculinity</Text>
            <Text style={styles.numberreveal}>{masculinityScore}</Text>
            <Progress.Bar progress={masculinityScore / 100} width={110} height={8} color={getProgressBarColor(masculinityScore)} />
          </LinearGradient>
          <LinearGradient
  colors={['#333333', '#000000']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={[styles.card]} 
>
            <Text style={styles.sectionText}>Jawline</Text>
            <Text style={styles.numberreveal}>{jawlineScore}</Text>
            <Progress.Bar progress={jawlineScore / 100} width={110} height={8} color={getProgressBarColor(jawlineScore)} />
          </LinearGradient>
        </View>

        <View style={styles.cardContainer}>
        <LinearGradient
  colors={['#333333', '#000000']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.card}
>

            <Text style={styles.sectionText}>Skin quality</Text>
            <Text style={styles.numberreveal}>{skinQualityScore}</Text>
            <Progress.Bar progress={skinQualityScore / 100} width={110} height={8} color={getProgressBarColor(skinQualityScore)} />
          </LinearGradient>
          <LinearGradient
  colors={['#333333', '#000000']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.card}
>
            <Text style={styles.sectionText}>Cheekbones</Text>
            <Text style={styles.numberreveal}>{cheekbonesScore}</Text>
            <Progress.Bar progress={cheekbonesScore / 100} width={110} height={8} color={getProgressBarColor(cheekbonesScore)} />
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const getProgressBarColor = (score) => {
  if (score < 70) {
    return '#ff0000'; // red
  } else if (score < 80) {
    return '#adff2f'; // yellowish green
  } else if (score < 90) {
    return '#9acd32'; // light green
  } else if (score < 95) {
    return '#008000'; // green
  } else if (score < 98) {
    return '#006400'; // dark green
  } else {
  return '#004d00'; // darker green
  }
  };
  const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  paddingHorizontal: 20,
  },
  topContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  marginTop: 30,
  justifyContent: 'center',
  },
  timeText: {
  paddingBottom: 20,
  fontSize: 28,
  color: '#FFFFFF',
  fontWeight: 'bold',
  textAlign: 'center',
  },
  statusText: {
  fontSize: 12,
  },
  image: {
  width: 400,
  height: 500,
  marginVertical: 20,
  borderRadius: 10,
  },
  imageContainer: {
  shadowColor: 'red',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.5,
  shadowRadius: 10,
  },
  buttonContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 200 /* reduced margin top */,
  },
  buttonText: {
  color: '#FFFFFF',
  textAlign: 'center',
  fontSize: 15,
  },
  containers: {
  flex: 1,
  backgroundColor: '#000',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 50,
  },
  avatarContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
  },
  cardContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 15,
  },
  card: {
    marginLeft:10,
  borderRadius: 10,
  padding: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 5,
  },
  sectionText: {
  color: '#fff',
  fontSize: 16,
  marginBottom: 5,
  textAlign: 'center',
  },
  hiddenText: {
  color: '#fff',
  fontSize: 12,
  },
  numberreveal: {
  color: '#fff',
  fontSize: 37,
  paddingBottom: 20,
  paddingTop: 20,
  fontWeight: 'bold',
  },
  });
  export default ActualRevealresults;
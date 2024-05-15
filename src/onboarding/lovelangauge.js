import React , { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Button } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoveLangauge = () => {
  // You can handle the pronoun selection and navigation in these functions
    const [selectedPronoun, setSelectedPronoun] = React.useState('Mystery');

  const handleNextPress = () => {
    console.log('Next pressed');
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
      <LinearGradient
        // The colors prop determines the colors of the gradient
        colors={['rgba(9, 181, 211, 0.4)', 'rgba(58, 131, 244,0.4)']}
        
        style={styles.gradient}
      >
        <View style={styles.header}>
          
        </View>

        
        <Text style={styles.greeting}>What's your love langauge?</Text>

        <View style={styles.content}>
         
        
          <Button
            title="Physical closeness"
            size='lg'
            onPress={() => handlePronounPress('Love')}
            buttonStyle={getPronounButtonStyle('Love')}
            titleStyle={selectedPronoun === 'Love' ? styles.selectedText : styles.unselectedText}
          />
         
         
            <Button
            title="Deep conversations"
            size='lg'
            onPress={() => handlePronounPress('Mystery')}
            buttonStyle={getPronounButtonStyle('Mystery')}
            titleStyle={selectedPronoun === 'Mystery' ? styles.selectedText : styles.unselectedText}
            
          />
          <Button
            title="Spending time together"
            size='lg'
            onPress={() => handlePronounPress('skills')}
            buttonStyle={[styles.buttondefault,getPronounButtonStyle('skills')]}
            titleStyle={selectedPronoun === 'skills' ? styles.selectedText : styles.unselectedText}
           
          />
            <Button
            title="Care and gestures"
            size='lg'
            onPress={() => handlePronounPress('capabilities')}
            buttonStyle={getPronounButtonStyle('capabilities')}
            titleStyle={selectedPronoun === 'capabilities' ? styles.selectedText : styles.unselectedText}
           
          />
            <Button
            title="Gifts and tokens of appreciation"
            size='lg'
            onPress={() => handlePronounPress('Other')}
            buttonStyle={getPronounButtonStyle('Other')}
            titleStyle={selectedPronoun === 'Other' ? styles.selectedText : styles.unselectedText}
           
          />
         
        </View>

        <Button title="Next"  size='lg' onPress={handleNextPress} buttonStyle={styles.nextButton} />
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
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center', // This aligns the text block horizontally
    textAlign: 'center', // This centers the text inside the text block
    
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
    backgroundColor: 'black', // You can change the color to match your design
    borderRadius: 80,
    height: 50, // Fixed height for the button
    marginBottom: 20,
  },
  selectedText: {
    color: 'white', 
    fontSize: 18,// Text color for selected button
  },
  unselectedText: {
    color: 'black',
    fontSize: 18, // Text color for unselected button
  },
  nextButtonText: {
    color: 'white', // Next button text color
  },
  
});

export default LoveLangauge;

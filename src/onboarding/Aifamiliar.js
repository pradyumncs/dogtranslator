import React , { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Input, Button } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const Aifamiliar = () => {
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
        colors={[ 'rgba(9, 181, 211, 0.4)','rgba(58, 131, 244,0.4)']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          
        </View>

        
        <Text style={styles.greeting}>How familiar are you with AI technology?</Text>

        <View style={styles.content}>
         
        
          <Button
            title="I use AI across many applications"
            size='lg'
            onPress={() => handlePronounPress('Love')}
            buttonStyle={getPronounButtonStyle('Love')}
            titleStyle={selectedPronoun === 'Love' ? styles.selectedText : styles.unselectedText}
          />
         
         
            <Button
            title="This is one of my first experience"
            size='lg'
            onPress={() => handlePronounPress('Mystery')}
            buttonStyle={getPronounButtonStyle('Mystery')}
            titleStyle={selectedPronoun === 'Mystery' ? styles.selectedText : styles.unselectedText}
            
          />
          <Button
            title="Unfamiliar"
            size='lg'
            onPress={() => handlePronounPress('Romance')}
            buttonStyle={getPronounButtonStyle('Romance')}
            titleStyle={selectedPronoun === 'Romance' ? styles.selectedText : styles.unselectedText}
           
          />
        </View>

        <Button title="Next" onPress={handleNextPress} buttonStyle={styles.nextButton} />
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
    marginTop: 40,
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
    borderRadius: 20,
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

export default Aifamiliar;

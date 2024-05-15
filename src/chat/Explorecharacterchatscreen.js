import React, { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
import { View, Platform  } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet,Alert } from 'react-native';
import {  Bubble, InputToolbar, Composer,Send } from 'react-native-gifted-chat';
import {  Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ios = Platform.OS == 'ios';
const topMargin = ios? '': 'mt-10';
import '../../services/i18n';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';


const Explorecharacterchatscreen = ({ route }) => {
    const item = route.params;
    const { t } = useTranslation();
    const { firstmessage, usertext, modeltext, image, usertext2, modeltext2, avatar, title } = route.params;
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);

  const [conversationHistory, setConversationHistory] = useState([
    {
      role: 'user',
      parts: [{ text: usertext }]
    },
    {
      role: 'model',
      parts: [{ text: modeltext }]
    }
  ]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hi',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bot',
        },
      },
    ]);
  }, []);

  const onSend = async (newMessages = []) => {

 

    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));

  const userMessage = newMessages[0].text;

  const updatedHistory = [
    ...conversationHistory,
    {
      role: 'user',
      parts: [{ text: userMessage }]
    }
  ];
  setConversationHistory(updatedHistory);

    try {
      const API_KEY = 'AIzaSyCmDUNoF8M_ICNxjsylee--AFZTi5VPTD0'; // Replace with your actual API key
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: [
           
          updatedHistory,
       
            
          ],
          generationConfig: {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
            stopSequences: []
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_ONLY_HIGH"
            },
          
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              "threshold": "BLOCK_ONLY_HIGH"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_ONLY_HIGH"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_ONLY_HIGH"
            }
            
            // ... other safety settings
          ]
          // ... generationConfig and safetySettings
        },
        
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Assuming the response structure has a text part like the OCR result
      const botResponse = response.data.candidates[0].content.parts[0].text;
      setConversationHistory([
        ...updatedHistory,
        {
          role: 'model',
          parts: [{ text: botResponse }]
        }
      ]);
      const botMessage = {
        _id: new Date().getTime(),
        text: botResponse,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Bot',
        },
      };

      setMessages(previousMessages => GiftedChat.append(previousMessages, [botMessage]));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={styles.inputToolbar}
      primaryStyle={{ alignItems: 'center' }}
    />
  );

  const renderComposer = (props) => (
    <Composer
      {...props}
      textInputStyle={styles.composer}
      placeholder={t('onchatplacehlder')}
    />
  );

  const renderSend = (props) => (
    <Send {...props}>
      <View style={styles.sendButton}>
      <Icon name="send" size={24} color="#128C7E" />
      </View>
    </Send>
  );
  const renderAvatar = (props) => {
    // Check if the message is from the user
    if (props.currentMessage.user._id === 1) {
      // Return a specific avatar for the user
      return <Image source={item.avatar} style={{ width: 44, height: 44, borderRadius:15,marginBottom: 32 }} />;
    } else {
      // Return a different avatar for other participants
      return  <Image source={item.avatar} style={{ width: 44, height: 44, borderRadius:15,marginBottom: 32 }} />;
    }
  };
  
  
  const renderBubble = (props) => {
    // Custom styling for the message bubble
   // Adds space below the first message
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#f0e0d8',  // Pink color for the right bubble (your messages)
            padding: 5, // Or any other padding you want
            borderRadius: 10, // Rounded corners
            // Add other styling as needed to match the anime style
          },
          left: {
            backgroundColor: '#d8e8f0',// White color for the left bubble (other people's messages)
            padding: 5,
            borderRadius: 10,
            // Add other styling as needed
          },
        }}
        textStyle={{
          right: {
            color: 'black', // White text color for the right bubble
            fontSize: 16,
            fontFamily: 'Poppins_600SemiBold', // Larger text size
            // Add any other font styling as needed
          },
          left: {
            color: 'black', // Black text color for the left bubble
            fontSize: 16,
            fontFamily: 'Poppins_600SemiBold',
            // Add any other font styling as needed
          },
        }}
        containerStyle={{
          left: { marginBottom: 20 }, // Add space below left bubble
          right: { marginBottom: 20 }, // Add space below right bubble
        }}
      />
    );
  };





  return (
    <View style={{ flex: 1, backgroundColor: '#FFF8F0' }}>
    <View style={styles.headerContainer}>
      <TouchableOpacity
      onPress={() => navigation.goBack()}
        className="p-1 rounded-full ml-3 mt-3"
       
      >
            <AntDesign name="arrowleft" size={35} color="black" />

      </TouchableOpacity>

      <View style={styles.profileInfo}>
        <Image source={item.image} style={styles.avatar} />
        <Text style={styles.profileName}>{item.title}</Text>
      </View>

      <Text style={styles.disclaimerText}>{t('onchatitle')}</Text>

    </View>
      <View style={styles.container}>
   
       
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{ _id: 1 }}
          renderInputToolbar={renderInputToolbar}
         renderBubble={renderBubble}
          renderComposer={renderComposer}
          renderSend={renderSend}
          alwaysShowSend
          renderAvatar={renderAvatar} 
          showUserAvatar={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 17,
    paddingRight: 17,
  },
  disclaimerText: {
    textAlign: 'center', // Center the text
    color: '#FF7F7F', // Set the text color
    fontSize: 12, // Set the font size
    marginTop: 100,
    marginRight:30, // Position it below the profile info; adjust as needed
    fontFamily: 'Poppins_600SemiBold', // Use the Poppins SemiBold font
  },
  inputToolbar: {
    borderRadius: 20,
    marginHorizontal: 8,
    marginTop:2,
    backgroundColor: '#f0f5fb',
    padding: 4,
  },
  
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
  },
  profileInfo: {
    position: 'absolute',
    top: 30, // Adjust this value as needed
    left: 20,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginHorizontal: 10,
    
  },
  profileName: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default Explorecharacterchatscreen;


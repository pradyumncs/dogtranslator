import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { storeColors } from "../theme";
import GradientButton from "../components/gradientButton";
import GameCard from "../components/gameCard";
import { useNavigation } from '@react-navigation/native';

/////// subscribe for more videos like this :)

const categories = [
  "Action",
  "Family",
  "Puzzle",
  "Adventure",
  "Racing",
  "Education",
  "Others",
];
const featured = [
  {
    id: 1,
    title: "Ask me Anything",
    image: require("../../assets/images/askme.png"),
    downloads: "200k",
    stars: 4,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },
  {
    id: 2,
    title: "Rizz Up",
    image: require("../../assets/images/rizz.jpg"),
    downloads: "5M",
    stars: 4,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },
  {
    id: 3,
    title: "Deep Voice",
    image: require("../../assets/images/deepvoice.jpg"),
    downloads: "100M",
    stars: 3,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },

  {
    id: 4,
    title: "Jawline Mode",
    image: require("../../assets/images/jawline.jpg"),
    downloads: "20k",
    stars: 4,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },
];

const games = [
  {
    id: 1,
    title: "Improve Yourself",
    image: require("../../assets/images/improve.png"),
    downloads: "20M",
    stars: 4.5,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },
  {
    id: 2,
    title: "Gain More Muscle",
    image: require("../../assets/images/muscle2.jpg"),
    downloads: "20k",
    stars: 4.2,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },
 

  {
    id: 3,
    title: "Loose Body Fat",
    image: require("../../assets/images/loosefat.jpg"),
    downloads: "10k",
    stars: 4.7,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },
  {
    id: 4,
    title: "God Mode",
    image: require("../../assets/images/art2.png"),
    downloads: "40k",
    stars: 4.9,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },

  {
    id: 5,
    title: "Get Clear Skin",
    image: require("../../assets/images/clearskin.png"),
    downloads: "20k",
    stars: 4.2,
    usertext:"You are a AI",
    modeltext:"Please tell me what to do"
  },
  
];

export default function StoreScreen() {
  const [activeCategory, setActiveCategory] = useState("Action");
  const [selectedGame, setSelectedGame] = useState(null);
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["rgba(58, 131, 244,0.4)", "rgba(9, 181, 211, 0.4)"]}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <ScrollView className="container">
          <View className="flex-row justify-between items-center px-4">
           
           
          </View>

          {/* categories */}
          <View className="mt-3 space-y-4">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 text-3xl font-bold"
            >
        Your Coach
            </Text>
           
          </View>

          {/* featured row  */}
          <View className="mt-3 space-y-4">
  <View className="pl-4">
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {featured.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('Explorecharacterchatscreen', {
              usertext: item.usertext,
              modeltext: item.modeltext,
              image: item.image,
              title: item.title,
            })
          }
        >
          <GameCard key={index} game={item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
</View>
          {/* top action games list */}
          <View className="mt-10 mb-10">
            <View className="flex-row justify-between items-center mb-5 mt">
              <Text
                style={{ color: storeColors.text }}
                className="ml-4 text-2xl font-bold"
              >
             Learn...
              </Text>
            
            </View>
            {games.map((game, index) => (
              <TouchableOpacity
              key={index}
              style={{
                backgroundColor: game.id === selectedGame ? "rgba(255,255,255,0.4)" : "transparent",
              }}
              className="mx-4 p-3 mb-2 flex-row rounded-3xl"
              onPress={() => {
                setSelectedGame(game.id); // Update the selectedGame state
                navigation.navigate('Explorecharacterchatscreen', {
                  usertext: game.usertext,
                  modeltext: game.modeltext,
                  image: game.image,
                  title: game.title,
                });
              }}
            >
                <Image
                  source={game.image}
                  style={{ width: 80, height: 80 }}
                  className="rounded-2xl"
                />
                <View className="flex-1 flex justify-center pl-3 space-y-3">
                  <Text
                    style={{ color: storeColors.text }}
                    className="font-semibold"
                  >
                    {game.title}
                  </Text>
                  <View className="flex-row space-x-3">
                    <View className="flex-row space-x-1">
                      <Image
                        className="h-4 w-4 opacity-80"
                        source={require("../../assets/images/fullStar.png")}
                      />
                      <Text className="text-xs text-gray-700">
                        {game.stars} stars
                      </Text>
                    </View>
                    <View className="flex-row space-x-1">
                    
                    
                    </View>
                  </View>
                </View>
                <View className="flex justify-center items-center">
                <GradientButton
      value={<AntDesign name="right" size={17} color="white" />}
      buttonClass="py-4 px-4"
      onPress={() => {
        navigation.navigate('Explorecharacterchatscreen', {
          usertext: game.usertext,
          modeltext: game.modeltext,
          image: game.image,
          title: game.title,
        });
        setSelectedGame(game.id); // Update the selectedGame state
      }}
      navigation={navigation}
      setSelectedGame={setSelectedGame} // Pass the setSelectedGame function as a prop
      game={game} // Pass the game object as a prop
    />
                </View>
              </TouchableOpacity>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

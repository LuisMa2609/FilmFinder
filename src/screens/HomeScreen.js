import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, ScrollView, FlatList } from 'react-native';
import COLORS from "../constants/Colors";
import GenreCard from "../components/GenreCard";

const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" 
      translucent={false}
      backgroundColor={COLORS.BASIC_BACKGROUND}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTittle}>En cartelera</Text>
        <Text style={styles.headerSubtittle}>VER TODAS</Text>
      </View>

      <View>
        <FlatList 
        data={Genres}
        horizontal
        keyExtractor={(item) => item} 
        renderItem= {({item, index}) =>  <GenreCard />}
      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    allignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTittle:{
    fontSize: 28,
  },
  headerSubtittle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
  }
});

export default HomeScreen;
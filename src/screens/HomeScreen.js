import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, ScrollView, FlatList } from 'react-native';
import COLORS from "../constants/Colors";
import GenreCard from "../components/GenreCard";
import ItemSeparator from "../components/ItemSeparator";

const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("All")

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

      <View style={styles.genreListContainer}>
        <FlatList 
        data={Genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
        ListHeaderComponent={() => <ItemSeparator width={20}/>}
        ListFooterComponent={() => <ItemSeparator width={20}/>}
        renderItem= {({item}) =>  (
          <GenreCard 
          genreName={item} 
          active={item === activeGenre ? true : false}
          onPress={setActiveGenre}
          />
        )}
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
    fontFamily: "Regular",
  },
  headerSubtittle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontFamily: "Bold",
  },
  genreListContainer:{
    paddingVertical: 10,
  }
});

export default HomeScreen;
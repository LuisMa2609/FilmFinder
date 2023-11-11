import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, ScrollView, FlatList } from 'react-native';
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";
import GenreCard from "../components/GenreCard";
import MovieCard from "../components/MovieCard";
import ItemSeparator from "../components/ItemSeparator";
import { getNowPlayingMovies } from "../services/MovieService";


const Genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("All")
  const [nowPlayingMovies, setNowPlayingMovies] = useState({})

  useEffect(() => {
    getNowPlayingMovies().then((movieResponse) => 
    setNowPlayingMovies(movieResponse.data)
    );
  }, []);

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

      <View>
        <FlatList
          data={nowPlayingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20}/>}
          ListHeaderComponent={() => <ItemSeparator width={20}/>}
          ListFooterComponent={() => <ItemSeparator width={20}/>}
          renderItem= {({item}) => (
            <MovieCard title={item.title} language={item.original_language} voteAverage={item.vote_average} voteCount={item.vote_count} poster={item.poster_path}/>
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
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTittle:{
    fontSize: 28,
    fontFamily: FONTS.REGULAR,
  },
  headerSubtittle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontFamily: FONTS.BOLD,
  },
  genreListContainer:{
    paddingVertical: 10,
  }
});

export default HomeScreen;
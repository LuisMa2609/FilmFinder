import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import COLORS from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { getPoster, getLanguage } from "../services/MovieService";

const MovieCard = ({title, poster, language, voteAverage,voteCount, size}) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <ImageBackground 
            style={styles.container} 
            source={{uri: getPoster(poster)}}
            imageStyle={{borderRadius: 12}}            
            >
                <Text>
                    
                </Text>
            </ImageBackground>

            <View>
                <Text style={styles.movieTittle} numberOfLines={2}>
                    {title}
                </Text>
                <View style={styles.movieSubTittleContainer}>
                    <Text style={styles.movieSubTittle}>{getLanguage(language).english_name}</Text>
                    <View style={styles.rowAndCenter} >
                        <Ionicons name="heart" 
                            size={17}
                            color={COLORS.HEART}
                            style={{marginRight:5}} 
                        />
                        <Text style={styles.movieSubTittle}>{voteCount}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 340,
        width: 230,
        borderRadius: 12,
        elevation: 5,
        marginVertical: 2,
    },
    movieTittle: {
        fontFamily: Fonts.EXTRA_BOLD,
        color: COLORS.GRAY,
        paddingVertical: 2,
        marginTop: 5,
        width: 230
    },
    movieSubTittleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    movieSubTittle: {
        fontSize:12,
        fontFamily: Fonts.REGULAR,
    },
    rowAndCenter: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default MovieCard;
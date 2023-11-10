import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import COLORS from "../constants/Colors";

const {width} = Dimensions.get("screen")

const setwidth = (w) => (width / 100) * w;

const GenreCard = () => {
    return (
        <View Style={styles.container}>
            <Text>Action</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: COLORS.WHITE,
        paddingVertical:8,
        elevation: 3,
        marginVertical: 2,
        width: setwidth(25),
    },
});

export default GenreCard;
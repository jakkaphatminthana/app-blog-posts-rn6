import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
// import { Context as blogContext } from "../context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';

const DetailScreen = ({ route }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blog) => blog.id === route.params.id);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default DetailScreen;
import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
    // const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    ///initState + when come back this screen again
    useEffect(() => {
        getBlogPosts();

        //when come back to this screen again
        const listener = navigation.addListener("focus", () => {
            getBlogPosts();
        });

        //dispose listenner, when this screen dispose 100%
        return () => {
            listener.remove();
        };
    }, []);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
                            {/* // <TouchableOpacity onPress={() => {}}> */}
                            <View style={style.row}>
                                {/* Title */}
                                <Text style={style.title}> {item.title} - {item.id} </Text>

                                {/* Icon Delete */}
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={style.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 8,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    }
});

export default IndexScreen;
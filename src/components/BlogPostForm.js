import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={style.lable}>Enter Title:</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={style.input}
            />
            <Text style={style.lable}>Enter Content:</Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={style.input}
            />
            <Button
                title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}


const style = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 16,
        padding: 8,
        margin: 8,
    },
    lable: {
        fontSize: 20,
        marginLeft: 8,
    }
});

export default BlogPostForm;
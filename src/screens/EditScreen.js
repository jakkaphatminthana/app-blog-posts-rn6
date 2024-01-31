import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, route }) => {
    const targetId = route.params.id;

    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blog) => blog.id === targetId);

    return (
        <BlogPostForm
            initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(targetId, title, content, () => navigation.pop());
            }}
        />
    );
};

const style = StyleSheet.create({});

export default EditScreen;
import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function LearnAndShareScreen({ navigation }) {
    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([
        { user: "Alice", text: "Check out this new guitar tutorial!" },
        { user: "Bob", text: "Here's a great resource for music theory." },
        { user: "Carol", text: "Sharing my favorite piano practice techniques." }
    ]);

    const handlePostSubmit = () => {
        if (postText.trim()) {
            setPosts([{ user: "You", text: postText }, ...posts]);
            setPostText("");
        }
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image source={require('../assets/melaudio.png')} resizeMode="stretch" style={styles.logoImage} />
                        <Text style={styles.logoText}>Melaudio</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image source={require('../assets/back.png')} resizeMode="stretch" style={styles.mainImage} />
                </TouchableOpacity>
                <Text style={styles.title}>Learn & Share</Text>
                <View style={styles.postInputContainer}>
                    <TextInput
                        style={styles.postInput}
                        placeholder="Share something..."
                        value={postText}
                        onChangeText={setPostText}
                    />
                    <TouchableOpacity onPress={handlePostSubmit} style={styles.postButton}>
                        <Text style={styles.postButtonText}>Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                {posts.map((post, index) => (
                    <View key={index} style={styles.postCard}>
                        <Text style={styles.postUser}>{post.user}</Text>
                        <Text style={styles.postText}>{post.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#F8F5ED",
        borderRadius: 50,
        paddingBottom: 68,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
        marginHorizontal: 7,
        paddingTop: 20,
    },
    headerContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    logoImage: {
        width: 50,
        height: 50,
        marginRight: 8,
    },
    logoText: {
        color: "#00D7BD",
        fontSize: 24,
    },
    mainImage: {
        width: 30,
        height: 30,
        marginBottom: 20,
        marginHorizontal: 28,
    },
    title: {
        color: "#5B5A5A",
        fontSize: 32,
        marginBottom: 20,
        marginLeft: 29,
    },
    postInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginHorizontal: 20,
    },
    postInput: {
        flex: 1,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    postButton: {
        backgroundColor: "#00D7BD",
        borderRadius: 10,
        padding: 10,
    },
    postButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    divider: {
        height: 2,
        backgroundColor: "#D3D3D3",
        marginBottom: 20,
        marginHorizontal: 25,
    },
    postCard: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    postUser: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    postText: {
        fontSize: 16,
    },
});

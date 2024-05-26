import React from "react";
import { SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const melaudio = require('../assets/melaudio.png');

export default function MainMenuScreen({ route, navigation }) {
    const { username } = route.params || {};

    const handlePress = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={melaudio} resizeMode="stretch" style={styles.logoImage} />
                        <Text style={styles.logoText}>Melaudio</Text>
                    </View>
                </View>
                <Image source={require('../assets/profile.png')} resizeMode="stretch" style={styles.mainImage} />
                <Text style={styles.helloText}>Hello</Text>
                <Text style={styles.nameText}>{username}</Text>
                <View style={styles.grid}>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('OnlineLessons')}>
                        <Image source={require('../assets/online-lessons.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Online Lessons</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Social Network')}>
                        <Image source={require('../assets/social-network.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Social Network</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('ProgressTracker')}>
                        <Image source={require('../assets/progress.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Progress Tracker</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Learn & Share')}>
                        <Image source={require('../assets/learn-share.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Learn & Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('MusicLibrary')}>
                        <Image source={require('../assets/music-library.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Music Library</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Resources')}>
                        <Image source={require('../assets/info.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Resources</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    container: {
        flex: 1,
        backgroundColor: "#F8F5ED",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    logoImage: {
        width: 40,
        height: 40,
    },
    logoText: {
        color: "#0A4F5E",
        fontSize: 24,
        marginLeft: 10,
    },
    mainImage: {
        width: width * 0.3,
        height: width * 0.3,
        marginBottom: 20,
        borderRadius: width * 0.15,
        alignSelf: 'center',
    },
    helloText: {
        color: "#888888",
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center',
    },
    nameText: {
        color: "#5B5A5A",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: 'center',
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingHorizontal: 20,
    },
    card: {
        width: width * 0.4,
        marginVertical: 10,
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: "center",
        backgroundColor: "#00D6BC99",
    },
    cardImage: {
        width: width * 0.2,
        height: width * 0.2,
        marginBottom: 10,
    },
    cardText: {
        color: "#F8F5ED",
        fontSize: 16,
        textAlign: "center",
    },
});

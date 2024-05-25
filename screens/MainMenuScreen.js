import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default () => {
    const handlePress = (cardName) => {
        console.log(`${cardName} pressed`);
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
                <Image source={require('../assets/profile.png')} resizeMode="stretch" style={styles.mainImage} />
                <Text style={styles.helloText}>Hello</Text>
                <Text style={styles.nameText}>Maria</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Online Lessons')}>
                        <Image source={require('../assets/online-lessons.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Online Lessons</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Social Network')}>
                        <Image source={require('../assets/social-network.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Social Network</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Progress Tracker')}>
                        <Image source={require('../assets/progress.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Progress Tracker</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Learn & Share')}>
                        <Image source={require('../assets/learn-share.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Learn & Share</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Music Library')}>
                        <Image source={require('../assets/music-library.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Music Library</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('Resources')}>
                        <Image source={require('../assets/info.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Resources</Text>
                    </TouchableOpacity>
                </View>
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
    },
    logoText: {
        color: "#00D7BD",
        fontSize: 24,
        marginLeft: 10,
    },
    mainImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        alignSelf: 'center',
    },
    helloText: {
        color: "#888888",
        fontSize: 16,
        marginBottom: 7,
        textAlign: 'center',
    },
    nameText: {
        color: "#5B5A5A",
        fontSize: 28,
        marginBottom: 38,
        textAlign: 'center',
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 29,
        marginHorizontal: 41,
    },
    card: {
        width: 148,
        borderRadius: 20,
        paddingVertical: 24,
        paddingHorizontal: 36,
        alignItems: "center",
        backgroundColor: "#00D6BC99",
    },
    cardImage: {
        width: 76,
        height: 76,
        marginBottom: 19,
    },
    cardText: {
        color: "#F8F5ED",
        fontSize: 18,
        textAlign: "center",
    },
});

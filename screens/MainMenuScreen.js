import React from "react";
import { SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";

const { width } = Dimensions.get('window');
const melaudio = require('../assets/melaudio.png');

export default function MainMenuScreen({ route, navigation }) {
    const { username, userType } = route.params || {};

    const handlePress = (screen) => {
        navigation.navigate(screen, { username, userType });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={melaudio} resizeMode="stretch" style={styles.logoImage} />
                        <Text style={styles.logoText}>Melaudio</Text>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <Image source={require('../assets/profile.png')} resizeMode="stretch" style={styles.mainImage} />
                    <Text style={styles.helloText}>Hello</Text>
                    <Text style={styles.nameText}>{username}</Text>
                </View>
                <View style={styles.grid}>
                    {userType === 'student' && (
                        <>
                            <TouchableOpacity style={styles.card} onPress={() => handlePress('OnlineLessons')}>
                                <Image source={require('../assets/online-lessons.png')} resizeMode="stretch" style={styles.cardImage} />
                                <Text style={styles.cardText}>Online Lessons</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => handlePress('ProgressTracker')}>
                                <Image source={require('../assets/progress.png')} resizeMode="stretch" style={styles.cardImage} />
                                <Text style={styles.cardText}>Progress Tracker</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => handlePress('SocialNetwork')}>
                                <Image source={require('../assets/social-network.png')} resizeMode="stretch" style={styles.cardImage} />
                                <Text style={styles.cardText}>Social Network</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    {userType === 'admin' && (
                        <>
                            <TouchableOpacity style={styles.card} onPress={() => handlePress('EvaluateTeachers')}>
                                <Image source={require('../assets/evaluate.png')} resizeMode="stretch" style={styles.cardImage} />
                                <Text style={styles.cardText}>Evaluate Teachers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => handlePress('UserManager')}>
                                <Image source={require('../assets/user-manager.png')} resizeMode="stretch" style={styles.cardImage} />
                                <Text style={styles.cardText}>User Manager</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    {userType === 'teacher' && (
                        <>
                            <TouchableOpacity style={styles.card} onPress={() => handlePress('UploadFiles')}>
                                <Image source={require('../assets/upload.png')} resizeMode="stretch" style={styles.cardImage} />
                                <Text style={styles.cardText}>Upload Files</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card} onPress={() => handlePress('MyStudents')}>
                                <Image source={require('../assets/my_students.png')} resizeMode="stretch" style={styles.cardImage} />
                                <Text style={styles.cardText}>My Students</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('LearnAndShare')}>
                        <Image source={require('../assets/learn-share.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Learn & Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={() => handlePress('MusicLibrary')}>
                        <Image source={require('../assets/music-library.png')} resizeMode="stretch" style={styles.cardImage} />
                        <Text style={styles.cardText}>Music Library</Text>
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
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
        backgroundColor: "#F8F5ED",
        borderRadius: 50,
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
        color: "#00D7BD",
        fontSize: 24,
        marginLeft: 8,
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 60, 
    },
    mainImage: {
        width: width * 0.2,
        height: width * 0.2,
        marginBottom: 10,
        borderRadius: width * 0.1, 
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
        paddingBottom: 20, 
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
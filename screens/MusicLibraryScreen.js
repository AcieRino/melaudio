import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default (props) => {
    const [searchText, setSearchText] = useState("");

    const songs = [
        { title: "Piano Concerto", artist: "Clara Schumann" },
        { title: "Clair de Lune", artist: "Debussy" },
        { title: "Concierto de Aranjuez", artist: "Rodrigo" },
        { title: "Recuerdos de la Alhambra", artist: "Tárrega" },
        { title: "Rhapsody in Blue", artist: "Gershwin" },
        { title: "The Well-Tempered Clavier", artist: "J.S. Bach" },
        { title: "Cavatina", artist: "Stanley Myers" },
    ];

    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(searchText.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSongPress = (songTitle) => {
        console.log(`${songTitle} pressed`);
    };

    const handleBackPress = () => {
        console.log('Back button pressed');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image source={require('./assets/melaudio.png')} resizeMode="stretch" style={styles.logoImage} />
                        <Text style={styles.logoText}>Melaudio</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleBackPress}>
                    <Image source={require('./assets/back.png')} resizeMode="stretch" style={styles.mainImage} />
                </TouchableOpacity>
                <Text style={styles.libraryTitle}>Music Library</Text>
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search songs"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                </View>
                {filteredSongs.map((song, index) => (
                    <View key={index} style={styles.songCard}>
                        <View style={styles.songInfo}>
                            <Text style={styles.songTitle}>{song.title}</Text>
                            <Text style={styles.songArtist}>{song.artist}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleSongPress(song.title)}>
                            <Image source={require('./assets/play.png')} resizeMode="stretch" style={styles.songImage} />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

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
    libraryTitle: {
        color: "#5B5A5A",
        fontSize: 32,
        marginBottom: 51,
        marginLeft: 29,
    },
    searchBox: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 48,
        marginHorizontal: 28,
        backgroundColor: "#FFFFFF",
    },
    searchInput: {
        fontSize: 16,
        color: "#888888",
    },
    songCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#00D6BC99",
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginBottom: 18,
        marginHorizontal: 28,
    },
    songInfo: {
        flex: 1,
    },
    songTitle: {
        color: "#5B5B5B",
        fontSize: 20,
        marginBottom: 8,
    },
    songArtist: {
        color: "#5B5B5B",
        fontSize: 16,
    },
    songImage: {
        width: 20,
        height: 20,
    },
});

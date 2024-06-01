import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";

export default function SocialNetworkScreen({ navigation }) {
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([
        { user: "Alice", text: "Looking for a piano practice group." },
        { user: "Bob", text: "Anyone interested in a jazz guitar group?" },
        { user: "Carol", text: "Looking for a violin duet partner." }
    ]);

    const [students, setStudents] = useState([
        { name: "Alice", lookingForGroup: true },
        { name: "Bob", lookingForGroup: true },
        { name: "Carol", lookingForGroup: true },
    ]);

    const [groupName, setGroupName] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [groups, setGroups] = useState([
        { name: "Piano Lovers", description: "A group for piano enthusiasts." },
        { name: "Jazz Guitarists", description: "Jazz guitar practice group." },
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const filteredPosts = posts.filter(post => 
        post.user.toLowerCase().includes(searchText.toLowerCase()) || 
        post.text.toLowerCase().includes(searchText.toLowerCase())
    );

    const filteredStudents = students.filter(student => 
        student.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handlePostSubmit = () => {
        if (searchText.trim()) {
            setPosts([{ user: "You", text: searchText }, ...posts]);
            setSearchText("");
        }
    };

    const handleGroupCreate = () => {
        if (groupName.trim() && groupDescription.trim()) {
            setGroups([{ name: groupName, description: groupDescription }, ...groups]);
            setGroupName("");
            setGroupDescription("");
            setIsModalVisible(false);
        }
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
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
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search groups or students"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    <TouchableOpacity onPress={handlePostSubmit} style={styles.postButton}>
                        <Text style={styles.postButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
                <TouchableOpacity onPress={openModal} style={styles.createGroupButton}>
                    <Text style={styles.createGroupButtonText}>Create a Group</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Create a New Group</Text>
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Group name"
                                value={groupName}
                                onChangeText={setGroupName}
                            />
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Group description"
                                value={groupDescription}
                                onChangeText={setGroupDescription}
                            />
                            <TouchableOpacity onPress={handleGroupCreate} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Create</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={closeModal} style={[styles.modalButton, styles.cancelButton]}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <View style={styles.divider} />
                <Text style={styles.subTitle}>Existing groups:</Text>
                {groups.map((group, index) => (
                    <View key={index} style={styles.groupCard}>
                        <Text style={styles.groupName}>{group.name}</Text>
                        <Text style={styles.groupDescription}>{group.description}</Text>
                    </View>
                ))}
                <View style={styles.divider} />
                <Text style={styles.subTitle}>Students looking for groups:</Text>
                {filteredStudents.map((student, index) => (
                    <View key={index} style={styles.studentCard}>
                        <Text style={styles.studentName}>{student.name}</Text>
                        {student.lookingForGroup && <Text style={styles.studentStatus}>Looking for group</Text>}
                    </View>
                ))}
                <View style={styles.divider} />
                <Text style={styles.subTitle}>Group posts:</Text>
                {filteredPosts.map((post, index) => (
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
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginHorizontal: 20,
    },
    searchInput: {
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
    createGroupButton: {
        backgroundColor: "#00D7BD",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginBottom: 20,
    },
    createGroupButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: '80%',
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 24,
        marginBottom: 20,
        color: "#5B5A5A",
    },
    modalInput: {
        width: '100%',
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: "#00D7BD",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        width: '100%',
        alignItems: "center",
    },
    cancelButton: {
        backgroundColor: "#ccc",
    },
    modalButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
    subTitle: {
        fontSize: 24,
        marginBottom: 10,
        marginLeft: 29,
    },
    groupCard: {
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
    groupName: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5,
    },
    groupDescription: {
        fontSize: 16,
        color: "#5B5A5A",
    },
    studentCard: {
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
    studentName: {
        fontWeight: "bold",
        fontSize: 18,
    },
    studentStatus: {
        fontSize: 16,
        color: "#5B5A5A",
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

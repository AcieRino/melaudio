import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const melaudio = require('../assets/melaudio.png');

export default function SignUpScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
    const [email, setEmail] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [reenterPasswordVisible, setReenterPasswordVisible] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);

    const handleSignUp = () => {
        if (!username || !password || !reenterPassword || !email) {
            Alert.alert('Error', 'All fields are mandatory.');
            return;
        }
        if (password !== reenterPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }
        if (!termsAccepted) {
            Alert.alert('Error', 'You have to accept the terms and conditions.');
            return;
        }

        const userType = isTeacher ? 'teacher' : 'student';
        const signupData = {
            username,
            password,
            email,
            userType,
            instrument: 'piano', // This should be dynamic based on user input
            level: 'beginner',   // This should be dynamic based on user input
            cv: isTeacher ? 'CV content' : null, // This should be dynamic based on user input
            permissions: isTeacher ? null : 'all'
        };

        axios.post('http://192.168.1.4:3000/api/signup', signupData)
            .then(response => {
                if (response.data.success) {
                    navigation.navigate('MainMenu', { username }); // Navigate to MainMenu after sign-up and pass username
                } else {
                    Alert.alert('Error', response.data.message);
                }
            })
            .catch(error => {
                console.error('Error during sign-up:', error);
                Alert.alert('An error occurred. Please try again.');
            });
    };

    const handleLoginNavigation = () => {
        // Navigate to the login screen
        navigation.navigate('Login');
    };

    const handleToggleRole = () => {
        setIsTeacher(!isTeacher);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={melaudio} resizeMode="stretch" style={styles.logoImage} />
                        <Text style={styles.logoText}>Melaudio</Text>
                    </View>
                </View>
                <Text style={styles.signUpText}>Sign Up</Text>
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your username"
                        placeholderTextColor="#83859C"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your password"
                        placeholderTextColor="#83859C"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <Text style={styles.eyeIcon}>{passwordVisible ? '👁️' : '🙈'}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>Re-enter Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your password"
                        placeholderTextColor="#83859C"
                        secureTextEntry={!reenterPasswordVisible}
                        value={reenterPassword}
                        onChangeText={setReenterPassword}
                    />
                    <TouchableOpacity onPress={() => setReenterPasswordVisible(!reenterPasswordVisible)}>
                        <Text style={styles.eyeIcon}>{reenterPasswordVisible ? '👁️' : '🙈'}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your email"
                        placeholderTextColor="#83859C"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.termsContainer}>
                    <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)} style={styles.checkbox}>
                        {termsAccepted && <View style={styles.checkboxInner} />}
                    </TouchableOpacity>
                    <Text style={styles.termsText}>Accept the terms and conditions</Text>
                </View>
                {isTeacher && (
                    <>
                        <View style={styles.uploadContainer}>
                            <Text style={styles.uploadText}>Upload CV</Text>
                            <TouchableOpacity style={styles.uploadButton}>
                                <Text style={styles.uploadButtonText}>Choose File</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.uploadContainer}>
                            <Text style={styles.uploadText}>Upload Application</Text>
                            <TouchableOpacity style={styles.uploadButton}>
                                <Text style={styles.uploadButtonText}>Choose File</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
                <TouchableOpacity onPress={handleToggleRole}>
                    <Text style={styles.toggleRoleText}>{isTeacher ? 'Sign Up as Student' : 'Sign Up as Teacher'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={handleSignUp}
                >
                    <Text style={styles.signUpButtonText}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <TouchableOpacity onPress={handleLoginNavigation}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: "#F8F5ED",
        borderRadius: 50,
        paddingBottom: 37
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginHorizontal: 7
    },
    logoContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 4
    },
    logoImage: {
        width: 79,
        height: 75
    },
    logoText: {
        color: "#0A4F5E",
        fontSize: 24,
        marginLeft: 10
    },
    signUpText: {
        color: "#2E2E2E",
        fontSize: 40,
        marginBottom: 40,
        textAlign: 'center'
    },
    label: {
        color: "#888888",
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 35
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#D2D2D2",
        borderRadius: 20,
        borderWidth: 2,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        marginHorizontal: 28
    },
    input: {
        flex: 1,
        color: "#000000",
        fontSize: 15
    },
    eyeIcon: {
        marginLeft: 10,
        fontSize: 18,
        color: '#83859C'
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 28,
        marginBottom: 20
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#83859C',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxInner: {
        width: 12,
        height: 12,
        backgroundColor: '#00D7BD'
    },
    termsText: {
        color: '#83859C',
        fontSize: 16
    },
    toggleRoleText: {
        color: "#00D7BD",
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: 20,
        marginTop: -10,
    },
    uploadContainer: {
        marginHorizontal: 28,
        marginBottom: 20,
    },
    uploadText: {
        color: '#888888',
        fontSize: 18,
        marginBottom: 10,
    },
    uploadButton: {
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#00D7BD',
    },
    uploadButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
    },
    signUpButton: {
        alignItems: "center",
        borderRadius: 40,
        paddingVertical: 19,
        marginBottom: 55,
        marginHorizontal: 28,
        backgroundColor: "#00D7BD"
    },
    signUpButtonText: {
        color: "#FFFFFF",
        fontSize: 18
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 84
    },
    footerText: {
        color: "#545563",
        fontSize: 16
    },
    loginText: {
        color: "#00D7BD",
        fontSize: 16,
        marginLeft: 5
    }
});

import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const melaudio = require('../assets/melaudio.png');

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        validateInput();
    }, [username, password]);

    const handleLogin = () => {
        // Add your login logic here
        console.log('Login:', { username, password });
        navigation.navigate('MainMenu'); // Navigate to MainMenu after login
    };

    const handleSignUpNavigation = () => {
        navigation.navigate('SignUp'); // Navigate to the sign-up screen
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic
        console.log('Forgot Password');
    };

    const validateInput = () => {
        setIsButtonDisabled(!(username && password));
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
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.label}>Username</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your username"
                        placeholderTextColor="#83859C"
                        value={username}
                        onChangeText={(text) => {
                            setUsername(text);
                        }}
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
                        onChangeText={(text) => {
                            setPassword(text);
                        }}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIconContainer}>
                        <Text style={styles.eyeIcon}>{passwordVisible ? '👁️' : '🙈'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.loginButton, isButtonDisabled && styles.disabledButton]}
                    onPress={handleLogin}
                    disabled={isButtonDisabled}
                >
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Don’t have an account?</Text>
                    <TouchableOpacity onPress={handleSignUpNavigation}>
                        <Text style={styles.signUpText}>Sign up</Text>
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
    loginText: {
        color: "#2E2E2E",
        fontSize: 40,
        marginBottom: 40,
        marginLeft: 139
    },
    label: {
        color: "#888888",
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 35
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
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
    eyeIconContainer: {
        marginLeft: 10
    },
    eyeIcon: {
        fontSize: 18
    },
    forgotPasswordText: {
        color: "#888888",
        fontSize: 16,
        marginBottom: 43,
        marginLeft: 31,
        textDecorationLine: 'underline'
    },
    loginButton: {
        alignItems: "center",
        borderRadius: 40,
        paddingVertical: 19,
        marginBottom: 55,
        marginHorizontal: 28,
        backgroundColor: "#00D7BD"
    },
    disabledButton: {
        backgroundColor: "#A0A0A0"
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 18
    },
    footerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 84
    },
    footerText: {
        color: "#545563",
        fontSize: 16
    },
    signUpText: {
        color: "#00D7BD",
        fontSize: 16
    }
});

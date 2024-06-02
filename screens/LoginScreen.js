import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import axios from 'axios';

const melaudio = require('../assets/melaudio.png');

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        validateInput();
    }, [username, password]);

    const handleLogin = () => {
        axios.post('http://192.168.1.4:3000/api/login', { username, password }) 
            .then(response => {
                if (response.data.success) {
                    navigation.navigate('MainMenu', { username, userType: response.data.user.user_type }); // Pass username and userType to MainMenu
                } else {
                    console.log('Invalid credentials');
                    alert('Invalid username or password');
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
                alert('An error occurred. Please try again.');
            });
    };

    const handleSignUpNavigation = () => {
        navigation.navigate('SignUp'); // Navigate to the sign-up screen
    };

    const handleForgotPassword = () => {
        setModalVisible(true);
    };

    const handleResetPassword = () => {
        // Handle reset password logic
        console.log('Reset password for email:', email);
        alert('Password reset link has been sent to your email.');
        setModalVisible(false);
        setEmail('');
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Please enter your email to reset your password</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Type your email"
                            placeholderTextColor="#83859C"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonSubmit]}
                                onPress={handleResetPassword}
                            >
                                <Text style={styles.textStyle}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
        marginHorizontal: 7,
        paddingTop: 20,
    },
    logoContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginRight: 4
    },
    logoImage: {
        width: 50,
        height: 50,
        marginRight: 2,
    },
    logoText: {
        color: "#00D7BD",
        fontSize: 24,
        marginLeft: 2
    },
    loginText: {
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
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 84
    },
    footerText: {
        color: "#545563",
        fontSize: 16
    },
    signUpText: {
        color: "#00D7BD",
        fontSize: 16,
        marginLeft: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
    },
    modalInput: {
        width: '100%',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonClose: {
        backgroundColor: '#f44336',
    },
    buttonSubmit: {
        backgroundColor: '#00D7BD',
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

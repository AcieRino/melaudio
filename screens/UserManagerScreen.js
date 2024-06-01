import React, { useEffect, useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProfileButton = ({ name, role, onPress }) => (
  <TouchableOpacity onPress={() => onPress(name, role)}>
    <View style={styles.profileButton}>
      <Text style={styles.profileButtonText}>{name}</Text>
      <Text style={styles.profileButtonRole}>{role}</Text>
    </View>
  </TouchableOpacity>
);

const handleBackPress = () => {
  console.log('Back button pressed');
};

const handleProfilePress = (name, role) => {
  console.log(`${role} ${name} clicked`);
};

const handleWarnUserPress = () => {
  console.log('Warn user pressed');
};

export default () => {
  const teacherProfiles = Array.from({ length: 5 }, (_, index) => `Teacher ${index + 1}`);
  const studentProfiles = Array.from({ length: 12 }, (_, index) => `Student ${index + 1}`);
  const allProfiles = [...teacherProfiles, ...studentProfiles];

  const [randomUserName, setRandomUserName] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allProfiles.length);
    setRandomUserName(allProfiles[randomIndex]);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={require('./assets/melaudio.png')}
              resizeMode="stretch"
              style={styles.logoImage}
            />
            <Text style={styles.headerTitle}>Melaudio</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('./assets/back.png')} resizeMode="stretch" style={styles.mainImage} />
        </TouchableOpacity>
        <Text style={styles.mainTitle}>User Manager</Text>

        <View style={styles.violationContainer}>
          <Text style={styles.violationText}>Violation of rules by users: {randomUserName}</Text>
          <TouchableOpacity onPress={handleWarnUserPress}>
            <Text style={styles.warnUserText}>Warn user</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitle}>Teachers</Text>
        <View style={styles.profilesContainer}>
          {teacherProfiles.map((name, index) => (
            <ProfileButton 
              key={`teacher-${index}`} 
              name={name} 
              role="Teacher" 
              onPress={handleProfilePress} 
            />
          ))}
        </View>

        <Text style={styles.subTitle}>Students</Text>
        <View style={styles.profilesContainer}>
          {studentProfiles.map((name, index) => (
            <ProfileButton 
              key={`student-${index}`} 
              name={name} 
              role="Student" 
              onPress={handleProfilePress} 
            />
          ))}
        </View>
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
    paddingBottom: 154,
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
  headerTitle: {
    color: "#00D7BD",
    fontSize: 24,
  },
  mainImage: {
    width: 30,
    height: 30,
    marginBottom: 20,
    marginHorizontal: 28,
  },
  mainTitle: {
    color: "#5B5A5A",
    fontSize: 32,
    marginBottom: 20,
    marginLeft: 30,
  },
  violationContainer: {
    backgroundColor: "#FFD700",
    padding: 15,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  violationText: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  warnUserText: {
    fontSize: 18,
    color: "#0000FF",
    textDecorationLine: "underline",
  },
  subTitle: {
    color: "#5B5B5B",
    fontSize: 24,
    marginBottom: 11,
    marginLeft: 30,
  },
  profilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  profileButton: {
    borderRadius: 10,
    padding: 20,
    width: 150,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    backgroundColor: "#00D7BD",
  },
  profileButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 5,
  },
  profileButtonRole: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});

import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const ExpandableButton = ({ title }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.expandableButtonContainer}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={styles.expandableButton}>
          <Text style={styles.expandableButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.expandableContent}>
          <Text style={styles.expandableContentText}>{`Details about ${title}`}</Text>
        </View>
      )}
    </View>
  );
};

const ProfileButton = ({ name, onPress, isSelected }) => (
  <View style={styles.profileButtonContainer}>
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.profileButton, isSelected && styles.profileButtonSelected]}>
        <Text style={styles.profileButtonText}>{name}</Text>
      </View>
    </TouchableOpacity>
    {isSelected && (
      <View style={styles.expandedButtonsContainer}>
        <ExpandableButton title="Give Feedback" />
        <ExpandableButton title="Assignments" />
      </View>
    )}
  </View>
);

export default function MyStudentsScreen() {
  const studentProfiles = Array.from({ length: 6 }, (_, index) => `Student ${index + 1}`);
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/melaudio.png')}
              resizeMode="stretch"
              style={styles.logoImage}
            />
            <Text style={styles.logoText}>Melaudio</Text>
          </View>
        </View>

        <View style={styles.profilesContainer}>
          {studentProfiles.map((name, index) => (
            <ProfileButton
              key={`student-${index}`}
              name={name}
              isSelected={selectedStudent === name}
              onPress={() => setSelectedStudent(selectedStudent === name ? null : name)}
            />
          ))}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: "#F8F5ED",
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
    width: 50,
    height: 50,
    marginRight: 8,
  },
  logoText: {
    color: "#00D7BD",
    fontSize: 24,
    fontWeight: "bold",
  },
  profilesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: width,
    paddingHorizontal: 20,
    paddingTop: 60, // Add padding to account for header
  },
  profileButtonContainer: {
    width: '45%', 
    marginVertical: 10,
  },
  profileButton: {
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    backgroundColor: "#00D7BD",
    borderWidth: 2,
    borderColor: "#00B8A9",
  },
  profileButtonSelected: {
    backgroundColor: "#00B8A9",
    borderColor: "#00796B",
  },
  profileButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  expandedButtonsContainer: {
    marginTop: 10,
  },
  expandableButtonContainer: {
    marginBottom: 5,
  },
  expandableButton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#00796B",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#004D40",
  },
  expandableButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  expandableContent: {
    marginTop: 5,
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
  },
  expandableContentText: {
    fontSize: 14,
    color: "#000",
  },
});

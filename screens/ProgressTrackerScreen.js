import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProgressItem = ({ color, label }) => (
  <View style={styles.progressItemContainer}>
    <View style={[styles.progressItemColor, { backgroundColor: color }]} />
    <Text style={styles.progressItemText}>{label}</Text>
  </View>
);

const LessonCard = ({ title, isCompleted, onPress }) => (
  <TouchableOpacity onPress={() => onPress(title)}>
    <View style={[styles.lessonCard, isCompleted ? styles.lessonCompletedCard : styles.lessonIncompleteCard]}>
      <Text style={styles.lessonCardText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function ProgressTrackerScreen({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleLessonPress = (title) => {
    console.log(`${title} clicked`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              source={require('../assets/melaudio.png')}
              resizeMode="stretch"
              style={styles.logoImage}
            />
            <Text style={styles.headerTitle}>Melaudio</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../assets/back.png')} resizeMode="stretch" style={styles.mainImage} />
        </TouchableOpacity>
        <Text style={styles.mainTitle}>Progress Tracker</Text>
        <Text style={styles.subTitle}>Lessons</Text>

        <View style={styles.progressContainer}>
          <ProgressItem color="#D2555A" label="Incomplete" />
          <ProgressItem color="#A5D76E" label="Completed" />
        </View>

        <View style={styles.lessonsContainer}>
          {Array.from({ length: 12 }, (_, index) => (
            <LessonCard 
              key={index} 
              title={`Lesson ${index + 1}`} 
              isCompleted={index < 5} 
              onPress={handleLessonPress} 
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
  subTitle: {
    color: "#5B5B5B",
    fontSize: 24,
    marginBottom: 11,
    marginLeft: 30,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginHorizontal: 46,
  },
  progressItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressItemColor: {
    width: 24,
    height: 26,
    marginRight: 10,
  },
  progressItemText: {
    color: "#5B5B5B",
    fontSize: 20,
  },
  lessonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  lessonCard: {
    borderRadius: 10,
    padding: 20,
    width: 150,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  lessonCompletedCard: {
    backgroundColor: "#A5D76E",
  },
  lessonIncompleteCard: {
    backgroundColor: "#D2555A",
  },
  lessonCardText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});

// screens/OnlineLessonsScreen.js
import React, { useState, useRef } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const handleStartPress = () => {
  console.log('Start button pressed');
};

const options = [
  { id: '1', name: "Guitar" },
  { id: '2', name: "Violin" },
  { id: '3', name: "Drums" },
  { id: '4', name: "Flute" },
  { id: '5', name: "Piano" },
];

const instructors = [
  { id: '1', name: "Sophia Smith" },
  { id: '2', name: "John Doe" },
  { id: '3', name: "Jane Doe" },
];

const CarouselOption = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.carouselItem, isSelected && styles.selectedItem]}>
      <Text style={[styles.carouselItemText, isSelected && styles.selectedItemText]}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function OnlineLessonsScreen({ navigation }) {
  const [selectedInstrumentIndex, setSelectedInstrumentIndex] = useState(0);
  const [selectedInstructorIndex, setSelectedInstructorIndex] = useState(0);
  const instrumentCarouselRef = useRef(null);
  const instructorCarouselRef = useRef(null);

  const scrollToInstrumentIndex = (index) => {
    if (instrumentCarouselRef.current) {
      instrumentCarouselRef.current.scrollToIndex({ index, animated: true });
      setSelectedInstrumentIndex(index);
    }
  };

  const scrollToInstructorIndex = (index) => {
    if (instructorCarouselRef.current) {
      instructorCarouselRef.current.scrollToIndex({ index, animated: true });
      setSelectedInstructorIndex(index);
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={require('../assets/melaudio.png')}
            resizeMode="stretch"
            style={styles.logo}
          />
          <Text style={styles.logoText}>Melaudio</Text>
        </View>

        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../assets/back.png')} resizeMode="stretch" style={styles.mainImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Online Lessons</Text>

        <View style={styles.divider} />

        <Text style={styles.subTitle}>Select a music instrument</Text>
        <View style={styles.instrumentSelector}>
          <View style={styles.carouselContainer}>
            <FlatList
              ref={instrumentCarouselRef}
              data={options}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <CarouselOption
                  item={item}
                  isSelected={index === selectedInstrumentIndex}
                  onPress={() => scrollToInstrumentIndex(index)}
                />
              )}
            />
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.subTitle}>Select an instructor</Text>
        <View style={styles.instructorSelector}>
          <View style={styles.carouselContainer}>
            <FlatList
              ref={instructorCarouselRef}
              data={instructors}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <CarouselOption
                  item={item}
                  isSelected={index === selectedInstructorIndex}
                  onPress={() => scrollToInstructorIndex(index)}
                />
              )}
            />
          </View>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity onPress={handleStartPress} style={styles.startButtonContainer}>
          <Text style={styles.startButtonText}>START</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#F8F5ED",
    borderRadius: 50,
    paddingBottom: 58,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingTop: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 1,
  },
  logoText: {
    color: "#00D7BD",
    fontSize: 24,
  },
  mainImage: {
    width: 30,
    height: 30,
    marginBottom: 14,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  title: {
    color: "#5B5A5A",
    fontSize: 32,
    marginBottom: 22,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  divider: {
    height: 2,
    backgroundColor: "#D3D3D3",
    marginBottom: 17,
    marginHorizontal: 25,
  },
  subTitle: {
    color: "#5B5B5B",
    fontSize: 26,
    marginBottom: 25,
    marginLeft: 35,
  },
  instrumentSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 9,
    marginHorizontal: 72,
  },
  carouselContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  carouselItem: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  carouselItemText: {
    fontSize: 18,
    color: '#333',
  },
  selectedItem: {
    backgroundColor: '#00D7BD',
  },
  selectedItemText: {
    color: '#FFFFFF',
  },
  instructorSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 1,
    marginHorizontal: 72,
  },
  startButtonContainer: {
    borderRadius: 20,
    paddingTop: 9,
    paddingBottom: 9,
    backgroundColor: "#00D7BD",
    width: 130,
    height: 50,
    alignItems: "center",
    alignSelf: 'center',
    marginTop: 30,
  },
  startButtonText: {
    color: "#FFFFFF", 
    fontSize: 26,
    textAlign: 'center'
  },
});

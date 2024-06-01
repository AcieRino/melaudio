import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const FileUploadForm = () => {
  const [fileName, setFileName] = useState("");
  const [instrument, setInstrument] = useState("");

  const handleUpload = () => {
    console.log("File uploaded:", fileName, instrument);
    setFileName("");
    setInstrument("");
  };

  return (
    <View style={styles.uploadForm}>
      <TextInput
        style={styles.input}
        placeholder="File Name"
        value={fileName}
        onChangeText={text => setFileName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Instrument"
        value={instrument}
        onChangeText={text => setInstrument(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleUpload}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Text style={styles.fileSizeLimit}>File size should not exceed 2GB</Text>
      <TouchableOpacity style={styles.uploadFileButton} onPress={handleUpload}>
        <Text style={styles.uploadFileButtonText}>Upload file</Text>
      </TouchableOpacity>
    </View>
  );
};

const handleBackPress = () => {
  console.log('Back button pressed');
};

export default () => {
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
        <Text style={styles.mainTitle}>Upload Files</Text>

        <FileUploadForm />
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
  uploadForm: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#00D7BD",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 24,
    color: "#FFFFFF",
  },
  fileSizeLimit: {
    fontSize: 12,
    color: "#888888",
    marginBottom: 20,
    marginTop: 10,
  },
  uploadFileButton: {
    backgroundColor: "#FF6F61",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  uploadFileButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

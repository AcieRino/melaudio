import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const ApplicationFrame = ({ applicantName, applicationDetails, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.applicationFrame}>
      <Text style={styles.applicationName}>{applicantName}</Text>
      <Text style={styles.applicationDetails}>{applicationDetails}</Text>
    </View>
  </TouchableOpacity>
);

const ExpandedApplication = ({ applicantName, applicationDetails, onActionPress }) => (
  <View style={styles.expandedApplication}>
    <Text style={styles.expandedApplicationName}>{applicantName}</Text>
    <Text style={styles.expandedApplicationDetails}>{applicationDetails}</Text>
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity style={styles.actionButtonReject} onPress={() => onActionPress('Reject Application')}>
        <Text style={styles.actionButtonText}>Reject Application</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButtonModify} onPress={() => onActionPress('Application needs modification')}>
        <Text style={styles.actionButtonText}>Application needs modification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButtonApprove} onPress={() => onActionPress('Approve application')}>
        <Text style={styles.actionButtonText}>Approve application</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const handleActionPress = (action) => {
  console.log(`${action} pressed`);
};

export default function EvaluateTeachersScreen({ navigation }) {
  const applications = [
    { name: "John Doe", details: "Piano Teacher" },
    { name: "Emily Williams", details: "Violin Teacher" },
    { name: "James Anderson", details: "Guitar Teacher" }
  ];

  const [expandedApplication, setExpandedApplication] = useState(null);

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

        {applications.map((application, index) => (
          <View key={`application-${index}`}>
            <ApplicationFrame
              applicantName={application.name}
              applicationDetails={application.details}
              onPress={() => setExpandedApplication(expandedApplication === application ? null : application)}
            />
            {expandedApplication?.name === application.name && (
              <ExpandedApplication
                applicantName={application.name}
                applicationDetails={application.details}
                onActionPress={handleActionPress}
              />
            )}
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
  applicationFrame: {
    backgroundColor: "#00D7BD",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  applicationName: {
    fontSize: 18,
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  applicationDetails: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  expandedApplication: {
    backgroundColor: "#FFF3CD",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  expandedApplicationName: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
  },
  expandedApplicationDetails: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  actionButtonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  actionButtonReject: {
    backgroundColor: "#FF6F61",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    width: "80%",
  },
  actionButtonModify: {
    backgroundColor: "#FFD700", 
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    width: "80%",
  },
  actionButtonApprove: {
    backgroundColor: "#4CAF50", 
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
    width: "80%",
  },
  actionButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});

import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

const TimeSlot = ({ day, hour, isSelected, isConfirmed, onPress }) => (
  <TouchableOpacity onPress={() => onPress(day, hour)} disabled={isConfirmed}>
    <View style={[styles.timeSlot, isConfirmed ? styles.timeSlotConfirmed : (isSelected ? styles.timeSlotSelected : styles.timeSlotUnselected)]}>
      <Text style={styles.timeSlotText}>{day}</Text>
      <Text style={styles.timeSlotText}>{hour}</Text>
    </View>
  </TouchableOpacity>
);

export default () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [confirmedTimeSlot, setConfirmedTimeSlot] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTimeSlotPress = (day, hour) => {
    setSelectedTimeSlot({ day, hour });
    setIsModalVisible(true);
  };

  const handleConfirm = () => {
    setConfirmedTimeSlot(selectedTimeSlot);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedTimeSlot(null);
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
        <Text style={styles.subTitle}>Select an available hour</Text>

        <View style={styles.timeSlotsContainer}>
          {['Monday', 'Wednesday', 'Friday'].map((day) =>
            ['9 AM - 12 PM', '12 PM - 3 PM'].map((hour, index) => (
              <TimeSlot 
                key={`${day}-${index}`} 
                day={day} 
                hour={hour} 
                isSelected={selectedTimeSlot?.day === day && selectedTimeSlot?.hour === hour}
                isConfirmed={confirmedTimeSlot?.day === day && confirmedTimeSlot?.hour === hour}
                onPress={handleTimeSlotPress} 
              />
            ))
          )}
        </View>

        {confirmedTimeSlot && (
          <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationText}>Appointment confirmed!</Text>
          </View>
        )}

        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={handleCancel}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Confirm appointment hour</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleConfirm} style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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
  subTitle: {
    color: "#5B5B5B",
    fontSize: 24,
    marginBottom: 11,
    marginLeft: 30,
  },
  timeSlotsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  timeSlot: {
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
  timeSlotSelected: {
    backgroundColor: "#A5D76E",
  },
  timeSlotUnselected: {
    backgroundColor: "#D2555A",
  },
  timeSlotConfirmed: {
    backgroundColor: "#B0B0B0",
  },
  timeSlotText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  confirmationContainer: {
    backgroundColor: "#E8E8E8",
    padding: 10,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmationText: {
    fontSize: 18,
    color: "#5B5B5B",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    color: "#5B5B5B",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#00D7BD",
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

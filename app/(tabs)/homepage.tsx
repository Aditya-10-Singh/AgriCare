import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import gradient

export default function HomePage() {
  return (
    <LinearGradient
      colors={["#D4EDDA", "#A5D6A7", "#81C784"]}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />

      {/* Logo and Welcome Message */}
      <Image source={require("./AgriCare-logo1.png")} style={styles.logo} />
      <Text style={styles.title}>Welcome to AgriCare! 🌱</Text>
      <Text style={styles.subtitle}>Your AI-powered plant care assistant</Text>

      {/* Buttons for Scanning and History */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>📸 Scan Plant</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>📂 View History</Text>
        </TouchableOpacity>
      </View>

      {/* AI Assistance Section */}
      <Text style={styles.aiText}>Need AI Assistance?</Text>
      <TouchableOpacity style={[styles.aiButton]} activeOpacity={0.7}>
        <Text style={styles.aiButtonText}>💬 Ask AgriCare AI</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <Text style={styles.footer}>🌍 AgriCare | Contact | Version 1.0</Text>
    </LinearGradient>
  );
}

// ✅ Styling for UI Components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1B5E20",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#388E3C",
    marginBottom: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 12,
    marginHorizontal: 8,
    flex: 1,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  aiText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  aiButton: {
    backgroundColor: "#FF9800",
    paddingVertical: 10, // Smaller height
    paddingHorizontal: 15, // Smaller width
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "60%", // Reduce width
  },
  aiButtonText: {
    color: "#FFF",
    fontSize: 14, // Smaller text
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 15,
    fontSize: 14,
    color: "#555",
  },
});

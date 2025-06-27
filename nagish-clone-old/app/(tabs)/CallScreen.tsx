import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CallScreen() {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const toggleMic = () => {
    if (!isListening) {
      // Start fake listening
      setTranscript('Listening...');
    } else {
      setTranscript(''); // Stop listening
    }
    setIsListening(!isListening);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call in Progress</Text>
      <Text style={styles.subtitle}>Transcription:</Text>

      <View style={styles.transcriptionBox}>
        <Text style={styles.transcriptText}>
          {transcript || 'Say something...'}
        </Text>
      </View>

      <TouchableOpacity style={styles.micButton} onPress={toggleMic}>
        <Ionicons name={isListening ? 'mic' : 'mic-outline'} size={36} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  transcriptionBox: {
    height: 150,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 16,
    marginVertical: 16,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  transcriptText: {
    fontSize: 16,
    color: '#333',
  },
  micButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 50,
    elevation: 3,
  },
});
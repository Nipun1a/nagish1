import * as Speech from 'expo-speech';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [text, setText] = useState('');

  const speak = () => {
    if (text.trim() === '') {
      alert('Please enter something to speak');
      return;
    }
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nagish: Text to Speech</Text>

      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />

      <Button title="Speak" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
});

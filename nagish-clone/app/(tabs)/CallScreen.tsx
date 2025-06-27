// app/CallScreen.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CallScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call in Progress...</Text>

      {/* Transcript area */}
      <View style={styles.transcriptBox}>
        <Text style={styles.transcriptText}>
          (Live transcription will appear here...)
        </Text>
      </View>

      {/* Mic button */}
      <TouchableOpacity style={styles.micButton}>
        <Ionicons name="mic" size={40} color="white" />
      </TouchableOpacity>

      {/* End call button */}
      <TouchableOpacity
        style={styles.endCallButton}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.endCallText}>End Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 20,
  },
  transcriptBox: {
    width: '90%',
    minHeight: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
   transcriptText: {
    fontSize: 16,
    color: '#333',
  },
  micButton: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 50,
    marginBottom: 30,
    elevation: 3,
  },
  endCallButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  endCallText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

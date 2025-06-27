// app/index.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Voice Assist</Text>
      <Text style={styles.subtitle}>Tap below to start a call</Text>
      <Button title="Start Call" onPress={() => router.push('/CallScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  title: {
    fontSize: 26, fontWeight: 'bold', marginBottom: 10,
  },
  subtitle: {
    fontSize: 16, color: '#555', marginBottom: 20,
  },
});

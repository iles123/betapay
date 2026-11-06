// app/(tabs)/send.tsx
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Send() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSend = () => {
    if (!amount || !recipient) {
      Alert.alert('Missing info', 'Please enter a recipient and amount.');
      return;
    }
    Alert.alert('Mock payment', `Would send ₦${amount} to ${recipient}`);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.title}>Send Money</Text>
        <Text style={styles.subtitle}>Transfer to any bank account</Text>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Recipient</Text>
          <View style={styles.inputRow}>
            <Ionicons name="person-outline" size={20} color="#8E8E93" />
            <TextInput
              style={styles.input}
              placeholder="Name, phone, or account"
              placeholderTextColor="#5A5A5A"
              value={recipient}
              onChangeText={setRecipient}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.fieldLabel}>Amount</Text>
          <View style={styles.amountRow}>
            <Text style={styles.currency}>₦</Text>
            <TextInput
              style={styles.amountInput}
              placeholder="0.00"
              placeholderTextColor="#5A5A5A"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send Money</Text>
          <Ionicons name="arrow-forward" size={20} color="#0A0A0A" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0A0A0A' },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 16 },
  title: { color: '#FFFFFF', fontSize: 26, fontWeight: '700' },
  subtitle: { color: '#8E8E93', fontSize: 14, marginTop: 4, marginBottom: 32 },
  field: { marginBottom: 20 },
  fieldLabel: { color: '#8E8E93', fontSize: 13, marginBottom: 8, fontWeight: '500' },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#111111', borderWidth: 1, borderColor: '#1E1E1E', borderRadius: 14, paddingHorizontal: 16, height: 56, gap: 12 },
  input: { flex: 1, color: '#FFFFFF', fontSize: 15 },
  amountRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#111111', borderWidth: 1, borderColor: '#1E1E1E', borderRadius: 14, paddingHorizontal: 16, height: 80 },
  currency: { color: '#8E8E93', fontSize: 28, fontWeight: '600', marginRight: 8 },
  amountInput: { flex: 1, color: '#FFFFFF', fontSize: 32, fontWeight: '700' },
  sendButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00C48C', borderRadius: 14, height: 56, marginTop: 'auto', marginBottom: 24, gap: 8 },
  sendButtonText: { color: '#0A0A0A', fontSize: 16, fontWeight: '700' },
});
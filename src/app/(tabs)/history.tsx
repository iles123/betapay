// app/(tabs)/history.tsx
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ALL_TRANSACTIONS = [
  { id: '1', title: 'Netflix', subtitle: 'Subscription', amount: -4500, date: 'Nov 5, 10:24 AM', icon: 'film-outline', status: 'Success' },
  { id: '2', title: 'From Chidi', subtitle: 'Transfer', amount: 25000, date: 'Nov 5, 9:11 AM', icon: 'arrow-down-outline', status: 'Success' },
  { id: '3', title: 'MTN Airtime', subtitle: 'Top-up', amount: -1000, date: 'Nov 4, 6:32 PM', icon: 'phone-portrait-outline', status: 'Success' },
  { id: '4', title: 'Salary', subtitle: 'Deposit', amount: 250000, date: 'Nov 3, 8:00 AM', icon: 'briefcase-outline', status: 'Success' },
  { id: '5', title: 'Uber', subtitle: 'Transport', amount: -2800, date: 'Nov 2, 7:45 PM', icon: 'car-outline', status: 'Pending' },
  { id: '6', title: 'To Tunde', subtitle: 'Transfer', amount: -15000, date: 'Nov 1, 3:20 PM', icon: 'arrow-up-outline', status: 'Success' },
];

export default function History() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.subtitle}>All your activity in one place</Text>

        <FlatList
          data={ALL_TRANSACTIONS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.icon}>
                <Ionicons name={item.icon as any} size={20} color="#00C48C" />
              </View>
              <View style={styles.info}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <Text style={styles.rowSubtitle}>{item.subtitle} · {item.date}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={[styles.amount, { color: item.amount > 0 ? '#00C48C' : '#FFFFFF' }]}>
                  {item.amount > 0 ? '+' : ''}{item.amount.toLocaleString()}
                </Text>
                <Text style={[styles.status, { color: item.status === 'Success' ? '#8E8E93' : '#F5A623' }]}>
                  {item.status}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0A0A0A' },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 16 },
  title: { color: '#FFFFFF', fontSize: 26, fontWeight: '700' },
  subtitle: { color: '#8E8E93', fontSize: 14, marginTop: 4 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#151515' },
  icon: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#111111', borderWidth: 1, borderColor: '#1E1E1E', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  info: { flex: 1 },
  rowTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  rowSubtitle: { color: '#8E8E93', fontSize: 12, marginTop: 2 },
  amount: { fontSize: 15, fontWeight: '700' },
  status: { fontSize: 11, marginTop: 4, fontWeight: '500' },
});
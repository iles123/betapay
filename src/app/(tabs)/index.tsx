// app/(tabs)/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_TRANSACTIONS = [
  { id: '1', title: 'Netflix', subtitle: 'Subscription', amount: -4500, icon: 'film-outline', date: 'Today' },
  { id: '2', title: 'From Chidi', subtitle: 'Transfer', amount: 25000, icon: 'arrow-down-outline', date: 'Today' },
  { id: '3', title: 'MTN Airtime', subtitle: 'Top-up', amount: -1000, icon: 'phone-portrait-outline', date: 'Yesterday' },
  { id: '4', title: 'Salary', subtitle: 'Deposit', amount: 250000, icon: 'briefcase-outline', date: 'Mon' },
];

const QUICK_ACTIONS = [
  { icon: 'paper-plane-outline', label: 'Send' },
  { icon: 'add-circle-outline', label: 'Top Up' },
  { icon: 'qr-code-outline', label: 'Scan' },
  { icon: 'card-outline', label: 'Bills' },
];

export default function Dashboard() {
  const balance = 184500;
  const formatted = balance.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.name}>Ada</Text>
          </View>
          <TouchableOpacity style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>{formatted}</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardNumber}>•••• 4821</Text>
            <View style={styles.badge}>
              <Ionicons name="shield-checkmark" size={12} color="#00C48C" />
              <Text style={styles.badgeText}>Secured</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          {QUICK_ACTIONS.map((action) => (
            <TouchableOpacity key={action.label} style={styles.actionItem}>
              <View style={styles.actionIcon}>
                <Ionicons name={action.icon as any} size={22} color="#00C48C" />
              </View>
              <Text style={styles.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Transactions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {MOCK_TRANSACTIONS.map((tx) => (
          <View key={tx.id} style={styles.txRow}>
            <View style={styles.txIcon}>
              <Ionicons name={tx.icon as any} size={20} color="#00C48C" />
            </View>
            <View style={styles.txInfo}>
              <Text style={styles.txTitle}>{tx.title}</Text>
              <Text style={styles.txSubtitle}>{tx.subtitle} · {tx.date}</Text>
            </View>
            <Text style={[styles.txAmount, { color: tx.amount > 0 ? '#00C48C' : '#FFFFFF' }]}>
              {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0A0A0A' },
  container: { flex: 1, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, marginBottom: 24 },
  greeting: { color: '#8E8E93', fontSize: 14 },
  name: { color: '#FFFFFF', fontSize: 22, fontWeight: '700', marginTop: 2 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#00C48C', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#0A0A0A', fontWeight: '700', fontSize: 16 },
  balanceCard: { backgroundColor: '#111111', borderRadius: 20, padding: 24, borderWidth: 1, borderColor: '#1E1E1E', marginBottom: 24 },
  balanceLabel: { color: '#8E8E93', fontSize: 13, marginBottom: 8 },
  balanceAmount: { color: '#FFFFFF', fontSize: 34, fontWeight: '700', letterSpacing: -1 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  cardNumber: { color: '#8E8E93', fontSize: 14, letterSpacing: 2 },
  badge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F2A22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12, gap: 4 },
  badgeText: { color: '#00C48C', fontSize: 11, fontWeight: '600' },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28 },
  actionItem: { alignItems: 'center', flex: 1 },
  actionIcon: { width: 56, height: 56, borderRadius: 16, backgroundColor: '#111111', borderWidth: 1, borderColor: '#1E1E1E', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  actionLabel: { color: '#8E8E93', fontSize: 12, fontWeight: '500' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  seeAll: { color: '#00C48C', fontSize: 13, fontWeight: '600' },
  txRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  txIcon: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#111111', borderWidth: 1, borderColor: '#1E1E1E', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  txInfo: { flex: 1 },
  txTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  txSubtitle: { color: '#8E8E93', fontSize: 12, marginTop: 2 },
  txAmount: { fontSize: 15, fontWeight: '700' },
});
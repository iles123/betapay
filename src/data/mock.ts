import type { IconName } from '@/components/ui/icon';
import type { Tone } from '@/constants/tones';

export type TransactionKind = 'debit' | 'credit';
export type TransactionStatus = 'completed' | 'pending' | 'failed';
export type TransactionFilter = 'all' | 'in' | 'out' | 'bills' | 'airtime';

export type Transaction = {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  kind: TransactionKind;
  category: string;
  date: string;
  time: string;
  icon: IconName;
  tone: Tone;
  status: TransactionStatus;
  reference: string;
  method: string;
  note?: string;
};

export type BillCategory = {
  id: string;
  label: string;
  icon: IconName;
  tone: Tone;
};

export type Pocket = {
  id: string;
  name: string;
  type: 'personal' | 'group' | 'business' | 'savings';
  balance: number;
  subtitle: string;
  icon: IconName;
  tone: Tone;
  members?: number;
  goal?: number;
  interest?: number;
};

export type Card = {
  id: string;
  name: string;
  type: 'virtual' | 'physical';
  number: string;
  last4: string;
  expiry: string;
  holder: string;
  network: string;
  balance: number;
  frozen: boolean;
  tone: 'blue' | 'dark' | 'light';
};

export type Recipient = {
  id: string;
  name: string;
  handle: string;
  initials: string;
  tone: Tone;
};

export type Notification = {
  id: string;
  title: string;
  body: string;
  time: string;
  icon: IconName;
  tone: Tone;
  unread: boolean;
};

export const user = {
  firstName: 'Adeola',
  fullName: 'Adeola Johnson',
  pocketId: '@adeola',
  email: 'adeola.johnson@email.com',
  phone: '+234 803 555 0192',
  tier: 'Tier 3',
  initials: 'AJ',
};

export const wallet = {
  balance: 284750.5,
  interest: 342.18,
  cashscore: 1240,
  currency: 'NGN',
};

export const transactions: Transaction[] = [
  {
    id: 'txn-1',
    title: 'Netflix subscription',
    subtitle: 'Entertainment',
    amount: 6500,
    kind: 'debit',
    category: 'Entertainment',
    date: 'Today',
    time: '8:42 PM',
    icon: 'movie',
    tone: 'red',
    status: 'completed',
    reference: 'POK-8F21K9',
    method: 'Card •••• 4821',
    note: 'Monthly premium plan',
  },
  {
    id: 'txn-2',
    title: 'Transfer from Tunde',
    subtitle: 'Pocket transfer',
    amount: 45000,
    kind: 'credit',
    category: 'Transfer',
    date: 'Today',
    time: '2:15 PM',
    icon: 'moneyIn',
    tone: 'green',
    status: 'completed',
    reference: 'POK-7A31Q2',
    method: 'Personal Pocket',
    note: 'Weekend hangout refund',
  },
  {
    id: 'txn-3',
    title: 'MTN Airtime',
    subtitle: '0803 555 0192',
    amount: 2000,
    kind: 'debit',
    category: 'Airtime',
    date: 'Yesterday',
    time: '6:05 PM',
    icon: 'phone',
    tone: 'amber',
    status: 'completed',
    reference: 'POK-3L88M4',
    method: 'Personal Pocket',
  },
  {
    id: 'txn-4',
    title: 'Shoprite Ikeja',
    subtitle: 'Groceries',
    amount: 18450,
    kind: 'debit',
    category: 'Shopping',
    date: 'Yesterday',
    time: '11:24 AM',
    icon: 'bag',
    tone: 'violet',
    status: 'completed',
    reference: 'POK-2K55D1',
    method: 'Card •••• 4821',
  },
  {
    id: 'txn-5',
    title: 'DStv Compact',
    subtitle: 'TV subscription',
    amount: 12500,
    kind: 'debit',
    category: 'Bills',
    date: 'Oct 30',
    time: '9:10 AM',
    icon: 'tv',
    tone: 'cyan',
    status: 'completed',
    reference: 'POK-9C12B7',
    method: 'Personal Pocket',
  },
  {
    id: 'txn-6',
    title: 'Salary — Acme Ltd',
    subtitle: 'Monthly salary',
    amount: 350000,
    kind: 'credit',
    category: 'Income',
    date: 'Oct 28',
    time: '7:30 AM',
    icon: 'bank',
    tone: 'green',
    status: 'completed',
    reference: 'POK-1H45N8',
    method: 'Bank transfer',
  },
  {
    id: 'txn-7',
    title: 'Uber trip',
    subtitle: 'Victoria Island',
    amount: 3200,
    kind: 'debit',
    category: 'Transport',
    date: 'Oct 27',
    time: '7:55 PM',
    icon: 'car',
    tone: 'slate',
    status: 'completed',
    reference: 'POK-5T78P3',
    method: 'Card •••• 4821',
  },
  {
    id: 'txn-8',
    title: 'Transfer to Kemi',
    subtitle: 'Pocket transfer',
    amount: 25000,
    kind: 'debit',
    category: 'Transfer',
    date: 'Oct 26',
    time: '1:02 PM',
    icon: 'send',
    tone: 'blue',
    status: 'completed',
    reference: 'POK-4B90R6',
    method: 'Personal Pocket',
    note: 'Rent contribution',
  },
  {
    id: 'txn-9',
    title: 'EKEDC Electricity',
    subtitle: 'Ikeja Electric',
    amount: 15000,
    kind: 'debit',
    category: 'Bills',
    date: 'Oct 24',
    time: '10:18 AM',
    icon: 'electricity',
    tone: 'amber',
    status: 'completed',
    reference: 'POK-6E21W9',
    method: 'Personal Pocket',
  },
  {
    id: 'txn-10',
    title: 'Interest earned',
    subtitle: 'Personal Pocket',
    amount: 342.18,
    kind: 'credit',
    category: 'Income',
    date: 'Oct 23',
    time: '12:00 AM',
    icon: 'trendUp',
    tone: 'green',
    status: 'completed',
    reference: 'POK-0I33Y2',
    method: 'Pocket interest',
  },
  {
    id: 'txn-11',
    title: 'Chicken Republic',
    subtitle: 'Food & drinks',
    amount: 7800,
    kind: 'debit',
    category: 'Food',
    date: 'Oct 22',
    time: '8:12 PM',
    icon: 'food',
    tone: 'pink',
    status: 'completed',
    reference: 'POK-8C44K1',
    method: 'Card •••• 4821',
  },
  {
    id: 'txn-12',
    title: 'Group Pocket top-up',
    subtitle: 'Team Lunch',
    amount: 12000,
    kind: 'credit',
    category: 'Transfer',
    date: 'Oct 21',
    time: '4:40 PM',
    icon: 'group',
    tone: 'blue',
    status: 'completed',
    reference: 'POK-2G77L5',
    method: 'Group Pocket',
  },
];

export const billCategories: BillCategory[] = [
  { id: 'airtime', label: 'Airtime', icon: 'phone', tone: 'blue' },
  { id: 'data', label: 'Data', icon: 'wifi', tone: 'cyan' },
  { id: 'electricity', label: 'Electricity', icon: 'electricity', tone: 'amber' },
  { id: 'tv', label: 'TV', icon: 'tv', tone: 'violet' },
  { id: 'internet', label: 'Internet', icon: 'globe', tone: 'green' },
  { id: 'betting', label: 'Betting', icon: 'betting', tone: 'red' },
  { id: 'education', label: 'Education', icon: 'school', tone: 'pink' },
  { id: 'insurance', label: 'Insurance', icon: 'shield', tone: 'slate' },
];

export const recentBillers = [
  { id: 'biller-1', name: 'MTN', detail: '0803 555 0192', icon: 'phone' as IconName, tone: 'amber' as Tone },
  { id: 'biller-2', name: 'DStv', detail: 'Smartcard 7042 1188', icon: 'tv' as IconName, tone: 'violet' as Tone },
  { id: 'biller-3', name: 'EKEDC', detail: 'Meter 4501 2290', icon: 'electricity' as IconName, tone: 'blue' as Tone },
];

export const pockets: Pocket[] = [
  {
    id: 'pocket-personal',
    name: 'Personal Pocket',
    type: 'personal',
    balance: 284750.5,
    subtitle: 'Everyday spending',
    icon: 'wallet',
    tone: 'blue',
    interest: 342.18,
  },
  {
    id: 'pocket-group',
    name: 'Team Lunch',
    type: 'group',
    balance: 65000,
    subtitle: '5 members',
    icon: 'group',
    tone: 'green',
    members: 5,
  },
  {
    id: 'pocket-business',
    name: 'Adeola Studios',
    type: 'business',
    balance: 412300,
    subtitle: 'Business Pocket',
    icon: 'store',
    tone: 'violet',
  },
  {
    id: 'pocket-savings',
    name: 'Rent 2027',
    type: 'savings',
    balance: 180000,
    subtitle: 'Savings goal',
    icon: 'savings',
    tone: 'amber',
    goal: 500000,
  },
];

export const cards: Card[] = [
  {
    id: 'card-virtual',
    name: 'Pocket Virtual Card',
    type: 'virtual',
    number: '5399  ••••  ••••  4821',
    last4: '4821',
    expiry: '09/29',
    holder: 'ADEOLA JOHNSON',
    network: 'VERVE',
    balance: 84250.5,
    frozen: false,
    tone: 'blue',
  },
  {
    id: 'card-physical',
    name: 'Pocket Physical Card',
    type: 'physical',
    number: '5061  ••••  ••••  9074',
    last4: '9074',
    expiry: '03/28',
    holder: 'ADEOLA JOHNSON',
    network: 'MASTERCARD',
    balance: 34200,
    frozen: false,
    tone: 'dark',
  },
];

export const recipients: Recipient[] = [
  { id: 'rec-1', name: 'Tunde Adeyemi', handle: '@tunde', initials: 'TA', tone: 'blue' },
  { id: 'rec-2', name: 'Kemi Balogun', handle: '@kemi', initials: 'KB', tone: 'pink' },
  { id: 'rec-3', name: 'Chidi Okonkwo', handle: '@chidi', initials: 'CO', tone: 'green' },
  { id: 'rec-4', name: 'Zainab Musa', handle: '@zainab', initials: 'ZM', tone: 'violet' },
  { id: 'rec-5', name: 'Femi Okafor', handle: '@femi', initials: 'FO', tone: 'amber' },
];

export const notifications: Notification[] = [
  {
    id: 'note-1',
    title: 'Payment received',
    body: 'You received ₦45,000.00 from Tunde Adeyemi.',
    time: '2:15 PM',
    icon: 'moneyIn',
    tone: 'green',
    unread: true,
  },
  {
    id: 'note-2',
    title: 'Card transaction',
    body: 'Your virtual card was used at Shoprite Ikeja for ₦18,450.00.',
    time: '11:24 AM',
    icon: 'cards',
    tone: 'violet',
    unread: true,
  },
  {
    id: 'note-3',
    title: 'Interest credited',
    body: 'You earned ₦342.18 interest on your Personal Pocket.',
    time: 'Yesterday',
    icon: 'trendUp',
    tone: 'blue',
    unread: false,
  },
  {
    id: 'note-4',
    title: 'Bill reminder',
    body: 'Your DStv Compact subscription renews in 3 days.',
    time: 'Yesterday',
    icon: 'tv',
    tone: 'cyan',
    unread: false,
  },
];

export function findTransaction(id: string | string[] | undefined) {
  const value = Array.isArray(id) ? id[0] : id;
  return transactions.find((transaction) => transaction.id === value);
}

export const spendByDay = [
  { day: 'M', amount: 12400 },
  { day: 'T', amount: 8200 },
  { day: 'W', amount: 21500 },
  { day: 'T', amount: 6800 },
  { day: 'F', amount: 18900 },
  { day: 'S', amount: 34200 },
  { day: 'S', amount: 9600 },
];

export const monthlyBudget = {
  spent: 142800,
  budget: 250000,
};

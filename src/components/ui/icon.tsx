import { SymbolView } from 'expo-symbols';
import type { SFSymbol } from 'expo-symbols';
import type { AndroidSymbol } from 'expo-symbols';
import type { StyleProp, ViewStyle } from 'react-native';

type IconSpec = {
  ios: string;
  android: string;
};

const ICONS = {
  home: { ios: 'house.fill', android: 'home' },
  homeOutline: { ios: 'house', android: 'home' },
  cards: { ios: 'creditcard.fill', android: 'credit_card' },
  cardOutline: { ios: 'creditcard', android: 'credit_card' },
  bills: { ios: 'doc.text.fill', android: 'receipt_long' },
  pockets: { ios: 'wallet.pass.fill', android: 'account_balance_wallet' },
  wallet: { ios: 'wallet.pass.fill', android: 'wallet' },
  profile: { ios: 'person.fill', android: 'person' },
  profileOutline: { ios: 'person', android: 'person' },
  send: { ios: 'paperplane.fill', android: 'send' },
  receive: { ios: 'arrow.down.left', android: 'south_west' },
  transfer: { ios: 'arrow.left.arrow.right', android: 'swap_horiz' },
  qr: { ios: 'qrcode', android: 'qr_code_2' },
  scan: { ios: 'qrcode.viewfinder', android: 'qr_code_scanner' },
  bell: { ios: 'bell.fill', android: 'notifications' },
  eye: { ios: 'eye.fill', android: 'visibility' },
  eyeOff: { ios: 'eye.slash.fill', android: 'visibility_off' },
  plus: { ios: 'plus', android: 'add' },
  chevronRight: { ios: 'chevron.right', android: 'chevron_right' },
  chevronLeft: { ios: 'chevron.left', android: 'arrow_back' },
  chevronDown: { ios: 'chevron.down', android: 'keyboard_arrow_down' },
  close: { ios: 'xmark', android: 'close' },
  search: { ios: 'magnifyingglass', android: 'search' },
  more: { ios: 'ellipsis', android: 'more_horiz' },
  bolt: { ios: 'bolt.fill', android: 'bolt' },
  wifi: { ios: 'wifi', android: 'wifi' },
  electricity: { ios: 'bolt.fill', android: 'electric_bolt' },
  tv: { ios: 'tv.fill', android: 'tv' },
  phone: { ios: 'iphone', android: 'phone_iphone' },
  phoneCall: { ios: 'phone.fill', android: 'phone' },
  globe: { ios: 'globe', android: 'language' },
  school: { ios: 'graduationcap.fill', android: 'school' },
  betting: { ios: 'sportscourt.fill', android: 'sports_soccer' },
  flight: { ios: 'airplane', android: 'flight' },
  shield: { ios: 'shield.fill', android: 'shield' },
  settings: { ios: 'gearshape.fill', android: 'settings' },
  help: { ios: 'questionmark.circle', android: 'help' },
  logout: { ios: 'rectangle.portrait.and.arrow.right', android: 'logout' },
  lock: { ios: 'lock.fill', android: 'lock' },
  fingerprint: { ios: 'touchid', android: 'fingerprint' },
  check: { ios: 'checkmark', android: 'check' },
  checkCircle: { ios: 'checkmark.circle.fill', android: 'check_circle' },
  trendUp: { ios: 'chart.line.uptrend.xyaxis', android: 'trending_up' },
  savings: { ios: 'banknote.fill', android: 'savings' },
  group: { ios: 'person.2.fill', android: 'group' },
  store: { ios: 'storefront.fill', android: 'storefront' },
  business: { ios: 'briefcase.fill', android: 'business_center' },
  copy: { ios: 'doc.on.doc', android: 'content_copy' },
  share: { ios: 'square.and.arrow.up', android: 'share' },
  filter: { ios: 'line.3.horizontal.decrease', android: 'filter_list' },
  calendar: { ios: 'calendar', android: 'calendar_today' },
  gift: { ios: 'gift.fill', android: 'card_giftcard' },
  atm: { ios: 'banknote', android: 'local_atm' },
  bank: { ios: 'building.columns.fill', android: 'account_balance' },
  exchange: { ios: 'arrow.left.arrow.right', android: 'currency_exchange' },
  support: { ios: 'headphones', android: 'support_agent' },
  document: { ios: 'doc.text', android: 'description' },
  info: { ios: 'info.circle', android: 'info' },
  star: { ios: 'star.fill', android: 'star' },
  verified: { ios: 'checkmark.seal.fill', android: 'verified' },
  arrowRight: { ios: 'arrow.right', android: 'arrow_forward' },
  arrowUpRight: { ios: 'arrow.up.right', android: 'north_east' },
  arrowDownLeft: { ios: 'arrow.down.left', android: 'south_west' },
  history: { ios: 'clock.arrow.circlepath', android: 'history' },
  clock: { ios: 'clock.fill', android: 'schedule' },
  sparkle: { ios: 'sparkles', android: 'auto_awesome' },
  flame: { ios: 'flame.fill', android: 'local_fire_department' },
  food: { ios: 'fork.knife', android: 'restaurant' },
  movie: { ios: 'film.fill', android: 'movie' },
  car: { ios: 'car.fill', android: 'directions_car' },
  bag: { ios: 'bag.fill', android: 'shopping_bag' },
  health: { ios: 'heart.text.square.fill', android: 'health_and_safety' },
  water: { ios: 'drop.fill', android: 'water_drop' },
  bulb: { ios: 'lightbulb.fill', android: 'lightbulb' },
  trash: { ios: 'trash', android: 'delete' },
  edit: { ios: 'pencil', android: 'edit' },
  camera: { ios: 'camera.fill', android: 'photo_camera' },
  download: { ios: 'square.and.arrow.down', android: 'download' },
  upload: { ios: 'square.and.arrow.up', android: 'upload' },
  payment: { ios: 'creditcard', android: 'payments' },
  contactless: { ios: 'wave.3.right', android: 'contactless' },
  mail: { ios: 'envelope.fill', android: 'email' },
  badge: { ios: 'rosette', android: 'badge' },
  crown: { ios: 'crown.fill', android: 'workspace_premium' },
  tag: { ios: 'tag.fill', android: 'local_offer' },
  percent: { ios: 'percent', android: 'percent' },
  freeze: { ios: 'snowflake', android: 'ac_unit' },
  power: { ios: 'power', android: 'power_settings_new' },
  receipt: { ios: 'doc.plaintext.fill', android: 'receipt' },
  event: { ios: 'calendar.badge.clock', android: 'event' },
  addCard: { ios: 'creditcard.and.123', android: 'add_card' },
  users: { ios: 'person.3.fill', android: 'group' },
  addPerson: { ios: 'person.badge.plus', android: 'person_add' },
  grid: { ios: 'square.grid.2x2.fill', android: 'apps' },
  list: { ios: 'list.bullet', android: 'list' },
  location: { ios: 'location.fill', android: 'location_on' },
  helpCenter: { ios: 'questionmark.circle.fill', android: 'help_center' },
  privacy: { ios: 'hand.raised.fill', android: 'privacy_tip' },
  manage: { ios: 'person.crop.circle', android: 'manage_accounts' },
  insight: { ios: 'chart.bar.fill', android: 'insights' },
  moneyIn: { ios: 'arrow.down.circle.fill', android: 'call_received' },
  moneyOut: { ios: 'arrow.up.circle.fill', android: 'call_made' },
  sync: { ios: 'arrow.triangle.2.circlepath', android: 'sync_alt' },
} satisfies Record<string, IconSpec>;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
};

export function Icon({ name, size = 22, color, style }: IconProps) {
  const spec = ICONS[name];

  return (
    <SymbolView
      name={{
        ios: spec.ios as SFSymbol,
        android: spec.android as AndroidSymbol,
        web: spec.android as AndroidSymbol,
      }}
      size={size}
      tintColor={color}
      style={style}
    />
  );
}

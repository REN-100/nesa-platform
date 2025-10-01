import { Farmer, Alert, Buyer, WeatherForecast } from '../types';

export const farmers: Farmer[] = [
  { id: '1', name: 'Juma Mwangi', location: 'Kibwezi', phone: '+254712345678', image: 'https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326708927_33371559.webp', landSize: 2.5, crops: ['Maembe', 'Mahindi'], cooperative: 'Kibwezi Farmers', alerts: 2, riskLevel: 'high', lastActive: '2 saa zilizopita' },
  { id: '2', name: 'Amina Hassan', location: 'Kathonzweni', phone: '+254723456789', image: 'https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326715416_d8524c35.webp', landSize: 4.0, crops: ['Dengu', 'Maembe'], cooperative: 'Kathonzweni United', alerts: 0, riskLevel: 'low', lastActive: '5 dakika zilizopita' },
  { id: '3', name: 'Peter Mutua', location: 'Wote', phone: '+254734567890', image: 'https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326711018_4fb78c5e.webp', landSize: 3.2, crops: ['Mahindi', 'Kunde'], cooperative: 'Wote Collective', alerts: 1, riskLevel: 'medium', lastActive: '1 saa iliyopita' },
  { id: '4', name: 'Grace Nduku', location: 'Makindu', phone: '+254745678901', image: 'https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326717185_3fed7715.webp', landSize: 1.8, crops: ['Maembe'], cooperative: 'Makindu Women', alerts: 0, riskLevel: 'low', lastActive: '3 saa zilizopita' },
  { id: '5', name: 'David Kioko', location: 'Kibwezi', phone: '+254756789012', image: 'https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326712848_092a4e97.webp', landSize: 5.5, crops: ['Dengu', 'Mahindi', 'Maembe'], cooperative: 'Kibwezi Farmers', alerts: 2, riskLevel: 'high', lastActive: '30 dakika zilizopita' },
  { id: '6', name: 'Mary Wambua', location: 'Kathonzweni', phone: '+254767890123', image: 'https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326718924_4b3ee7c8.webp', landSize: 2.0, crops: ['Kunde', 'Mahindi'], cooperative: 'Kathonzweni United', alerts: 1, riskLevel: 'medium', lastActive: '1 saa iliyopita' },
  { id: '7', name: 'John Musyoka', location: 'Wote', phone: '+254778901234', image: 'https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326714626_4c8b4e71.webp', landSize: 3.8, crops: ['Maembe', 'Dengu'], cooperative: 'Wote Collective', alerts: 0, riskLevel: 'low', lastActive: '4 saa zilizopita' },
  { id: '8', name: 'Susan Muthoni', location: 'Makindu', phone: '+254789012345', image: 'https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326720865_88062ca5.webp', landSize: 2.7, crops: ['Mahindi', 'Kunde'], cooperative: 'Makindu Women', alerts: 1, riskLevel: 'medium', lastActive: '2 saa zilizopita' }
];

export const alerts: Alert[] = [
  { id: '1', type: 'weather', severity: 'urgent', title: 'Mvua Kubwa Inakuja', message: 'Mvua kubwa inatarajiwa katika siku 2 ijayo. Vuna sasa ili kuokoa mazao.', location: 'Kibwezi', timestamp: 'Sasa hivi', affected: 342 },
  { id: '2', type: 'pest', severity: 'warning', title: 'Fall Armyworm Imegunduliwa', message: 'Wadudu wa Fall Armyworm wamegunduliwa. Tumia dawa za kilimo haraka.', location: 'Kathonzweni', timestamp: 'Saa 1 iliyopita', affected: 156 },
  { id: '3', type: 'market', severity: 'info', title: 'Bei ya Maembe Imepanda', message: 'FreshMart sasa inalipa KSh 55/kg kwa maembe ya daraja A. Wasiliana sasa!', location: 'Makueni County', timestamp: 'Saa 2 zilizopita', affected: 891 }
];

export const buyers: Buyer[] = [
  { id: '1', name: 'FreshMart Kenya', crop: 'Maembe', price: 55, grade: 'Daraja A', quantity: '5 Tani', location: 'Nairobi', pickup: 'Leo - Kesho', contact: '+254700111222' },
  { id: '2', name: 'County Coop Market', crop: 'Mahindi', price: 42, grade: 'Daraja B', quantity: '10 Tani', location: 'Wote', pickup: 'Wiki hii', contact: '+254700222333' },
  { id: '3', name: 'Export Partners Ltd', crop: 'Dengu', price: 78, grade: 'Daraja A', quantity: '3 Tani', location: 'Mombasa', pickup: 'Siku 3', contact: '+254700333444' }
];

export const weather: WeatherForecast[] = [
  { day: 'Leo', temp: '28°C', condition: 'Jua Kali', rainfall: '0mm', icon: '☀️' },
  { day: 'Kesho', temp: '26°C', condition: 'Mawingu', rainfall: '2mm', icon: '⛅' },
  { day: 'Jumatatu', temp: '24°C', condition: 'Mvua', rainfall: '45mm', icon: '🌧️' }
];

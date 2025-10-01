export interface Farmer {
  id: string;
  name: string;
  location: string;
  phone: string;
  image: string;
  landSize: number;
  crops: string[];
  cooperative: string;
  alerts: number;
  riskLevel: 'low' | 'medium' | 'high';
  lastActive: string;
}

export interface Alert {
  id: string;
  type: 'weather' | 'pest' | 'market' | 'training';
  severity: 'info' | 'warning' | 'urgent';
  title: string;
  message: string;
  location: string;
  timestamp: string;
  affected: number;
}

export interface Buyer {
  id: string;
  name: string;
  crop: string;
  price: number;
  grade: string;
  quantity: string;
  location: string;
  pickup: string;
  contact: string;
}

export interface WeatherForecast {
  day: string;
  temp: string;
  condition: string;
  rainfall: string;
  icon: string;
}

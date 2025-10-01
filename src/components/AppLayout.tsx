import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import StatCard from './StatCard';
import WeatherWidget from './WeatherWidget';
import MapView from './MapView';
import AlertCard from './AlertCard';
import FarmerCard from './FarmerCard';
import BuyerCard from './BuyerCard';
import FarmerModal from './FarmerModal';
import { farmers, alerts, buyers, weather } from '../data/mockData';
import { Farmer } from '../types';

export default function AppLayout() {
  const [selectedFarmer, setSelectedFarmer] = useState<Farmer | null>(null);
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterRisk, setFilterRisk] = useState('all');

  const filteredFarmers = farmers.filter(f => {
    if (filterLocation !== 'all' && f.location !== filterLocation) return false;
    if (filterRisk !== 'all' && f.riskLevel !== filterRisk) return false;
    return true;
  });

  const handleClaimBuyer = (buyerName: string) => {
    alert(`Umefanikiwa kudai fursa kutoka ${buyerName}! Tutawasiliana nawe hivi karibuni.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      {/* Dashboard Section */}
      <section id="dashboard" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard ya Jumla</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard icon="👨‍🌾" value="2,847" label="Wakulima Waliojisajili" color="bg-[#2D5016]" />
          <StatCard icon="⚠️" value="27" label="Tahadhari za Leo" color="bg-[#D4735E]" />
          <StatCard icon="💰" value="KSh 1.2M" label="Mauzo Yaliyoboreshwa" color="bg-[#F4A300]" />
          <StatCard icon="🌧️" value="45mm" label="Mvua Inayotarajiwa" color="bg-[#4A90E2]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MapView />
          </div>
          <div>
            <WeatherWidget forecasts={weather} />
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section id="alerts" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Tahadhari za Sasa</h2>
            <button className="bg-[#F4A300] hover:bg-[#d89000] text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Unda Tahadhari Mpya
            </button>
          </div>
          <div className="space-y-4">
            {alerts.map(alert => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      </section>

      {/* Farmers Section */}
      <section id="farmers" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Wakulima Wetu</h2>
        
        <div className="flex gap-4 mb-8">
          <select 
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
          >
            <option value="all">Maeneo Yote</option>
            <option value="Kibwezi">Kibwezi</option>
            <option value="Kathonzweni">Kathonzweni</option>
            <option value="Wote">Wote</option>
            <option value="Makindu">Makindu</option>
          </select>

          <select 
            value={filterRisk}
            onChange={(e) => setFilterRisk(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-transparent"
          >
            <option value="all">Hatari Zote</option>
            <option value="low">Salama</option>
            <option value="medium">Tahadhari</option>
            <option value="high">Hatari</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFarmers.map(farmer => (
            <FarmerCard key={farmer.id} farmer={farmer} onClick={() => setSelectedFarmer(farmer)} />
          ))}
        </div>
      </section>

      {/* Market Section */}
      <section id="market" className="bg-gradient-to-br from-green-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Soko la Leo</h2>
          <p className="text-gray-600 mb-8">Fursa za mauzo kutoka kwa wanunuzi walioidhinishwa</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyers.map(buyer => (
              <BuyerCard key={buyer.id} buyer={buyer} onClaim={() => handleClaimBuyer(buyer.name)} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FarmerModal farmer={selectedFarmer} onClose={() => setSelectedFarmer(null)} />
    </div>
  );
}

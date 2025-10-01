import { Farmer } from '../types';

interface FarmerCardProps {
  farmer: Farmer;
  onClick: () => void;
}

export default function FarmerCard({ farmer, onClick }: FarmerCardProps) {
  const riskColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border border-gray-100"
    >
      <img src={farmer.image} alt={farmer.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900">{farmer.name}</h3>
          {farmer.alerts > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{farmer.alerts}</span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-1">📍 {farmer.location}</p>
        <p className="text-sm text-gray-600 mb-2">🌾 {farmer.landSize} ekari</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {farmer.crops.map((crop, idx) => (
            <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">{crop}</span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-xs px-2 py-1 rounded ${riskColors[farmer.riskLevel]}`}>
            {farmer.riskLevel === 'low' ? 'Salama' : farmer.riskLevel === 'medium' ? 'Tahadhari' : 'Hatari'}
          </span>
          <span className="text-xs text-gray-500">{farmer.lastActive}</span>
        </div>
      </div>
    </div>
  );
}

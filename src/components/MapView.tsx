import { useState } from 'react';

export default function MapView() {
  const [activeLayer, setActiveLayer] = useState('alerts');

  const layers = [
    { id: 'alerts', name: 'Tahadhari', icon: '⚠️' },
    { id: 'weather', name: 'Hewa', icon: '🌦️' },
    { id: 'market', name: 'Soko', icon: '💰' },
    { id: 'cooperatives', name: 'Vyama', icon: '👥' }
  ];

  const locations = [
    { name: 'Kibwezi', x: 35, y: 45, alerts: 12, type: 'high' },
    { name: 'Kathonzweni', x: 55, y: 35, alerts: 5, type: 'medium' },
    { name: 'Wote', x: 45, y: 55, alerts: 8, type: 'medium' },
    { name: 'Makindu', x: 25, y: 25, alerts: 2, type: 'low' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Ramani ya Makueni</h3>
        <div className="flex gap-2">
          {layers.map(layer => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                activeLayer === layer.id 
                  ? 'bg-[#2D5016] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {layer.icon} {layer.name}
            </button>
          ))}
        </div>
      </div>
      
      <div className="relative bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg h-96 border-2 border-gray-200">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${
              loc.type === 'high' ? 'bg-red-500' : loc.type === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
            }`}>
              {loc.alerts}
            </div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {loc.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

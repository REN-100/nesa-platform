import { Farmer } from '../types';

interface FarmerModalProps {
  farmer: Farmer | null;
  onClose: () => void;
}

export default function FarmerModal({ farmer, onClose }: FarmerModalProps) {
  if (!farmer) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Maelezo ya Mkulima</h2>
            <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-700">&times;</button>
          </div>

          <div className="flex gap-6 mb-6">
            <img src={farmer.image} alt={farmer.name} className="w-32 h-32 rounded-lg object-cover" />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{farmer.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>📍 Eneo: {farmer.location}</p>
                <p>📞 Simu: {farmer.phone}</p>
                <p>🌾 Ukubwa wa Shamba: {farmer.landSize} ekari</p>
                <p>👥 Chama: {farmer.cooperative}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Mazao Yanayolimwa:</h4>
            <div className="flex flex-wrap gap-2">
              {farmer.crops.map((crop, idx) => (
                <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">{crop}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Tahadhari Zinazongoja</p>
              <p className="text-2xl font-bold text-blue-600">{farmer.alerts}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Mwisho Kuonekana</p>
              <p className="text-lg font-bold text-purple-600">{farmer.lastActive}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-[#F4A300] hover:bg-[#d89000] text-white font-bold py-3 rounded-lg transition-colors">
              Tuma Ujumbe
            </button>
            <button className="flex-1 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-bold py-3 rounded-lg transition-colors">
              Piga Simu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

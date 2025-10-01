import { Buyer } from '../types';

interface BuyerCardProps {
  buyer: Buyer;
  onClaim: () => void;
}

export default function BuyerCard({ buyer, onClaim }: BuyerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{buyer.name}</h3>
          <p className="text-sm text-gray-600">{buyer.location}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-[#2D5016]">KSh {buyer.price}</p>
          <p className="text-xs text-gray-500">kwa kilo</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Mazao:</span>
          <span className="font-semibold text-gray-900">{buyer.crop}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Daraja:</span>
          <span className="font-semibold text-gray-900">{buyer.grade}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Kiasi:</span>
          <span className="font-semibold text-gray-900">{buyer.quantity}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Kuchukua:</span>
          <span className="font-semibold text-gray-900">{buyer.pickup}</span>
        </div>
      </div>

      <button 
        onClick={onClaim}
        className="w-full bg-[#F4A300] hover:bg-[#d89000] text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Dai Fursa Hii
      </button>
    </div>
  );
}

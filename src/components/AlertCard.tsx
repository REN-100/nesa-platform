import { Alert } from '../types';

interface AlertCardProps {
  alert: Alert;
}

export default function AlertCard({ alert }: AlertCardProps) {
  const typeIcons = {
    weather: '🌦️',
    pest: '🐛',
    market: '💰',
    training: '📚'
  };

  const severityColors = {
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-yellow-50 border-yellow-200',
    urgent: 'bg-red-50 border-red-200'
  };

  const severityBadge = {
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    urgent: 'bg-red-500'
  };

  return (
    <div className={`rounded-lg border-2 p-4 ${severityColors[alert.severity]}`}>
      <div className="flex items-start gap-3">
        <span className="text-3xl">{typeIcons[alert.type]}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900">{alert.title}</h3>
            <span className={`text-xs text-white px-2 py-0.5 rounded ${severityBadge[alert.severity]}`}>
              {alert.severity === 'urgent' ? 'HARAKA' : alert.severity === 'warning' ? 'ONYO' : 'TAARIFA'}
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-2">{alert.message}</p>
          <div className="flex justify-between text-xs text-gray-600">
            <span>📍 {alert.location}</span>
            <span>👥 {alert.affected} wakulima</span>
            <span>🕐 {alert.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

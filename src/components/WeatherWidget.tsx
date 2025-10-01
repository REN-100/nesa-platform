import { WeatherForecast } from '../types';

interface WeatherWidgetProps {
  forecasts: WeatherForecast[];
}

export default function WeatherWidget({ forecasts }: WeatherWidgetProps) {
  return (
    <div className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] rounded-lg p-6 text-white shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        🌤️ Hali ya Hewa
      </h3>
      <div className="space-y-3">
        {forecasts.map((forecast, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white/10 rounded-lg p-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{forecast.icon}</span>
              <div>
                <p className="font-semibold">{forecast.day}</p>
                <p className="text-sm opacity-90">{forecast.condition}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">{forecast.temp}</p>
              <p className="text-sm opacity-90">💧 {forecast.rainfall}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

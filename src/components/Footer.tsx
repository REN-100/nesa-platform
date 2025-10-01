export default function Footer() {
  return (
    <footer className="bg-[#2D5016] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌾</span>
              <h3 className="text-xl font-bold">Nesa</h3>
            </div>
            <p className="text-sm text-green-200">
              Jukwaa la akili bandia linalowezesha wakulima wa Makueni kupata taarifa sahihi na kufanya maamuzi bora.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Viungo Muhimu</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><a href="#" className="hover:text-[#F4A300] transition-colors">Kuhusu Nesa</a></li>
              <li><a href="#" className="hover:text-[#F4A300] transition-colors">Jinsi Inavyofanya Kazi</a></li>
              <li><a href="#" className="hover:text-[#F4A300] transition-colors">Mafunzo</a></li>
              <li><a href="#" className="hover:text-[#F4A300] transition-colors">Maswali Yanayoulizwa Sana</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Huduma</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><a href="#" className="hover:text-[#F4A300] transition-colors">Utabiri wa Hewa</a></li>
              <li><a href="#" className="hover:text-[#F4A300] transition-colors">Taarifa za Soko</a></li>
              <li><a href="#" className="hover:text-[#F4A300] transition-colors">Tahadhari za Wadudu</a></li>
              <li><a href="#" className="hover:text-[#F4A300] transition-colors">Ushauri wa AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Wasiliana Nasi</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li>📞 +254 700 123 456</li>
              <li>📧 info@nesa.co.ke</li>
              <li>📍 Wote, Makueni County</li>
              <li className="flex gap-3 mt-4">
                <a href="#" className="hover:text-[#F4A300]">📘</a>
                <a href="#" className="hover:text-[#F4A300]">🐦</a>
                <a href="#" className="hover:text-[#F4A300]">📷</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-6 text-center text-sm text-green-200">
          <p>&copy; 2025 Nesa Platform. Haki zote zimehifadhiwa. Kilimo cha Busara, Mavuno ya Uhakika.</p>
        </div>
      </div>
    </footer>
  );
}

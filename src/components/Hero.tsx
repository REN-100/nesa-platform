export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68dd31b7cb6d2c0b77285bc8_1759326708121_eb80f33e.webp)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Kilimo cha Busara,<br />Mavuno ya Uhakika
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Jiunga na wakulima 2,847 wanaotumia akili bandia kupata taarifa za hali ya hewa, 
            bei za soko, na tahadhari za wadudu kwa simu yako.
          </p>
          
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('dashboard')}
              className="bg-[#F4A300] hover:bg-[#d89000] text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Angalia Dashboard
            </button>
            <button 
              onClick={() => scrollToSection('market')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold py-3 px-8 rounded-lg border-2 border-white transition-colors"
            >
              Soko la Leo
            </button>
          </div>

          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-bold text-[#F4A300]">2,847</div>
              <div className="text-sm text-gray-300">Wakulima Waliolindwa</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F4A300]">KSh 1.2M</div>
              <div className="text-sm text-gray-300">Mauzo Yaliyoboreshwa</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#F4A300]">98%</div>
              <div className="text-sm text-gray-300">Utabiri Sahihi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#2D5016] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🌾</div>
            <div>
              <h1 className="text-2xl font-bold">Nesa</h1>
              <p className="text-xs text-green-200">Kilimo cha Busara</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('dashboard')} className="hover:text-[#F4A300] transition-colors">Dashboard</button>
            <button onClick={() => scrollToSection('alerts')} className="hover:text-[#F4A300] transition-colors">Tahadhari</button>
            <button onClick={() => scrollToSection('farmers')} className="hover:text-[#F4A300] transition-colors">Wakulima</button>
            <button onClick={() => scrollToSection('market')} className="hover:text-[#F4A300] transition-colors">Soko</button>
            <button className="bg-[#F4A300] hover:bg-[#d89000] px-4 py-2 rounded-lg font-semibold transition-colors">
              Ingia
            </button>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('dashboard')} className="text-left py-2 hover:text-[#F4A300]">Dashboard</button>
            <button onClick={() => scrollToSection('alerts')} className="text-left py-2 hover:text-[#F4A300]">Tahadhari</button>
            <button onClick={() => scrollToSection('farmers')} className="text-left py-2 hover:text-[#F4A300]">Wakulima</button>
            <button onClick={() => scrollToSection('market')} className="text-left py-2 hover:text-[#F4A300]">Soko</button>
          </nav>
        )}
      </div>
    </header>
  );
}

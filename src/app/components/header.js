'use client'
import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
    <header className="bg-blue-900 font-Arial">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm text-white">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200">Students</a>
            <a href="#" className="hover:text-blue-200">Faculty & Staff</a>
            <a href="#" className="hover:text-blue-200">Alumni</a>
            <a href="#" className="hover:text-blue-200">Parents</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200">Directory</a>
            <a href="#" className="hover:text-blue-200">Maps</a>
            <a href="#" className="hover:text-blue-200">Give</a>
          </div>
        </div>
      </div>
    </header>
      <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center text-3xl">
            <div className="font-bold text-blue-900 mr-2">UC</div>
            <div className="font-bold text-yellow-500">EASTVALE</div>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Academics</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Admissions</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Research</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Campus Life</a>
            <a href="#" className="text-gray-700 hover:text-blue-900 font-medium">Athletics</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <Search size={20} />
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex items-center mb-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full p-2 border rounded-l"
              />
              <button className="bg-blue-900 text-white p-2 rounded-r">
                <Search size={20} />
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-blue-900 py-1">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 py-1">Academics</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 py-1">Admissions</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 py-1">Research</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 py-1">Campus Life</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 py-1">Athletics</a>
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  );
}

export default Header;
import { Calendar, ChevronRight, Users, BookOpen, Search, Menu, X } from 'lucide-react';

const QuickLinks = () => {
  return (
  <div className="bg-blue-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <Users size={40} className="mb-2" />
          <h3 className="text-xl font-semibold mb-2">Apply Now</h3>
          <p className="mb-4">Start your journey at UC Eastvale</p>
          <a href="#" className="flex items-center text-yellow-300 hover:text-yellow-100">
            Application Process <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <Calendar size={40} className="mb-2" />
          <h3 className="text-xl font-semibold mb-2">Visit Campus</h3>
          <p className="mb-4">Experience our vibrant community firsthand</p>
          <a href="#" className="flex items-center text-yellow-300 hover:text-yellow-100">
            Schedule a Tour <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <BookOpen size={40} className="mb-2" />
          <h3 className="text-xl font-semibold mb-2">Explore Programs</h3>
          <p className="mb-4">Discover our academic offerings</p>
          <a href="#" className="flex items-center text-yellow-300 hover:text-yellow-100">
            View Degrees <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </div>
  </div>

  );
}

export default QuickLinks;
import { events } from "@data/events";
import { ChevronRight } from 'lucide-react';

const SideBar = () => {
  return (
    <div className="space-y-8">
      {/* Events */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-900 mb-4">
          Upcoming Events
        </h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
              <div className="flex">
                <div className="bg-blue-100 text-blue-900 px-1 sm:px-3 py-2 rounded text-center min-w-18">
                  <div className="font-bold">{event.date}</div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-blue-900">{event.title}</h4>
                  <div className="text-sm text-gray-600">{event.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="mt-4 text-blue-600 hover:text-blue-800 flex items-center text-sm"
        >
          View All Events <ChevronRight size={16} />
        </a>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Resources</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Academic Calendar
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Library
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Campus Safety
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Financial Aid
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Career Services
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              IT Help Desk
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

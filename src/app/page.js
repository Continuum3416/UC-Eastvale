"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

// Components
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import QuickLinks from "./components/quicklinks";
import ProgramSlider from "./components/programs";
import AlumniGrid from "./components/alumni";

// data
import { slides } from "./data/slides";
import { newsItems } from "./data/news";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                {/* Window */}
                <div className="max-w-lg text-white p-5 rounded bg-black/70">
                  <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                  <p className="text-[19px] mb-6">{slide.description}</p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-6 rounded-md">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 right-0 left-0 flex justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-16 mx-1 rounded-full ${
                index === currentSlide
                  ? "bg-yellow-500"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <QuickLinks />

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative">
            {/* Main Sections */}
            <div className="lg:col-span-2">
              <section>
                <div className="flex justify-between items-center mt-12 mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">
                    News & Announcements
                  </h2>
                  <a className="text-blue-600 hover:text-blue-800 flex items-center">
                    All News <ChevronRight size={16} />
                  </a>
                </div>

                <div className="space-y-6">
                  {newsItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <div className="text-sm text-gray-500 mb-1">
                        {item.date}
                      </div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-3">{item.excerpt}</p>
                      <a className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
                        Read More <ChevronRight size={16} />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex justify-between items-center mt-12 mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">
                    UC Eastvale - A World Leader in Research, Art, Business, and
                    Engineering
                  </h2>
                </div>

                <div className="text-gray-700 space-y-6">
                  <p>
                    <strong>At UC Eastvale</strong>, we empower students to
                    shape their future with{" "}
                    <span className="font-semibold">purpose</span> and{" "}
                    <span className="font-semibold">passion</span>. With over{" "}
                    <strong>5,000+ degree programs</strong> spanning a wide
                    range of disciplines—from the <em>arts and humanities</em>{" "}
                    to <em>cutting-edge sciences and technology</em>—we offer a
                    learning experience designed for a rapidly evolving world.
                    Whether you&apos;re pursuing an <strong>Undergraduate</strong>,{" "}
                    <strong>Master&apos;s</strong>, or <strong>PhD</strong> degree,
                    our flexible academic pathways are tailored to support your{" "}
                    <span className="italic">
                      personal and professional growth
                    </span>
                    .
                  </p>
                  <p>
                    The University is proud to be recognized as the #2
                    Engineering School in the nation, ranking just behind Mt.
                    San Antonio College. Our engineering program is renowned for
                    its cutting-edge research, hands-on learning opportunities,
                    and exceptional faculty who are leaders in their fields. But
                    our excellence doesn&rsquo;t stop there. We are also home to the
                    #1 Art School in the country, where creativity meets
                    innovation. Our art students consistently earn top awards,
                    exhibit internationally, and shape the future of design,
                    animation, and visual storytelling. In addition, we proudly
                    hold the title of the #1 Business School in the nation. Our
                    business program is known for producing industry-ready
                    graduates who go on to become influential leaders,
                    entrepreneurs, and changemakers in the global economy.
                  </p>
                  <p>
                    Education at UC Eastvale goes{" "}
                    <strong>beyond the classroom</strong>. You&rsquo;ll gain{" "}
                    <span className="font-semibold">hands-on experience</span>{" "}
                    through{" "}
                    <em>
                      research opportunities, internships, global study programs
                    </em>
                    , and <em>industry collaborations</em>. These immersive
                    experiences help you build real-world skills and a global
                    perspective, empowering you to thrive in your career and
                    lead with confidence.
                  </p>
                  <p>
                    Athletically, we lead the nation with the most Olympic
                    medals earned by our students and alumni, a testament to our
                    dedication to excellence both in academics and in sports.
                    Our world-class athletic facilities, elite coaching staff,
                    and a culture of determination and resilience have helped
                    shape Olympic champions across multiple disciplines.
                  </p>
                  <p>
                    Our vibrant campus is a hub of{" "}
                    <span className="font-semibold">innovation</span>,{" "}
                    <span className="font-semibold">diversity</span>, and{" "}
                    <span className="font-semibold">opportunity</span>, where
                    students from across the globe come together to collaborate,
                    create, and lead. With{" "}
                    <strong>state-of-the-art facilities</strong>,{" "}
                    <strong>world-renowned faculty</strong>, and a deep-rooted
                    commitment to <em>community and social impact</em>, we don&rsquo;t
                    just prepare students for jobs&mdash;we prepare them to{" "}
                    <span className="font-bold">make a difference</span>. UC
                    Eastvale: This is where your journey begins, and your future
                    takes flight.
                  </p>

                  <ProgramSlider />
                </div>
              </section>

              <section>
                <div className="flex justify-between items-center mt-12 mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">
                    Our Alumni
                  </h2>
                </div>
                <p className="text-gray-700 mb-12">
                  At our university, excellence doesn&rsquo;t end at graduation&mdash;it
                  begins there. Our alumni have gone on to lead nations,
                  revolutionize technology, transform the arts, and redefine the
                  frontiers of science. With a legacy of visionary thinkers,
                  influential leaders, and cultural icons, the impact of our
                  graduates resonates around the globe. Here, we don&rsquo;t just
                  educate; we empower individuals to shape the future. Join a
                  community where ambition is nurtured and greatness is not the
                  exception, but the expectation.
                </p>
                <AlumniGrid />
              </section>

              <section className="text-gray-700 space-y-3">
                <div className="flex justify-between items-center mt-12 mb-6">
                  <h2 className="text-2xl font-bold text-blue-900">
                    Housing & Residential Life
                  </h2>
                </div>
                <h3 className="font-bold text-base">A Place to Call Home</h3>
                <p>
                  Living on campus is more than just convenience&mdash;it&rsquo;s a vital
                  part of the university experience. Our housing communities are
                  designed to support student success, build lifelong
                  friendships, and create a strong sense of belonging. From
                  first-year residence halls to upperclassmen apartments, every
                  living space is crafted to feel welcoming, safe, and
                  inclusive.
                </p>
                <h3 className="font-bold text-base">Living Where You Learn</h3>
                <p>
                  Being close to class, libraries, and campus events makes it
                  easier to stay engaged and involved. Our residence halls
                  feature high-speed internet, study lounges, laundry
                  facilities, and community kitchens. Many also include
                  dedicated Residential Advisors and live-in faculty mentors who
                  provide academic and personal support, helping students thrive
                  both inside and outside the classroom.
                </p>
                <h3 className="font-bold text-base">
                  A Diverse & Vibrant Community
                </h3>
                <p>
                  With themed housing options, quiet floors, gender-inclusive
                  spaces, and international student communities, our residential
                  life celebrates diversity. Students are encouraged to take
                  part in hall councils, cultural nights, and wellness
                  initiatives that make each residence a true micro-community.
                </p>
                <h3 className="font-bold text-base">Off-Campus Support</h3>
                <p>
                  For those who choose to live off-campus, we offer
                  comprehensive housing resources including apartment listings,
                  neighborhood guides, and legal advising. Whether on campus or
                  nearby, our students find the right space to grow, connect,
                  and succeed.
                </p>
                <h3 className="font-bold text-base">
                  Safety, Comfort & Support
                </h3>
                <p>
                  Security is a top priority. All residence halls are equipped
                  with keycard access, on-site security, and 24/7 emergency
                  response systems. Professional staff are available around the
                  clock to assist with maintenance, health concerns, and
                  personal matters, ensuring peace of mind for students and
                  families alike.
                </p>
                <a className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
                  Read More <ChevronRight size={16} />
                </a>
              </section>
            </div>
            <div>
              <SideBar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

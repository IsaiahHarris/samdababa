import Image from "next/image";
import Carousel from "./components/Carousel";

const BOOKING_URL =
  "https://square.site/book/LAEWVRTRPXM5V/sam-daaa-barber-honolulu-hi";

const services = [
  {
    name: "Men's Haircut, Beard & Eyebrows",
    price: "$70",
    duration: "1 hour",
    description: "Haircut + beard clean/shape up + eyebrows with straight razor",
  },
  {
    name: "Men's Haircut & Eyebrows",
    price: "$60",
    duration: "45 min",
    description: "Haircut + eyebrows clean up with straight razor",
  },
  {
    name: "Kids Haircut (10 & under)",
    price: "$50",
    duration: "45 min",
    description: "Kids haircut for 10 years old and under",
  },
  {
    name: "Design (add-on)",
    price: "$5+",
    duration: "5 min",
    description: "Add-on design starting at $5 and up",
  },
];

const hours = [
  { day: "Sunday", time: "10:00 AM - 5:00 PM" },
  { day: "Monday", time: "10:00 AM - 6:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 6:00 PM" },
  { day: "Wednesday", time: "10:00 AM - 6:00 PM" },
  { day: "Thursday", time: "CLOSED" },
  { day: "Friday", time: "10:00 AM - 6:00 PM" },
  { day: "Saturday", time: "10:00 AM - 6:00 PM" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Sam Daaa Barber"
            width={120}
            height={60}
            className="invert brightness-200"
          />
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-bold px-6 py-2.5 rounded-full text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          priority
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
          <div className="logo-pulse mb-8">
            <Image
              src="/logo.png"
              alt="Sam Daaa Barber"
              width={400}
              height={300}
              className="invert brightness-200 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              priority
            />
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-4 leading-relaxed">
            Authentic, Precision Cuts
          </p>
          <p className="text-sm text-gray-500 mb-10 tracking-wider uppercase">
            Honolulu, HI
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow bg-white text-black font-bold px-10 py-4 rounded-full text-lg uppercase tracking-[0.2em] hover:bg-gray-100 transition-all hover:scale-105"
          >
            Book Now
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wider">
            About
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Aloha! My name is Sam, and I&apos;ve been barbering for 3 years.
            It&apos;s not just my job &mdash; it&apos;s my trade. This is the best
            feeling I get, knowing that I&apos;m providing quality service. So when
            you come in to see me, you&apos;re guaranteed authentic, precision cuts.
            As a barber, it&apos;s my job to help you look good and feel great!
          </p>
        </div>
      </section>

      {/* Work / Gallery Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wider text-center">
            My Work
          </h2>
          <Carousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wider text-center">
            Services
          </h2>
          <div className="grid gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
                <div className="flex items-center gap-6 mt-3 sm:mt-0">
                  <span className="text-gray-400 text-sm">{service.duration}</span>
                  <span className="text-2xl font-bold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-bold px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Hours */}
          <div>
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">
              Hours
            </h2>
            <div className="space-y-3">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between items-center py-2 border-b border-white/5"
                >
                  <span className="text-gray-400">{h.day}</span>
                  <span
                    className={
                      h.time === "CLOSED"
                        ? "text-red-400 font-semibold"
                        : "text-white"
                    }
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">
              Location
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              925 Hauoli Street, Apt B
              <br />
              Honolulu, HI 96826
            </p>
            <p className="text-gray-400 mb-2">
              <span className="text-gray-500">Phone:</span>{" "}
              <a href="tel:8087298748" className="text-white hover:underline">
                (808) 729-8748
              </a>
            </p>
            <p className="text-gray-400 mb-6">
              <span className="text-gray-500">Instagram:</span>{" "}
              <a
                href="https://www.instagram.com/sam.daaabarber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                @sam.daaabarber
              </a>
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-gray-200 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <Image
          src="/logo.png"
          alt="Sam Daaa Barber"
          width={80}
          height={40}
          className="invert brightness-200 mx-auto mb-4 opacity-50"
        />
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Sam Daaa Barber. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

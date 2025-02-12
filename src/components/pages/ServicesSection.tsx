"use client";
import Image from "next/image";
export default function Services() {
    return (
      <section 
        className="w-[1920px] h-[750px] max-w-7xl  mx-auto py-16 px-12 text-white rounded-lg relative bg-cover bg-center"
        style={{ backgroundImage: "url('/photo1.jpg')" }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold pl-32 pb-2 sm:pb-4 text-center sm:text-left">
          Services
        </h2>
        <button className="mt-2 sm:mt-0 border border-gray-400 rounded-full px-6 py-2 sm:py-2 text-sm sm:text-base bg-blue-500 text-white font-medium hover:bg-blue-600">
         Our services
        </button>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 bg-[#111] text-gray-300 text-base relative transition duration-300 hover:bg-blue-500 hover:text-white"
            >
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <button className="border border-gray-400 rounded-full px-6 py-3 text-sm bg-blue-500 text-white font-medium hover:bg-blue-600">
                Learn more →
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
                         <button className="mt-8 relative group">
                  <Image
                    src="/Btn.png"
                    alt="Send request"
                    width={200}
                    height={60}
                    className="transition-transform group-hover:scale-105"
                  />
                </button>
        </div>
      </section>
    );
  }
  
  const services = [
    { title: "Web development", description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum." },
    { title: "UI/UX Design", description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum." },
    { title: "Advertising", description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum." },
    { title: "CRM and ERP systems", description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum." },
    { title: "AI Integration", description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum." },
    { title: "Telegram bots", description: "Lorem ipsum dolor sit amet consectetur. Viverra est eget ut ipsum vulputate adipiscing condimentum." }
  ];

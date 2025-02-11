import Background from "@/components/ui/Background";
import Header from "@/components/pages/Header";
import Hero from "@/components/pages/Hero";
import Stats from "@/components/pages/Stats";
import CustomerPains from "@/components/pages/CustomerPains";
import Services from "@/components/pages/ServicesSection";


export default function Home() {
  return (
    <div>
      <div className=" bg-black text-white flex flex-col items-center relative overflow-hidden rounded-b-xl">
        <Background />
        <Header />
        <Hero />
        <Stats />
      </div>
      <div className="mt-10 w-full bg-white text-black">
        <CustomerPains />
      </div>
      <div className="mt-10 w-full bg-white text-black">
               <Services/>
      </div>
    </div>
  );
}

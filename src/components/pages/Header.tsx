import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
    return (
      <header className="w-full flex justify-between items-center p-10 max-w-6xl relative z-10">
        <h1 className="text-2xl font-bold mr-10">Ocean Script</h1>
        <nav className="hidden md:flex space-x-10 text-lg">
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Portfolio</a>
          <a href="#" className="hover:text-gray-300">Contacts</a>
        </nav>
        <div className="flex items-center space-x-4">
  <LanguageSwitcher />
  <button className="bg-blue-600 px-6 py-2 rounded-full text-lg ml-10">Leave a request</button>
</div>

      </header>
    );
  }
  
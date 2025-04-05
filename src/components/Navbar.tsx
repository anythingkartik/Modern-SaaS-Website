import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between">
        <Image src={logoImage} alt="Logo" className="h-12 w-12" />

        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
          <MenuIcon className="text-white" />
        </div>

        <nav className= "flex gap-6 items-center hidden lg:flex">
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
          <button className="bg-white py-2 px-4 rounded-lg">Get for free</button>
        </nav>
      </div>
    </div>
    </div>
  );
};

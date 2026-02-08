import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import logo from "@/assets/images/logo-rounded.png";
import "@/assets/styles/color.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#app-preview" className="font-bold text-navy-blue/90"> <p className="text-[16px]">Services</p> </a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#problem-solutions" className="font-bold text-navy-blue/90"> <p className="text-[16px]"> Products </p> </a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#features" className="nav-link font-bold text-navy-blue/90"> <p className="text-[16px]"> Ai Solutions </p> </a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#how-it-works" className="nav-link font-bold text-navy-blue/90"> <p className="text-[16px]"> About </p> </a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#technology" className="nav-link font-bold text-navy-blue/90"> <p className="text-[16px]"> Contact </p> </a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a href="#pricing" className="nav-link font-medium text-primary/70">
            Pricing
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem> */}
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm">
      <div className="w-[90%] mx-auto py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-9 h-9 rounded-full" />
          <div className="leading-tight">
            <p className="font-marko text-2xl font-bold gradient-text"> TanAinent </p>
            <p className="text-[#870000] font-marko ">Global UK Ltd </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="font-marko text-2xl bg-navy-blue/10 rounded-full px-6 py-1 gap-2">
              {links}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-4 px-6 py-6 text-base">
            <a href="#app-preview" onClick={() => setOpen(false)}>App Preview</a>
            <a href="#problem-solutions" onClick={() => setOpen(false)}>Problem Solutions</a>
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#how-it-works" onClick={() => setOpen(false)}>How it Works</a>
            <a href="#technology" onClick={() => setOpen(false)}>Technology</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

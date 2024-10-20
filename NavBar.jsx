'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
];

const NavBar = () => {
    const pathname = usePathname();
    
    return (
        <nav className="flex gap-8">
            {Links.map((link, index) => {
                return (
                <Link 
                href={link.path} 
                key={index} 
                className={`${
                    link.path === pathname && "text-accent border-b-2 border-accent" } hover:text-accent font-medium transition-all`}
            >
                {link.name}
            </Link>);
            })}
        </nav>
    );
};

export default NavBar;

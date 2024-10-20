"use client";
import { usePathname } from "next/navigation";
import { Sheet,SheetContent,SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";   


const Links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Resume", path: "/resume" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet >
        <SheetTrigger className="flex  justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>
        <SheetContent className="flex w-[300px] flex-col">
          <div className="mt-16  mb-40 text-center text-2xl ">
            <Link href="/">
              <h1 className="text-4xl font-semibold ">Saif <span className="text-accent ">.</span></h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
              {Links.map((link,index)=>{
                return (
                  <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl hover:text-accent transition-all`}>
                  {link.name}
                </Link>
                );
                
              })}
          </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
import Link from "next/link";
import LogoIcon from "./Logo";

export default function NavbarHead() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ml-3">
        <LogoIcon style={{ fontSize: "4em" }} />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="font-bold">
            <Link href="/">HOME</Link>
          </li>
          <li className="font-bold">
            <Link href="/about">OUR STORY</Link>
          </li>
          <li className="font-bold">
            <Link href="/services">SERVICES</Link>
          </li>
          <li className="font-bold">
            <a>PRODUCTS</a>
          </li>
          <li className="font-bold">
            <Link href="/our_projects">OUR PROJECTS</Link>
          </li>
          <li className="font-bold">
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

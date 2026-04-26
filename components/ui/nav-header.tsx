"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

interface NavHeaderProps {
  links: NavLink[];
  activeSection?: string;
}

function NavHeader({ links, activeSection }: NavHeaderProps) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-brand bg-white p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {links.map((link) => (
        <Tab
          key={link.href}
          href={link.href}
          setPosition={setPosition}
          isActive={activeSection === link.href}
        >
          {link.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  href,
  setPosition,
  isActive,
}: {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  isActive?: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        setIsHovered(true);
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-10 block cursor-pointer"
    >
      <a
        href={href}
        className={`block px-3 py-1.5 text-[0.72rem] font-medium tracking-tight whitespace-nowrap md:px-4 md:py-2 md:text-[0.78rem] no-underline transition-colors ${
          isHovered ? "text-white" : "text-black"
        }`}
      >
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-8 rounded-full bg-brand md:h-9"
      style={{ top: "50%", translateY: "-50%" }}
    />
  );
};

export default NavHeader;

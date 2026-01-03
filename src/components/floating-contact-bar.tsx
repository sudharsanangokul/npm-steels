"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// WhatsAppIcon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.75 13.96c.25.13.41.2.52.32.11.13.13.44.08.78-.04.34-.42.61-.77.61-.25,0-.63-.06-1.3-.31-.67-.25-1.56-.83-2.8-2.04-1.24-1.2-2.06-2.4-2.31-2.96-.25-.56-.13-1.03,0-1.28.13-.25.31-.41.52-.52.2-.11.44-.13.72-.08.28.04.5.2.63.41.13.2.16.44.13.72-.04.28-.2.63-.32.83-.13.2-.25.41-.13.63.13.2.34.32.61.52Z" />
    <path d="M19.1,4.9C17.2,3,14.7,2,12,2c-5.5,0-10,4.5-10,10c0,1.8,0.5,3.5,1.4,5l-1.6,5.8l6-1.6c1.4,0.8,3,1.3,4.7,1.3h0c5.5,0,10-4.5,10-10C22,9.3,21,6.8,19.1,4.9z M12,20.5c-1.6,0-3.2-0.5-4.5-1.3l-0.3-0.2l-3.3,0.9l0.9-3.2l-0.2-0.3c-0.9-1.3-1.4-2.9-1.4-4.6c0-4.7,3.8-8.5,8.5-8.5c2.3,0,4.5,0.9,6,2.5c1.6,1.6,2.5,3.7,2.5,6C20.5,16.7,16.7,20.5,12,20.5z" />
  </svg>
);

const contactLinks = [
  {
    href: "tel:+919444000533",
    label: "+91 9444000533",
    icon: Phone,
    bgColor: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    href: "mailto:info@srkinternational.co.in",
    label: "info@srkinternational.co.in",
    icon: Mail,
    bgColor: "bg-red-600 hover:bg-red-700",
  },
  {
    href: "https://wa.me/919444000533",
    label: "WhatsApp",
    icon: WhatsAppIcon,
    bgColor: "bg-green-500 hover:bg-green-600",
  },
];

const FloatingContactBar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end space-y-2">
      {contactLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group flex items-center h-12 text-white shadow-lg transition-all duration-300 ease-in-out",
            link.bgColor
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center">
            <link.icon className="h-6 w-6" />
          </div>
          <span className="w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 ease-in-out group-hover:w-48 group-hover:px-4">
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default FloatingContactBar;

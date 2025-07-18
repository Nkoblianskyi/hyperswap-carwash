"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Car } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">HyperSwap</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About Us
            </Link>
            <Link href="/booking">
              <Button className="bg-blue-600 hover:bg-blue-700">Book Wash</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link href="/booking">
                <Button className="bg-blue-600 hover:bg-blue-700 w-fit">Book Wash</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

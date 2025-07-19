"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { companyInfo, heroFeatures } from "@/lib/mock-data"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-400">{companyInfo.name}</span>
                <br />
                {companyInfo.tagline}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">{companyInfo.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/booking">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  Book Now
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              {heroFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-xl p-6 transform -rotate-3">
                <img
                  src="/c5bd4b668ac89df25083b0896c3d47f9.jpg"
                  alt="Professional car wash service"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

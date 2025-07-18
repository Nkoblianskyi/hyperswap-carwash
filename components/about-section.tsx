import { Button } from "@/components/ui/button"
import Link from "next/link"
import { companyInfo, companyStats } from "@/lib/mock-data"

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/53dec8d67a0baf5370f3066b395dbb35.jpg" alt="HyperSwap Team" className="rounded-2xl shadow-2xl" />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                About <span className="text-blue-400">{companyInfo.name}</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                We are a team of professionals who have been caring for cars for over{" "}
                {new Date().getFullYear() - companyInfo.foundedYear} years. Our mission is to make your car perfectly
                clean using the best technologies and eco-friendly products.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {companyInfo.name} is not just a car wash, it's a place where your car receives professional care and
                attention to every detail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <IconComponent className="h-8 w-8 text-blue-400" />
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link href="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

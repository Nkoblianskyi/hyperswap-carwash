"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { services } from "@/lib/mock-data"

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = service.icon

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">{service.title}</h1>
                    <div className="flex items-center space-x-2 mt-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-300 mb-8">{service.description}</p>

                <Link href="/booking">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Book Service
                  </Button>
                </Link>
              </div>

              <div>
                <img src={service.image || "/placeholder.svg"} alt={service.title} className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Features */}
            <div className="lg:col-span-2 space-y-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Service Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <Badge
                          variant="outline"
                          className="min-w-[2rem] h-8 rounded-full flex items-center justify-center"
                        >
                          {index + 1}
                        </Badge>
                        <p className="text-gray-700 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Service Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-4">Ready to Book?</h3>
                  <p className="text-gray-600 mb-6">Choose a convenient time and date for your service</p>
                  <Link href="/booking">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Book Now</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

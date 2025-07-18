import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/mock-data"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full range of services for your car care. From quick wash to professional detailing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <div className="text-sm text-gray-500 mt-1">Duration: {service.duration}</div>
                        </div>
                      </div>
                      <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">What's included:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link href={`/services/${service.id}`}>
                        <Button className="bg-slate-900 hover:bg-slate-800 group">
                          Learn More About Service
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

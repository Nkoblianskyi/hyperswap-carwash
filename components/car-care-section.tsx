import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Droplets, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { careConcepts, seasonalCare, careFactsData, professionalBenefits, maintenanceSchedule } from "@/lib/mock-data"

export default function CarCareSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Science of <span className="text-blue-600">Car Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Professional car care goes far beyond aesthetics. It's a comprehensive approach to preserving your vehicle's
            condition, performance, and value through systematic cleaning and maintenance practices.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Professional Care Matters</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Your vehicle is one of your most significant investments, and like any valuable asset, it requires
                  proper maintenance to perform optimally and retain its value. Professional car care is not just about
                  making your car look good—it's about protecting complex systems and materials that are constantly
                  exposed to harsh environmental conditions.
                </p>
                <p>
                  Modern vehicles feature sophisticated paint systems, advanced interior materials, and
                  precision-engineered components that require specialized knowledge and products to maintain properly.
                  What might seem like simple dirt or grime can actually be corrosive substances that, over time, cause
                  permanent damage costing thousands in repairs.
                </p>
                <p>
                  Professional detailing involves understanding the chemistry of cleaning products, the physics of
                  contamination removal, and the proper techniques to clean without causing damage. This expertise
                  ensures your vehicle receives the care it deserves while avoiding costly mistakes.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="/c67c20a6ce7ffbfb819d800b23f5a2ca.jpg"
              alt="Professional car detailing process"
              className="rounded-2xl shadow-xl w-full"
            />

            <div className="bg-blue-600 text-white rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-3">Did You Know?</h4>
              <ul className="space-y-2 text-blue-100">
                {careFactsData.map((fact, index) => {
                  const IconComponent = fact.icon
                  return (
                    <li key={index} className="flex items-start space-x-2">
                      <IconComponent className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span>{fact.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Care Concepts */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Essential Care Concepts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careConcepts.map((concept, index) => {
              const IconComponent = concept.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{concept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{concept.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Detailed Care Information */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">The Complete Care Approach</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Car className="h-6 w-6 text-blue-600 mr-2" />
                    Exterior Care Philosophy
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    The exterior of your vehicle faces constant assault from environmental contaminants. UV radiation
                    breaks down paint molecules, road salt accelerates corrosion, and organic matter like tree sap and
                    bird droppings contain acids that etch into surfaces. Our systematic approach begins with proper
                    pre-washing to safely remove loose contaminants, followed by pH-balanced washing techniques that
                    clean without stripping protective layers.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Droplets className="h-6 w-6 text-blue-600 mr-2" />
                    Interior Preservation
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Interior surfaces require specialized care based on their material composition. Leather needs
                    conditioning to prevent cracking, fabric requires deep cleaning to remove embedded dirt and
                    allergens, and plastic surfaces need UV protection to prevent fading and brittleness. Our approach
                    considers the unique needs of each material, using appropriate products and techniques to clean,
                    protect, and preserve.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
                    Common Mistakes to Avoid
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Many car owners unknowingly damage their vehicles through improper cleaning techniques. Using
                    household cleaners can strip protective coatings, washing in direct sunlight causes water spots and
                    premature drying, and using dirty towels creates micro-scratches. Professional care eliminates these
                    risks through proper product selection, timing, and technique.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional vs. DIY</h4>
                <div className="space-y-3 text-sm">
                  {professionalBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Maintenance Schedule</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  {maintenanceSchedule.map((item, index) => (
                    <div key={index}>
                      <strong>{item.frequency}:</strong> {item.task}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Care */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Seasonal Care Considerations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {seasonalCare.map((season, index) => {
              const IconComponent = season.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{season.season}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {season.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-900 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Give Your Car Professional Care?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let improper care damage your investment. Trust our professionals to maintain your vehicle's
            condition, performance, and value with scientifically-backed cleaning methods.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Schedule Professional Service
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

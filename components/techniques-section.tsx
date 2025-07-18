import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { techniques } from "@/lib/mock-data"

export default function TechniquesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Washing Techniques</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use the most advanced technologies and methods to ensure the best results and preserve your car's paint.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techniques.map((technique, index) => {
            const IconComponent = technique.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{technique.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{technique.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { companyInfo, companyStats, companyValues, companyExpertise, companyPromise } from "@/lib/mock-data"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">{companyInfo.name}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade of excellence in professional automotive care, driven by passion, innovation, and unwavering
            commitment to quality
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {companyInfo.name} began operations in {companyInfo.foundedYear} with a simple yet ambitious vision: to
                transform the automotive care industry through exceptional service, cutting-edge technology, and genuine
                care for every vehicle that enters our facility. What started as a modest operation has evolved into a
                comprehensive automotive care center that sets the standard for excellence in our industry.
              </p>
              <p>
                Our growth story is one of continuous innovation and unwavering commitment to quality. From our early
                days of basic car washing services, we have expanded to offer a complete suite of automotive care
                solutions, including mobile services, professional detailing, and specialized treatments that cater to
                the unique needs of every vehicle type.
              </p>
              <p>
                Today, we stand as a testament to what can be achieved when passion meets expertise. Our facility
                represents the culmination of years of learning, investing, and perfecting our craft. We have built not
                just a business, but a reputation for excellence that extends far beyond our immediate community.
              </p>
              <p>
                The trust placed in us by over 500 regular customers is not something we take lightly. Each vehicle that
                comes through our doors represents someone's investment, their daily companion, and often their pride
                and joy. This understanding drives everything we do and continues to inspire us to raise the bar higher
                with each passing day.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/e23dd2fe6812b9a3116f7c6f57c22ae2.jpg"
              alt="Our professional car care facility"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {companyStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide every aspect of our service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600">What sets us apart in the automotive care industry</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {companyExpertise.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <p className="text-gray-600">{item.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Philosophy</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At {companyInfo.name}, we believe that automotive care is both an art and a science. It requires
                  technical expertise, attention to detail, and a genuine passion for excellence. Our philosophy centers
                  on the understanding that every vehicle is unique, with its own history, challenges, and care
                  requirements.
                </p>
                <p>
                  We approach each service with the mindset that we are not just cleaning a car – we are preserving an
                  investment, maintaining a tool of daily life, and often caring for something that holds significant
                  personal value to its owner. This perspective shapes every decision we make, from the products we
                  choose to the techniques we employ.
                </p>
                <p>
                  Our commitment extends beyond the immediate service to encompass long-term vehicle health,
                  environmental responsibility, and customer education. We believe in empowering our customers with
                  knowledge about proper car care while providing services that exceed their expectations.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="/edc5dca76cf44daaca69051dec228960.jpg"
                alt="Our car care philosophy"
                className="rounded-xl shadow-lg w-full"
              />

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Promise</h4>
                <div className="space-y-3">
                  {companyPromise.map((promise, index) => {
                    const IconComponent = promise.icon
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">{promise.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Forward</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              As we look to the future, {companyInfo.name} remains committed to pushing the boundaries of what's
              possible in automotive care. We continue to invest in new technologies, expand our service offerings, and
              refine our processes to deliver even greater value to our customers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our vision extends beyond being just a car wash – we aspire to be the definitive partner in automotive
              care, helping our customers maintain their vehicles in peak condition while contributing to a more
              sustainable future through responsible business practices.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the {companyInfo.name} Difference</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of satisfied customers who trust us with their most valuable automotive investments
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Book Your Service Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

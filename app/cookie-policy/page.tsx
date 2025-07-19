import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Settings, BarChart, Shield } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Cookie className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          </div>
          <p className="text-xl text-gray-300">Information about how we use cookies on our website</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cookie className="h-5 w-5 text-blue-600" />
                <span>What are cookies?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Cookies are small text files that are stored on your device (computer, tablet or mobile phone) when you
                visit websites.
              </p>
              <p className="text-gray-700">
                These files help websites remember information about your visit, which can make your next visit easier
                and more useful.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How we use cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                HyperLiquid uses cookies to improve your experience using our website and provide personalized services.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="flex items-start space-x-3">
                  <Settings className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Functional cookies</h4>
                    <p className="text-gray-600 text-sm">Remember your settings and preferences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Analytics cookies</h4>
                    <p className="text-gray-600 text-sm">Help us understand how you use the site</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of cookies we use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">1. Essential cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the website to function and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Ensuring website security</li>
                    <li>Remembering your privacy settings</li>
                    <li>Supporting form functionality</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">2. Functional cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These files improve website functionality and personalize your experience.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Remembering your preferences</li>
                    <li>Saving information about previous orders</li>
                    <li>Content personalization</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">3. Analytics cookies</h4>
                  <p className="text-gray-700 mb-3">Help us understand how visitors interact with our site.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Collecting visit statistics</li>
                    <li>Analyzing user behavior</li>
                    <li>Improving website performance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg">4. Marketing cookies</h4>
                  <p className="text-gray-700 mb-3">
                    Used to show relevant advertising and track campaign effectiveness.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                    <li>Personalized advertising</li>
                    <li>Conversion tracking</li>
                    <li>Retargeting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Managing cookies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">You can control and manage cookies in various ways:</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Browser settings</h4>
                  <p className="text-gray-700 text-sm">
                    Most browsers allow you to view, block or delete cookies. Refer to your browser's help for
                    instructions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Website settings</h4>
                  <p className="text-gray-700 text-sm">
                    When you first visit the site, you will see a banner with the option to accept or decline cookie
                    usage.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <p className="text-yellow-800 text-sm">
                  <strong>Note:</strong> Disabling some types of cookies may affect website functionality and the
                  quality of your user experience.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third parties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">Our site may contain cookies from third parties, such as:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Google Analytics - for website traffic analysis</li>
                <li>Social networks - for social platform integration</li>
                <li>Advertising networks - for showing relevant ads</li>
              </ul>
              <p className="text-gray-700">
                These third parties have their own privacy and cookie policies, which we recommend reviewing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Policy updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may periodically update this Cookie Policy. Any changes will be published on this page with a new
                update date.
              </p>
              <p className="text-gray-700">
                <strong>Last updated:</strong> June 18, 2025
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}

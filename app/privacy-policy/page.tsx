import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 text-blue-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-gray-300">We value your trust and protect your personal data</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>1. General Provisions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                This Privacy Policy describes how HyperSwap collects, uses and protects your personal information when
                using our services and website.
              </p>
              <p className="text-gray-700">
                By using our services, you agree to the terms of this Privacy Policy. If you do not agree with any
                terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <span>2. Information We Collect</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>First and last name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Vehicle information (make, model, license plate)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Information:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Website visit time</li>
                  <li>Pages you viewed</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-blue-600" />
                <span>3. How We Use Your Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Providing and improving our services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Processing orders and bookings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Communicating with you about your orders</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sending information about new services and promotions (with your consent)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Analyzing and improving website performance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Information Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We take appropriate technical and organizational measures to protect your personal information from
                unauthorized access, alteration, disclosure or destruction.
              </p>
              <div>
                <h4 className="font-semibold mb-2">Security measures include:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Data encryption during transmission</li>
                  <li>Limited access to personal data</li>
                  <li>Regular security system updates</li>
                  <li>Staff training on privacy issues</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Information Sharing with Third Parties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We do not sell, exchange or transfer your personal information to third parties without your consent,
                except in cases described below:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>When necessary to provide services (e.g., delivery partners)</li>
                <li>As required by law or court order</li>
                <li>To protect our rights and security</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                In accordance with applicable law, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your personal data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our website uses cookies to improve your user experience. Detailed information about cookie usage can be
                found in our
                <a href="/cookie-policy" className="text-blue-600 hover:underline ml-1">
                  Cookie Policy
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Changes to Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We may periodically update this Privacy Policy. We will notify you of any material changes through our
                website or by email.
              </p>
              <p className="text-gray-700">Last updated: June 18, 2025</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}

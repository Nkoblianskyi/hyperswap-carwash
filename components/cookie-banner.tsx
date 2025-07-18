"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-slate-900 text-white border-slate-700 shadow-2xl">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Cookie Usage</h3>
              <p className="text-sm text-gray-300 mb-4">
                We use cookies to improve your experience on our site. By continuing to use the site, you agree to our{" "}
                <Link href="/cookie-policy" className="text-blue-400 hover:underline">
                  cookie policy
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button onClick={acceptCookies} size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Accept
                </Button>
                <Button
                  onClick={declineCookies}
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Decline
                </Button>
              </div>
            </div>
            <button onClick={declineCookies} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

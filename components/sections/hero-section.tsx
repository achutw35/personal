"use client"

import React, { useEffect, useState } from "react"
import { personalInfo } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Send, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialIcons: Record<string, React.ReactNode> = {
    Github: <Github className="h-5 w-5" />,
    Linkedin: <Linkedin className="h-5 w-5" />,
    Twitter: <Twitter className="h-5 w-5" />
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-blue-300/10 animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 15}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            className={`max-w-xl transition-all duration-1000 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            }`}
          >
            <Badge 
              variant="secondary" 
              className="mb-4 px-4 py-1.5 text-sm animate-pulse"
            >
              Software Developer
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
              Hi, I&apos;m <span className="text-blue-400">Achut Prasad Wagle</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full">
                <Link href="#contact">
                  <Send className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button variant="outline" className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-blue-200">Find me on:</span>
              <div className="flex gap-3">
                {personalInfo.socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2.5 rounded-full text-white hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                  >
                    {socialIcons[social.icon] || null}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-xl animate-float">
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-blue-200 text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-blue-200 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
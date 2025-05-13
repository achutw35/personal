"use client"

import React, { useEffect, useRef } from "react"
import { personalInfo } from "@/lib/data"
import { useInView } from "react-intersection-observer"
import { MapPin, Mail, Phone, Calendar } from "lucide-react"
import Image from "next/image"
import image from "../../public/achutwagle.jpg"

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="aspect-[3/4]">
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-blue-600 dark:border-blue-500 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Web Developer &amp; Laravel/React Specialist
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a passionate software developer from Bhaktapur, Nepal. With expertise in Laravel with Filament package and growing knowledge in React with Next.js, I create efficient and user-friendly web applications. My approach combines technical precision with creative problem-solving to deliver solutions that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Available for freelance</span>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-3">My Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Web Development", "Laravel", "React", "UI/UX Design", "Open Source", "Technology", "Teaching"].map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import React from "react"
import { useInView } from "react-intersection-observer"
import { personalInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { MapPin, Mail, Phone, Send } from "lucide-react"

export function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to reach out to me through any of the following contact methods. I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 flex items-start space-x-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{personalInfo.location}</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{personalInfo.email}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Send me an email anytime!</p>
                </div>
              </Card>

              <Card className="p-6 flex items-start space-x-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{personalInfo.phone}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Available during business hours</p>
                </div>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-3">Find me on social media:</h4>
              <div className="flex space-x-4">
                {personalInfo.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                    aria-label={social.name}
                  >
                    {social.name === "LinkedIn" && <div className="text-blue-600 dark:text-blue-400">In</div>}
                    {social.name === "GitHub" && <div className="text-gray-800 dark:text-white">GH</div>}
                    {social.name === "Twitter" && <div className="text-blue-400">Tw</div>}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can I help you?" required />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Your message here..."
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
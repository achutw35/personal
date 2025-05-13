"use client"

import React from "react"
import { education, workExperience, skills, languages, certifications } from "@/lib/data"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award, Languages } from "lucide-react"

export function ResumeSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const ProgressBar = ({ value }: { value: number }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div 
        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: inView ? `${value}%` : '0%' }}
      />
    </div>
  )

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">
            My <span className="text-blue-600 dark:text-blue-400">Resume</span>
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background, work experience, and professional skills that have shaped my career
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button className="rounded-full">
            <Download className="mr-2 h-4 w-4" /> Download Full CV
          </Button>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Education Section */}
          <div className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Badge className="mb-2">{edu.period}</Badge>
                    <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className={`transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Badge className="mb-2">{exp.period}</Badge>
                    <h4 className="text-xl font-semibold mb-1">{exp.position}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</p>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">{exp.description}</p>
                    
                    {exp.achievements && (
                      <div className="mt-4">
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements</h5>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">My Skills</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Technical expertise and proficiency</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-4 text-center pb-2 border-b border-gray-200 dark:border-gray-700">
                  {skillGroup.category}
                </h4>
                <div className="space-y-4">
                  {skillGroup.technologies.map((tech, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{tech.proficiency}%</span>
                      </div>
                      <ProgressBar value={tech.proficiency} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {/* Certifications */}
          <div className={`transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{cert.name}</h4>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-600 dark:text-gray-400">{cert.issuer}</span>
                      <span className="text-gray-500 dark:text-gray-500">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className={`transition-all duration-700 delay-800 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <div className="flex items-center mb-6">
              <Languages className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                    <div className="flex justify-between">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">{lang.name}</h4>
                      <Badge variant="skill">{lang.proficiency}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
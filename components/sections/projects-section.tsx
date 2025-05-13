"use client"

import React, { useState } from "react"
import { projects } from "@/lib/data"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Get unique technologies from all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  )

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => 
        project.technologies.includes(filter)
      )

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="mt-3 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest works and projects that showcase my skills and expertise
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className="rounded-full"
          >
            All Projects
          </Button>
          
          {allTechnologies.map(tech => (
            <Button
              key={tech}
              variant={filter === tech ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tech)}
              className="rounded-full"
            >
              {tech}
            </Button>
          ))}
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={cn(
                "group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transitionDuration: "700ms"
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <Button size="sm" asChild className="rounded-full">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="skill">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found with the selected technology.</p>
            <Button 
              variant="link" 
              onClick={() => setFilter("all")}
              className="mt-2"
            >
              Show all projects
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
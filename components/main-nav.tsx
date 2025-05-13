"use client"

import * as React from "react"
import Link from "next/link"
import { 
  AlignJustify, 
  X,
  Home,
  User,
  FileText,
  Briefcase,
  Mail
} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: <Home className="h-4 w-4 mr-2" />
    },
    {
      name: "About",
      href: "#about",
      icon: <User className="h-4 w-4 mr-2" />
    },
    {
      name: "Resume",
      href: "#resume",
      icon: <FileText className="h-4 w-4 mr-2" />
    },
    {
      name: "Projects",
      href: "#projects",
      icon: <Briefcase className="h-4 w-4 mr-2" />
    },
    {
      name: "Contact",
      href: "#contact",
      icon: <Mail className="h-4 w-4 mr-2" />
    }
  ]

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300 py-4",
      scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <Link 
          href="/" 
          className={cn(
            "text-xl font-semibold transition-colors flex items-center",
            scrolled ? "text-foreground" : "text-white"
          )}
        >
          <span className="font-playfair">AP</span>
          <span className="text-blue-500 ml-1">Wagle</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className={cn(
              "ml-2",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            <AlignJustify className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container pt-4 flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <div className="container flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMobileMenu}
                className="text-foreground text-xl font-medium flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
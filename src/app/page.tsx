import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Header from "./Header/Header"
import { Experiences } from "./Experiences/Experiences"
import PortfolioFeed from "./Portfolio/PortfolioFeed"

export default function Portfolio() {
  const skills = [
    { name: "React", color: "bg-primary/10 text-primary border-primary/20" },
    { name: "TypeScript", color: "bg-secondary/10 text-secondary border-secondary/20" },
    { name: "Next.js", color: "bg-primary/10 text-primary border-primary/20" },
    { name: "Tailwind CSS", color: "bg-accent/10 text-accent border-accent/20" },
    { name: "JavaScript", color: "bg-secondary/10 text-secondary border-secondary/20" },
    { name: "Node.js", color: "bg-primary/10 text-primary border-primary/20" },
    { name: "Git", color: "bg-accent/10 text-accent border-accent/20" },
    { name: "Figma", color: "bg-secondary/10 text-secondary border-secondary/20" },
  ]

  const experiences = [
    {
      title: "Senior Frontend Engineer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Led development of responsive web applications using React and TypeScript. Collaborated with design teams to implement pixel-perfect UI components and improved application performance by 40%.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple client-facing applications. Implemented modern JavaScript frameworks and established coding standards that reduced bug reports by 30%.",
      technologies: ["JavaScript", "React", "CSS", "Git"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Labs",
      period: "2019 - 2020",
      description:
        "Developed interactive web interfaces and collaborated with backend teams to integrate APIs. Gained experience in agile development methodologies and version control systems.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ]

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing online store operations with real-time analytics, inventory management, and order processing capabilities.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool featuring drag-and-drop functionality, team collaboration features, and progress tracking with intuitive user interface.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
      github: "#",
    },
    {
      title: "Weather Forecast Widget",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and customizable display options for different weather metrics.",
      technologies: ["React", "API Integration", "CSS Modules", "Geolocation"],
      link: "#",
      github: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header Section */}
        <Header />
        <hr className="my-6" />
        {/* Experiences Section */}
        <Experiences />

        <hr className="my-8" />
        {/* Portfolio Section */}
        <PortfolioFeed />

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground">Derick</p>
        </footer>
      </div>
    </div>
  )
}

"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Video,
  Clock,
  CheckCircle,
  Play,
  Download,
  FileText,
  ArrowRight,
  Star,
  Award,
  Bookmark,
} from "lucide-react";

const guides = [
  {
    id: 1,
    title: "Getting Started with TimePio",
    type: "Video Tutorial",
    duration: "15 min",
    progress: 100,
    completed: true,
    icon: Video,
    category: "Beginner",
  },
  {
    id: 2,
    title: "Time Tracking Basics",
    type: "Written Guide",
    duration: "10 min",
    progress: 60,
    completed: false,
    icon: FileText,
    category: "Beginner",
  },
  {
    id: 3,
    title: "Advanced Project Management",
    type: "Video Tutorial",
    duration: "25 min",
    progress: 0,
    completed: false,
    icon: Video,
    category: "Advanced",
  },
  {
    id: 4,
    title: "Reporting and Analytics",
    type: "Written Guide",
    duration: "20 min",
    progress: 30,
    completed: false,
    icon: FileText,
    category: "Intermediate",
  },
];

const featuredGuides = [
  {
    title: "Team Management Masterclass",
    description: "Learn how to effectively manage your team's time and resources",
    duration: "45 min",
    level: "Advanced",
    rating: 4.8,
    reviews: 128,
  },
  {
    title: "Productivity Tips & Tricks",
    description: "Discover best practices for maximizing productivity",
    duration: "30 min",
    level: "Intermediate",
    rating: 4.9,
    reviews: 95,
  },
];

const resources = [
  {
    title: "User Manual",
    description: "Complete documentation of TimePio features",
    type: "PDF",
    size: "2.5 MB",
    downloads: 1234,
  },
  {
    title: "API Documentation",
    description: "Technical guide for developers",
    type: "HTML",
    size: "1.8 MB",
    downloads: 856,
  },
  {
    title: "Best Practices",
    description: "Tips and tricks for optimal usage",
    type: "PDF",
    size: "1.2 MB",
    downloads: 2341,
  },
];

export default function GuidePage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Learning Center</h1>
          <p className="text-muted-foreground">
            Master TimePio with our comprehensive guides and tutorials
          </p>
        </div>
        <Button>
          <BookOpen className="h-4 w-4 mr-2" />
          View All Guides
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredGuides.map((guide) => (
          <Card key={guide.title} className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{guide.level}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="font-medium">{guide.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({guide.reviews} reviews)
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{guide.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {guide.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {guide.duration}
                </div>
                <Button>
                  <Play className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {guides.map((guide) => (
          <Card key={guide.id} className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <guide.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{guide.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="secondary">{guide.type}</Badge>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {guide.duration}
                      </span>
                    </div>
                  </div>
                </div>
                {guide.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Button size="sm" variant="outline">
                    <Play className="h-4 w-4 mr-2" />
                    Continue
                  </Button>
                )}
              </div>
              <Progress value={guide.progress} />
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="p-6">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {resource.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {resource.type} • {resource.size} • {resource.downloads} downloads
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
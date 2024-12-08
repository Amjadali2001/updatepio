"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  Phone,
  Mail,
  Search,
  BookOpen,
  Video,
  FileText,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const supportCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: 15,
    description: "Basic guides and tutorials",
  },
  {
    title: "Account & Billing",
    icon: FileText,
    articles: 12,
    description: "Manage your account and payments",
  },
  {
    title: "Features & Tools",
    icon: Video,
    articles: 25,
    description: "Learn about TimePio features",
  },
  {
    title: "Troubleshooting",
    icon: HelpCircle,
    articles: 18,
    description: "Common issues and solutions",
  },
];

const recentArticles = [
  {
    title: "How to track time efficiently",
    category: "Getting Started",
    readTime: "5 min read",
    status: "Popular",
  },
  {
    title: "Setting up team permissions",
    category: "Account Management",
    readTime: "3 min read",
    status: "New",
  },
  {
    title: "Generating reports",
    category: "Features",
    readTime: "4 min read",
    status: "Updated",
  },
];

const contactMethods = [
  {
    title: "Live Chat",
    icon: MessageCircle,
    description: "Chat with our support team",
    availability: "24/7",
    action: "Start Chat",
    responseTime: "< 1 minute",
  },
  {
    title: "Phone Support",
    icon: Phone,
    description: "Call our support line",
    availability: "Mon-Fri, 9AM-6PM",
    action: "Call Now",
    responseTime: "Immediate",
  },
  {
    title: "Email Support",
    icon: Mail,
    description: "Send us an email",
    availability: "24/7",
    action: "Send Email",
    responseTime: "< 24 hours",
  },
];

export default function SupportPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">How can we help you today?</h1>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help articles..."
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {supportCategories.map((category) => (
          <Card key={category.title} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{category.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {category.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {category.articles} articles
                </span>
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Articles</h2>
          <div className="space-y-4">
            {recentArticles.map((article) => (
              <div key={article.title} className="flex items-start gap-4 p-4 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div className="flex-1">
                  <h3 className="font-medium">{article.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                    {article.status && (
                      <Badge variant="outline" className="ml-auto">
                        {article.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <div className="space-y-4">
            {contactMethods.map((method) => (
              <div key={method.title} className="p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <Badge variant="secondary">
                        Available: {method.availability}
                      </Badge>
                      <Badge variant="outline">
                        Response time: {method.responseTime}
                      </Badge>
                    </div>
                  </div>
                  <Button>{method.action}</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
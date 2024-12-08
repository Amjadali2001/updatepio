"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, Tag, Star, Box } from "lucide-react";

const products = [
  {
    id: 1,
    name: "TimePio Pro License",
    description: "Advanced time tracking features for professionals",
    price: "$49.99",
    type: "License",
    rating: 4.8,
    reviews: 128,
    features: ["Unlimited Projects", "API Access", "Priority Support"],
  },
  {
    id: 2,
    name: "Team Pack Bundle",
    description: "Perfect for growing teams and organizations",
    price: "$199.99",
    type: "Bundle",
    rating: 4.9,
    reviews: 89,
    features: ["Up to 50 Users", "Admin Dashboard", "Custom Reports"],
  },
  {
    id: 3,
    name: "Enterprise Solution",
    description: "Complete package for large enterprises",
    price: "$499.99",
    type: "Enterprise",
    rating: 5.0,
    reviews: 45,
    features: ["Unlimited Everything", "24/7 Support", "Custom Integration"],
  },
  {
    id: 4,
    name: "Mobile App Add-on",
    description: "Enhanced mobile experience for TimePio",
    price: "$9.99",
    type: "Add-on",
    rating: 4.7,
    reviews: 234,
    features: ["Offline Mode", "GPS Tracking", "Mobile Reports"],
  },
];

export default function ShopPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Shop</h1>
          <p className="text-muted-foreground">
            Explore TimePio products and add-ons
          </p>
        </div>
        <Button>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Cart (0)
        </Button>
      </div>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-8"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">
                  <Tag className="h-3 w-3 mr-1" />
                  {product.type}
                </Badge>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground ml-1">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.description}
                </p>
              </div>

              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Box className="h-3 w-3 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4">
                <span className="text-2xl font-bold">{product.price}</span>
                <Button>Add to Cart</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
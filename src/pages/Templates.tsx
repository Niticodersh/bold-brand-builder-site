
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Eye, ShoppingCart } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Templates = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [selectedStyle, setSelectedStyle] = useState("all");

  // Mock template data
  const templates = [
    {
      id: 1,
      title: "Founder Portrait Pro",
      tagline: "Professional headshot template",
      category: "personal",
      style: "professional",
      price: "₹299",
      tags: ["#Portrait", "#Professional", "#LinkedIn"],
      image: "gradient-to-br from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Startup Pitch Deck",
      tagline: "Investor-ready presentation",
      category: "startup",
      style: "minimalistic",
      price: "₹599",
      tags: ["#PitchDeck", "#Startup", "#Presentation"],
      image: "gradient-to-br from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Instagram Story Pack",
      tagline: "Lifestyle content templates",
      category: "lifestyle",
      style: "creative",
      price: "₹399",
      tags: ["#Instagram", "#Stories", "#Lifestyle"],
      image: "gradient-to-br from-pink-500 to-rose-600"
    },
    {
      id: 4,
      title: "Brand Identity Kit",
      tagline: "Complete branding solution",
      category: "startup",
      style: "professional",
      price: "₹899",
      tags: ["#Branding", "#Logo", "#Identity"],
      image: "gradient-to-br from-purple-500 to-indigo-600"
    },
    {
      id: 5,
      title: "Personal Brand Banner",
      tagline: "Social media headers",
      category: "personal",
      style: "creative",
      price: "₹249",
      tags: ["#Banner", "#SocialMedia", "#Header"],
      image: "gradient-to-br from-orange-500 to-red-600"
    },
    {
      id: 6,
      title: "Event Poster Template",
      tagline: "Eye-catching event designs",
      category: "lifestyle",
      style: "bold",
      price: "₹349",
      tags: ["#Event", "#Poster", "#Marketing"],
      image: "gradient-to-br from-teal-500 to-cyan-600"
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    const matchesStyle = selectedStyle === "all" || template.style === selectedStyle;
    
    return matchesSearch && matchesCategory && matchesStyle;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Template Catalog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium templates crafted for modern brands and creators
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 bg-gray-50 p-6 rounded-2xl">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="personal">Personal Branding</SelectItem>
                  <SelectItem value="startup">Startup & Founder</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle & Vibes</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Styles</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="minimalistic">Minimalistic</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="w-full">
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Template Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-64 bg-${template.image} flex items-center justify-center relative`}>
                    <div className="text-white text-center">
                      <h3 className="text-2xl font-bold mb-2">{template.title}</h3>
                      <p className="text-lg opacity-90">{template.tagline}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {template.price}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <Link to={`/template/${template.id}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                      <Button asChild className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <Link to={`/template/${template.id}`}>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No templates found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedStyle("all");
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Templates;

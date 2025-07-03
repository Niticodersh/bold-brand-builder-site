
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, ShoppingCart, Share2, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TemplateDetail = () => {
  const { id } = useParams();

  // Mock template data - in a real app, this would come from an API
  const template = {
    id: 1,
    title: "Founder Portrait Pro",
    tagline: "Professional headshot template perfect for LinkedIn and personal branding",
    description: "This premium template is designed specifically for founders, entrepreneurs, and professionals who want to make a strong first impression. The clean, modern design focuses attention on your personal brand while maintaining a professional aesthetic.",
    category: "personal",
    style: "professional",
    price: "₹299",
    originalPrice: "₹399",
    tags: ["#Portrait", "#Professional", "#LinkedIn", "#PersonalBrand"],
    image: "gradient-to-br from-blue-500 to-purple-600",
    includes: [
      "Editable visual in high-resolution JPG/PNG format",
      "Customization form for personal details",
      "Commercial use license",
      "24/7 support for customization requests",
      "Multiple size variations (LinkedIn, Instagram, Twitter)"
    ],
    placeholders: ["[NAME]", "[TITLE]", "[TAGLINE]", "[COMPANY]"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-purple-600 hover:text-purple-700">
              <Link to="/templates">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Templates
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Template Preview */}
            <div className="space-y-6">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className={`h-96 bg-${template.image} flex items-center justify-center relative`}>
                  <div className="text-white text-center">
                    <h3 className="text-3xl font-bold mb-2">{template.title}</h3>
                    <p className="text-lg opacity-90">Professional Template</p>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="ghost" className="bg-white/20 text-white hover:bg-white/30">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/20 text-white hover:bg-white/30">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
              
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-24 bg-${template.image} rounded-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer`}></div>
                ))}
              </div>
            </div>

            {/* Template Details */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{template.category}</Badge>
                  <Badge variant="outline">{template.style}</Badge>
                </div>
                <h1 className="text-4xl font-bold mb-4 text-gray-900">{template.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{template.tagline}</p>
                <p className="text-gray-700">{template.description}</p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold mb-3">Style Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-purple-900">{template.price}</span>
                        <span className="text-lg text-gray-500 line-through">{template.originalPrice}</span>
                        <Badge className="bg-green-500 text-white">25% OFF</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">One-time purchase, lifetime access</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Customize & Purchase
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Preview Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <div>
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {template.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customizable Fields */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Customizable Fields</h3>
                <div className="grid grid-cols-2 gap-3">
                  {template.placeholders.map((placeholder, index) => (
                    <Badge key={index} variant="outline" className="justify-center py-2">
                      {placeholder}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Templates */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Templates</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl font-bold">Related Template {i}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">₹{299 + i * 50}</span>
                        <Button size="sm" variant="outline">View</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TemplateDetail;

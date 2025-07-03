
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles, Users, Shield, Palette, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Boutique Templates as a Service
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build Your Brand.
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Bold. Beautiful. Effortless.
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Premium design templates crafted for founders, creators, and brands who demand excellence without the design expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50 text-lg px-8 py-4">
                <Link to="/templates">
                  Browse Templates
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900 text-lg px-8 py-4">
                <Link to="/custom-request">
                  Request Custom Design
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What is BYB Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            What Is BYB?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            BYB is a boutique Template-as-a-Service platform delivering curated, identity-first visuals 
            for founders and creators who value brand safety and premium quality.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Brand Safety</h3>
              <p className="text-gray-600">Every template is carefully vetted for professional use and brand consistency.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Excellence</h3>
              <p className="text-gray-600">Handpicked designs that speak to your audience and elevate your brand identity.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Identity-First</h3>
              <p className="text-gray-600">Templates designed to help you build a memorable and authentic brand presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Template Categories Preview */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Template Categories
            </h2>
            <p className="text-xl text-gray-600">
              Discover designs tailored for every brand story
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Personal Branding</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Professional headshots, LinkedIn banners, and personal brand assets.</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Link to="/templates?category=personal">
                      See More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded-t-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Sparkles className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Startup & Founder</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Pitch decks, founder portraits, and startup brand materials.</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Link to="/templates?category=startup">
                      See More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-to-br from-pink-500 to-rose-600 rounded-t-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Palette className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Lifestyle & Vibes</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Instagram stories, lifestyle content, and mood-driven designs.</p>
                  <Button asChild variant="outline" className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Link to="/templates?category=lifestyle">
                      See More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose BYB */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose BYB?
            </h2>
            <p className="text-xl text-gray-600">
              Visual storytelling that sets you apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Boutique Quality</h3>
                    <p className="text-gray-600">Each template is meticulously crafted with attention to detail that rivals custom design work.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
                    <p className="text-gray-600">Built by creators, for creators. Our templates reflect real-world branding needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zero Design Skills Needed</h3>
                    <p className="text-gray-600">Professional results without the learning curve. Just customize and download.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Sparkles className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Visual storytelling showcase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What Creators Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"BYB transformed my personal brand overnight. The templates are stunning and so easy to customize."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-gray-500">Tech Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"The quality is unmatched. I've tried other platforms, but BYB's boutique approach makes all the difference."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Marcus Rodriguez</p>
                    <p className="text-sm text-gray-500">Creative Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"Finally, templates that understand brand storytelling. BYB gets what modern creators need."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">Aria Patel</p>
                    <p className="text-sm text-gray-500">Lifestyle Blogger</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Stay Inspired
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest templates, design tips, and brand insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/60"
            />
            <Button className="bg-white text-purple-900 hover:bg-purple-50">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-purple-200 mt-4">
            Join 2,000+ creators building better brands
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

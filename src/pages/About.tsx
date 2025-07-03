
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Sparkles, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800 border-purple-200">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Building Brands,
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                One Template at a Time
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              BYB was born from a simple belief: every founder, creator, and entrepreneur deserves 
              professional-grade branding without the complexity or cost of traditional design agencies.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We democratize professional design by creating boutique-quality templates that 
                  help creators build authentic, memorable brands. Our curated approach ensures 
                  every template meets the highest standards of design excellence and brand safety.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that great design should be accessible to everyone, not just those 
                  with deep pockets or design degrees. That's why we've built a platform that 
                  combines the sophistication of custom design with the simplicity of templates.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <Sparkles className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Boutique Quality</h3>
                    <p className="text-lg opacity-90">Accessible to Everyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600">
                The values that shape everything we create
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Identity-First Design</h3>
                  <p className="text-gray-600">
                    Every template is crafted to help you build a unique brand identity that 
                    resonates with your audience and stands out in your industry.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Community-Driven</h3>
                  <p className="text-gray-600">
                    Built by creators, for creators. We listen to our community and continuously 
                    evolve our templates based on real-world feedback and needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Effortless Excellence</h3>
                  <p className="text-gray-600">
                    Professional results shouldn't require professional training. Our templates 
                    make high-quality design accessible to everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 bg-gradient-to-br from-purple-900 to-indigo-900 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">BYB</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Personal Journey
            </h2>
            <p className="text-xl text-purple-100 mb-6">
              "As a founder myself, I've experienced firsthand the challenge of building a professional 
              brand on a bootstrap budget. I spent countless hours trying to create decent-looking graphics, 
              only to end up with mediocre results that didn't reflect the quality of my work."
            </p>
            <p className="text-xl text-purple-100 mb-8">
              "BYB was born from this frustration. I wanted to create a solution that would give every 
              creator access to the kind of design quality that usually costs thousands of dollars and 
              weeks of back-and-forth with agencies."
            </p>
            <div className="text-center">
              <p className="text-lg text-purple-200">— The BYB Team</p>
            </div>
          </div>
        </section>

        {/* Why BYB is Different */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why BYB is Different
              </h2>
              <p className="text-xl text-gray-600">
                We're not just another template marketplace
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Boutique vs. Mass Market
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Curated Quality</h4>
                      <p className="text-gray-600">Every template is hand-selected and meets our strict quality standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Brand Safety First</h4>
                      <p className="text-gray-600">All templates are professionally vetted to ensure they're appropriate for business use.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Identity-Focused</h4>
                      <p className="text-gray-600">Designed specifically to help you build a cohesive, memorable brand identity.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Community & Support
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Creator Circle</h4>
                      <p className="text-gray-600">Join a community of like-minded creators and get feedback on your brand.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Expert Guidance</h4>
                      <p className="text-gray-600">Access to branding experts who can help you make the right design choices.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Ongoing Innovation</h4>
                      <p className="text-gray-600">Regular template drops and new features based on community feedback.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Build Your Brand?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of creators who have transformed their brands with BYB templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                <Link to="/templates">
                  Browse Templates
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;

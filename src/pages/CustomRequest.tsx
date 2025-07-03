
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, Send, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const CustomRequest = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    templateType: "",
    purpose: "",
    designNotes: "",
    timeline: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to your backend
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours with a custom quote.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      templateType: "",
      purpose: "",
      designNotes: "",
      timeline: "",
      budget: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              Custom Design Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Request Your
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Custom Template
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Can't find exactly what you need? Let our design team create something unique for your brand. 
              Fill out the form below and we'll get back to you with a custom quote within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Custom Design Request</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="templateType">Type of Template Needed *</Label>
                        <Select value={formData.templateType} onValueChange={(value) => handleInputChange("templateType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select template type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal-branding">Personal Branding</SelectItem>
                            <SelectItem value="startup-founder">Startup & Founder</SelectItem>
                            <SelectItem value="lifestyle">Lifestyle & Vibes</SelectItem>
                            <SelectItem value="business-card">Business Card</SelectItem>
                            <SelectItem value="presentation">Presentation Template</SelectItem>
                            <SelectItem value="social-media">Social Media Pack</SelectItem>
                            <SelectItem value="other">Other (please specify)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Preferred Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (Rush order)</SelectItem>
                            <SelectItem value="1-week">Within 1 week</SelectItem>
                            <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="flexible">I'm flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="purpose">Purpose / Target Use *</Label>
                      <Textarea
                        id="purpose"
                        value={formData.purpose}
                        onChange={(e) => handleInputChange("purpose", e.target.value)}
                        placeholder="Describe what you'll use this template for (e.g., LinkedIn profile, investor pitch, personal website, etc.)"
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="designNotes">Design Notes & Preferences</Label>
                      <Textarea
                        id="designNotes"
                        value={formData.designNotes}
                        onChange={(e) => handleInputChange("designNotes", e.target.value)}
                        placeholder="Tell us about your style preferences - colors, mood, fonts, any specific requirements or inspiration you have in mind..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="What's your budget for this project?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under ₹500</SelectItem>
                          <SelectItem value="500-1000">₹500 - ₹1,000</SelectItem>
                          <SelectItem value="1000-2500">₹1,000 - ₹2,500</SelectItem>
                          <SelectItem value="2500-5000">₹2,500 - ₹5,000</SelectItem>
                          <SelectItem value="above-5000">Above ₹5,000</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Upload Reference Images (Optional)</h3>
                      <p className="text-gray-600 mb-4">Share any inspiration images, logos, or existing brand materials</p>
                      <Button variant="outline" type="button">
                        Choose Files
                      </Button>
                    </div>

                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Custom Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    What Happens Next?
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                      We review your request within 24 hours
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                      Our team sends you a custom quote & timeline
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                      Upon approval, we start creating your template
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                      You receive your custom design & files
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Custom Design Pricing</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Simple customization</span>
                      <span className="font-semibold">₹499 - ₹999</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Complex design work</span>
                      <span className="font-semibold">₹1,000 - ₹2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Full brand package</span>
                      <span className="font-semibold">₹2,500 - ₹5,000</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    *Final pricing depends on complexity and timeline. Rush orders may include additional fees.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Need to talk first?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Schedule a free 15-minute consultation to discuss your project.
                  </p>
                  <Button variant="outline" className="w-full">
                    Book a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomRequest;

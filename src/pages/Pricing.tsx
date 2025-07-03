
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Single Template",
      price: "₹299",
      originalPrice: "₹399",
      description: "Perfect for one-off branding needs",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        "1 premium design template",
        "Full customization with your info",
        "High-resolution download (JPG/PNG)",
        "Commercial use license",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Starter Pack",
      price: "₹999",
      originalPrice: "₹1299",
      description: "Great for new brands and creators",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Any 5 templates of your choice",
        "1 custom design request",
        "Priority customization",
        "Multiple format downloads",
        "Commercial use license",
        "Priority email support",
        "Brand consultation call"
      ],
      cta: "Most Popular",
      popular: true
    },
    {
      name: "Pro Branding Kit",
      price: "₹1999",
      originalPrice: "₹2599",
      description: "Complete branding solution for professionals",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "All categories unlocked (unlimited access)",
        "3 custom design drops per month",
        "Brand identity consultation",
        "Social media template pack",
        "Logo design assistance",
        "Priority support & revisions",
        "Exclusive template previews",
        "1-on-1 brand strategy session"
      ],
      cta: "Go Pro",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Flexible Pricing Options
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Choose Your
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Creative Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need a single template or complete brand transformation, 
              we have the perfect solution for your creative needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-2 border-purple-500 shadow-xl scale-105' 
                    : 'border border-gray-200 hover:border-purple-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular Choice
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                    </div>
                    <p className="text-sm text-gray-500">One-time purchase</p>
                  </div>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    className={`w-full py-6 text-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    <Link to="/templates">
                      {plan.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold mb-2">What's included with each template?</h3>
                <p className="text-gray-600">Each template includes high-resolution files (JPG/PNG), customization options, commercial use license, and support for setup.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I request revisions?</h3>
                <p className="text-gray-600">Yes! All plans include revision support. Pro plans get priority revisions and dedicated assistance.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">We offer a 7-day satisfaction guarantee. If you're not happy with your customized template, we'll make it right.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How long does customization take?</h3>
                <p className="text-gray-600">Standard customization takes 24-48 hours. Pro plan members get priority processing within 12 hours.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's chat about your branding needs and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4">
                <Link to="/contact">
                  Schedule a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                <Link to="/custom-request">
                  Request Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;

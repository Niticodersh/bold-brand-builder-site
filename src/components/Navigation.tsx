
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-purple-900">
            BYB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/templates" className="text-gray-700 hover:text-purple-900 transition-colors">
              Templates
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-purple-900 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-900 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-900 transition-colors">
              Contact
            </Link>
            <Button asChild variant="outline" className="border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white">
              <Link to="/custom-request">Request Custom</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/templates"
                className="block px-3 py-2 text-gray-700 hover:text-purple-900"
                onClick={() => setIsOpen(false)}
              >
                Templates
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-700 hover:text-purple-900"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-purple-900"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-purple-900"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/custom-request"
                className="block px-3 py-2 text-purple-900 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Request Custom
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

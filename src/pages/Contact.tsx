import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to know more about your NGO and how I can contribute."
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries,
            partnerships, or donation inquiries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-primary mb-6">Send Us a Message</h2>
              <Card className="border-none shadow-xl">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 99999 99999"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="How can we help you?"
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-hero hover:shadow-primary"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* WhatsApp Button */}
              <Card className="border-none shadow-md mt-6 bg-gradient-accent">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        Quick Support via WhatsApp
                      </h4>
                      <p className="text-sm text-white/90">
                        Get instant responses to your queries
                      </p>
                    </div>
                    <Button
                      onClick={handleWhatsApp}
                      variant="secondary"
                      size="lg"
                      className="bg-white text-secondary hover:bg-white/90"
                    >
                      <MessageCircle className="mr-2" />
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-primary mb-6">Contact Information</h2>

              <div className="space-y-6">
                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-hero text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Our Address</h4>
                        <p className="text-muted-foreground">
                          H-61, Third Floor, Subhash Market
                          <br />
                          Kotla Mubarakpur, South East Delhi
                          <br />
                          Delhi 110003, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-hero text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Email Us</h4>
                        <a
                          href="mailto:contact@crsjantrust.org"
                          className="text-primary hover:underline block"
                        >
                          contact@crsjantrust.org
                        </a>
                        <a
                          href="mailto:info@crsjantrust.org"
                          className="text-primary hover:underline block"
                        >
                          info@crsjantrust.org
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-hero text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Call Us</h4>
                        <a
                          href="tel:+919999999999"
                          className="text-primary hover:underline block"
                        >
                          +91 99999 99999
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Mon - Fri: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-primary text-center mb-12">Office Hours</h2>

          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <h4 className="font-bold text-lg mb-3">Weekdays</h4>
                  <p className="text-muted-foreground">Monday - Friday</p>
                  <p className="text-primary font-bold text-xl mt-2">
                    10:00 AM - 6:00 PM
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">Weekends</h4>
                  <p className="text-muted-foreground">Saturday</p>
                  <p className="text-primary font-bold text-xl mt-2">
                    10:00 AM - 2:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Closed on Sundays & Public Holidays
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

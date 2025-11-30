import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Trophy, Users } from "lucide-react";
import Layout from "@/components/Layout";
import DonateButton from "@/components/donatebutton";
import ProjectImplementation from "@/components/projectPlan";

const Home = () => {
  const pillars = [
    {
      icon: BookOpen,
      image: "/hero-education.jpg",
      title: "Education",
      description:
        "Empowering communities through quality education, scholarships, and skill development programs.",
    },
    {
      icon: Heart,
      image: "/healthcare.jpg",
      title: "Healthcare",
      description:
        "Providing accessible healthcare services, medical camps, and health awareness programs.",
    },
    {
      icon: Trophy,
      image: "/sports.jpg",
      title: "Sports Development",
      description:
        "Promoting sports culture with infrastructure, training, and opportunities for young athletes.",
    },
    {
      icon: Users,
      image: "/wellfare.jpg",
      title: "Social Welfare",
      description:
        "Supporting marginalized communities through welfare programs and sustainable development.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-education.jpg')" }} >
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Building a Better Tomorrow
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            M/S Choudhary Ram Singh Jan Utthan Trust - Empowering communities
            through education, healthcare, sports, and social welfare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <DonateButton />

            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

{/* Trust + Mission Section */}
<section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="container mx-auto px-4">
    
    {/* Main Heading with decorative elements */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
        Trust & Our Purpose
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
      <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
        Committed to creating sustainable impact and empowering communities through holistic development
      </p>
    </div>

    {/* Two Side Layout */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      
      {/* LEFT SIDE → TRUST GRID */}
      <div className="space-y-6">
        <div className="grid gap-6">

          {/* Founder Card */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Founder</h3>
                <p className="text-gray-600">Mr Deepanshu Arya</p>
              </div>
            </div>
          </div>

          {/* Trustee Card */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Trustee</h3>
                <p className="text-gray-600">Mrs. Shashi Bala</p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Choudhary.ramsingh.trust10@gmail.com
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +917291015735
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE → MISSION / VISION / OBJECTIVES */}
      <div className="space-y-6">
        <div className="grid gap-6">
          {/* Mission Card */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To create sustainable development and upliftment of
                  underprivileged communities through holistic support across
                  education, healthcare, sports, and social welfare sectors.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A society where every individual has access to quality
                  education, healthcare, sports opportunities, and social
                  support for holistic development and prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Four Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4">Our Four Pillars of Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work across four key sectors to create holistic development and
              lasting change in communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-primary hover:-translate-y-2 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform -mt-12 relative z-10 shadow-lg">
                    <pillar.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl mb-3 font-semibold">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Utilization Summary */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">
              ₹100 Crore Development Initiative
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Strategic allocation for maximum impact across all sectors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">₹40 Cr</div>
              <div className="text-lg">Education Sector</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">₹30 Cr</div>
              <div className="text-lg">Healthcare Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">₹20 Cr</div>
              <div className="text-lg">Sports Development</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">₹10 Cr</div>
              <div className="text-lg">Social Welfare</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full py-10">
          <DonateButton />
        </div>{" "}
      </section>
      <ProjectImplementation />
      {/* Projected Outcomes Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary mb-4">Projected Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our 3-year development initiative aims to transform lives across
              multiple sectors with measurable outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Education & Healthcare */}
            <div className="space-y-8">
              {/* Education Outcomes */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Education Transformation
                    </h3>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Students to Support</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">
                        10,000+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Educational Materials</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-bold">
                        15,000+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Skill Development</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                        5,000+
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Healthcare Outcomes */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Healthcare Impact
                    </h3>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="font-medium">Patients Treated</span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold">
                        25,000+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                      <span className="font-medium">Families Insured</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-bold">
                        5,000+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Health Check-ups</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">
                        10,000+
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sports & Social Welfare */}
            <div className="space-y-8">
              {/* Sports Outcomes */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Sports Development
                    </h3>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">Youth Supported</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                        2,000+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                      <span className="font-medium">Sports Talents</span>
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-bold">
                        300+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                      <span className="font-medium">Yoga Centers</span>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
                        5+
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Welfare Outcomes */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Social Welfare
                    </h3>
                  </div>
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                      <span className="font-medium">Beneficiaries</span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold">
                        50,000+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium">Water Stations</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold">
                        50+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-rose-50 rounded-lg">
                      <span className="font-medium">Marriages Supported</span>
                      <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full font-bold">
                        300+
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Overall Impact Summary */}
          <Card className="border-none shadow-xl bg-gradient-to-r from-primary to-blue-600 text-white mt-12">
            <CardContent className="py-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Overall Community Impact
                </h3>
                <p className="text-white/90">
                  Creating sustainable change across all sectors
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/80">Jobs Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-white/80">Communities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3 Years</div>
                  <div className="text-white/80">Transformation Journey</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <DonateButton />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-xl bg-gradient-accent text-white overflow-hidden">
            <CardContent className="py-16 text-center">
              <h2 className="mb-6 text-white">Support Our Mission</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Your contribution can make a real difference in the lives of
                thousands. Join us in building a better future for all.
              </p>
              <DonateButton />
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

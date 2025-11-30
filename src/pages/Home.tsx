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
<section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-10 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
        Trust & Our Purpose
      </h2>

      <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>

      <p className="text-gray-600 mt-4 md:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
        Committed to creating sustainable impact and empowering communities through holistic development
      </p>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

      {/* LEFT SIDE */}
      <div className="space-y-5">

        {/* Founder */}
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0M12 14a7 7 0 00-7 7h14" />
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold">Founder</h3>
              <p className="text-sm md:text-base text-gray-600">Mr Deepanshu Arya</p>
            </div>
          </div>
        </div>

        {/* Trustee */}
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20H7m10 0v-2M7 20v-2m5-7a3 3 0 11-6 0" />
              </svg>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold">Trustee</h3>
              <p className="text-sm md:text-base text-gray-600">Mrs. Shashi Bala</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l9 6 9-6" />
              </svg>
            </div>

            <div className="space-y-2 text-sm md:text-base">
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <p className="text-gray-600 break-all">
                Choudhary.ramsingh.trust10@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-5">

        {/* Mission */}
        <div className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center shrink-0">
              ⚡
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To create sustainable development and upliftment of underprivileged communities through education, healthcare, sports, and social welfare.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-green-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center shrink-0">
              👁️
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                A society where everyone has equal access to education, healthcare, sports, and social development.
              </p>
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

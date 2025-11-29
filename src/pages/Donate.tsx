import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import DonateButton from "@/components/donatebutton";
const Donate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Heart className="w-24 h-24 mx-auto mb-8 animate-pulse" />
          <h1 className="mb-6 text-5xl md:text-6xl font-bold">
            Transform Lives Today
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Join us in our mission to bring education, healthcare, sports, and
            welfare to underprivileged communities across India and beyond
          </p>
          <br />
          <DonateButton />
        </div>
      </section>
      {/* Two Grid Sections - Our Impact Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-primary text-center mb-16">
            Your Contribution Powers Real Change
          </h2>

          {/* Education Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                EDUCATION
              </div>
              <h3 className="text-3xl font-bold mb-6 text-primary">
                Building Futures Through Education
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                From primary schools to skill development centers, we're
                creating pathways to success for thousands of children. Your
                support provides scholarships, learning materials, digital
                literacy programs, and teacher training.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">
                    50+ Schools supported across rural India
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">
                    10,000+ Students receiving quality education
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">
                    Free digital literacy and skill training programs
                  </p>
                </div>
                <DonateButton />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/hero-education.jpg"
                alt="Children in classroom learning"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Healthcare Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="/healthcare.jpg"
                alt="Healthcare services for communities"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                HEALTHCARE
              </div>
              <h3 className="text-3xl font-bold mb-6 text-primary">
                Ensuring Health for All
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Quality healthcare shouldn't be a privilege. We provide mobile
                medical units, health camps, telemedicine services, and maternal
                care to remote communities where medical facilities are scarce.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">
                    Free health camps in 100+ villages
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">25,000+ Patients treated annually</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">
                    Mobile medical units serving remote areas
                  </p>
                </div>
                <DonateButton />
              </div>
            </div>
          </div>

          {/* Sports Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                SPORTS & WELFARE
              </div>
              <h3 className="text-3xl font-bold mb-6 text-primary">
                Empowering Through Sports & Community
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sports build character, discipline, and opportunity. Our
                programs identify talent, provide training facilities, and
                create pathways for young athletes. We also support community
                welfare initiatives for holistic development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">Sports academies in 20+ districts</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">5,000+ Young athletes trained</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-base">
                    Women empowerment and senior care programs
                  </p>
                </div>
                <DonateButton />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/sports.jpg"
                alt="Youth sports training program"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary mb-8">Supporting Us From Anywhere</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We welcome contributions from donors across India, United States,
              and worldwide. Your generosity knows no borders, and neither does
              our impact.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">🇮🇳</div>
                  <h4 className="font-bold text-lg mb-2">India</h4>
                  <p className="text-sm text-muted-foreground">
                    INR donations with tax benefits under 80G
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">🇺🇸</div>
                  <h4 className="font-bold text-lg mb-2">United States</h4>
                  <p className="text-sm text-muted-foreground">
                    International contributions welcome
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">🌍</div>
                  <h4 className="font-bold text-lg mb-2">Worldwide</h4>
                  <p className="text-sm text-muted-foreground">
                    Global donors making local impact
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 py-16 px-6 my-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
              Your Small Contribution Can Create a Big Impact 🌍
            </h2>

            <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed">
              Support <strong>M/S Choudhary Ram Singh Jan Utthan Trust</strong>{" "}
              in helping underprivileged families, education initiatives, and
              community welfare programs. Your donation enables us to serve not
              just locally, but globally.
            </p>

            <div className="flex justify-center">
              <DonateButton />
            </div>

            <p className="text-sm text-gray-600 mt-6">
              100% Secure • International Donations Accepted • Tax-Exempt (if
              applicable)
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;

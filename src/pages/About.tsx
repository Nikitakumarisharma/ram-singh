import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import DonateButton from "@/components/donatebutton";

const About = () => {
  const fundUtilization = [
    { sector: "Education", allocation: "₹40 Crores", percentage: "40%" },
    { sector: "Healthcare", allocation: "₹30 Crores", percentage: "30%" },
    {
      sector: "Sports Development",
      allocation: "₹20 Crores",
      percentage: "20%",
    },
    { sector: "Social Welfare", allocation: "₹10 Crores", percentage: "10%" },
  ];

  const implementationPhases = [
    {
      phase: "Phase 1 (Year 1)",
      focus: "Foundation Building",
      activities:
        "Infrastructure setup, pilot programs, team building, initial beneficiary identification",
    },
    {
      phase: "Phase 2 (Year 2)",
      focus: "Expansion & Scale",
      activities:
        "Program expansion to new regions, partnerships with local organizations, training programs",
    },
    {
      phase: "Phase 3 (Year 3)",
      focus: "Sustainability & Impact",
      activities:
        "Self-sustaining models, impact assessment, community ownership, replication frameworks",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6">About Our Trust</h1>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            M/S Choudhary Ram Singh Jan Utthan Trust - Dedicated to sustainable
            community development since 2024
          </p>
          <DonateButton />
        </div>
      </section>

      {/* Introduction */}
<section className="py-16">
  <div className="container mx-auto px-4 max-w-6xl">
    <Card className="border-none shadow-lg">
      <CardContent className="pt-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image Side */}
          <div className="w-full">
            <img
              src="/overview.png"   // change to your image path
              alt="Trust"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-lg leading-relaxed mb-6">
              M/S CHOUDHARY RAM SINGH JAN UTTHAN TRUST is a non-profit
              organization registered as a Trust, headquartered at H-61, Third
              Floor, Subhash Market, Kotla Mubarakpur, South East Delhi, Delhi
              110003. Established on 21st November 2024, the Trust is driven
              by a vision to bring sustainable upliftment to underprivileged
              and marginalized sections of society through various
              developmental initiatives.
            </p>

            <p className="text-lg leading-relaxed">
              We work across Education, Healthcare, Sports Development, and
              Social Welfare. We believe holistic support across these sectors
              enables true empowerment for poor and marginalized communities.
            </p>
          </div>

        </div>

      </CardContent>
    </Card>
  </div>
</section>


      {/* Detailed Objectives */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-primary text-center mb-12">
            Our Detailed Objectives
          </h2>

          <div className="space-y-4 mb-8">
            {[
              "Establish 500+ learning centers providing quality education and skill development to 100,000+ students across rural and urban underprivileged areas",
              "Set up mobile and permanent healthcare facilities serving 200,000+ beneficiaries annually with preventive and curative medical services",
              "Create world-class sports infrastructure and training programs for 50,000+ young athletes from marginalized backgrounds",
              "Implement comprehensive social welfare programs including women empowerment, elderly care, and livelihood generation for 75,000+ families",
              "Build sustainable community development models that can be replicated across different regions of India",
              "Foster partnerships with government bodies, corporates, and international organizations for maximum impact and resource optimization",
            ].map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Initiatives */}
<section className="py-16 bg-accent">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-primary text-center mb-12">
      Education Sector Initiatives
    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      
      {/* Image */}
      <img
        src="/education.png"
        className="w-full rounded-xl shadow-lg"
        alt="Education"
      />

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["School Infrastructure", "Building and renovating schools with smart classrooms, libraries, and labs"],
          ["Scholarship Programs", "Merit and need-based scholarships for deserving students"],
          ["Vocational Training", "Skill programs aligned with industry demands"],
          ["Digital Literacy", "Computer education in rural communities"],
        ].map(([title, text], i) => (
          <Card key={i} className="border-none shadow-md">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2 text-primary">{title}</h4>
              <p>{text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  </div>
</section>


      {/* Healthcare Programs */}
<section className="py-16">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-primary text-center mb-12">
      Healthcare Programs
    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["Mobile Medical Units", "Primary healthcare in remote areas"],
          ["Health Camps", "Free consultations and treatments"],
          ["Maternal & Child Health", "Nutrition and wellness care"],
          ["Health Awareness", "Hygiene and disease prevention"],
        ].map(([title, text], i) => (
          <Card key={i} className="border-none shadow-md">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2 text-primary">{title}</h4>
              <p>{text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image */}
      <img
        src="/healthcare.png"
        className="w-full rounded-xl shadow-lg"
        alt="Healthcare"
      />

    </div>
  </div>
</section>


      {/* Sports Development */}
<section className="py-16 bg-accent">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-primary text-center mb-12">
      Sports Development Programs
    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Image */}
      <img
        src="/coach.png"
        className="w-full rounded-xl shadow-lg"
        alt="Sports"
      />

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["Sports Infrastructure", "Playgrounds, stadiums & facilities"],
          ["Coaching & Training", "Certified professional coaching"],
          ["Equipment Support", "Gear & nutrition support"],
          ["Sports Scholarships", "Financial support to athletes"],
        ].map(([title, text], i) => (
          <Card key={i} className="border-none shadow-md">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2 text-primary">{title}</h4>
              <p>{text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  </div>
</section>


      {/* Social Welfare */}
<section className="py-16">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-primary text-center mb-12">
      Social Welfare Activities
    </h2>

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          ["Women Empowerment", "Self-help & entrepreneurship programs"],
          ["Elderly Care", "Healthcare & engagement for seniors"],
          ["Livelihood Programs", "Sustainable income initiatives"],
          ["Emergency Relief", "Disaster response & food support"],
        ].map(([title, text], i) => (
          <Card key={i} className="border-none shadow-md">
            <CardContent className="pt-6">
              <h4 className="font-bold text-lg mb-2 text-primary">{title}</h4>
              <p>{text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image */}
      <img
        src="/social.png"
        className="w-full rounded-xl shadow-lg"
        alt="Social"
      />

    </div>
  </div>
</section>


      {/* Fund Utilization Table */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-primary text-center mb-12">
            Proposed Utilization of ₹100 Crores
          </h2>

          <Card className="border-none shadow-lg overflow-hidden mb-8">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="py-4 px-6 text-left">Sector</th>
                      <th className="py-4 px-6 text-right">Allocation</th>
                      <th className="py-4 px-6 text-right">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fundUtilization.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-accent">
                        <td className="py-4 px-6 font-medium">{item.sector}</td>
                        <td className="py-4 px-6 text-right font-bold text-primary">
                          {item.allocation}
                        </td>
                        <td className="py-4 px-6 text-right">
                          {item.percentage}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-muted font-bold">
                      <td className="py-4 px-6">Total</td>
                      <td className="py-4 px-6 text-right text-primary">
                        ₹100 Crores
                      </td>
                      <td className="py-4 px-6 text-right">100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="text-center">
            <DonateButton />
          </div>
        </div>
      </section>

      {/* Implementation Plan */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-primary text-center mb-12">
            3-Year Implementation Plan
          </h2>

          <div className="space-y-6 mb-8">
            {implementationPhases.map((phase, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-primary transition-all"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-hero text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-xl mb-2 text-primary">
                        {phase.phase}
                      </h4>
                      <p className="text-lg font-medium mb-2">{phase.focus}</p>
                      <p className="text-muted-foreground">
                        {phase.activities}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projected Outcomes */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12 text-white">
            Projected Outcomes (3 Years)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-3">100K+</div>
              <div className="text-lg">Students Educated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-3">200K+</div>
              <div className="text-lg">Healthcare Beneficiaries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-3">50K+</div>
              <div className="text-lg">Athletes Trained</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-3">75K+</div>
              <div className="text-lg">Families Supported</div>
            </div>
          </div>
          <div className="text-center">
            <DonateButton />
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transforming Lives, Building Futures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach creates lasting impact across multiple
              dimensions of community development
            </p>
          </div>

          {/* Main Impact Content */}
          <Card className="border-none shadow-2xl bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-100 rounded-full translate-x-24 translate-y-24"></div>

            <CardContent className="p-12 relative z-10">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: "🎯",
                    title: "Strategic Focus",
                    description:
                      "Targeted interventions across four core sectors for maximum impact",
                  },
                  {
                    icon: "🔄",
                    title: "Sustainable Model",
                    description:
                      "Community-owned programs ensuring long-term sustainability",
                  },
                  {
                    icon: "📈",
                    title: "Measurable Results",
                    description: "Clear metrics and regular impact assessments",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="bg-blue-50/50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <p className="text-lg leading-relaxed text-gray-800">
                    Through the strategic deployment of{" "}
                    <span className="font-bold text-blue-700">₹100 Crores</span>{" "}
                    across our four core sectors, we aim to create a
                    transformative impact on the lives of over{" "}
                    <span className="font-bold text-green-700">
                      425,000+ direct beneficiaries
                    </span>{" "}
                    within the first three years of operation. Our integrated
                    approach ensures that communities receive comprehensive
                    support addressing their multifaceted needs.
                  </p>
                </div>

                <div className="bg-green-50/50 rounded-2xl p-6 border-l-4 border-green-500">
                  <p className="text-lg leading-relaxed text-gray-800">
                    Beyond direct beneficiaries, we anticipate creating a ripple
                    effect that will positively impact at least{" "}
                    <span className="font-bold text-purple-700">
                      2 million individuals
                    </span>{" "}
                    indirectly through improved community infrastructure,
                    enhanced social support systems, and the creation of
                    sustainable livelihood opportunities.
                  </p>
                </div>

                <div className="bg-purple-50/50 rounded-2xl p-6 border-l-4 border-purple-500">
                  <p className="text-lg leading-relaxed text-gray-800">
                    Our commitment extends beyond immediate relief to creating
                    long-term, sustainable change. We focus on building local
                    capacity, fostering community ownership, and creating
                    replicable models that can be scaled across different
                    regions of India, ultimately contributing to national
                    development goals and creating a more equitable society.
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

export default About;

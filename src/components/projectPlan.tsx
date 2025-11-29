import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronRight,
  Calendar,
  CheckCircle,
  Building,
  Users,
  Heart,
  Award,
} from "lucide-react";

const ProjectImplementation = () => {
  const [activeTab, setActiveTab] = useState(0);

  const implementationPhases = [
    {
      phase: "Phase 1",
      duration: "First 12 Months",
      title: "Foundation & Initial Operations",
      icon: <Building className="w-5 h-5" />,
      focus: "Establishing basic infrastructure and launching initial programs",
      sectors: [
        {
          name: "Education Sector",
          icon: <Users className="w-4 h-4" />,
          activities: [
            "Identify and secure locations for schools, tuition centers, sewing centers, and computer institutes",
            "Recruit qualified teachers, trainers, and administrative staff",
            "Launch free play schools and tuition centers in targeted areas",
            "Distribute educational materials: books, bags, uniforms, laptops, computers, etc.",
          ],
        },
        {
          name: "Healthcare Sector",
          icon: <Heart className="w-4 h-4" />,
          activities: [
            "Organize free medical camps for full body check-ups",
            "Distribute free medicines and facilitate initial medical insurance enrollments",
            "Set up basic physiotherapy centers and mobile health check-up units",
          ],
        },
        {
          name: "Sports Sector",
          icon: <Award className="w-4 h-4" />,
          activities: [
            "Distribute sports kits, dresses, and nutrition supplements to selected talented youth",
            "Hire initial sports trainers and coaches",
            "Start Yoga centers for the elderly and community members",
          ],
        },
        {
          name: "Social Welfare Activities",
          icon: <CheckCircle className="w-4 h-4" />,
          activities: [
            "Conduct food distribution drives and cloth donation programs",
            "Set up water facilities (PYAUs) at public places",
            "Start providing free legal aid services",
          ],
        },
        {
          name: "Infrastructure & Management",
          icon: <Building className="w-4 h-4" />,
          activities: [
            "Establish central and regional administrative offices",
            "Develop monitoring and reporting systems for project tracking",
          ],
        },
      ],
    },
    {
      phase: "Phase 2",
      duration: "12 to 24 Months",
      title: "Expansion & Infrastructure Development",
      icon: <Calendar className="w-5 h-5" />,
      focus:
        "Scaling successful programs and developing permanent infrastructure",
      sectors: [
        {
          name: "Education Sector",
          icon: <Users className="w-4 h-4" />,
          activities: [
            "Expand the number of schools, tuition centers, and skill training centers based on Phase 1 assessment",
            "Start partnerships with professional institutes for competitive exam coaching",
          ],
        },
        {
          name: "Healthcare Sector",
          icon: <Heart className="w-4 h-4" />,
          activities: [
            "Begin construction of a full-fledged charitable hospital/nursing home",
            "Expand mobile health services to remote and rural areas",
            "Organize large-scale health awareness and preventive healthcare camps",
          ],
        },
        {
          name: "Sports Sector",
          icon: <Award className="w-4 h-4" />,
          activities: [
            "Identify and sponsor more talented youth for advanced sports training",
            "Tie-up with reputed sports academies for admissions and scholarships",
          ],
        },
        {
          name: "Social Welfare Activities",
          icon: <CheckCircle className="w-4 h-4" />,
          activities: [
            "Expand food, clothing, and legal aid activities to additional communities and slum areas",
            "Conduct mass marriage ceremonies for poor girls with full financial support",
          ],
        },
        {
          name: "Capacity Building",
          icon: <Building className="w-4 h-4" />,
          activities: [
            "Ongoing staff training and development programs",
            "Strengthening partnerships with government and private agencies for resource mobilization",
          ],
        },
      ],
    },
    {
      phase: "Phase 3",
      duration: "24 to 36 Months",
      title: "Consolidation, Monitoring & Scaling",
      icon: <CheckCircle className="w-5 h-5" />,
      focus: "Sustainable operations and impact assessment",
      sectors: [
        {
          name: "Education Sector",
          icon: <Users className="w-4 h-4" />,
          activities: [
            "Scale successful models to new towns and cities",
            "Launch advanced professional courses and coaching programs",
          ],
        },
        {
          name: "Healthcare Sector",
          icon: <Heart className="w-4 h-4" />,
          activities: [
            "Complete construction and operationalize the charitable hospital/nursing home",
            "Initiate specialized departments (Cancer treatment, Childcare, Physiotherapy) in the hospital",
          ],
        },
        {
          name: "Sports Sector",
          icon: <Award className="w-4 h-4" />,
          activities: [
            "Organize sports tournaments and competitions to showcase talents",
            "Provide national and international level exposure to outstanding athletes",
          ],
        },
        {
          name: "Social Welfare Activities",
          icon: <CheckCircle className="w-4 h-4" />,
          activities: [
            "Implement new initiatives based on community feedback and emerging needs",
            "Develop sustainable models for continuous food, water, legal aid, and marriage support",
          ],
        },
        {
          name: "Monitoring & Evaluation",
          icon: <Building className="w-4 h-4" />,
          activities: [
            "Conduct third-party audits and evaluations of project impact",
            "Publish annual reports and impact stories",
            "Revise strategy based on learnings and feedback for future growth",
          ],
        },
      ],
    },
  ];

  const keyElements = [
    {
      title: "Beneficiary Identification",
      description:
        "Clear selection criteria based on socio-economic background",
    },
    {
      title: "Transparency & Accountability",
      description: "Regular financial and activity audits",
    },
    {
      title: "Partnerships",
      description:
        "Collaborate with NGOs, government departments, corporate CSR programs",
    },
    {
      title: "Volunteer Engagement",
      description: "Build a network of volunteers and social workers",
    },
    {
      title: "Technology-Enabled Monitoring",
      description:
        "Use MIS (Management Information System) for real-time project tracking",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className=" font-bold text-primary mb-4">
            Project Implementation Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured, phased approach over 36 months to ensure effective and
            impactful execution
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {implementationPhases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-700 shadow-md hover:shadow-lg border border-gray-100"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  activeTab === index
                    ? "bg-white/20"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {phase.icon}
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">{phase.phase}</div>
                <div className="text-sm opacity-90">{phase.duration}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <Card className="border-none shadow-2xl bg-white overflow-hidden">
          <CardContent className="p-0">
            {implementationPhases.map((phase, index) => (
              <div
                key={index}
                className={`p-8 ${activeTab === index ? "block" : "hidden"}`}
              >
                {/* Phase Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {phase.phase} • {phase.duration}
                        </h3>
                        <p className="text-lg text-blue-600 font-medium">
                          {phase.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{phase.focus}</p>
                  </div>
                </div>

                {/* Sector Activities */}
                <div className="space-y-6">
                  {phase.sectors.map((sector, sectorIndex) => (
                    <div
                      key={sectorIndex}
                      className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                            {sector.icon}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {sector.name}
                          </h4>
                        </div>
                      </div>
                      <div className="p-6 bg-white">
                        <ul className="space-y-3">
                          {sector.activities.map((activity, activityIndex) => (
                            <li
                              key={activityIndex}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectImplementation;

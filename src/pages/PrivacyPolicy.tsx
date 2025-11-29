import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-primary mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: November 2024</p>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground mb-4">
                  M/S Choudhary Ram Singh Jan Utthan Trust ("we," "us," "our,"
                  or "the Trust") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4 font-semibold">
                  We may collect information about you in a variety of ways:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    <strong>Personal Data:</strong> Name, email address, phone
                    number, address, and donation information
                  </li>
                  <li>
                    <strong>Device Information:</strong> IP address, browser
                    type, operating system, and device identifiers
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Pages visited, time spent on
                    pages, and interaction with website features
                  </li>
                  <li>
                    <strong>Cookies:</strong> We use cookies and similar
                    tracking technologies to enhance your experience
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Processing and managing donations</li>
                  <li>
                    Communicating with you about our programs and initiatives
                  </li>
                  <li>Sending newsletters and updates (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                  <li>
                    Providing customer support and responding to inquiries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. However, we may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Payment processors (for secure donation processing)</li>
                  <li>
                    Service providers who assist us in operating our website
                  </li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  transmission over the internet is completely secure, and we
                  cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our website uses cookies and similar tracking technologies to
                  enhance your experience. You can control cookie settings
                  through your browser preferences. Disabling cookies may limit
                  your website functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  7. Your Rights and Choices
                </h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  8. Third-Party Links
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices of these external
                  sites. Please review their privacy policies before providing
                  any personal information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  9. Policy Updates
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page, and we encourage you to review
                  this policy regularly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  10. Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or our privacy
                  practices, please contact us at:
                </p>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;

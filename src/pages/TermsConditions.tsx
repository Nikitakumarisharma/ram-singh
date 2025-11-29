import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-primary mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: November 2024</p>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to M/S Choudhary Ram Singh Jan Utthan Trust ("we,"
                  "us," "our," or "the Trust"). These Terms & Conditions
                  ("Terms") govern your use of our website and services. By
                  accessing and using our website, you agree to be bound by
                  these Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Use of Website
                </h2>
                <p className="text-muted-foreground mb-4">
                  You agree to use this website only for lawful purposes and in
                  a way that does not infringe upon the rights of others or
                  restrict their use and enjoyment of the website. Prohibited
                  behavior includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Harassing or causing distress or inconvenience to any person
                  </li>
                  <li>Obscene or offensive content or language</li>
                  <li>Disrupting the normal flow of dialogue in our website</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. Donations and Contributions
                </h2>
                <p className="text-muted-foreground mb-4">
                  All donations made through our website are voluntary
                  contributions. By making a donation, you acknowledge that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Your donation is non-refundable (see Refund Policy for
                    details)
                  </li>
                  <li>
                    The Trust will use your donation to support its charitable
                    mission
                  </li>
                  <li>
                    You have the right to request information about how your
                    donation is used
                  </li>
                  <li>Tax benefits (if any) will be communicated separately</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Intellectual Property Rights
                </h2>
                <p className="text-muted-foreground mb-4">
                  All content on this website, including text, graphics, logos,
                  images, and software, is the property of the Trust or its
                  content suppliers and is protected by international copyright
                  laws. You may not reproduce, distribute, or transmit any
                  content without prior written permission.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Disclaimer of Warranties
                </h2>
                <p className="text-muted-foreground mb-4">
                  This website and its content are provided on an "as is" basis.
                  The Trust makes no representations or warranties of any kind,
                  express or implied, regarding the website or its content. The
                  Trust disclaims all warranties, including merchantability,
                  fitness for a particular purpose, and non-infringement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground mb-4">
                  In no event shall the Trust be liable for any indirect,
                  incidental, special, consequential, or punitive damages
                  resulting from your use of or inability to use the website or
                  its content.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  7. External Links
                </h2>
                <p className="text-muted-foreground mb-4">
                  Our website may contain links to external websites. The Trust
                  is not responsible for the content or accuracy of external
                  websites. Your access to external websites is at your own
                  risk.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  8. Changes to Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Trust reserves the right to modify these Terms at any time
                  without notice. Your continued use of the website following
                  the posting of changes constitutes your acceptance of those
                  changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  9. Contact Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms & Conditions,
                  please contact us at:
                </p>
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Email: info@jutrust.org
                    <br />
                    Address: [Your Address Here]
                    <br />
                    Phone: [Your Phone Here]
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;

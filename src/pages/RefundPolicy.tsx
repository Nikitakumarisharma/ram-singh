import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const RefundPolicy = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-primary mb-4">Refund Policy</h1>
            <p className="text-muted-foreground">Last updated: November 2024</p>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  No Refund Policy
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  M/S Choudhary Ram Singh Jan Utthan Trust operates under a{" "}
                  <strong>No Refund Policy</strong>. All donations made to the
                  Trust are final and non-refundable.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  1. Understanding Donations
                </h2>
                <p className="text-muted-foreground mb-4">
                  When you make a donation to the Trust, you are making a
                  voluntary contribution to support our charitable mission.
                  Donations are intended to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Support education programs and scholarships</li>
                  <li>Fund healthcare initiatives and medical camps</li>
                  <li>Develop sports facilities and training programs</li>
                  <li>
                    Support social welfare and community development projects
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  2. Non-Refundable Nature of Donations
                </h2>
                <p className="text-muted-foreground mb-4">
                  Once a donation is made and processed, it is{" "}
                  <strong>permanently transferred</strong> to the Trust and
                  becomes part of our charitable corpus. Therefore, all
                  donations are:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Non-refundable under any circumstances</li>
                  <li>Final and irreversible</li>
                  <li>Allocated to our ongoing programs and initiatives</li>
                  <li>Not subject to return even if you change your mind</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  3. Processing Errors
                </h2>
                <p className="text-muted-foreground mb-4">
                  In the rare event of a technical error or duplicate processing
                  of your donation, we will investigate and take corrective
                  action. However, this does not constitute a refund but rather
                  a correction of the transaction. If a duplicate charge occurs,
                  we may:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Document the duplicate transaction</li>
                  <li>Adjust our records accordingly</li>
                  <li>Provide confirmation of the error correction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  4. Your Donation is Final
                </h2>
                <p className="text-muted-foreground mb-4">
                  Before making a donation, please ensure that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You have read and understood our mission and programs</li>
                  <li>You are voluntarily making the contribution</li>
                  <li>You understand that the donation is non-refundable</li>
                  <li>You have the financial means to support this donation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  5. Tax Implications
                </h2>
                <p className="text-muted-foreground mb-4">
                  Since donations are non-refundable, they may be eligible for
                  tax deductions under applicable laws. Please consult with a
                  tax professional regarding your specific situation and
                  eligibility for tax benefits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  6. Impact of Your Donation
                </h2>
                <p className="text-muted-foreground mb-4">
                  Your non-refundable donation makes a meaningful impact:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Supports thousands of beneficiaries across multiple sectors
                  </li>
                  <li>Creates lasting change in communities</li>
                  <li>Funds sustainable development initiatives</li>
                  <li>Contributes to our ₹100 Crore development initiative</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  7. Questions or Concerns
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about our No Refund Policy or concerns
                  about a transaction, please contact us:
                </p>
                <div className="bg-accent p-4 rounded-lg">
                  <p className="text-muted-foreground">
                    Email: support@jutrust.org
                    <br />
                    Address: [Your Address Here]
                    <br />
                    Phone: [Your Phone Here]
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-red-50">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-red-700 mb-4">
                  Important Notice
                </h2>
                <p className="text-red-800 mb-4">
                  By proceeding with your donation, you acknowledge and agree
                  that:
                </p>
                <ul className="list-disc list-inside text-red-800 space-y-2">
                  <li>You have read and understood this No Refund Policy</li>
                  <li>All donations are final and non-refundable</li>
                  <li>You voluntarily make this contribution</li>
                  <li>You accept these terms and conditions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;

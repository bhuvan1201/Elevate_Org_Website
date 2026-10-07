import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Card = ({ className = "", children }) => (
  <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
    {children}
  </div>
);

const CardContent = ({ className = "", children }) => (
  <div className={"p-6 " + className}>{children}</div>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <section className="bg-gradient-to-r from-slate-100 to-slate-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-slate-600 text-lg">
            Have a question, want to donate gear, volunteer, partner, sponsor, or request a speaker? Send us a message.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
            <p className="mt-2 text-slate-600">
              We’d love to hear from students, parents, schools, donors, partners, and community organizations.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>admin@elevate.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(316) 559-0845</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Wichita, Kansas</span>
              </div>
            </div>

            <Card className="rounded-2xl mt-10">
              <CardContent>
                <h3 className="text-lg font-semibold">Contact categories</h3>
                <ul className="mt-3 list-disc pl-5 text-slate-600 space-y-1">
                  <li>Donate gear</li>
                  <li>Volunteer</li>
                  <li>Partner with us</li>
                  <li>Sponsor a campaign</li>
                  <li>Media or speaking request</li>
                  <li>General question</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl">
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

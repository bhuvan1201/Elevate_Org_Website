import { useState } from "react";
import {
    ArrowRight,
    Gift,
    HeartHandshake,
    Users,
    Megaphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ className = "", children }) => (
    <div className={"rounded-2xl border border-slate-200 bg-white " + className}>
        {children}
    </div>
);

const CardContent = ({ className = "", children }) => (
    <div className={"p-6 " + className}>{children}</div>
);

const Button = ({ className = "", children, ...props }) => (
    <button
        {...props}
        className={
            "px-5 py-3 rounded-2xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition " +
            className
        }
    >
        {children}
    </button>
);

function encode(data) {
    return Object.keys(data)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
        .join("&");
}

function ActionCard({ icon, title, text, href }) {
    return (
        <a href={href} className="group">
            <Card className="rounded-3xl h-full hover:shadow-lg transition">
                <CardContent className="p-7">
                    <div className="h-12 w-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                        {icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold group-hover:text-teal-700 transition">
                        {title}
                    </h3>
                    <p className="mt-2 text-slate-600">{text}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                        Get started <ArrowRight className="h-4 w-4" />
                    </div>
                </CardContent>
            </Card>
        </a>
    );
}

export default function GetInvolved() {
    const [gearForm, setGearForm] = useState({
        name: "",
        email: "",
        phone: "",
        gearType: "",
        quantity: "",
        condition: "",
        preference: "",
        message: "",
        "bot-field": "",
    });

    const [volunteerForm, setVolunteerForm] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        availability: "",
        message: "",
        "bot-field": "",
    });

    const [status, setStatus] = useState("");

    async function submitForm(e, formName, data, resetFn) {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const body = encode({
                "form-name": formName,
                ...data,
            });

            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body,
            });

            if (!res.ok) throw new Error("Form failed");

            setStatus("Thanks! We received your submission.");
            resetFn();
        } catch {
            setStatus("Something went wrong. Please try again.");
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-slate-100 to-slate-200 pt-40 md:pb-16">
                <div className="mx-auto max-w-7xl px-4">
                    <p className="text-sm font-semibold text-teal-700">Get Involved</p>
                    <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
                        Help ELEVATE create youth-led impact
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-slate-600">
                        Donate gear, volunteer your time, partner with us, or sponsor a campaign to support education, sports access, health awareness, and service.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-6">
                    <ActionCard
                        icon={<Gift className="h-6 w-6" />}
                        title="Donate Tennis Gear"
                        text="Give rackets, shoes, balls, bags, and tennis supplies a second life."
                        href="#donate-gear"
                    />
                    <ActionCard
                        icon={<HeartHandshake className="h-6 w-6" />}
                        title="Volunteer"
                        text="Help with tutoring, gear collection, videos, campaigns, school drives, and events."
                        href="#volunteer"
                    />
                    <ActionCard
                        icon={<Users className="h-6 w-6" />}
                        title="Partner With Us"
                        text="Schools, clubs, academies, and organizations can help expand our reach."
                        href="/contact"
                    />
                    <ActionCard
                        icon={<Megaphone className="h-6 w-6" />}
                        title="Sponsor a Campaign"
                        text="Support awareness materials, printing, shipping, outreach, events, and India expansion."
                        href="/donate"
                    />
                </div>
            </section>

            <section id="donate-gear" className="py-16">
                <div className="mx-auto max-w-5xl px-4">
                    <Card className="rounded-3xl">
                        <CardContent className="p-8">
                            <h2 className="text-3xl font-bold">Donate Gear Form</h2>
                            <p className="mt-2 text-slate-600">
                                Tell us what tennis gear you would like to donate.
                            </p>

                            <form
                                name="gear-donation"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                className="mt-6 grid md:grid-cols-2 gap-4"
                                onSubmit={(e) =>
                                    submitForm(e, "gear-donation", gearForm, () =>
                                        setGearForm({
                                            name: "",
                                            email: "",
                                            phone: "",
                                            gearType: "",
                                            quantity: "",
                                            condition: "",
                                            preference: "",
                                            message: "",
                                            "bot-field": "",
                                        })
                                    )
                                }
                            >
                                <input type="hidden" name="form-name" value="gear-donation" />
                                <input type="hidden" name="bot-field" value={gearForm["bot-field"]} />

                                <Input label="Name" value={gearForm.name} onChange={(e) => setGearForm({ ...gearForm, name: e.target.value })} />
                                <Input label="Email" type="email" value={gearForm.email} onChange={(e) => setGearForm({ ...gearForm, email: e.target.value })} />
                                <Input label="Phone" value={gearForm.phone} onChange={(e) => setGearForm({ ...gearForm, phone: e.target.value })} />
                                <Input label="Gear Type" placeholder="Rackets, shoes, balls, bags..." value={gearForm.gearType} onChange={(e) => setGearForm({ ...gearForm, gearType: e.target.value })} />
                                <Input label="Quantity" value={gearForm.quantity} onChange={(e) => setGearForm({ ...gearForm, quantity: e.target.value })} />

                                <Select label="Condition" value={gearForm.condition} onChange={(e) => setGearForm({ ...gearForm, condition: e.target.value })}>
                                    <option value="">Select condition</option>
                                    <option>New</option>
                                    <option>Like New</option>
                                    <option>Good</option>
                                    <option>Used but playable</option>
                                </Select>

                                <Select label="Pickup / Drop-off Preference" value={gearForm.preference} onChange={(e) => setGearForm({ ...gearForm, preference: e.target.value })}>
                                    <option value="">Select preference</option>
                                    <option>Pickup preferred</option>
                                    <option>Drop-off preferred</option>
                                    <option>Either works</option>
                                </Select>

                                <div className="md:col-span-2">
                                    <Textarea label="Message" value={gearForm.message} onChange={(e) => setGearForm({ ...gearForm, message: e.target.value })} />
                                </div>

                                <div className="md:col-span-2">
                                    <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                                        Submit Gear Donation
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="volunteer" className="py-16 bg-white">
                <div className="mx-auto max-w-5xl px-4">
                    <Card className="rounded-3xl">
                        <CardContent className="p-8">
                            <h2 className="text-3xl font-bold">Volunteer Form</h2>
                            <p className="mt-2 text-slate-600">
                                Choose how you would like to help.
                            </p>

                            <form
                                name="volunteer"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                className="mt-6 grid md:grid-cols-2 gap-4"
                                onSubmit={(e) =>
                                    submitForm(e, "volunteer", volunteerForm, () =>
                                        setVolunteerForm({
                                            name: "",
                                            email: "",
                                            phone: "",
                                            interest: "",
                                            availability: "",
                                            message: "",
                                            "bot-field": "",
                                        })
                                    )
                                }
                            >
                                <input type="hidden" name="form-name" value="volunteer" />
                                <input type="hidden" name="bot-field" value={volunteerForm["bot-field"]} />

                                <Input label="Name" value={volunteerForm.name} onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })} />
                                <Input label="Email" type="email" value={volunteerForm.email} onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })} />
                                <Input label="Phone" value={volunteerForm.phone} onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })} />

                                <Select label="Volunteer Interest" value={volunteerForm.interest} onChange={(e) => setVolunteerForm({ ...volunteerForm, interest: e.target.value })}>
                                    <option value="">Select option</option>
                                    <option>Tutoring</option>
                                    <option>Gear collection</option>
                                    <option>Videos</option>
                                    <option>Social media</option>
                                    <option>Campaigns</option>
                                    <option>School drives</option>
                                    <option>Events</option>
                                </Select>

                                <Input label="Availability" value={volunteerForm.availability} onChange={(e) => setVolunteerForm({ ...volunteerForm, availability: e.target.value })} />

                                <div className="md:col-span-2">
                                    <Textarea label="Message" value={volunteerForm.message} onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })} />
                                </div>

                                <div className="md:col-span-2">
                                    <Button type="submit" className="bg-teal-600 hover:bg-teal-700">
                                        Submit Volunteer Form
                                    </Button>
                                </div>
                            </form>

                            {status && <p className="mt-4 text-sm text-teal-700">{status}</p>}
                        </CardContent>
                    </Card>
                </div>
            </section>
        </main>
    );
}

function Input({ label, value, onChange, type = "text", placeholder = "" }) {
    return (
        <label className="block">
            <span className="text-sm text-slate-700">{label}</span>
            <input
                required
                type={type}
                placeholder={placeholder}
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}

function Select({ label, value, onChange, children }) {
    return (
        <label className="block">
            <span className="text-sm text-slate-700">{label}</span>
            <select
                required
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                value={value}
                onChange={onChange}
            >
                {children}
            </select>
        </label>
    );
}

function Textarea({ label, value, onChange }) {
    return (
        <label className="block">
            <span className="text-sm text-slate-700">{label}</span>
            <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900"
                value={value}
                onChange={onChange}
            />
        </label>
    );
}
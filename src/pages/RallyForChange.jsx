import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CalendarDays,
    CheckCircle2,
    Clock3,
    LoaderCircle,
    MapPin,
    Trophy,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

const INITIAL_FORM = {
    parentName: "",
    childName: "",
    age: "",
    email: "",
    timeSlot: "",
    volunteerAcknowledged: false,
    participationPermission: false,
};

const Card = ({ className = "", children }) => (
    <div
        className={`rounded-3xl border border-slate-200 bg-white ${className}`}
    >
        {children}
    </div>
);

export default function RallyForChange() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [registrationCount, setRegistrationCount] = useState(0);
    const [isLoadingCount, setIsLoadingCount] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const loadRegistrationCount = useCallback(async () => {
        setIsLoadingCount(true);

        const { count, error } = await supabase
            .from("rally_registrations")
            .select("id", {
                count: "exact",
                head: true,
            });

        if (error) {
            console.error("Could not load registration count:", error);
            setIsLoadingCount(false);
            return;
        }

        setRegistrationCount(count ?? 0);
        setIsLoadingCount(false);
    }, []);

    useEffect(() => {
        loadRegistrationCount();
    }, [loadRegistrationCount]);

    function handleInputChange(event) {
        const { name, value, type, checked } = event.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setErrorMessage("");

        const ageNumber = Number(form.age);

        if (
            !form.parentName.trim() ||
            !form.childName.trim() ||
            !form.age ||
            !form.email.trim()
        ) {
            setErrorMessage("Please complete every field.");
            return;
        }

        if (!form.timeSlot) {
            setErrorMessage("Please select a preferred tennis session.");
            return;
        }

        if (
            !Number.isInteger(ageNumber) ||
            ageNumber < 1 ||
            ageNumber > 18
        ) {
            setErrorMessage("Please enter a valid age between 1 and 18.");
            return;
        }

        if (
            !form.volunteerAcknowledged ||
            !form.participationPermission
        ) {
            setErrorMessage(
                "Please select both permission checkboxes before registering."
            );
            return;
        }

        setIsSubmitting(true);

        const { error } = await supabase
            .from("rally_registrations")
            .insert({
                parent_name: form.parentName.trim(),
                child_name: form.childName.trim(),
                age: ageNumber,
                email: form.email.trim().toLowerCase(),
                time_slot: form.timeSlot,
                volunteer_acknowledged: form.volunteerAcknowledged,
                participation_permission: form.participationPermission,
            });

        if (error) {
            console.error("Registration failed:", error);

            setErrorMessage(
                "We could not complete your registration. Please try again."
            );

            setIsSubmitting(false);
            return;
        }

        setRegistrationCount((currentCount) => currentCount + 1);
        setForm(INITIAL_FORM);
        setSubmitted(true);
        setIsSubmitting(false);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    if (submitted) {
        return (
            <main className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-slate-50 px-4 pt-36 pb-20 text-slate-900">
                <motion.section
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mx-auto max-w-3xl"
                >
                    <Card className="overflow-hidden shadow-2xl">
                        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-10 text-center text-white md:px-12">
                            <div className="text-6xl" aria-hidden="true">
                                🎉
                            </div>

                            <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
                                Thank You!
                            </h1>

                            <p className="mt-5 text-xl font-medium text-teal-50 md:text-2xl">
                                We're excited to see you
                                <br />
                                at Rally for Change!
                            </p>
                        </div>

                        <div className="p-7 text-center md:p-12">
                            <div className="mx-auto grid max-w-xl gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl bg-slate-50 p-5">
                                    <CalendarDays className="mx-auto h-7 w-7 text-teal-700" />

                                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                                        Date
                                    </p>

                                    <p className="mt-1 text-xl font-bold">Sunday</p>
                                    <p className="text-lg text-slate-700">
                                        August 16
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-5">
                                    <Clock3 className="mx-auto h-7 w-7 text-teal-700" />

                                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                                        Time
                                    </p>

                                    <p className="mt-1 text-xl font-bold">
                                        5:00 PM
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                                    <MapPin className="mx-auto h-7 w-7 text-teal-700" />

                                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                                        Location
                                    </p>

                                    <p className="mt-1 text-xl font-bold">
                                        Eastview Park
                                    </p>

                                    <p className="text-slate-600">
                                        Tennis Court, Wichita, Kansas
                                    </p>
                                </div>
                            </div>

                            <div className="mt-7 rounded-2xl border border-teal-200 bg-teal-50 p-5">
                                <Users className="mx-auto h-7 w-7 text-teal-700" />

                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-teal-800">
                                    Registration Count
                                </p>

                                <p className="mt-1 text-4xl font-extrabold text-teal-900">
                                    {registrationCount}
                                </p>

                                <p className="mt-1 text-sm text-teal-800">
                                    {registrationCount === 1
                                        ? "child registered"
                                        : "children registered"}
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
                                >
                                    Register Another Child
                                </button>

                                <Link
                                    to="/"
                                    className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 font-semibold text-white transition hover:bg-teal-700"
                                >
                                    Return Home
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </Card>
                </motion.section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
            <section className="bg-gradient-to-r from-teal-50 via-white to-yellow-50 pt-40 pb-16">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">
                            Tennis for Good
                        </p>

                        <h1 className="mt-3 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
                            Rally for Change
                        </h1>

                        <p className="mt-3 text-2xl font-bold text-cyan-700">
                            Free Tennis Event
                        </p>

                        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                            A youth-led tennis event created to introduce children to the
                            game, build confidence, and bring our community together through
                            sports.
                        </p>

                        <div className="mt-7 grid max-w-2xl gap-4 sm:grid-cols-2">
                            <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <CalendarDays className="mt-0.5 h-6 w-6 shrink-0 text-teal-700" />

                                <div>
                                    <p className="font-bold">
                                        Sunday, August 16, 2026
                                    </p>

                                    <p className="text-sm text-slate-600">
                                        5:00–7:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-teal-700" />

                                <div>
                                    <p className="font-bold">
                                        Eastview Park Tennis Court
                                    </p>

                                    <p className="text-sm text-slate-600">
                                        Wichita, Kansas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#register"
                            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
                        >
                            Register Now
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <Card className="p-7 shadow-xl md:p-9">
                            <Trophy className="h-11 w-11 text-yellow-500" />

                            <h2 className="mt-4 text-2xl font-bold">
                                What the event includes
                            </h2>

                            <ul className="mt-5 space-y-4 text-slate-700">
                                {[
                                    "A fun tennis lesson taught by junior players",
                                    "Elevate shirts",
                                    "Free racquet giveaways",
                                    "Drinks and snacks",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-7 rounded-2xl bg-teal-50 p-5 text-center">
                                <Users className="mx-auto h-7 w-7 text-teal-700" />

                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-teal-800">
                                    Registrations
                                </p>

                                <p className="mt-1 text-4xl font-extrabold text-teal-900">
                                    {isLoadingCount ? "—" : registrationCount}
                                </p>

                                <p className="mt-1 text-sm text-teal-800">
                                    {registrationCount === 1
                                        ? "child registered"
                                        : "children registered"}
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            <section
                id="register"
                className="scroll-mt-28 py-16"
            >
                <div className="mx-auto max-w-3xl px-4">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                            Registration
                        </p>

                        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                            Register for Rally for Change
                        </h2>

                        <p className="mt-3 text-slate-600">
                            Complete the form below to reserve your child's place.
                        </p>
                    </div>

                    <Card className="mt-9 p-6 shadow-xl md:p-9">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="parentName"
                                    className="block text-sm font-semibold text-slate-800"
                                >
                                    Parent's name
                                </label>

                                <input
                                    id="parentName"
                                    name="parentName"
                                    type="text"
                                    value={form.parentName}
                                    onChange={handleInputChange}
                                    autoComplete="name"
                                    required
                                    placeholder="Enter parent or guardian name"
                                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="childName"
                                    className="block text-sm font-semibold text-slate-800"
                                >
                                    Child's name
                                </label>

                                <input
                                    id="childName"
                                    name="childName"
                                    type="text"
                                    value={form.childName}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter child's name"
                                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                                />
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="age"
                                        className="block text-sm font-semibold text-slate-800"
                                    >
                                        Age
                                    </label>

                                    <input
                                        id="age"
                                        name="age"
                                        type="number"
                                        min="1"
                                        max="18"
                                        inputMode="numeric"
                                        value={form.age}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Age"
                                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-slate-800"
                                    >
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleInputChange}
                                        autoComplete="email"
                                        required
                                        placeholder="parent@example.com"
                                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="timeSlot"
                                    className="block text-sm font-semibold text-slate-800"
                                >
                                    Preferred Tennis Session
                                </label>

                                <select
                                    id="timeSlot"
                                    name="timeSlot"
                                    value={form.timeSlot}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
                                >
                                    <option value="">Select a session</option>

                                    <option value="5:00 PM - 6:00 PM">
                                        Session 1 • 5:00 PM – 6:00 PM
                                    </option>

                                    <option value="6:00 PM - 7:00 PM">
                                        Session 2 • 6:00 PM – 7:00 PM
                                    </option>
                                </select>

                                <p className="mt-2 text-sm text-slate-500">
                                    Please select your preferred one-hour tennis session.
                                </p>
                            </div>

                            <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <label className="flex cursor-pointer items-start gap-3">
                                    <input
                                        name="volunteerAcknowledged"
                                        type="checkbox"
                                        checked={form.volunteerAcknowledged}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                                    />

                                    <span className="text-slate-700">
                                        I understand this is a volunteer event.
                                    </span>
                                </label>

                                <label className="flex cursor-pointer items-start gap-3">
                                    <input
                                        name="participationPermission"
                                        type="checkbox"
                                        checked={form.participationPermission}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                                    />

                                    <span className="text-slate-700">
                                        I give permission for my child to participate.
                                    </span>
                                </label>
                            </div>

                            {errorMessage && (
                                <div
                                    role="alert"
                                    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                                >
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? (
                                    <>
                                        <LoaderCircle className="h-5 w-5 animate-spin" />
                                        Registering...
                                    </>
                                ) : (
                                    <>
                                        Register for Rally for Change
                                        <ArrowRight className="h-5 w-5" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs leading-relaxed text-slate-500">
                                The information entered here will be used to organize this
                                event and communicate important event updates.
                            </p>
                        </form>
                    </Card>
                </div>
            </section>
        </main>
    );
}
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Globe,
  Mail,
  ArrowRight,
  Briefcase,
  Code,
  Smartphone,
  Cpu,
  RefreshCw,
  Database,
  Brain,
  Users,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Linkedin,
} from "lucide-react";
import logo from "@/assets/logo-admark.webp";
import rexuVideo from "@/assets/Rexu.mp4";
import rexuLogo from "@/assets/WhatsApp_Image_2026-05-28_at_2.42.07_PM-removebg-preview.png";

import ceoImg from "@/assets/ceo TEAM MEMBERS.webp";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      {
        name: "robots",
        content: "noindex, nofollow",
      },
      {
        title: "Welcome to AdMark Digitals",
      },
      {
        name: "description",
        content:
          "AdMark Digitals is a research-first digital solutions company helping businesses establish, scale, and modernize their digital presence.",
      },
    ],
  }),
  component: ScanPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

function ServiceCard({
  icon: Icon,
  title,
  desc,
  note,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
  note?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      variants={fadeInUp}
      className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-colors flex flex-col cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between mb-5">
        <Icon className="w-8 h-8 text-red-500" strokeWidth={1.5} />
        <ChevronDown
          className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 8 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
            {note && (
              <span className="inline-block mt-4 text-xs font-medium text-red-400 bg-red-400/10 px-2 py-1 rounded w-fit">
                {note}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ScanPage() {
  const rexuVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = rexuVideoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    video.muted = true;
    void video.play().catch(() => {
      /* autoplay may be blocked */
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-red-500/30 selection:text-red-200 overflow-x-hidden">
      {/* Background Red Gradient */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 relative z-10 space-y-16 sm:space-y-24">
        {/* Header / Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <img src={logo} alt="AdMark Digitals Logo" className="h-24 sm:h-32 object-contain" />
        </motion.div>

        {/* Section 1: Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-4 sm:mb-6 px-2">
              Welcome to AdMark Digitals
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light px-2">
              Thank you for connecting with us. We help businesses grow through branding, websites,
              technology, AI, automation, printing, and digital transformation.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-xl font-medium text-red-500">
            One Partner. Endless Possibilities.
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-4 w-full max-w-lg sm:max-w-none mx-auto px-2"
          >
            <a
              href="tel:9686658055"
              className="flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-black px-6 sm:px-8 py-3.5 rounded-md font-semibold hover:bg-zinc-200 transition-colors"
            >
              <Phone size={20} />
              Call Us
            </a>
            <a
              href="https://wa.me/919686658055"
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 bg-red-600 text-white px-6 sm:px-8 py-3.5 rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="https://admarkdigitals.com"
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 bg-zinc-800 text-white px-6 sm:px-8 py-3.5 rounded-md font-semibold hover:bg-zinc-700 transition-colors"
            >
              <Globe size={20} />
              Visit Website
            </a>
          </motion.div>
        </motion.section>

        {/* Priority Section: About REXU */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 text-left p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[24px] min-h-[320px] sm:min-h-[300px]"
            style={{
              border: "1px solid rgba(163,230,53,0.2)",
              boxShadow:
                "0 10px 40px rgba(0,0,0,0.45), 0 0 40px rgba(163,230,53,0.12), inset 0 1px 0 rgba(163,230,53,0.08)",
            }}
          >
            <video
              ref={rexuVideoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={rexuVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              suppressHydrationWarning
            />
            <div
              className="pointer-events-none absolute inset-0 bg-black/75 sm:bg-black/70"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(5,6,10,0.92)_0%,rgba(11,15,26,0.82)_35%,rgba(17,24,39,0.78)_70%,rgba(10,14,22,0.92)_100%)] sm:bg-[linear-gradient(135deg,rgba(5,6,10,0.88)_0%,rgba(11,15,26,0.78)_35%,rgba(17,24,39,0.72)_70%,rgba(10,14,22,0.88)_100%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-6 -bottom-6 sm:-right-8 sm:-bottom-8 h-32 w-32 sm:h-48 sm:w-48 opacity-[0.07] blur-[1px]"
              aria-hidden
            >
              <img src={rexuLogo} alt="" className="h-full w-full object-contain" />
            </div>
            <div className="relative z-10 flex-shrink-0 w-full flex justify-center md:w-auto md:justify-start">
              <div className="rounded-2xl border border-lime-400/25 p-3 sm:p-4 shadow-[0_0_32px_rgba(163,230,53,0.18)]">
                <img
                  src={rexuLogo}
                  alt="REXU"
                  width={220}
                  height={96}
                  className="h-16 sm:h-20 md:h-24 w-auto max-w-[min(220px,70vw)] object-contain drop-shadow-[0_0_16px_rgba(163,230,53,0.4)]"
                />
              </div>
            </div>
            <div className="relative z-10 flex-1 w-full min-w-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="bg-lime-400/15 text-lime-300 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-lime-400/20">
                  Priority Initiative
                </span>
              </div>
              <p className="text-zinc-100 sm:text-zinc-200 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl drop-shadow-sm mx-auto md:mx-0">
                REXU is a technology-driven emergency safety and smart response platform designed to
                improve personal and public safety through digital identity, emergency access
                systems, and intelligent safety innovations.
              </p>
              <a
                href="https://rexu.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-lime-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-lime-300 transition-colors shadow-[0_0_20px_rgba(163,230,53,0.25)]"
              >
                Discover REXU
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 2: Services */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <div className="text-center space-y-3">
            <motion.h2 variants={fadeInUp} className="text-3xl font-display font-bold text-white">
              Everything We Do
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-zinc-400 max-w-2xl mx-auto">
              AdMark Digitals is a research-first digital solutions company helping businesses
              establish, scale, and modernize their digital presence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Business Consultancy",
                desc: "We use data, analytics, and strategic insights to help businesses understand opportunities, improve performance, and accelerate growth.",
              },
              {
                icon: Code,
                title: "Web Development",
                desc: "We build fast, responsive, scalable, and conversion-focused websites tailored to business goals and user experience.",
              },
              {
                icon: Smartphone,
                title: "App Development",
                desc: "From idea to launch, we build powerful Android and iOS mobile applications that help businesses engage users and scale.",
              },
              {
                icon: Cpu,
                title: "Custom Software Development",
                desc: "Custom software solutions designed specifically for business operations, efficiency, scalability, and long-term growth.",
              },
              {
                icon: RefreshCw,
                title: "Automations",
                desc: "We automate repetitive workflows and manual business operations to save time, reduce effort, and boost productivity.",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp Chat Agents",
                desc: "Smart WhatsApp chat agents that engage customers, answer queries, generate leads, and automate conversations 24/7.",
              },
              {
                icon: Database,
                title: "SaaS Software Development",
                desc: "Scalable SaaS platforms built according to your business requirements, workflows, and customer needs.",
                note: "(Based on Requirement)",
              },
              {
                icon: Brain,
                title: "Dataset Curations",
                desc: "We collect, clean, structure, and curate high-quality datasets for AI, analytics, business intelligence, and machine learning.",
              },
            ].map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}

            {/* AI Model Development Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-colors md:col-span-2 lg:col-span-3"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <Brain className="w-8 h-8 text-red-500 mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white mb-2">AI Model Development</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                    We design, train, and deploy intelligent AI/ML models to solve real-world
                    business problems and unlock automation.
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">
                    AI Capabilities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Predictive Models",
                      "NLP & Computer Vision",
                      "Recommendation Systems",
                      "Process Intelligence",
                      "Generative AI Solutions",
                    ].map((chip, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workforce [Tech] Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-colors md:col-span-2 lg:col-span-3"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <Users className="w-8 h-8 text-red-500 mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-white mb-2">Workforce [Tech]</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                    We provide skilled and vetted tech professionals tailored to your requirements —
                    developers, designers, QA engineers, DevOps, and project managers.
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">
                    Benefits
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Skilled & Vetted Professionals",
                      "Flexible Engagement Models",
                      "Scale Teams Effortlessly",
                      "Faster Product Delivery",
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-red-500" strokeWidth={2} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 3: Why Choose Us */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <div className="text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-display font-bold text-white mb-2"
            >
              Why Businesses Choose Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Research-First Approach", desc: "We understand before we execute." },
              { title: "End-to-End Execution", desc: "From strategy to execution." },
              { title: "Scalable Technology", desc: "Built for future growth." },
              { title: "Premium Quality Delivery", desc: "Focused on excellence." },
              { title: "Business-Focused Solutions", desc: "Technology aligned with outcomes." },
              { title: "One Partner. Multiple Solutions", desc: "Everything under one roof." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col p-6 bg-zinc-900/30 rounded-xl border border-zinc-800"
              >
                <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: About Founder */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-10"
        >
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto p-8 sm:p-12 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border border-zinc-700 flex-shrink-0 bg-zinc-800">
              <img src={ceoImg} alt="Tejasvi Jois" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-white mb-1">Tejasvi Jois</h3>
              <p className="text-red-500 font-medium mb-4 text-sm">
                Founder, AdMark Digitals & REXU
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                Tejasvi Jois is the Founder of AdMark Digitals and REXU, helping businesses grow
                through technology, digital transformation, branding, automation, and modern growth
                systems. With a research-driven approach and strong focus on innovation, AdMark
                Digitals works closely with brands to build impactful digital experiences and
                scalable business solutions.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <a
                  href="mailto:tejasvijois@gmail.com"
                  className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded-md font-medium transition-colors text-sm"
                >
                  <Mail size={16} />
                  tejasvijois@gmail.com
                </a>
                <a
                  href="https://wa.me/919686658055"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] px-5 py-2.5 rounded-md font-medium transition-colors text-sm"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/tejasvijois?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 text-[#0A66C2] px-5 py-2.5 rounded-md font-medium transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 6: Contact Information */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-10 pb-16"
        >
          <div className="text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-display font-bold text-white mb-2"
            >
              Contact Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col gap-4 md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-red-500" />
                <div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Call & WhatsApp
                  </p>
                  <p className="text-lg font-bold text-white">96866 58055</p>
                </div>
              </div>
              <div className="w-full flex gap-3 mt-2">
                <a
                  href="tel:9686658055"
                  className="flex-1 py-2.5 text-center bg-zinc-800 hover:bg-zinc-700 rounded-md font-medium transition-colors text-sm"
                >
                  Call
                </a>
                <a
                  href="https://wa.me/919686658055"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 text-center bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-red-500" />
                <div className="min-w-0">
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Company Email
                  </p>
                  <p className="text-lg font-bold text-white truncate">info@admarkdigitals.com</p>
                </div>
              </div>
              <a
                href="mailto:info@admarkdigitals.com"
                className="w-full py-2.5 text-center mt-2 bg-zinc-800 hover:bg-zinc-700 rounded-md font-medium transition-colors text-sm"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-red-500" />
                <div className="min-w-0">
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    Website
                  </p>
                  <p className="text-lg font-bold text-white truncate">
                    https://admarkdigitals.com
                  </p>
                </div>
              </div>
              <a
                href="https://admarkdigitals.com"
                className="w-full py-2.5 text-center mt-2 bg-zinc-800 hover:bg-zinc-700 rounded-md font-medium transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Visit Website <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm">
            AdMark Digitals — Building Solutions. Driving Growth. Creating Impact.
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
        <a
          href="tel:9686658055"
          className="w-12 h-12 bg-white text-black rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-200"
          aria-label="Call us"
        >
          <Phone size={20} className="fill-current" />
        </a>
        <a
          href="https://wa.me/919686658055"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-200"
          aria-label="WhatsApp us"
        >
          <MessageCircle size={24} className="fill-current" />
        </a>
      </div>
    </div>
  );
}

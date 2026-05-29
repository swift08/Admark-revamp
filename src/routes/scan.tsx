import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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
  Target,
  Zap,
  Shield,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import logo from "@/assets/logo-admark.webp";
import rexuLogo from "@/assets/WhatsApp_Image_2026-05-28_at_2.42.07_PM-removebg-preview.png";
import rexuVideo from "@/assets/Rexu.mp4";
import ceoImg from "@/assets/ceo TEAM MEMBERS.webp";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      {
        name: "robots",
        content: "noindex, nofollow",
      },
      {
        title: "Tejaswi Joy - Founder Profile",
      },
      {
        name: "description",
        content: "Connect with Tejaswi Joy, Founder of Admark and Rexo",
      },
    ],
  }),
  component: ScanPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

type TabType = "admark" | "rexo";

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
  index: number;
}

function ServiceCard({ icon: Icon, title, desc, index, isAdmark }: ServiceCardProps & { isAdmark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-500 ${
        isAdmark ? "hover:border-red-500/50" : "hover:border-lime-400/50"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Icon 
              className={`w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 mt-0.5 transition-colors duration-500 ${
                isAdmark ? "text-red-400" : "text-lime-400"
              }`} 
              strokeWidth={1.5} 
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{title}</h3>
              {!isOpen && (
                <p className="text-xs sm:text-sm text-slate-400 line-clamp-1">{desc}</p>
              )}
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <p className="text-sm text-slate-300 leading-relaxed pl-9">{desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isAdmark ? "bg-red-500/5" : "bg-lime-400/5"
      }`} />
    </motion.div>
  );
}

function ScanPage() {
  const [activeTab, setActiveTab] = useState<TabType>("admark");

  const themeColors = {
    admark: {
      primary: "red",
      bgGradient: "from-red-500/10 to-red-600/10",
      borderColor: "border-red-500",
      textColor: "text-red-400",
      btnBg: "bg-red-600 hover:bg-red-700",
      shadowColor: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
      radialBg: "rgba(239,68,68,0.15)",
    },
    rexo: {
      primary: "lime",
      bgGradient: "from-lime-500/10 to-lime-600/10",
      borderColor: "border-lime-400",
      textColor: "text-lime-400",
      btnBg: "bg-lime-400 hover:bg-lime-300 text-black",
      shadowColor: "shadow-[0_0_30px_rgba(163,230,53,0.3)]",
      radialBg: "rgba(163,230,53,0.15)",
    },
  };

  const currentTheme = themeColors[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden transition-all duration-700">
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${currentTheme.radialBg}, transparent 50%), radial-gradient(circle at 70% 80%, ${currentTheme.radialBg}, transparent 50%)`
        }}
      />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12 sm:space-y-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex items-center justify-center gap-8 sm:gap-12 pt-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="transition-all duration-500"
            style={{
              filter: activeTab === "admark" 
                ? "drop-shadow(0 0 20px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 40px rgba(239, 68, 68, 0.4))" 
                : "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))"
            }}
          >
            <img src={logo} alt="Admark Logo" className="h-28 sm:h-36 md:h-40 w-auto object-contain" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="transition-all duration-500"
            style={{
              filter: activeTab === "rexo" 
                ? "drop-shadow(0 0 20px rgba(163, 230, 53, 0.6)) drop-shadow(0 0 40px rgba(163, 230, 53, 0.4))" 
                : "drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5))"
            }}
          >
            <img src={rexuLogo} alt="Rexu Logo" className="h-28 sm:h-36 md:h-40 w-auto object-contain" />
          </motion.div>
        </motion.div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0">
                <img src={ceoImg} alt="Tejaswi Joy" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">Tejasvi Jois</h1>
                <p className="text-slate-300 font-medium mb-4">Founder</p>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <a
                    href="https://wa.me/919686658055"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#25D366]/50"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tejasvijois"
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-[#0A66C2] hover:bg-[#004182] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-[#0A66C2]/50"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="tel:9686658055"
                    className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
                    aria-label="Call"
                  >
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.button
              onClick={() => setActiveTab("admark")}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 aspect-video ${
                activeTab === "admark"
                  ? "bg-gradient-to-br from-red-500/20 to-red-600/20 border-2 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Stylish Gradient Border Effect */}
              {activeTab === "admark" && (
                <>
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-400/5 via-transparent to-red-600/10 rounded-xl" />
                </>
              )}
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-3 sm:p-8"
                animate={activeTab === "admark" ? {
                  filter: [
                    "drop-shadow(0 0 20px rgba(239, 68, 68, 0.6))",
                    "drop-shadow(0 0 30px rgba(239, 68, 68, 0.8))",
                    "drop-shadow(0 0 20px rgba(239, 68, 68, 0.6))"
                  ]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={logo} 
                  alt="Admark" 
                  className="w-[70%] h-auto object-contain"
                />
              </motion.div>
            </motion.button>

            <motion.button
              onClick={() => setActiveTab("rexo")}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 aspect-video ${
                activeTab === "rexo"
                  ? "bg-gradient-to-br from-lime-500/20 to-lime-600/20 border-2 border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.3)]"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Stylish Gradient Border Effect */}
              {activeTab === "rexo" && (
                <>
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-lime-600/10 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/5 via-transparent to-lime-600/10 rounded-xl" />
                </>
              )}
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-1 sm:p-4"
                animate={activeTab === "rexo" ? {
                  filter: [
                    "drop-shadow(0 0 20px rgba(163, 230, 53, 0.6))",
                    "drop-shadow(0 0 30px rgba(163, 230, 53, 0.8))",
                    "drop-shadow(0 0 20px rgba(163, 230, 53, 0.6))"
                  ]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[95%] h-auto object-contain"
                  src={rexuVideo}
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.section>

        <AnimatePresence mode="wait">
          {activeTab === "admark" ? (
            <motion.section
              key="admark"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center space-y-3 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  AdMark Digitals
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  A research-first digital solutions company helping businesses establish, scale,
                  and modernize their digital presence through technology, branding, and innovation.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: Briefcase,
                    title: "Business Consultancy",
                    desc: "We use data, analytics, and strategic insights to help businesses understand opportunities, improve performance, and accelerate growth.",
                  },
                  {
                    icon: Code,
                    title: "Web Development",
                    desc: "We build fast, responsive, scalable, and conversion-focused websites tailored to business goals and exceptional user experience.",
                  },
                  {
                    icon: Smartphone,
                    title: "App Development",
                    desc: "From idea to launch, we build powerful Android and iOS mobile applications that help businesses engage users and scale effectively.",
                  },
                  {
                    icon: Cpu,
                    title: "Custom Software Development",
                    desc: "Custom software solutions designed specifically for business operations, efficiency, scalability, and long-term growth.",
                  },
                  {
                    icon: RefreshCw,
                    title: "Automations",
                    desc: "We automate repetitive workflows and manual business operations to save time, reduce effort, and boost productivity significantly.",
                  },
                  {
                    icon: MessageSquare,
                    title: "WhatsApp Chat Agents",
                    desc: "Smart WhatsApp chat agents that engage customers, answer queries, generate leads, and automate conversations 24/7.",
                  },
                  {
                    icon: Database,
                    title: "SaaS Development",
                    desc: "Scalable SaaS platforms built according to your business requirements, workflows, and customer needs for sustainable growth.",
                  },
                  {
                    icon: Brain,
                    title: "AI & ML Solutions",
                    desc: "We design, train, and deploy intelligent AI/ML models to solve real-world business problems and unlock powerful automation.",
                  },
                  {
                    icon: Users,
                    title: "Tech Workforce",
                    desc: "Skilled and vetted tech professionals tailored to your requirements — developers, designers, QA engineers, DevOps, and project managers.",
                  },
                ].map((service, idx) => (
                  <ServiceCard key={idx} {...service} index={idx} isAdmark={activeTab === "admark"} />
                ))}
              </div>

              <div className="flex justify-center pt-4">
                <motion.a
                  href="https://admarkdigitals.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 shadow-lg shadow-red-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Website
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="rexo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="text-center space-y-3 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  REXU
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  A technology-driven emergency safety and smart response platform designed to
                  improve personal and public safety through digital identity, emergency access
                  systems, and intelligent safety innovations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-3xl mx-auto">
                {[
                  {
                    icon: Shield,
                    title: "Safety First",
                    desc: "Advanced emergency response systems for personal and public safety.",
                  },
                  {
                    icon: Zap,
                    title: "Smart Technology",
                    desc: "AI-powered intelligent safety solutions for rapid response.",
                  },
                  {
                    icon: Target,
                    title: "Digital Identity",
                    desc: "Secure digital identity and emergency access management.",
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-lime-400/50 transition-all duration-500"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-lime-400/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <feature.icon className="w-8 h-8 text-lime-400 mb-3 transition-colors duration-500" strokeWidth={1.5} />
                    <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className={`bg-gradient-to-br ${currentTheme.bgGradient} border ${currentTheme.borderColor}/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto transition-all duration-700`}>
                <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Emergency response system with instant alerts",
                    "Digital identity verification and management",
                    "Smart safety monitoring and tracking",
                    "AI-powered threat detection and prevention",
                    "Integrated emergency services coordination",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${currentTheme.textColor} flex-shrink-0 mt-0.5 transition-colors duration-500`} />
                      <span className="text-slate-300 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center pt-4">
                <motion.a
                  href="https://rexu.in"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 ${currentTheme.btnBg} px-8 py-4 rounded-xl font-semibold transition-all duration-500 shadow-lg ${currentTheme.shadowColor}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover REXU
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <motion.a
          href="tel:9686658055"
          className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Call"
        >
          <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </motion.a>
        <motion.a
          href="https://wa.me/919686658055"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 flex items-center justify-center transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}

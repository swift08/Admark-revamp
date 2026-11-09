import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SCAN_PROFILES } from "@/data/scan-profiles";
import logo from "@/assets/logo-admark.webp";
import rexuLogo from "@/assets/WhatsApp_Image_2026-05-28_at_2.42.07_PM-removebg-preview.webp";

export const Route = createFileRoute("/scan/")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow" },
      {
        title: "Meet the Team | AdMark Digitals & REXU",
      },
      {
        name: "description",
        content:
          "Connect with the AdMark Digitals leadership team — Tejasvi Jois, Harshith V Malipatil, Revanth Kumar S, and Prajwal BP.",
      },
    ],
  }),
  component: ScanIndexPage,
});

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
} as const;

function ScanIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(239,68,68,0.06), transparent 50%), radial-gradient(circle at 70% 80%, rgba(163,230,53,0.05), transparent 50%)",
        }}
      />

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-24 sm:pt-16 sm:pb-28 space-y-12 sm:space-y-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex items-center justify-center gap-8 sm:gap-12 pt-4"
        >
          <img src={logo} alt="AdMark Digitals" className="h-24 sm:h-32 md:h-36 w-auto object-contain" />
          <img src={rexuLogo} alt="REXU" className="h-24 sm:h-32 md:h-36 w-auto object-contain" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Meet the Team</h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Select a profile to connect
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {SCAN_PROFILES.map((profile, index) => (
            <motion.div
              key={profile.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.45 }}
            >
              <Link
                to="/scan/$slug"
                params={{ slug: profile.slug }}
                className="group flex items-center gap-4 sm:gap-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-red-500/40 transition-all duration-300"
              >
                {/* Photo placeholder — set profile.image when ready */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-red-500/50 transition-colors duration-300">
                  {profile.image ? (
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xl sm:text-2xl font-semibold text-white/70 tracking-wide">
                      {profile.initials}
                    </span>
                  )}
                </div>
                <div className="min-w-0 text-left">
                  <h2 className="text-lg sm:text-xl font-bold text-white truncate group-hover:text-red-300 transition-colors">
                    {profile.name}
                  </h2>
                  <p className="text-slate-400 font-medium mt-0.5">{profile.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

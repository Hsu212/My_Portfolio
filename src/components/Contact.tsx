import { motion } from "framer-motion";
import { Mail, Github, Facebook, Linkedin } from "lucide-react";

export function Contact() {
  const socials = [
    { icon: Github, link: "https://github.com/Hsu212", color: "from-purple-400 to-pink-400" },
    { icon: Facebook, link: "https://www.facebook.com/hsu.maung.2001", color: "from-cyan-400 to-blue-400" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/hsu-maung-373216393/", color: "from-cyan-300 to-purple-300" },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-transparent section">
      <div className="container relative z-10 text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-5xl font-black text-transparent md:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16 text-xl text-gray-300"
        >
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open!
        </motion.p>

        <motion.a
          href="mailto:kienbrown76@gmail.com"
          whileHover={{ scale: 1.08, y: -8 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-block px-12 py-6 mb-20 overflow-hidden text-2xl font-bold text-white rounded-2xl group"
        >
          <div className="absolute inset-0 transition-opacity duration-700 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-70 blur-xl group-hover:opacity-100" />
          <div className="relative px-12 py-6 border-2 border-white/30 bg-black/40 backdrop-blur-xl rounded-2xl">
            <Mail className="inline w-8 h-8 mr-3" />
            Say Hello
          </div>
        </motion.a>

        <div className="flex justify-center gap-12">
          {socials.map(({ icon: Icon, link, color }, i) => {
            const isGithub = Icon === Github;

            return (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -16, scale: 1.15 }}
                className="relative p-6 transition-all duration-500 border rounded-2xl bg-white/5 backdrop-blur-xl border-white/20 group"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-700`} />
                <Icon 
                  // FIXED: Removed "group-hover:text-transparent" and "group-hover:fill-transparent"
                  className={`relative w-10 h-10 transition-all duration-500 text-gray-400 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]`}
                  strokeWidth={isGithub ? 1.5 : 2}
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

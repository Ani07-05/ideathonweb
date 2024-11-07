'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Component() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', smoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-tech">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-purple-500">
        <div className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {['Home', 'About', 'Rules', 'Timeline', 'Prizes'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-extrabold hover:text-cyan-400 transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="text-8xl md:text-9xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          >
            IDEATHON I.O
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-3xl md:text-4xl mb-4 font-extrabold">Presented by: SOCSE, RV University</p>
            <p className="text-2xl md:text-3xl text-cyan-400 mb-8 font-extrabold">
              In association with:
            </p>
            <div className="flex justify-center items-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <Image
                  src = "/bgidea2.png"
                  alt="Ideathon Logo"
                  width={1400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-6xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              About the Event
            </h2>
            <p className="text-2xl leading-relaxed mb-6 font-bold text-cyan-300">
              A high-energy hackathon designed to ignite creativity and solve real-world challenges!
            </p>
            <p className="text-2xl leading-relaxed font-bold text-purple-300">
              Team up, innovate, and present groundbreaking ideas in IoT, Cybersecurity, Data Science, and Machine Learning!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Event Rules
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <RuleCard
              title="Team Formation"
              description="Assemble a powerhouse team of 4 with diverse skills and backgrounds."
            />
            <RuleCard
              title="Problem Statement"
              description="Choose from cutting-edge challenges or propose your own revolutionary idea."
            />
            <RuleCard
              title="Submission"
              description="Craft a compelling PPT showcasing your solution before the deadline."
            />
            <RuleCard
              title="Presentation"
              description="Pitch your idea to a panel of industry titans and academic experts."
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Event Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <TimelineItem
              title="Morning Session"
              content={[
                "Form elite teams, tackle a challenge, and submit your groundbreaking solution.",
                "Top ideas advance to the final showdown!"
              ]}
              time="9:00 AM"
            />
            <TimelineItem
              title="Afternoon Session"
              content={[
                "Selected teams present to a jury of industry leaders and academic visionaries!",
                "Best innovations win big!"
              ]}
              time="2:00 PM"
            />
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section id="prizes" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-6xl font-black mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Prize Pool
            </h2>
            <div className="text-5xl font-black mb-8 text-cyan-400">Total: Rs. 15,000</div>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <PrizeCard
                place="1st Place"
                prize="Rs. 5,000 + Certificate"
              />
              <PrizeCard
                place="2nd & 3rd Place"
                prize="Certificate + Exclusive Gift"
              />
            </div>
            <p className="mt-8 text-2xl text-purple-300 font-extrabold">
              Plus, expert mentorship to turn your ideas into reality!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 mb-8">
            
          </div>
          <div className="text-center text-cyan-300">
            <p className="text-2xl font-extrabold">Join the Innovation Revolution at Ideathon &apos;24!</p>
            <p className="mt-2 font-bold">&copy; 2024 SOCSE, RV University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TimelineItem({ title, content, time }: { title: string; content: string[]; time: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative pl-8 pb-12 border-l-2 border-purple-500 last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500" />
      <div className="text-cyan-400 text-xl mb-2 font-extrabold">{time}</div>
      <h3 className="text-3xl font-black mb-4 text-purple-300">{title}</h3>
      {content.map((item, index) => (
        <p key={index} className="text-xl text-cyan-300 mb-2 font-bold">
          {item}
        </p>
      ))}
    </motion.div>
  )
}

function PrizeCard({ place, prize }: { place: string; prize: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-purple-900 to-cyan-900 p-6 rounded-lg text-center shadow-lg border-2 border-cyan-500"
    >
      <h3 className="text-2xl font-black mb-4 text-cyan-300">{place}</h3>
      <p className="text-xl font-extrabold text-purple-300">{prize}</p>
    </motion.div>
  )
}

function RuleCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-purple-900 to-cyan-900 p-6 rounded-lg shadow-lg border-2 border-purple-500"
    >
      <h3 className="text-2xl font-black mb-4 text-cyan-300">{title}</h3>
      <p className="text-lg font-bold text-purple-300">{description}</p>
    </motion.div>
  )
} 
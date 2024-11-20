import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

function Team() {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Co-founder',
      bio: 'John is a veteran in the AI industry with over 15 years of experience. Previously, he led AI initiatives at major tech companies. He holds a Ph.D. in Computer Science from Stanford University.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@sensionai.com',
      },
    },
    {
      name: 'Emily Chen',
      role: 'CTO & Co-founder',
      bio: 'Emily is an AI researcher and engineer with expertise in machine learning and natural language processing. She previously worked at OpenAI and has published numerous papers in top AI conferences.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@sensionai.com',
      },
    },
  ];

  return (
    <div className="pt-16 bg-dark-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-center gradient-text"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center text-gray-300"
          >
            Passionate experts dedicated to transforming businesses through AI innovation
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">{member.name}</h2>
                  <p className="text-neon-blue font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  "We constantly push the boundaries of what's possible with AI technology.",
              },
              {
                title: 'Excellence',
                description:
                  'We strive for excellence in everything we do, from code to customer service.',
              },
              {
                title: 'Integrity',
                description:
                  'We maintain the highest standards of integrity in our work and relationships.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Join Our Team</h2>
          <p className="text-xl mb-8 text-gray-300">
            We're always looking for talented individuals to join our mission of transforming
            businesses through AI.
          </p>
          <button className="bg-glass-light text-neon-blue px-8 py-3 rounded-lg font-semibold hover:bg-glass-dark transition-all duration-200 border border-neon-blue neon-border">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
}

export default Team;
import Image from "next/image";

const teamMembers = [
  {
    name: "Rahul Mane",
    role: "Founder & Technical Director",
    bio: "Driving the digital vision and infrastructure of the foundation. An active 2025 Google Student Ambassador with deep expertise in modern web technologies and full-stack architecture.",
    image: "/founder.jpg",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Reema Mane",
    role: "Global Outreach Lead",
    bio: "Spearheading our international programs and community engagement with over 15 years of experience in non-profit global operations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Harman Saini",
    role: "Director of Operations",
    bio: "Ensuring our initiatives are executed flawlessly on the ground. Marcus brings a wealth of experience in logistics and sustainable project management.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#" },
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 md:py-24 bg-earth text-white relative overflow-hidden px-4 sm:px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-gold font-semibold tracking-wider uppercase text-xs md:text-sm mb-2 md:mb-3">
            Leadership
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 md:mb-6">
            Meet the Visionaries
          </h3>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            A dedicated collective of professionals and humanitarians working tirelessly to turn our global initiatives into tangible reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 flex flex-col">
              <div className="relative h-[280px] sm:h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image src={member.image} alt={member.name} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                <div className="absolute top-0 left-6 md:left-8 w-10 md:w-12 h-1 bg-gold rounded-b-md" />

                <h4 className="text-xl md:text-2xl font-serif font-bold mt-2 mb-1">{member.name}</h4>
                <p className="text-gold font-medium text-xs md:text-sm mb-3 md:mb-4">{member.role}</p>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow">{member.bio}</p>

                <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                  <a href={member.socials.linkedin} className="text-gray-400 hover:text-gold transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  <a href={member.socials.twitter} className="text-gray-400 hover:text-gold transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
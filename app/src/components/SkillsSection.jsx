import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
  { name: "Java", level: 90, categories: ["Programming"] },
  { name: "Python", level: 85, categories: ["Programming", "AI & App Development"] },
  { name: "Node.js", level: 75, categories: ["Web Development"] },
  { name: "React", level: 75, categories: ["Web Development"] },
  { name: "Pentesting", level: 65, categories: ["Cybersecurity"] },
  { name: "Git/Github", level: 90, categories: ["tools"] },
  { name: "VS Code", level: 90, categories: ["tools"] },
  { name: "Linux", level: 70, categories: ["tools"] },
  { name: "HTML/CSS", level: 65, categories: ["Web Development"] },
  { name: "JavaScript", level: 70, categories: ["Web Development"] },
  { name: "C", level: 75, categories: ["Programming"] },
  { name: "Algorithms and Data Structures", level: 80, categories: ["Programming"] },
  { name: "Kali Linux", level: 75, categories: ["Cybersecurity"] },
  { name: "Burp Suite", level: 80, categories: ["Cybersecurity"] },
  { name: "Computer Networking", level: 75, categories: ["Networking"] },
  { name: "IPv6 & NAT", level: 70, categories: ["Networking"] },
  { name: "Wireless & Mobile Networks", level: 65, categories: ["Networking"] },
  { name: "Network Security", level: 65, categories: ["Cybersecurity"] },
];


const categories = ["all", "Programming", "Web Development", "Cybersecurity", "AI & App Development", "tools", "Networking"];


export const SkillsSection = () => {
        const [activeCategory, setActiveCategory] = useState("all");

        const filteredSkills = skills.filter(
            skill =>
            activeCategory === "all" ||
            skill.categories.includes(activeCategory)
        );
    return (
        <section
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)} 
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-secondary-foreground hover:bg-secondary/10"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: skill.level + '%' }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}
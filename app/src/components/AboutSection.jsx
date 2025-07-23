import { ShieldCheck, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Cybersecurity Enthusiast & Creative Problem Solver</h3>

                    <p className="text-muted-foreground">
                    As a final-year Computer Engineering student, I’m deeply passionate about offensive security and AI-based application development. From music recognition systems to chess AIs using alpha-beta pruning, I love building smart, creative solutions.
                    </p>

                    <p className="text-muted-foreground">
                    I'm constantly learning and challenging myself — whether through Red Team labs, coding, or at the gym. My ultimate goal is to become a Red Teamer, combining deep technical knowledge with strategic thinking to push security boundaries.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contact Me
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-glow">AI & App Development</h4>
                                <p>Building intelligent applications using machine learning and AI technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-glow">Web Development</h4>
                                <p>
                                Building responsive and dynamic web applications using modern frameworks like React and Node.js.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg text-glow">Cybersecurity Enthusiast</h4>
                                <p>
                                Actively learning offensive security with 5000+ points on TryHackMe and aiming to become a Red Teamer.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
};
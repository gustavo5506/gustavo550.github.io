import { NavBar } from "../components/NavBar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackGround } from "@/components/StarBackGround";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSections } from "../components/ProjectsSections";
import { ContactSection } from "@/components/ContactSection";

export const Home = () => {

    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toggle*/}
         <ThemeToggle />
        {/* Background Effect */}
        <StarBackGround />

        {/* Navbar*/}
        <NavBar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSections />
            <ContactSection />
        </main>

        {/*Footer*/}
    </div>;
};

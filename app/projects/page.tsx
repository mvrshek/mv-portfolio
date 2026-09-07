import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      <div className="pt-24">
        <Projects />
      </div>
    </main>
  );
}
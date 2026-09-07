import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-8 py-32 md:px-16 lg:px-24"
    >
      {/* Section Header */}
      <div className="mb-20">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Selected Work
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Projects
        </h2>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProjectCard
          
          title="Snowbot"
          category="Robotics · Embedded Systems · Mechanical Design"
          description="Designed and built an autonomous snow-plowing robot integrating a custom mechanical platform, ESP32-based embedded control system, IMU sensing, motor control, and autonomous navigation."
         // image="/snowbot/hero.jpg"
          slug = "snowbot"
        />

        <ProjectCard
          
          title="MVP-Tac"
          category="Tactile Sensing · Computer Vision · Robotic Surgery"
          description="Developed a miniaturized tactile sensing system combining optical hardware, rapid prototyping, synchronized image-force data collection, and machine learning for force estimation."
         //image="/mvptac/hero.png"
          slug = "mvp-tac"
        />

        <ProjectCard
          
          title="Windracers"
          category="Aerodynamics · Autonomous Systems · Aircraft Design"
          description="Contributed to autonomous aerial robotics research through mechanical design, embedded systems, sensing, and software integration."
         //image="/VIP/hero.jpg"
          slug = "windracers"
        />
      </div>
    </section>
  );
}
//future projects to add: ASME biomechanics,
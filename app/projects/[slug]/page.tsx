import Image from "next/image";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ProjectSection = {
  title: string;
  text: string;
  image?: string | string[];
  caption?: string;
  link?: string;
  linkText?: string;
};

const projects = {
  snowbot: {
    title: "SnowBot",
    category: "Robotics",
    subtitle: "Autonomous Snow Removal Robot",
    heroImage: "/snowbot/snowbotcadpic.jpg",

    overview:
      "SnowBot is an autonomous snow removal robot designed to navigate and clear snow without requiring direct human control.",

    role:
      "I work across the mechanical, electrical, and software systems, including the embedded hardware stack, sensors, motor controllers, and autonomous control architecture.",

    technologies: [
      "ESP32",
      "C++",
      "BNO085 IMU",
      "Motor Controllers",
      "Embedded Systems",
      "CAD",
    ],

    sections: [
      {
        title: "Overview",
        text: "Snowbot started as a Purdue design competition project with myself and 3 of my friends from high school. We came up with the concept of an autonomous robot, similar to the starship food delivery systems that we have on campus, but instead of bringing students their fast food orders, this robot could salt and shovel sidewalks, replacing human labor and exorbitant equipment costs. For the competition we submitted our proposed solution as a powerpoint, which included the steps of our design process, pictures of our decision matrix, CAD model, gant chart, and hardware stack. After our presentation, we were still interested in bringing the solution to life, and started building a prototype. Though the project is still in the works, we have already tested our initial proposed hardware stack detailed below. A state-machine-based control software is our next goal, so that we can automate the plowing process and remove the human element of snow plowing.",
        image: "/snowbot/snowbotblowupviewtwo.png",
        caption: "Exploded view of the model",
      },

      {
        title: "Current State",
        text: "The current SnowBot model represents the latest iteration of the system and reflects the design decisions made throughout the prototyping process. To prepare for further analysis, the model will have fasteners added, and then FEA will be ran. The model is still a prototype and is not fully fleshed out yet.",
        link: "/snowbot/snowbot-model.EASM",
        linkText: "View CAD Model",
      },

      {
        title: "Hardware",
        text: "The initial proposed hardware stack, and the one that we have vetted in practical scenarios, consisted of an ESP32 microcontroller as the brain of the system, an LD2410 mmWave sensor for human presence detection (crash prevention), a BNO085 IMU for accelerometer and heading data, NEO v1.1 motors with an IBT-2 high current motor driver and a 12V lithium iron phosphate battery. Routes could be mapped and controlled using ticks from the motor driver, and heading from the IMU would allow for precise turns, and PID drift control. MmWave data would be fed to the crash prevention functions and cause the motors to stop long before anyone runs into the robot, this would be paired with bright coloring to hopefully make the design more visible to unattentive students. The LiFePO4 battery was chosen because of its cold-resistant properties, making it ideal for our use case (wintertime). Developing this initial framework was a great learning experience, but when we began designing our prototype, we started to question the practicality of the original system. Though the LD2410 does a great job at detecting human presence in a closed room environment, making it great for automatic light or temperature control, it struggles in the use case we are designing for, where it would need to be accurate in a large area with a large number of variable factors. Also, this sensor would not be as good at detecting smaller beings, such as squirrels or dogs. Because of these reasons, we began searching for a better option, something that will work wherever it is, and also account for who/whatever may be traversing the sidewalks at Purdue. It was here that we came back to our initial impetus for the project, the starship robots. Starships use a comprehensive sensor suite that includes 12 cameras, radar, ultrasonic sensors, and time-of-flight technology (https://www.wevolver.com/specs/starship-technologies-starship-robot), reading about the camera setup and how accurate it is in our use case, we came up with the idea of using an ESP32 CAM which we would connect via cellular to a central host machine, and integrating an OpenCV machine learning obstacle detection model, which will allow the robot to more accurately detect and avoid obstacles. In this proposed solution, we would keep all of the orginal components identical, simply replacing hte LD2410 and ESP32 with an ESP32 CAM. This is the solution which we are currently trialing.",
      },

      {
        title: "Software & Controls",
        text: "As discussed briefly above, the software for Autonomous snow plowing and road salting will be a C++ state machine that switches between init, idle, departure, turning, salting, plowing, stoppage and return. The FSM logic loop would take almost no CPU overhead and negligible ram, and the ESP32's processor is more than capable of a project like this. We would connect all of the snowbots to a host machine via cellular (same as starship), and this computer would handle the obstacle detection model as well as the state machine.",
      },
    ] as ProjectSection[],
  },

  "mvp-tac": {
    title: "MVP Tac",
    category: "Research / Robotics",
    subtitle: "Rapid-Prototyped Tactile Sensing System",
    heroImage: "/mvptac/trial.png",

    overview:
      "MVP Tac is a medical apparatus that integrates vision based tactile sensing for force estimation with a rigid structure for practical applications such as robotic colonoscopy.",

    role:
      "I contributed to the prototyping and mechanical design, including the miniaturized sensor housing and integration of the imaging and sensing hardware.",

    technologies: [
      "Siemens NX",
      "CAD",
      "Rapid Prototyping",
      "Computer Vision",
      "Tactile Sensing",
    ],

    sections: [
      {
        title: "Overview",
        text: "MVP-tac fills a unique niche in the world of tactile sensing, as its applications require rigid, miniaturized structure. This made designing the sensor housing and hardware stack a particularly interesting challenge. We kept the outer shell to a diameter of 7mm by using a resin printer, and snugly fit the camera, linear polarizer, Quarter-wave retarder, photoelastic material, and reflective film, vertically stacked atop each other, inside.",
        image: "/mvptac/mvptacstack.png",
      },

      {
        title: "Mechanical Design",
        text: "Aside from packaging the hardware to fit in such a small area, I worked on the design side of the sensor, and fabricated sensor components and testing apparatus. Developing the model for the outer shell was an iterative process, because we wanted to minimize external bonding agents, while still needing to fabricate the housing in 2 components due to the nature of the scopes assembly. For earlier iterations, I modeled a snap joint fixture that allowed the components to be snapped into place once the camera setup is arranged in place. The snap joint idea was scrapped due to the difficulty resin printing such a small joint, and we eventually settled on a later revision that features slits for bonding agents so as not to obstruct the cameras' field of view. When it was time to test the sensor, I also fabricated phantom exposed and subdermal tumors using varying silicone mixtures which were used to test the accuracy of our force estimation in a practical scenario. The process for fabricating these tumors required 3d printed molds which I designed in Siemens NX, and the silicone creation process was similar to process used to make the photoelastic material native to the elastomer module which I also fabricated.",
        image: "/mvptac/mvp-tac-cad.png",
        caption:
          "Picture of NX modeled sensor housing, 45mm in length and sensor diameter of 7mm",
      },

      {
        title: "Testing & Results",
        text: "The testing setup, and in depth results profile is detailed in 2026 IROS accepted publication:MVP-Tac: A Miniaturized Dual-Modal Vision and Photoelastic Tactile Sensor for Robot-Assisted Minimally Invasive Surgery, of which I was named a co-author due to heavy contributions to the project.",
        link: "https://arxiv.org/abs/2607.18660",
        linkText: "View Publication",
      },
    ] as ProjectSection[],
  },

  windracers: {
    title: "Windracers",
    category: "UAS / Research",
    subtitle: "Purdue VIP UAS Research",

    heroImage: "/VIP/windracersposter.png",

    overview:
      "Windracers is a Purdue Vertically integrated research project centered around unmanned aircraft systems and autonomous flight.",

    role: "Aerodynamic Efficiency subteam member",

    technologies: [
      "UAS",
      "Embedded Systems",
      "Autonomy",
      "Controls",
      "CAD",
    ],

    sections: [
      {
        title: "Overview",
        text: "Windracers is a UK based drone manufacturing company that sponsors the VIP group of the same name at Purdue under Assistant Professor James Goppert. Their goal with the program is to have undergraduate and graduate students develop and test a miniature fixed wing capable of performing autonomous routines, with the eventualy goal of scaling the aircraft up to full size (30 ft wingspan 20 ft length), and deploying fleets of these autonomous aircraft for cargo, defense, and humanitarian aid.",
        image: "/VIP/openscadpic.jpg",
      },

      {
        title: "My Contributions",
        text: "As a member of the Aerodynamic efficiency subteam, I was in charge of ensuring that the physical components of the aircraft were suitable for autonomous flight. This meant designing our fixed wing in a manner that allowed for extra controls hardware, and PCB integration, while also keeping the goal of larger scale autonomous fixed wing that can carry cargo in mind. Some noteworthy deliverables that I worked on were: Designing a PCB bracket mount in NX that centralized all electrical components on our aircraft making center of mass adjustment much easier, Designing XFLR5 α-sweep backed airfoils in OpenSCAD along with a fully parametric model of the aircraft, and Validating & contributing to ROS 2 control software by conducting Qualisys track manager motion capture testing.",
        image: [
          "/VIP/airfoilspic.png",
          "/VIP/xflrpictwo.png",
        ],
        caption: "A group member with more simulation experience taught our team the basics of XFLR5 through this simulation, which we then used to validate our design"
      },

      {
        title: "Presentation",
        text: "As part of the vertically integrated projects program, my group and I presented in both the fall and the spring at Purdues Undergraduate research conference, this allowed us to hear feedback on our project from Professors, industry leaders, and peers, while also giving me a chance to practice my formal speaking and presentation skills.",
        
      },
    ] as ProjectSection[],
  },
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] px-8 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold">Project Not Found</h1>

          <a
            href="/projects"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            ← Back to Projects
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="px-8 pb-24 pt-40 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <a
            href="/projects"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            ← Back to Projects
          </a>

          <p className="mt-16 text-sm uppercase tracking-[0.3em] text-gray-500">
            {project.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-4 text-xl text-gray-400 md:text-2xl">
            {project.subtitle}
          </p>

          {/* Hero Image */}
          <div className="relative mt-16 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Overview */}
          <div className="mt-16 grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Overview
              </p>
            </div>

            <p className="text-xl leading-relaxed text-gray-300">
              {project.overview}
            </p>
          </div>

          {/* Role */}
          <div className="mt-16 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                My Role
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-400">
              {project.role}
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-16 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Sections */}
      <section className="px-8 pb-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl space-y-32">
          {project.sections.map((section, index) => {
            const images = section.image
              ? Array.isArray(section.image)
                ? section.image
                : [section.image]
              : [];

            const hasImages = images.length > 0;

            return (
              <div
                key={section.title}
                className={`grid gap-12 ${
                  hasImages
                    ? "md:grid-cols-2 md:items-center"
                    : "md:grid-cols-1"
                }`}
              >
                {/* Section Text */}
                <div
                  className={
                    hasImages && index % 2 === 1 ? "md:order-2" : ""
                  }
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                    {section.title}
                  </h2>

                  <p className="mt-6 leading-relaxed text-gray-400">
                    {section.text}
                  </p>

                  {section.link && (
                    <a
                      href={section.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-white/30 hover:text-white"
                    >
                      {section.linkText || "View Link →"}
                    </a>
                  )}
                </div>

                {/* Section Images */}
                {/* Section Images */}
{hasImages && (
  <div
    className={
      index % 2 === 1 ? "md:order-1" : ""
    }
  >
    <div className="flex flex-col gap-6">
      {images.map((image, imageIndex) => (
        <div
          key={image}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={image}
            alt={`${section.title} image ${imageIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>

    {section.caption && (
      <p className="mt-3 text-center text-sm text-gray-500">
        {section.caption}
      </p>
    )}
  </div>
)}
                
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
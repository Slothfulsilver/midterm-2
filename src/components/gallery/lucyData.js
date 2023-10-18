import ar from "../../ui/Lucy/media/ARApp1.jpeg";
import animam from "../../ui/Lucy/media/AnimamImm.png";
import body from "../../ui/Lucy/media/Cuerpo.jpg";
import donut from "../../ui/Lucy/media/RealltHighRender.png";
import raytracer from "../../ui/Lucy/media/RayTracer1.jpeg";
import riiaa from "../../ui/Lucy/media/riiaa.jpg";
import covid from "../../ui/Lucy/media/covid.png";
import snight from "../../ui/Lucy/media/somniumnight.png";
import bricky from "../../ui/Lucy/media/brickyWars.png";

export const itemData = [
  {
    img: covid,
    title: "Comorbidities in Mexico COVID-19",
    subtitle: "ML and Math Models",
    date: "Aug 2020",
    description:
      "Used ML, Government data and Markov chains to create a mathemtical model to predict the relationship between the comorbidities in Mexico and the COVID-19 pandemic. Made a video and a web-page explaining the projects steps for future replication. {https://ricardoskewes.github.io/CoviDetectives/mates.html}",
  },
  {
    img: raytracer,
    title: "Java Raytracer",
    subtitle: "Parallelized using Threads",
    date: "May 2022",
    description:
      "Coded a Raytracer in Java without external libraries. The raytracer includes lighting, shadows, imported 3D models, reflection, refraction and different materials. Presented in ACM Siggraph 2021",
  },
  {
    img: ar,
    title: "Magic Toy Box",
    subtitle: "Augmented Reality App",
    date: "April 2023",
    description:
      "Developed an AR Application for Android using Vuforia with my teammate Ximena Muñoz. The Android App had the feature of selecting different toys and viewing them in different colors in Augmented Reality. The application had a function where you could view videos in AR. Its theme was pink",
  },
  {
    img: animam,
    title: "Animam Immortalem",
    subtitle: "2D Platform Videogame",
    date: "June 2021",
    description:
      "Alongside Maximiliano Aguayo, I made a 2d platformer with 7 different levels of increasing difficulty. This videogame is inspired by horror and a cute asthetic. The idea of this game is to get to the end while escaping the ghost who is chasing you through the levels.",
  },
  {
    img: donut,
    title: "Blender Donut",
    subtitle: "Full 3D Model",
    date: "Feb 2021",
    description:
      "Made 3D donut and coffee cup models, added colors and textures. Used bump maps and noise for a more realistic look. Curated the perfect lighting and background. Animated the whole scene.",
  },
  {
    img: snight,
    title: "Somnium Night",
    subtitle: "Data Analysis",
    date: "May 2023",
    description:
      "Measured various sleep metrics, using wearables, on 30 different individuals to find sleep patterns related to white noise usage. Found out most users have a worse sleep with the usage of white noise.",
  },
  {
    img: body,
    title: "Full Body 3D Model",
    subtitle: "Maya",
    date: "May 2021",
    description:
      "Created a 3D model of a complete human female from scratch.  Used Maya and basic proportions, as well as, geometry standards so there would be only quads with good topology.",
  },
  {
    img: riiaa,
    title: "RIIAA",
    subtitle: "Organizing Committee",
    date: "2020 - 2021",
    description:
      'Participated in the "Reunión Internacional de Inteligencia Artificial (RIIAA) 2021" as part of the organizing committee. Managed entry tickets and invited various universities and communities to talk at the event.',
  },
  {
    img: bricky,
    title: "Bricky Wars",
    subtitle: "4 Player Videogame",
    date: "September 2022",
    description:
      'Developed a 2D 4-Player Videogame using Unity. My team was: Eduardo González, Samuel Langarica and Sofía Piña. The game consisted of a multiplayer battle with different stages and power-ups. The player must jump on top of another player to kill them and get their points. Users could buy upgrades for the final battle with their points.',
  },
];

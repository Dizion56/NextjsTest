import { Hero } from "../sections";
import { Agency } from "../sections/Agency/Agency.jsx";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps = {
  title: "Managed agency selection",
  description: "Strengthen your onboarding process",
  image: { src: "/img/video.png", alt: "", width: 1100, height: 1800 },
  cards: [
    {
      title: "Brief",
      image: { src: "/img/icon.png", alt: "", width: 100, height: 100 },
      description: {
        __html: "Complete <span style='font-weight: 600'>brief writing or simple guidance</span> on what to include,we've got you covered.",
      },
    },
    {
      title: "Search",
      description: {
        __html: "In-depth agency search covering;<span style='font-weight: 600'>criteria matching</span>, door knocking and due-dilligence vetting."
      },
      image: { src: "/img/icon.png", alt: "", width: 100, height: 100 },
    },
    {
      title: "Pitch",
      description: {
        __html: "Comprehensive <span style='font-weight: 600'>pitch management</span>, including comms,diary management and pitch hosting."
      },
      image: { src: "/img/icon.png", alt: "", width: 100, height: 100 },
    },
  ],
};
export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Agency {...agencyProps} />
        {/** Other sections */}
      </div>
    </>
  );
}

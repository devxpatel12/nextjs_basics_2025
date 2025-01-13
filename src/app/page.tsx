import Hero from "@/components/hero";
import GymMan from "public/gyman.jpg";

export default function Home() {
  return (
    <Hero imageData={GymMan} alt="Gym man" title="Professional GYM Trainer" />
  );
}

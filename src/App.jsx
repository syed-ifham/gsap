import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <div  className="h-dvh bg-black"/>
    </main>
  )
}

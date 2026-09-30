import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from "./components/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar/>
    </main>
  )
}

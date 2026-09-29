import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return (
    <div className=" flex-center h-screen">
      <h1 >Hello, GSAP!!</h1>
    </div>
  )
}

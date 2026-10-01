import {navLinks} from "../utils/constants.js";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

export default function Navbar() {

  useGSAP(
    () => {
      const navTween = gsap.timeline({
        scrollTrigger: {
          trigger: 'nav',
          start: 'bottom top',
        }
      });

      navTween.fromTo('nav', {background: 'transparent'},
        {
          backgroundColor: '#00000050',
          backgroundFilter: 'blur(10px)',
          duration: 1,
          ease: 'power1.inOut'
        });

      gsap.timeline({
        scrollTrigger: {
          trigger: 'nav',
        }
      })
    }
  );


  return (
    <nav className="fixed z-50 w-full">
      <div
        className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a href="#home" className="flex items-center gap-2 cursor-pointer text-wrap text-sm md:text-base">
          <img src="/images/logo.png" alt="logo"/>
          <p className="font-modern-negra text-3xl -mb-2">Velvet Pour</p>
        </a>

        <ul className="flex-center gap-7 lg:gap-12">
          {
            navLinks.map((item, index) => (
              <li key={index}>
                <a href={`#${item.id}`}
                   className="cursor-pointer text-wrap text-sm md:text-base"
                >{item.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

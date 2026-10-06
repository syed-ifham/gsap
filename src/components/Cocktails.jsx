import {cocktailLists, mockTailLists} from "../utils/constants.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Cocktails() {

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 30%',
        end: 'bottom 80%',
        scrub: 1,
      }
    });

    parallaxTimeline
      .from('#c-left-leaf', {
        x: -120,
        y: 100,
        scale: 1,             // Zooms in from 50% size to original size
        ease: 'power1.out',
      }, 0)
      .from('#c-right-leaf', {
        x: 120,
        y: 100,
        scale: 1,             // Zooms in from 50% size to original size
        ease: 'power1.out',
      }, 0);
  }, [])

  return (
    <section id="cocktails" className="noisy relative min-h-dvh w-full overflow-hidden">
      <img
        src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf"
        className="absolute left-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"
      />

      <img
        className="absolute right-0 md:bottom-0 md:top-auto -top-20 md:w-fit w-1/3"
        src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf"
      />

      <div
        className="list container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5">
        <div className="popular space-y-8 w-full md:w-fit">
          <h2 className="text-xl font-medium">
            Most popular cocktails:
          </h2>
          <ul className="space-y-8">
            {cocktailLists.map((item, index) => (
              <li key={index} className="flex justify-between items-start">
                <div className="md:me-28">
                  <h3 className="font-modern-negra 2xL:text-3xl text-xl text-yellow">
                    {item.name}</h3>
                  <p className="text-sm">
                    {item.country} | {item.detail}</p>
                </div>
                <span className="text-xl font-medium">
                  - {item.price}
                </span>
              </li>
            ))}
          </ul>

        </div>
        <div className="loved space-y-8 w-full md:w-fit pb-20 md:pb-0">
          <h2 className="text-xl font-medium">
            Most loved cocktails:
          </h2>
          <ul className="space-y-8">
            {mockTailLists.map((item, index) => (
              <li key={index} className="flex justify-between items-start">
                <div className="md:me-28">
                  <h3 className="font-modern-negra 2xL:text-3xl text-xl text-yellow">
                    {item.name}</h3>
                  <p className="text-sm">
                    {item.country} | {item.detail}</p>
                </div>
                <span className="text-xl font-medium">
                  - {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

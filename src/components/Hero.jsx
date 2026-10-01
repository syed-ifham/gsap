import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from 'gsap';


export function Hero() {

  useGSAP(
    () => {

      const heroSplit = new SplitText('.title', {
        type: 'chars, words'
      });

      const paragraphSplit = new SplitText('.subtitle', {
        type: 'lines'
      });

      heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06
      });


      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        delay: 1,
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
        .to('.right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y: -200}, 0)

    }, []);


  return (
    <section id="hero" className="absolute inset-0 size-full bg-[url('/images/noise.png')]
    relative z-10 min-h-dvh w-full border border-transparent
    "
    >
      <div className="title font-modern-negra text-center leading-none mt-40 md:mt-32">
        {/*<span className="text-xl md:text-[2vw]">IFHAM'S</span>*/}
        <h1 className="text-8xl  md:text-[20vw]">MOJITO</h1>
      </div>


      <img
        src="/images/hero-left-leaf.png"
        alt="left-leaf"
        className="left-leaf absolute left-0 w-1/3 -bottom-20 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto md:w-fit"
      />

      <img
        src="/images/hero-right-leaf.png"
        alt="right-leaf"
        className="right-leaf absolute right-0 w-24 top-1/2 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit"
      />

      <div
        className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
        <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
          <div className="space-y-5  hidden md:block">
            <p className="">Cool. Crisp. Classic</p>
            <p className="subtitle font-modern-negra text-6xl text-yellow max-w-xl 2xl:text-start text-center">
              Sip the Spirit <br/> of Summer
            </p>
          </div>

          <div className="space-y-5  text-lg lg:max-w-2xs md:max-w-xs w-full">
            <p className="subtitle text-left">
              Every cocktail on our menu is a blend of premium ingredients, creative ,flair and timeless recipes --
              designed to delight your senses.
            </p>
            <a className="font-semibold opacity-80 2xl: text-start text-center hover:text-yellow">View cocktails</a>

          </div>

        </div>
      </div>
    </section>
  )
}

import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

export default function About() {

  useGSAP(() => {
      const titleSplit = SplitText.create('#about h2', {
        type: 'words',
      })

      const scrollTimeline = gsap.timeline(
        {
          scrollTrigger: {
            triggerType: "#about",
            start: 'top center',
          }
        }
      );

      scrollTimeline.from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02,
      })
        .from('.top-grid div, .bottom-grid div', {
          opacity: 0, duration: 1, ease: 'power1.inout', stagger: 0.4,
        }, '-=0.5')
    }
    , []);

  return (
    <div id="about" className="  min-h-screen py-28 2xL:py-0 px-5 container mx-auto">
      <div className=" mb-16 md:px-0 px-5">
        <div className="content grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="md: col-span-8 ">
            <p className="badge ">Best Cocktails</p>
            <h2 className="text-5xl md:text-6xl font-modern-negra max-w-lg">
              Where every detail matters <span className="text-white">-</span> from muddle to garnish</h2>
          </div>
          <div className="sub-content md:col-span-4 space-y-5 flex flex-col justify-between">
            <p className="text-lg">
              Every cocktails is a reflection of our obsession with details - from the first muddle to the final
              garnish. That care is what turns a simple drink into something truly memorable.
            </p>

            <div className="lex flex-col justify-between md:gap-2 gap-5">
              <p className="md:text-3xl text-xl font-bold">
                <span className="text-yellow font-bold text-5xl">4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="top-grid  grid grid-cols-1 xl:grid-cols-12 gap-5 mb-5 md:px-0 px-5">
        <div className="md:col-span-3 rounded-3xl overflow-hidden h-72 relative">
          <div className="noisy"/>
          <img className="object-cover w-full h-full" src="/images/abt1.png" alt="grid-image-1"/>
        </div>

        <div className="md:col-span-6 rounded-3xl overflow-hidden h-72 relative">
          <div className="noisy"/>
          <img className="object-cover w-full h-full" src="/images/abt2.png" alt="grid-image-2"/>
        </div>

        <div className="md:col-span-3 rounded-3xl overflow-hidden h-72 relative">
          <div className="noisy"/>
          <img className="object-cover w-full h-full" src="/images/abt5.png" alt="grid-image-5"/>
        </div>
      </div>

      <div className="bottom-grid grid grid-cols-1 md:grid-cols-12 gap-5 md:px-0 px-5">

        <div className="md:col-span-8 rounded-3xl overflow-hidden h-72 relative">
          <div className="noisy"/>
          <img className="object-cover w-full h-full" src="/images/abt3.png" alt="grid-image-3"/>
        </div>

        <div className="md:col-span-4 rounded-3xl overflow-hidden h-72 relative">
          <div className="noisy"/>
          <img className="object-cover w-full h-full" src="/images/abt4.png" alt="grid-image-4"/>
        </div>

      </div>

    </div>
  )
}

import Image from "next/image";

import { Sparkle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQs | Frontend Mentor",
  description:
    "Find answers to frequently asked questions about Frontend Mentor, coding challenges, portfolio tips, and more.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ✅ Use semantic <header> for SEO */}
      <header className="relative h-[320px] w-full md:h-[400px]">
        {/* ✅ Add priority to improve LCP */}
        <Image
          src="/background-pattern-mobile.svg"
          alt="Abstract purple background pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src="/background-pattern-desktop.svg"
          alt="Abstract purple background pattern for desktop"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />
      </header>

      {/* ✅ Use <section> with aria-label */}
      <section
        className="relative -top-24 mx-auto px-6 md:px-10 lg:px-12"
        aria-label="Frequently Asked Questions"
      >
        <div className="mx-auto max-w-[37.5rem] space-y-6 rounded-xl bg-white p-6 shadow-lg md:space-y-8 md:p-10">
          <h1 className="flex items-center gap-4 text-[2rem] leading-normal font-bold tracking-normal text-[#301534] md:text-[3.5rem] md:leading-[4.125rem]">
            <Sparkle
              aria-hidden="true"
              className="size-7 fill-[#AD28EB] text-[#AD28EB]"
            />
            FAQs
          </h1>

          {/* ✅ Use semantic <dl> for FAQ (definition list) */}
          <dl>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" asChild>
                <div>
                  <dt>
                    <AccordionTrigger className="text-base leading-normal font-semibold tracking-normal text-[#301534] transition-colors duration-300 ease-in-out hover:text-[#AD28EB] md:text-lg md:leading-[1.3125rem]">
                      What is Frontend Mentor, and how will it help me?
                    </AccordionTrigger>
                  </dt>
                  <AccordionContent asChild>
                    <dd>
                      <p className="text-sm leading-[150%] font-normal tracking-normal text-[#8B6990] md:text-base md:leading-6">
                        Frontend Mentor offers realistic coding challenges to
                        help developers improve their frontend coding skills
                        with projects in HTML, CSS, and JavaScript. It&apos;s
                        suitable for all levels and ideal for portfolio
                        building.
                      </p>
                    </dd>
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-2" asChild>
                <div>
                  <dt>
                    <AccordionTrigger className="text-base leading-normal font-semibold tracking-normal text-[#301534] transition-colors duration-300 ease-in-out hover:text-[#AD28EB] md:text-lg md:leading-[1.3125rem]">
                      Is Frontend Mentor free?
                    </AccordionTrigger>
                  </dt>
                  <AccordionContent asChild>
                    <dd>
                      <p className="text-sm leading-[150%] font-normal tracking-normal text-[#8B6990] md:text-base md:leading-6">
                        Yes, Frontend Mentor offers both free and premium coding
                        challenges, with the free option providing access to a
                        range of projects suitable for all skill levels.
                      </p>
                    </dd>
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-3" asChild>
                <div>
                  <dt>
                    <AccordionTrigger className="text-base leading-normal font-semibold tracking-normal text-[#301534] transition-colors duration-300 ease-in-out hover:text-[#AD28EB] md:text-lg md:leading-[1.3125rem]">
                      Can I use Frontend Mentor projects in my portfolio?
                    </AccordionTrigger>
                  </dt>
                  <AccordionContent asChild>
                    <dd>
                      <p className="text-sm leading-[150%] font-normal tracking-normal text-[#8B6990] md:text-base md:leading-6">
                        Yes, you can use projects completed on Frontend Mentor
                        in your portfolio. It&apos;s an excellent way to
                        showcase your skills to potential employers!
                      </p>
                    </dd>
                  </AccordionContent>
                </div>
              </AccordionItem>

              <AccordionItem value="item-4" asChild>
                <div>
                  <dt>
                    <AccordionTrigger className="text-base leading-normal font-semibold tracking-normal text-[#301534] transition-colors duration-300 ease-in-out hover:text-[#AD28EB] md:text-lg md:leading-[1.3125rem]">
                      How can I get help if I&apos;m stuck on a Frontend Mentor
                      challenge?
                    </AccordionTrigger>
                  </dt>
                  <AccordionContent asChild>
                    <dd>
                      <p className="text-sm leading-[150%] font-normal tracking-normal text-[#8B6990] md:text-base md:leading-6">
                        The best place to get help is inside Frontend
                        Mentor&apos;s Discord community. There&apos;s a help
                        channel where you can ask questions and seek support
                        from other community members.
                      </p>
                    </dd>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </dl>
        </div>
      </section>
    </main>
  );
}

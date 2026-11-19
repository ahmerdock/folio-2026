"use client";

import { useRef } from "react";
import { CustomButton } from "@/components";
import { useTitleReveal } from "@/lib";
import { TagList } from "../../../components";
import { STACK_LABEL } from "./work-hero.data";
import { IWorkHeroProps } from "./work-hero.interface";
import { BODY_TEXT_CLASS } from "../../work-details.data";

export default function WorkHero(props: IWorkHeroProps) {
  const { title, tags, meta, links, stack } = props;
  const sectionRef = useRef<HTMLElement>(null);
  useTitleReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="px-[5%] pt-30 pb-16 sm:pb-20 md:pt-37.5 md:pb-25 lg:pt-46 lg:pb-37.5 2xl:pt-68.25"
    >
      <div className="mx-auto w-full max-w-420">
        <div className="mb-5 flex flex-col gap-6 md:mb-6 lg:mb-10">
          <TagList tags={tags} />
          <h1
            data-title
            className="text-[clamp(2.75rem,1.4757rem+5.4369vw,5rem)] leading-none font-normal tracking-[0.01em] uppercase"
          >
            {title}
          </h1>
        </div>

        <div className="flex max-w-375 flex-col gap-8">
          <dl className="grid flex-1 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] justify-between gap-4 xl:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
            {meta.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="text-base font-bold">{label}</dt>
                <dd className={BODY_TEXT_CLASS}>{value}</dd>
              </div>
            ))}
          </dl>
          {stack && stack.length > 0 && (
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold">{STACK_LABEL}</p>
              <ul className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white-secondary/40 px-3 py-1 text-sm leading-none font-semibold uppercase lg:px-5 lg:text-base lg:leading-[1.4]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {links.map(({ label, href }) => (
                <CustomButton
                  key={label}
                  label={label}
                  href={href}
                  target="_blank"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { StepCard } from "./components";
import { STEPS, STEPS_SUBTITLE, STEPS_TITLE } from "./steps.data";
import useSteps from "./use-steps";

export default function Steps() {
  const { headerRef, titleRef, subtitleRef } = useSteps();

  return (
    <section className="rounded-4xl bg-mist py-16 text-white-secondary sm:rounded-[40px] sm:py-20 md:rounded-[60px] md:py-25 lg:rounded-[100px] lg:py-37.5">
      <div className="px-[5%]">
        <div className="mx-auto w-full max-w-420">
          <header
            ref={headerRef}
            className="mb-8 text-center sm:mb-11 md:mb-13 lg:mb-20"
          >
            <h2
              ref={titleRef}
              className="mb-3 text-(length:--_typography---font-sizes--heading--h4) leading-none font-normal tracking-[-0.01em] uppercase"
            >
              {STEPS_TITLE}
            </h2>
            <p
              ref={subtitleRef}
              className="text-base leading-[1.4] text-charcoal lg:text-xl"
            >
              {STEPS_SUBTITLE}
            </p>
          </header>

          {/* 1 column, 2x2 from sm, 4 columns from lg. Cards align to the top
              at lg so opening one grows only that card; below it they stretch
              so a row's cards match heights. */}
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-start xl:gap-10">
            {/* Dashed connector behind the row; lg and up only. */}
            <div
              aria-hidden
              className="absolute top-3 left-1/2 hidden w-[79%] max-w-325 -translate-x-1/2 border-2 border-dashed border-ash lg:block"
            />
            {STEPS.map((step) => (
              <StepCard key={step.count} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

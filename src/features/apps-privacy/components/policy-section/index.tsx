import { IPolicySectionProps } from "./policy-section.interface";

export default function PolicySection(props: IPolicySectionProps) {
  const { number, title, children } = props;

  return (
    <section className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-3 border-t border-ash py-8 first:border-t-0 first:pt-0 md:gap-x-8 md:py-10">
      <span className="nav-text-stroke font-heading text-3xl leading-none text-transparent md:text-5xl">
        {String(number).padStart(2, "0")}
      </span>
      <h2 className="text-3xl leading-none tracking-tight uppercase md:text-5xl">
        {title}
      </h2>

      <div className="col-start-2 flex flex-col gap-4 text-charcoal text-(length:--_typography---font-sizes--body--md) leading-relaxed">
        {children}
      </div>
    </section>
  );
}

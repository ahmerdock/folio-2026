import Link from "next/link";
import { ArrowIcon } from "@/assets/icons";
import { Caption } from "@/components";
import { APP_POLICIES } from "@/data/privacy-policies";
import {
  PRIVACY_INDEX_CAPTION_EMPHASIS,
  PRIVACY_INDEX_CAPTION_PREFIX,
  PRIVACY_INDEX_CAPTION_SUFFIX,
  PRIVACY_INDEX_INTRO,
  PRIVACY_INDEX_ROUTE,
  PRIVACY_INDEX_TITLE,
  PRIVACY_INDEX_UPDATED_LABEL,
} from "./apps-privacy.data";

export { PrivacyPolicyPage } from "./components";

export default function AppsPrivacy() {
  return (
    <main
      id="main-content"
      className="relative min-h-dvh overflow-clip px-[5%] pt-32 pb-16 sm:pb-20 md:pt-40 md:pb-28 lg:pb-32">
      <div className="mx-auto w-full max-w-[1680px]">
        <header className="flex flex-col gap-6">
          <Caption
            prefix={PRIVACY_INDEX_CAPTION_PREFIX}
            emphasis={PRIVACY_INDEX_CAPTION_EMPHASIS}
            suffix={PRIVACY_INDEX_CAPTION_SUFFIX}
          />
          <h1 className="text-(length:--_typography---font-sizes--heading--h4) leading-none font-normal tracking-[-0.01em] uppercase">
            {PRIVACY_INDEX_TITLE}
          </h1>
          <p className="text-charcoal max-w-[52ch] text-(length:--_typography---font-sizes--body--md) leading-relaxed">
            {PRIVACY_INDEX_INTRO}
          </p>
        </header>

        <ul className="mt-12 border-b border-ash lg:mt-20">
          {APP_POLICIES.map(
            ({ slug, name, description, lastUpdated }, index) => (
              <li key={slug} className="border-t border-ash">
                <Link
                  href={`${PRIVACY_INDEX_ROUTE}/${slug}`}
                  className="group relative isolate flex items-center gap-4 overflow-hidden py-6 outline-none md:gap-8 md:px-6 md:py-9"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ember transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
                  />

                  <span className="nav-text-stroke font-heading text-3xl leading-none text-transparent transition-colors duration-500 group-hover:text-white-secondary group-focus-visible:text-white-secondary motion-reduce:transition-none md:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col gap-2 transition-transform duration-500 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none md:gap-3">
                    <span className="font-heading text-[clamp(2.75rem,7vw,7rem)] leading-none tracking-[-0.01em] uppercase">
                      {name}
                    </span>
                    <span className="text-charcoal text-base leading-snug transition-colors duration-500 group-hover:text-white-secondary group-focus-visible:text-white-secondary motion-reduce:transition-none md:text-lg">
                      {description}
                    </span>
                  </span>

                  <span className="hidden shrink-0 text-charcoal transition-colors duration-500 group-hover:text-white-secondary group-focus-visible:text-white-secondary motion-reduce:transition-none sm:block">
                    {PRIVACY_INDEX_UPDATED_LABEL} {lastUpdated}
                  </span>

                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white-secondary transition-colors duration-500 group-hover:bg-white-secondary group-hover:text-primary group-focus-visible:bg-white-secondary group-focus-visible:text-primary motion-reduce:transition-none md:size-16">
                    <ArrowIcon
                      aria-hidden="true"
                      className="size-5 -rotate-45 transition-transform duration-500 ease-out group-hover:rotate-0 group-focus-visible:rotate-0 motion-reduce:transition-none md:size-6"
                    />
                  </span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </main>
  );
}

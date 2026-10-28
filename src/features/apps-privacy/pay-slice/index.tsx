import { Caption, CustomButton } from "@/components";
import {
  PRIVACY_CAPTION_EMPHASIS,
  PRIVACY_CAPTION_PREFIX,
  PRIVACY_CAPTION_SUFFIX,
  PRIVACY_CONTACT_EMAIL,
  PRIVACY_CONTACT_TEXT,
  PRIVACY_CONTACT_TITLE,
  PRIVACY_CTA_HREF,
  PRIVACY_CTA_LABEL,
  PRIVACY_INTRO,
  PRIVACY_LAST_UPDATED,
  PRIVACY_SECTIONS,
  PRIVACY_SUMMARY,
  PRIVACY_SUMMARY_LABEL,
  PRIVACY_TITLE,
} from "./privacy-policy.data";
import { PolicySection } from "./components";

export default function PaySlicePrivacy() {
  return (
    <main className="relative overflow-clip px-[5%] pt-32 pb-16 sm:pb-20 md:pt-40 md:pb-28 lg:pb-32">
      <div className="mx-auto w-full max-w-[1680px]">
        <header className="flex flex-col gap-6">
          <Caption
            prefix={PRIVACY_CAPTION_PREFIX}
            emphasis={PRIVACY_CAPTION_EMPHASIS}
            suffix={PRIVACY_CAPTION_SUFFIX}
          />
          <h1 className="text-(length:--_typography---font-sizes--heading--h4) leading-none font-normal tracking-[-0.01em] uppercase">
            {PRIVACY_TITLE}
          </h1>
          <p className="text-charcoal text-(length:--_typography---font-sizes--body--md)">
            Last updated: {PRIVACY_LAST_UPDATED}
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <aside className="flex flex-col gap-8 lg:sticky lg:top-32 lg:self-start">
            <p className="text-charcoal max-w-[52ch] text-(length:--_typography---font-sizes--body--md) leading-relaxed">
              {PRIVACY_INTRO}
            </p>

            <div className="rounded-xl border border-ash bg-mist p-6 md:p-8">
              <span className="font-heading text-lime text-2xl tracking-wide uppercase">
                {PRIVACY_SUMMARY_LABEL}
              </span>
              <p className="mt-3 text-xl leading-snug font-medium text-white-secondary md:text-2xl">
                {PRIVACY_SUMMARY}
              </p>
            </div>
          </aside>

          <div className="flex flex-col">
            {PRIVACY_SECTIONS.map(
              ({ title, paragraphs, listIntro, list }, index) => (
                <PolicySection key={title} number={index + 1} title={title}>
                  {paragraphs?.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  {listIntro && (
                    <p className="text-white-secondary">{listIntro}</p>
                  )}
                  {list && (
                    <ul className="flex flex-col gap-3">
                      {list.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.65em] size-2 shrink-0 rounded-full bg-primary"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </PolicySection>
              ),
            )}

            <PolicySection
              number={PRIVACY_SECTIONS.length + 1}
              title={PRIVACY_CONTACT_TITLE}
            >
              <p>
                {PRIVACY_CONTACT_TEXT}{" "}
                <a
                  href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
                  className="text-white-secondary underline decoration-primary decoration-2 underline-offset-4 break-all"
                >
                  {PRIVACY_CONTACT_EMAIL}
                </a>
                .
              </p>
            </PolicySection>

            <CustomButton
              label={PRIVACY_CTA_LABEL}
              href={PRIVACY_CTA_HREF}
              className="mt-6 self-start"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

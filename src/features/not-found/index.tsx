import Image from "next/image";
import { NotFoundImg } from "@/assets/images";
import { Caption, CustomButton } from "@/components";
import {
  NOT_FOUND_CAPTION_EMPHASIS,
  NOT_FOUND_CAPTION_PREFIX,
  NOT_FOUND_CAPTION_SUFFIX,
  NOT_FOUND_CTA_HREF,
  NOT_FOUND_CTA_LABEL,
} from "./not-found.data";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex h-dvh flex-col items-center justify-center gap-[clamp(2rem,4.17vw,3.75rem)] px-[5%] text-center text-black-secondary"
    >
      {/* The Caption below is a <p>, so this page would have no heading at
          all for screen readers. Visually hidden: the Caption already shows
          the same message. */}
      <h1 className="sr-only">
        {NOT_FOUND_CAPTION_PREFIX}
        {NOT_FOUND_CAPTION_EMPHASIS}
        {NOT_FOUND_CAPTION_SUFFIX}
      </h1>
      <Caption
        prefix={NOT_FOUND_CAPTION_PREFIX}
        emphasis={NOT_FOUND_CAPTION_EMPHASIS}
        suffix={NOT_FOUND_CAPTION_SUFFIX}
      />

      <div className="max-w-[clamp(16.25rem,42.78vw,38.5rem)]">
        <Image src={NotFoundImg} alt="Not Found" preload />
      </div>

      <CustomButton label={NOT_FOUND_CTA_LABEL} href={NOT_FOUND_CTA_HREF} />
    </main>
  );
}

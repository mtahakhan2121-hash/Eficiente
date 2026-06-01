import Image from "next/image";

type SectionTickerProps = {
  className?: string;
};

export function SectionTicker({ className }: SectionTickerProps) {
  return (
    <div aria-hidden="true" className={`section-ticker ${className ?? ""}`.trim()}>
      <div className="section-ticker-track">
        <Image
          src="/assets/Elements & Icons/Ticker SVG (1).svg"
          alt=""
          width={2448}
          height={45}
          className="section-ticker-image"
          priority
        />
        <Image
          src="/assets/Elements & Icons/Ticker SVG (1).svg"
          alt=""
          width={2448}
          height={45}
          className="section-ticker-image"
          priority
        />
      </div>
    </div>
  );
}

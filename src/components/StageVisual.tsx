import Image from "next/image";

type StageVisualProps = {
  asset: string;
  title: string;
};

export function StageVisual({ asset, title }: StageVisualProps) {
  return (
    <div className="relative h-[160px] overflow-hidden rounded-md bg-stage-01 md:h-[220px]">
      <Image src={asset} alt={title} fill className="object-cover" />
    </div>
  );
}

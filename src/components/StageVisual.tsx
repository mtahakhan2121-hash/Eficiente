import Image from "next/image";

type StageVisualProps = {
  asset: string;
  title: string;
};

export function StageVisual({ asset, title }: StageVisualProps) {
  return (
    <div className="relative aspect-[92/50] overflow-hidden rounded-md bg-gray-100">
      <Image src={asset} alt={title} fill className="object-cover" />
    </div>
  );
}

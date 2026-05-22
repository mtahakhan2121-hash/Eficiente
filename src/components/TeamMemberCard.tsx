type TeamMemberCardProps = {
  name: string;
  role: string;
  bio: string;
  portraitTone: string;
};

export function TeamMemberCard({
  name,
  role,
  bio,
  portraitTone
}: TeamMemberCardProps) {
  return (
    <article className="rounded-md bg-white p-3 shadow-card md:p-2.5">
      <div className="grid grid-cols-[92px_1fr] gap-4 md:grid-cols-[108px_1fr]">
        <div
          className={`h-[112px] rounded-sm bg-gradient-to-br ${portraitTone} bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%)] md:h-[124px]`}
        />
        <div className="pr-2">
          <h3 className="text-body-2-mobile md:text-body-4">{name}</h3>
          <p className="mt-1 text-body-4-mobile text-coral md:text-body-5">{role}</p>
          <p className="mt-3 max-w-[210px] text-body-4-mobile text-gray-300 md:text-body-5">
            {bio}
          </p>
        </div>
      </div>
    </article>
  );
}

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
    <article className="rounded-md bg-white p-3.5 shadow-card md:p-3">
      <div className="grid grid-cols-[100px_1fr] gap-4.5 md:grid-cols-[118px_1fr] md:gap-5">
        <div
          className={`h-[122px] rounded-sm bg-gradient-to-br ${portraitTone} bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.18),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%)] md:h-[136px]`}
        />
        <div className="pr-2 md:pr-3">
          <h3 className="text-body-2-mobile md:text-body-4">{name}</h3>
          <p className="mt-1 text-body-4-mobile text-coral md:text-body-5">{role}</p>
          <p className="mt-3.5 max-w-[225px] text-body-4-mobile text-gray-300 md:mt-4 md:max-w-[240px] md:text-body-5">
            {bio}
          </p>
        </div>
      </div>
    </article>
  );
}

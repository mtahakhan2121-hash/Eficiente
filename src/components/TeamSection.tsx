"use client";

import { useState } from "react";
import Image from "next/image";

import type { TeamMember } from "@/data/team";

import { Button } from "./Button";
import { Container } from "./Container";
import { SectionHeadingBlock } from "./SectionHeadingBlock";
import { TeamMemberCard } from "./TeamMemberCard";

type TeamSectionProps = {
  eyebrow: string;
  title: string;
  leaders: TeamMember[];
  operationalMembers: TeamMember[];
};

export function TeamSection({
  eyebrow,
  title,
  leaders,
  operationalMembers
}: TeamSectionProps) {
  const [showOperationalTeam, setShowOperationalTeam] = useState(false);
  const visibleMembers = showOperationalTeam
    ? [...leaders, ...operationalMembers]
    : leaders;

  return (
    <section id="team" className="relative overflow-hidden bg-gray-400 py-20 text-white md:py-30">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[150px] -left-[168px] h-[340px] w-[340px] md:-bottom-[224px] md:-left-[248px] md:h-[520px] md:w-[520px]"
      >
        <Image
          src="/assets/Elements & Icons/Efficiente Icon.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[160px] -right-[160px] h-[340px] w-[340px] md:-bottom-[238px] md:-right-[236px] md:h-[520px] md:w-[520px]"
      >
        <Image
          src="/assets/Elements & Icons/Efficiente Icon.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      <Container className="relative z-10">
        <SectionHeadingBlock
          eyebrow={eyebrow}
          title={title}
          theme="dark"
          className="mb-12 md:mb-14"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {visibleMembers.map((member, index) => {
            const isCenteredFinalCard =
              showOperationalTeam && index === visibleMembers.length - 1;

            return (
              <div
                key={`${member.name}-${member.role}`}
                className={isCenteredFinalCard ? "md:col-start-2" : undefined}
              >
                <TeamMemberCard {...member} />
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center md:mt-10">
          <Button
            label={showOperationalTeam ? "View Leaders" : "See Operational Team"}
            variant="teamPrimaryBlue"
            size="sm"
            onClick={() => setShowOperationalTeam((current) => !current)}
          />
        </div>
      </Container>
    </section>
  );
}

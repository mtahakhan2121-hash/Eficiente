"use client";

import { useState } from "react";

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
      <div className="pointer-events-none absolute -bottom-10 left-[-80px] h-[180px] w-[180px] rotate-45 border border-blue-200/30 md:h-[240px] md:w-[240px]" />
      <div className="pointer-events-none absolute -bottom-10 right-[-40px] h-[220px] w-[220px] rotate-45 border border-blue-200/30 md:h-[280px] md:w-[280px]" />
      <Container>
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

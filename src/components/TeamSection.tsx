import React from "react";
import TeamMembercard from "./TeamMembercard";
import Image from "next/image";
import teambg from "../assets/images/teambg.jpg";

const TeamSection = () => {
  const teamMembers = [
    { name: "Mark Henry", role: "Owner" },
    { name: "Lucky Henry", role: "Chef" },
    { name: "Moon Henry", role: "Founder" },
    { name: "Tom Morrow", role: "Specialist" },
  ];

  return (
    <div className="relative bg-white font-poppins">
      <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden">
        <Image
          src={teambg}
          alt="Team Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-[#AD1519D9] z-10" />
        <div className="absolute top-[-50px] inset-0 flex flex-col items-center justify-center text-white text-center z-20">
          <h1 className="text-3xl md:text-5xl font-bold">Team Member</h1>
          <p className="mt-2 text-sm md:text-base max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            sed pharetra dictum neque massa congue
          </p>
        </div>
      </div>

      <div className="relative z-30 -mt-20 md:-mt-30 flex gap-x-4 gap-y-6 md:gap-y-0 md:gap-x-6 justify-center flex-wrap md:px-4">
        {teamMembers.map((member, index) => (
          <TeamMembercard
            key={index}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

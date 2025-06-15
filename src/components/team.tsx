type TeamMember = {
  name: string;
  role: string;
  description: string;
  logo: string;
};

type TeamSectionProps = {
  team: TeamMember[];
};

export default function Team({ team }: TeamSectionProps) {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto bg-[#F1F1F1] text-[#1C1C1C]">
      <h3 className="text-4xl font-extrabold text-center text-[#1C1C1C] mb-6">Twórcy gry</h3>
      <p className="max-w-3xl mx-auto text-center text-lg text-[#1C1C1C] mb-12 px-6">
        Pomysł na grę powstał z popiołu poprzedniego pomysłu - długimi dniami nasz główny game designer myślał o grze, którą możemy razem stworzyć, żeby nie tylko gra zaciekawiła graczy swoimi mechanikami, ale też łapiącą za serce historią.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {team.map(({ name, role, description, logo }) => (
          <div
            key={name}
            className="bg-white p-6 rounded-lg shadow-md border border-[#E0E0E0] flex flex-col items-center text-center h-full"
          >
            <img
              src={logo}
              alt={`${name} Logo`}
              className="w-24 h-24 mb-4 rounded-full object-cover shadow"
              loading="lazy"
            />
            <div className="flex flex-col flex-1 justify-start w-full">
              <h3 className="text-xl font-semibold mb-2 text-[#1C1C1C]">{name}</h3>
              <h4 className="text-[#7D0A0A] text-sm mb-3 italic">{role}</h4>
              <p className="text-[#333333] text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

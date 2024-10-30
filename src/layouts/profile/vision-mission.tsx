import { Container, Img } from "@/components";
import { VisionMissionLists } from "@/static";
import Image from "next/image";

export const VisionMission = () => {
  const visionMissionLists = VisionMissionLists();
  return (
    <div className="relative overflow-hidden min-h-500 text-light">
      <div className="absolute top-0 left-0 grid w-full h-full lg:grid-cols-5">
        <div className="relative min-h-300 lg:col-span-2 bg-secondary">
          <Image src="/images/house-frame.webp" alt="house frame" className="opacity-80" objectPosition="top" fill objectFit="cover" />
        </div>
        <div className="relative min-h-500 lg:min-h-full w-full lg:col-span-3 bg-primary">
          <Image src="/images/house-frame.webp" alt="house frame" className="opacity-80 -scale-x-100 ms-auto max-w-md" objectPosition="top" fill />
        </div>
      </div>
      <Container className="grid grid-cols-1 lg:grid-cols-5 py-12 gap-x-32 gap-y-12">
        <div className="min-h-300 lg:col-span-2 sm:p-8 lg:p-0">
          <h2 className="mb-8 md:mb-10 text-3xl sm:text-4xl font-semibold">{visionMissionLists.vision.title}</h2>
          <p className="lg:pr-10 text-base sm:text-lg xl:text-xl leading-loose xl:leading-relaxed text-justify">{visionMissionLists.vision.description}</p>
        </div>

        {/* Missions Section */}
        <div className="min-h-500 lg:min-h-full lg:col-span-3 sm:p-8 lg:p-0">
          <h2 className="mb-8 md:mb-10 text-3xl sm:text-4xl font-semibold">{visionMissionLists.mission.title}</h2>
          <ul className="space-y-2">
            {visionMissionLists.mission.description.map((item, index) => (
              <li key={index} className="flex items-center gap-4 px-4 py-2 text-xs sm:text-sm text-justify border rounded-lg bg-light text-dark-blue border-secondary">
                <Img src="/icons/target-fill.svg" alt="icon missions" className="size-8 min-w-8" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

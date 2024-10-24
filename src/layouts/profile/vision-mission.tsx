import { Container, Img } from "@/components";
import { VisionMissionLists } from "@/static";
import Image from "next/image";

export const VisionMission = () => {
  const visionMissionLists = VisionMissionLists();
  return (
    <div className="relative overflow-hidden min-h-500 text-light">
      <div className="absolute top-0 left-0 grid w-full h-full grid-cols-5">
        <div className="relative col-span-2 bg-secondary">
          <Image src="/images/house-frame.webp" alt="house frame" className="opacity-80" objectPosition="top" width={500} height={500} />
        </div>
        <div className="relative w-full col-span-3 bg-primary">
          <Image
            src="/images/house-frame.webp"
            alt="house frame"
            className="opacity-80 -scale-x-100 ms-auto"
            objectPosition="top"
            width={500}
            height={500}
          />
        </div>
      </div>
      <Container className="grid grid-cols-5 py-12 gap-x-32">
        <div className="col-span-2">
          <h2 className="mb-10 text-4xl font-bold">{visionMissionLists.vision.title}</h2>
          <p className="pr-10 text-xl leading-relaxed text-justify">{visionMissionLists.vision.description}</p>
        </div>

        {/* Missions Section */}
        <div className="col-span-3">
          <h2 className="mb-10 text-4xl font-bold">{visionMissionLists.mission.title}</h2>
          <ul className="space-y-2">
            {visionMissionLists.mission.description.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 px-4 py-2 text-sm text-justify border rounded-lg bg-light text-dark-blue border-secondary"
              >
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

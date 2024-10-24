import Image from "next/image";

export const Overview = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary max-w-md">Professional Staff and Internship</h2>
      <p className="text-lg sm:text-xl text-dark-blue max-w-md">We have several job and internship vacancies open</p>
      <Image
        src="/images/house-frame-dark.webp"
        alt="house frame"
        className="absolute bottom-0 left-0"
        objectPosition="top"
        width={550}
        height={550}
      />
    </div>
  );
};

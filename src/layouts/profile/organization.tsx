import { Container, Img, Motion } from "@/components";

import { organizationalLists } from "@/static";

export const Organizational = () => {
  return (
    <Container id="organizational" className="py-16 space-y-8">
      <Motion tag="div" initialY={-40} animateY={0} duration={0.3} className="space-y-4 text-center sm:space-y-2 sm:text-start">
        <h3 className="heading">Organizational Structure</h3>
        <p className="subheading">Get to know the passionate directors and managers behind our success</p>
      </Motion>

      <Motion tag="div" initialY={40} animateY={0} duration={0.6} delay={0.3} className="flex justify-center w-full h-full max-w-xl mx-auto">
        <Img src={organizationalLists[0].pathImg} alt={organizationalLists[0].name} className={`w-full h-96 rounded-s-lg`} cover />
        <div className="h-96 flex flex-col justify-center w-full px-4 py-2 text-center border-l-4 text-light bg-primary border-secondary rounded-e-lg">
          <h5 className="text-sm font-light sm:text-3xl md:text-4xl">{organizationalLists[0].name}</h5>
          <p className="text-xl font-medium sm:text-2xl md:text-3xl">{organizationalLists[0].job}</p>
        </div>
      </Motion>

      <Motion tag="div" initialY={40} animateY={0} duration={0.9} delay={0.6} className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
        {organizationalLists.slice(1).map((item, index) => (
          <div key={index} className={`relative`}>
            <Img src={item.pathImg} alt={item.name} className={`w-full rounded-t-lg h-80 sm:h-96`} cover />
            <div className="px-4 py-2 border-l-4 rounded-b-lg text-light bg-primary border-secondary">
              <h5 className="text-sm sm:text-base md:text-lg w-max">{item.name}</h5>
              <p className="text-sm font-semibold sm:text-base md:text-lg w-max">{item.job}</p>
            </div>
          </div>
        ))}
      </Motion>
    </Container>
  );
};

import { Container, Img, Motion } from "@/components";

export const Messages = () => {
  return (
    <Container id="about-us" className="flex flex-col-reverse justify-between items-center gap-8 lg:gap-20 lg:flex-row">
      <div className="w-full space-y-4 font-semibold flex-1 py-10">
        <Motion tag="h2" initialX={-40} animateX={0} duration={0.3} className="heading">
          PT Amanah Aulia Mandiri
        </Motion>
        <Motion
          tag="h4"
          initialX={-40}
          animateX={0}
          duration={0.6}
          delay={0.3}
          className="text-base font-semibold text-justify sm:text-lg md:text-xl lg:text-2xl text-primary lg:text-start"
        >
          We are General Supplier, Fabrication, Machining, Mechanical, Electrical, Robotic and Civil company.
        </Motion>
        <Motion
          tag="p"
          initialX={-40}
          animateX={0}
          duration={0.9}
          delay={0.6}
          className="text-sm font-normal text-justify sm:text-base text-dark-blue"
        >
          PT Amanah Aulia Mandiri telah berjalan sejak tahun 2015 dan selama perjalanan, kami telah banyak melayani produk-produk baik dalam skala
          besar maupun kecil, begitu juga proyek-proyek, pekerjaan, workshop, dan hampir sebagian besar mendominasi daerah Banten barat hingga
          sebagian wilayah Jawa, Sumatera dan Kalimantan.
        </Motion>
        <Motion
          tag="p"
          initialX={-40}
          animateX={0}
          duration={0.9}
          delay={0.6}
          className="text-sm font-normal text-justify sm:text-base text-dark-blue"
        >
          PT Amanah Aulia Mandiri sebagai salah satu General Supplier dan Project hadir memenuhi kebutuhan para pebisnis yang berorientasi bergerak
          dalam bidang Electrical Spesial Panel Maker, Mechanical, Engineering, Safety dan Project lainnya. Dan pada tahun 2019 kami mulai bergerak di
          bidang Kontruksi. Kami melayani dengan sepenuh hati dan mensupport sesuai dengan kebutuhan customer baik skala besar maupun kecil.
        </Motion>
      </div>
      <Motion tag="div" initialX={40} animateX={0} duration={0.6} delay={0.3} className="relative w-full flex-1">
        <Img
          src="/images/aam-office.webp"
          alt="PT Trijaya Berkah Mandiri company building picture "
          className="w-[300px] sm:w-[400px] md:w-[500px] xl:w-[600px] aspect-square mx-auto"
        />
      </Motion>
    </Container>
  );
};

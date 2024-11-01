import { TemplateTypes } from "@/types";

interface ServiceTypes extends TemplateTypes {
  pathImgHover: string;
}

export const ServiceLists = () => {
  return [
    {
      pathImg: "/icons/delivery-white.svg",
      pathImgHover: "/icons/delivery-orange.svg",
      title: "General Supplier",
      description: "Eu enim nisl augue ante neque dignissim vulputate maximus finibus. Id et parturient lacinia lacus egestas adipiscing pede cubilia. Fames taciti auctor donec dis tempor.",
    },
    {
      pathImg: "/icons/factory-worker-white.svg",
      pathImgHover: "/icons/factory-worker-orange.svg",
      title: "Construction",
      description: "Eu enim nisl augue ante neque dignissim vulputate maximus finibus. Id et parturient lacinia lacus egestas adipiscing pede cubilia. Fames taciti auctor donec dis tempor.",
    },
    {
      pathImg: "/icons/usage-settings-white.svg",
      pathImgHover: "/icons/usage-settings-orange.svg",
      title: "Civil",
      description: "Eu enim nisl augue ante neque dignissim vulputate maximus finibus. Id et parturient lacinia lacus egestas adipiscing pede cubilia. Fames taciti auctor donec dis tempor.",
    },
    {
      pathImg: "/icons/robot-two-white.svg",
      pathImgHover: "/icons/robot-two-orange.svg",
      title: "Robotic",
      description: "Eu enim nisl augue ante neque dignissim vulputate maximus finibus. Id et parturient lacinia lacus egestas adipiscing pede cubilia. Fames taciti auctor donec dis tempor.",
    },
    {
      pathImg: "/icons/robot-two-white.svg",
      pathImgHover: "/icons/robot-two-orange.svg",
      title: "Fabrication",
      description: "Eu enim nisl augue ante neque dignissim vulputate maximus finibus. Id et parturient lacinia lacus egestas adipiscing pede cubilia. Fames taciti auctor donec dis tempor.",
    },
    {
      pathImg: "/icons/robot-two-white.svg",
      pathImgHover: "/icons/robot-two-orange.svg",
      title: "Mechanical",
      description: "Eu enim nisl augue ante neque dignissim vulputate maximus finibus. Id et parturient lacinia lacus egestas adipiscing pede cubilia. Fames taciti auctor donec dis tempor.",
    },
    {
      pathImg: "/icons/robot-two-white.svg",
      pathImgHover: "/icons/robot-two-orange.svg",
      title: "Engineering",
      description: "Eu enim nisl augue ante neque dignissim vulputate maximus finibus. Id et parturient lacinia lacus egestas adipiscing pede cubilia. Fames taciti auctor donec dis tempor.",
    },
    {
      pathImg: "/icons/robot-two-white.svg",
      pathImgHover: "/icons/robot-two-orange.svg",
      title: "Electrical",
      description: "Eu enim nisl augue ante neque dignissim vulputate maximus finibus. Id et parturient lacinia lacus egestas adipiscing pede cubilia. Fames taciti auctor donec dis tempor.",
    },
  ] as ServiceTypes[];
};

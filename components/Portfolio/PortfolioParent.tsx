import { title } from "process";
import { PortFolioLeft, PortFolioRight } from "./PortFolioComponent";

interface PortFolioProps {
  image_1: string;
  image_2: string;
  title: string;
  content: string;
}

export interface PortFolioWithIndex extends PortFolioProps {
  index: number;
}

const PortFolioData = [
  {
    image_1:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/jnd3fgzvtm4sgfw3abxq",
    image_2:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/uc2tfnme5riss7jizmkp",
    title: "Residential Project 1",
    content: `Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.`,
  },
  {
    image_1:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/u8s6izspsuudhrvdek2o",
    image_2:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/h8b2i0bayl3cs0illzyg",
    title: "Residential Project 2",
    content: `Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.`,
  },
  {
    image_1:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/uxzulos5k1av0neeodww",
    image_2:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/vmhnvn988fvj6rwrkg8n",
    title: "Residential Project 3",
    content: `Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.`,
  },
  {
    image_1:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/u8s6izspsuudhrvdek2o",
    image_2:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/h8b2i0bayl3cs0illzyg",
    title: "Residential Project 4",
    content: `Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.`,
  },
  {
    image_1:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/uxzulos5k1av0neeodww",
    image_2:
      "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/our_projects/vmhnvn988fvj6rwrkg8n",
    title: "Residential Project 5",
    content: `Ac volutpat et nulla ultricies convallis convallis sed. Sit nec risus sit nisl, quis in turpis gravida libero. At elit eu lacus, quam neque euismod posuere eget. Convallis varius laoreet etiam ultrices varius molestie tinci.`,
  },
];

export default function PortfolioParent() {
  return (
    <>
      {PortFolioData.map((item: PortFolioProps, index: number) => {
        return index % 2 === 0 ? (
          <PortFolioLeft {...item} index={index + 1} key={index} />
        ) : (
          <PortFolioRight {...item} index={index + 1} key={index} />
        );
      })}
    </>
  );
}

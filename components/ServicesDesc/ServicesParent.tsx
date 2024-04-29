import {
  ServiceDescProps,
  ServicesDescLeft,
  ServicesDescRight,
} from "./ServicesDescComponent";

const ServicesData = [
  {
    imageData: {
      src: "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/services/dm8wwgobz7ivkzsulipl",
      alt: "Kitchen design and installation",
    },
    textData: {
      title: "Kitchen design and installation",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
  },
  {
    imageData: {
      src: "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/services/oatddddzwloi4ocdaopv",
      alt: "VANITIY DESIGN & INSTALLATION",
    },
    textData: {
      title: "VANITIY DESIGN & INSTALLATION",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
  },
  {
    imageData: {
      src: "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/services/rptysfmzzkhkbc0yvnbc",
      alt: "WARDROBE & WALK IN CLOSET INSTALLATION",
    },
    textData: {
      title: "WARDROBE & WALK IN CLOSET INSTALLATION",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
  },
  {
    imageData: {
      src: "https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/ajmi/services/rptysfmzzkhkbc0yvnbc",
      alt: "COUNTER TOP INSTALLATION",
    },
    textData: {
      title: "COUNTER TOP INSTALLATION",
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    },
  },
];

export default function ServicesParent() {
  return (
    <>
      {ServicesData.map((item: ServiceDescProps, index) => {
        return index % 2 == 0 ? (
          <ServicesDescRight
            key={index}
            imageData={item.imageData}
            textData={item.textData}
            index={index + 1}
          />
        ) : (
          <ServicesDescLeft
            key={index}
            imageData={item.imageData}
            textData={item.textData}
            index={index + 1}
          />
        );
      })}
    </>
  );
}

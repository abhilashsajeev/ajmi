import * as React from "react";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="flex flex-col justify-between">
    <div className="text-6xl font-bold tracking-tighter uppercase leading-[50.4px] max-md:text-4xl">
      {value}
    </div>
    <div className="mt-5 text-lg font-medium tracking-normal leading-7 text-gray-400">
      {label}
    </div>
  </div>
);

const stats = [
  {
    value: "234",
    label: "RESIDENTIAL PROJECTS",
  },
  {
    value: "160",
    label: "COMMERICAL PROJECTS",
  },
  {
    value: "160",
    label: "ONGOING PROJECTS",
  },
  {
    value: "234",
    label: "COMPLETED PROJECTS",
  },
];

export default function Stats() {
  return (
    <section className="flex flex-col items-end ">
      <div className="grid grid-cols-2 gap-5">
        <div className="p-4 text-gray-400 justify-around text-justify">
          <p>
            ITALIAN MODERN KITCHEN Oman started with the mission of bringing
            best of the products and services across sultanate . IMK has been an
            honorable company operating over successful 19 years starting in
            2003. Today IMK is one of the leading kitchen manufacturing company
            in oman . our design team aspire to create the most beautiful and
            functional modern , modular and traditional custom kitchen cabinets
            for our clients . We will design your modern dream kitchen according
            to your wishes and specifications and can incorporate any desired
            kitchen layout , kitchen cabinet finishes , designs and materials.
            Feel free to read our kitchen reviews. We believe in the symbiotic
            relationship between form and function, as well as art and design .
            as such , we take a holistic approach to designing inspired kitchens
            that are meant to be used as well as admired.
          </p>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-6 justify-between items-center">
            <StatItem value={stats[0].value} label={stats[0].label} />
            <StatItem value={stats[1].value} label={stats[1].label} />
            <StatItem value={stats[2].value} label={stats[2].label} />
            <StatItem value={stats[3].value} label={stats[3].label} />
          </div>
        </div>
      </div>
    </section>
  );
}

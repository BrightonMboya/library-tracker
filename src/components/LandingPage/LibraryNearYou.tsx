import { api } from "../../utils/api";
import LibraryCard from "./LibraryCard";
import Link from "next/link";
import Image from "next/legacy/image";

const LibraryNearYou = () => {
  const libQuery = api.libRegistration.all.useQuery();
  return (
    <main className="overflow-hidden">
      <div className="mb-[2rem] flex flex-col items-center justify-center">
        <h3 className=" pl-5 text-xl">Libraries Near You</h3>
        <div className="mt-5  flex flex-col items-center gap-[2rem] md:grid md:grid-cols-2 md:pl-5 xl:grid-cols-3 xl:gap-[3rem]">
          {libQuery.data?.slice(0, 4).map((library) => (
            <LibraryCard
              key={library.id}
              name={library.name}
              id={library.id}
              internetFacilities={library.internetFacilities}
              numberOfELibrariesPlartform={library.numberOfELibrariesPlartform}
              numberOfBooks={library.numberOfBooks}
              readingSpaceCapacity={library.readingSpaceCapacity}
              numberOfComputerSets={library.numberOfComputerSets}
              numberOfReadingTablets={library.numberOfReadingTablets}
            />
          ))}
        </div>

        <Link href="/libraries">
          <button className=" mt-[2rem] cursor-pointer rounded-md border-[1px] bg-white px-4 py-2 font-medium text-blue shadow-md">
            View More
          </button>
        </Link>

        <h3 className="mt-5 text-xl font-medium">Use Library Tracker to</h3>
        <section className="mt-5 flex flex-col gap-5 md:mt-[2rem] md:grid md:grid-cols-2 lg:grid-cols-3">
          {CardData.map((card) => (
            <Card
              key={card.id}
              leftCaption={card.leftCaption}
              caption={card.caption}
              imageUrl={card.imageUrl}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default LibraryNearYou;

const CardData = [
  {
    id: 1,
    leftCaption: "GeoLocate",
    caption: "Geolocate libraries Near You",
    imageUrl: "/img5.png",
  },
  {
    id: 2,
    leftCaption: "Services",
    caption: "Discover Library Services",
    imageUrl: "/img1.png",
  },
  {
    id: 3,
    leftCaption: "Resources",
    caption: "See available library resources",
    imageUrl: "/img2.png",
  },
  {
    id: 4,
    leftCaption: "Events",
    caption: "Stay Updated on library events",
    imageUrl: "/img3.png",
  },
  {
    id: 5,
    leftCaption: "Experience",
    caption: "Share your library experience",
    imageUrl: "/img4.png",
  },
];

interface CardProps {
  leftCaption: string;
  caption: string;
  imageUrl: string;
}

const Card = ({ leftCaption, caption, imageUrl }: CardProps) => {
  return (
    <div className="flex h-[300px] w-[335px] flex-col items-center justify-center gap-4 rounded-md bg-[#f1f6fc]">
      <div className="flex">
        <h3
          className="h-[200px] text-xl font-semibold text-[#7c7c7c] "
          style={{ writingMode: "vertical-lr", textOrientation: "upright" }}
        >
          {leftCaption}
        </h3>
        <div className="relative h-[200px] w-[270px]">
          <Image src={imageUrl} alt="card-img" layout="fill" />
        </div>
      </div>

      <h3 className="text-lg font-medium text-[#7c7c7c]">{caption}</h3>
    </div>
  );
};

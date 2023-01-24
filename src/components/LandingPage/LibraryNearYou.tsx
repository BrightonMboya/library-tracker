import { api } from "../../utils/api";
import LibraryCard from "./LibraryCard";

const LibraryNearYou = () => {
  const libQuery = api.library.all.useQuery();
  return (
    <div>
      <h3 className="pl-5 text-xl ">Libraries Near You</h3>
      <div className="mt-5 mb-[2rem] flex flex-col items-center gap-[2rem]">
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
    </div>
  );
};

export default LibraryNearYou;

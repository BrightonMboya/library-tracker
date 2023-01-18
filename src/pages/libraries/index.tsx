import { api } from "../../utils/api";
import { Footer, LibraryCard } from "../../components/LandingPage";

const Libraries = () => {
  const allLibraries = api.libRegistration.all.useQuery();

  return (
    <div>
      <div className="mt-5 mb-[3rem] flex flex-col items-center gap-5">
        {allLibraries.isLoading && <p>Fetching The libraries</p>}
        {allLibraries.data?.map((library) => (
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

      <Footer />
    </div>
  );
};

export default Libraries;

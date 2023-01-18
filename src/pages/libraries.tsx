import { api } from "../utils/api";
import { Footer, LibraryCard } from "../components/LandingPage";

const Libraries = () => {
  const allLibraries = api.libRegistration.all.useQuery().data;
  console.log(allLibraries);

  return (
    <div>
      {allLibraries?.map((library) => (
        <LibraryCard
          key={library.id}
          name={library.name}
          internetFacilities={library.internetFacilities}
          numberOfELibrariesPlartform={library.numberOfELibrariesPlartform}
          numberOfBooks={library.numberOfBooks}
          readingSpaceCapacity={library.readingSpaceCapacity}
          numberOfComputerSets={library.numberOfComputerSets}
          numberOfReadingTablets={library.numberOfReadingTablets}
        />
      ))}

      <Footer />
    </div>
  );
};

export default Libraries;

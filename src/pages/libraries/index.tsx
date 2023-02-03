"use client";

import { api } from "../../utils/api";
import { Footer, LibraryCard } from "../../components/LandingPage";
import { useSession, signOut } from "next-auth/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Libraries: NextPage = () => {
  const router = useRouter();
  const allLibraries = api.libRegistration.all.useQuery();
  const { data: session, status } = useSession();

  // if (status === "unauthenticated") {
  //   router.push("/login");
  // }

  return (
    <div>
      {/* {data?.user?.name ? <p>{data?.user.name}</p> : <p>No data </p>}
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre> */}
      <div className="mt-5 mb-[3rem] flex flex-col items-center gap-5">
        {allLibraries.isLoading && <p>Fetching The libraries</p>}
        {allLibraries.isError && (
          <p>
            Encountered the error while fetching, check your network and try
            again
          </p>
        )}
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

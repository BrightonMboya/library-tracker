"use client";

import { api } from "../../utils/api";
import { Footer, LibraryCard } from "../../components/LandingPage";
import { useSession, signOut, getSession } from "next-auth/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Libraries: NextPage = (props) => {
  const router = useRouter();
  const allLibraries = api.libRegistration.all.useQuery();
  // const { data } = useSession();
  const session = useSession();
  console.log(session);

  // if (status === "unauthenticated") {
  //   router.push("/login");
  // }

  return (
    <>
      <main className="md:mt-5 md:flex md:flex-col md:items-center">
        {/* {data?.user?.name ? <p>{data?.user.name}</p> : <p>No data </p>}
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre> */}
        <div className="mt-5 mb-[3rem] flex flex-col items-center gap-5 md:grid md:grid-cols-2 md:space-x-4 md:space-y-5 md:pl-5 xl:grid-cols-3">
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
      </main>
      <Footer />
    </>
  );
};

export default Libraries;

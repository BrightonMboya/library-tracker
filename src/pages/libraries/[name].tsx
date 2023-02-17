import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../../utils/api";
import {
  BasicInfoTab,
  EventsTab,
  GalleryTab,
  ServicesTab,
} from "../../components/admin/LibInfo";
import { Footer } from "../../components/LandingPage";
import type { inferProcedureInput } from "@trpc/server";
import type { AppRouter } from "../../server/api/root";

const Index = () => {
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [showServices, setShowServices] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const router = useRouter();
  const id = router.query.name as string;

  const librariesQuery = api.library.byId.useQuery({ id }); // query to fetch the libraries
  const approveLibQuery = api.libRegistration.approve.useMutation();
  const utils = api.useContext(); // for invalidating the query after lib approval
  console.log(librariesQuery.data);

  const PropsData = {
    id: librariesQuery.data?.id,
    name: librariesQuery.data?.name,
    libraryType: librariesQuery.data?.libraryType,
  };

  const activeTab = "border-b-2  border-b-blue pb-1 cursor-pointer text-lg";
  const inActiveTab = "cursor-pointer text-lg pb-1 ";

  const onApproval = async (isApproved: boolean) => {
    type Input = inferProcedureInput<AppRouter["libRegistration"]["approve"]>;
    const input: Input = { approve: isApproved, id: id };
    try {
      await approveLibQuery.mutateAsync(input);
      utils.libRegistration.invalidate();
      router.reload();
    } catch (cause) {
      console.error({ cause }, "Failed to approve the library");
    }
  };

  if (librariesQuery.error) {
    return <div>There's an error while fetching the data</div>;
  }

  return (
    <>
      <main className="mt-3 md:flex md:flex-col md:items-center ">
        <div className="mb-[2rem] pl-5">
          <h3 className="text-xl font-medium">{librariesQuery.data?.name}</h3>
          <h3>{librariesQuery.data?.adress}</h3>
          <p className="mt-3 w-[150px] rounded-md bg-grey py-2 text-center text-lg font-medium text-blue">
            {librariesQuery.data?.libraryType}
          </p>
          {/* show the aprove buttons if the library is not approved and the session role is superadmin */}
          {librariesQuery.data?.approved ? (
            <p className="mt-3 text-lg tracking-wide text-blue">
              This library is approved
            </p>
          ) : (
            <div className="mt-5 flex items-center gap-5">
              <button
                className="cursor-pointer rounded-md  bg-[#E4E4E4] px-4 py-2"
                onClick={() => onApproval(false)}
              >
                Decline
              </button>
              <button
                className="cursor-pointer rounded-md  bg-blue px-4 py-2 tracking-wide text-white"
                onClick={() => onApproval(true)}
              >
                Approve
              </button>
            </div>
          )}

          <div className="mt-5 flex items-center gap-5">
            <button
              onClick={() => {
                setShowBasicInfo(true);
                setShowServices(false);
                setShowEvents(false);
                setShowGallery(false);
              }}
              className={showBasicInfo ? activeTab : inActiveTab}
            >
              Basic Info
            </button>
            <button
              onClick={() => {
                setShowBasicInfo(false);
                setShowServices(true);
                setShowEvents(false);
                setShowGallery(false);
              }}
              className={showServices ? activeTab : inActiveTab}
            >
              Services
            </button>

            <button
              onClick={() => {
                setShowBasicInfo(false);
                setShowServices(false);
                setShowEvents(true);
                setShowGallery(false);
              }}
              className={showEvents ? activeTab : inActiveTab}
            >
              Events
            </button>

            <button
              onClick={() => {
                setShowBasicInfo(false);
                setShowServices(false);
                setShowEvents(false);
                setShowGallery(true);
              }}
              className={showGallery ? activeTab : inActiveTab}
            >
              Gallery
            </button>
          </div>

          {/* Render the tabs accordingly */}
          {showBasicInfo && (
            <BasicInfoTab
              name={librariesQuery.data?.name!}
              id={librariesQuery.data?.id!}
              yearOfEstablishment={librariesQuery.data?.yearOfEstablishment!}
              email={librariesQuery.data?.email!}
              phoneNumber={librariesQuery.data?.phoneNumber!}
              website={librariesQuery.data?.website!}
              adress={librariesQuery.data?.adress!}
              extract={librariesQuery.data?.extract!}
              openingTime={librariesQuery.data?.openingTime!}
              closingTime={librariesQuery.data?.closingTime!}
              numberOfProffesionalStaff={
                librariesQuery.data?.numberOfProffesionalStaff!
              }
              numberOfUnproffessionalStaff={
                librariesQuery.data?.numberOfUnproffessionalStaff!
              }
              numberOfUsers={librariesQuery.data?.numberOfUsers!}
              numberOfComputerSets={librariesQuery.data?.numberOfComputerSets!}
              numberOfELibrariesPlartform={
                librariesQuery.data?.numberOfELibrariesPlartform!
              }
              readingSpaceCapacity={librariesQuery.data?.readingSpaceCapacity!}
              numberOfReadingTablets={
                librariesQuery.data?.numberOfReadingTablets!
              }
              numberOfBooks={librariesQuery.data?.numberOfBooks!}
              numberOfJournals={librariesQuery.data?.numberOfJournals!}
              internetFacilities={librariesQuery.data?.internetFacilities!}
              printAndCopyAccess={librariesQuery.data?.printAndCopyAccess!}
              disablePersonUseLibrary={
                librariesQuery.data?.disablePersonUseLibrary!
              }
              SRHRInfoServices={librariesQuery.data?.SRHRInfoServices!}
            />
          )}
          {showEvents && (
            <EventsTab
              eventsTitle={librariesQuery.data?.eventsTitle!}
              eventExtract={librariesQuery.data?.eventExtract!}
              monthOfTheEvent={librariesQuery.data?.monthOfTheEvent!}
            />
          )}
          {showGallery && <GalleryTab />}
          {showServices && (
            <ServicesTab
              registrationCostPerMonth={
                librariesQuery.data?.registrationCostPerMonth!
              }
              registrationCostPerYear={
                librariesQuery.data?.registrationCostPerYear!
              }
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;

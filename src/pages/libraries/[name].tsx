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

const Index = () => {
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [showServices, setShowServices] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const id = useRouter().query.name as string;

  const librariesQuery = api.library.byId.useQuery({ id });
  console.log(librariesQuery.data);

  const PropsData = {
    id: librariesQuery.data?.id,
    name: librariesQuery.data?.name,
    libraryType: librariesQuery.data?.libraryType,
  };

  const activeTab = "border-b-2  border-b-blue pb-1 cursor-pointer text-lg";
  const inActiveTab = "cursor-pointer text-lg pb-1 ";

  // console.log(librariesQuery.error, "this is the fuckin error")

  if (librariesQuery.error) {
    return <div>There's an error while fetching the data</div>;
  }

  return (
    <div className="mt-3 ">
      <div className="mb-[2rem] pl-5">
        <h3 className="text-xl font-medium">{librariesQuery.data?.name}</h3>
        <h3>{librariesQuery.data?.adress}</h3>
        <p className="w-[150px] rounded-md bg-grey py-2 pl-2 text-lg font-medium text-blue">
          {librariesQuery.data?.libraryType}
        </p>

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
      <Footer />
    </div>
  );
};

export default Index;

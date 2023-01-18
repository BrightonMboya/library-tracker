import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "../../utils/api";

const Index = () => {
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [showServices, setShowServices] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const id = useRouter().query.name as string;
  const librariesQuery = api.libRegistration.byId.useQuery({ id });
  console.log(librariesQuery.data);

  const activeTab = "border-b-2  border-b-blue pb-1 cursor-pointer text-lg";
  const inActiveTab = "cursor-pointer text-lg pb-1 ";

  return (
    <div>
      {librariesQuery.isError && <p>The data is Invalid</p>}

      <div>
        <h3>{librariesQuery.data?.name}</h3>
        <h3>{librariesQuery.data?.adress}</h3>

        <div className="flex items-center gap-5">
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
        {showBasicInfo && <BasicInfo />}
      </div>
    </div>
  );
};

export default Index;

const BasicInfo = () => {
  return <div>Hey Boo</div>;
};

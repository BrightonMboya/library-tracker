import React from "react";

interface libraryProps {
  id: string;
  name: string;
  libraryType: string;
  yearOfEstablishment: string;
  email: string;
  phoneNumber: string;
  website: string;
  latitude: string;
  longitude: string;
  country: string;
  State: string;
  adress: string;
  extract: string;
  openingTime: string;
  closingTime: string;
  numberOfProffesionalStaff: string;
  numberOfUnproffessionalStaff: string;
  numberOfUsers: string;
  numberOfComputerSets: string;
  numberOfELibrariesPlartform: string;
  readingSpaceCapacity: string;
  numberOfReadingTablets: string;
  numberOfBooks: string;
  numberOfJournals: string;
  internetFacilities: string;
  printAndCopyAccess: string;
  disablePersonUseLibrary: string;
  SRHRInfoServices: string;
  registrationCostPerMonth: string;
  registrationCostPerYear: string;
  eventsTitle: string;
  eventExtract: string;
  monthOfTheEvent: string;
}
type Props = {
  library: libraryProps;
};

const BasicInfoTab = (props: libraryProps) => {
  return (
    <div>
      <article>{props.extract}</article>
      <p>{props.State}</p>
    </div>
  );
};

export default BasicInfoTab;

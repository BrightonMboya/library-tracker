import type { inferProcedureInput } from "@trpc/server";
import type { AppRouter } from "../../server/api/root";
import React from "react";
import {
  BasicInfo,
  Events,
  Resources,
  StaffInfo,
  Services,
} from "../../components/admin/libRegistration";
import { api } from "../../utils/api";

const Index = () => {
  const utils = api.useContext();
  // const addLibrary = api.libRegistration.add.useMutation({
  //   async onSuccess() {
  //     //this refetches the query after it is mutated
  //     await utils.libRegistration.invalidate();
  //   },
  // });
  const addLibrary = api.libRegistration.add.useMutation();
  const [page, setPage] = React.useState(0);

  // state for the form inputs, empty
  const formStates = {
    name: "",
    type: "",
    yearOfEstablishment: "",
    email: "",
    phoneNumber: "",
    website: "",
    latitude: "",
    longitude: "",
    country: "",
    State: "",
    adress: "",
    extract: "",
    openingTime: "",
    closingTime: "",
    numberOfProffesionalStaff: "",
    numberOfUnproffessionalStaff: "",
    numberOfUsers: "",
    numberOfComputerSets: "",
    numberOfELibrariesPlartform: "",
    readingSpaceCapacity: "",
    numberOfReadingTablets: "",
    numberOfBooks: "",
    numberOfJournals: "",
    internetFacilities: "",
    printAndCopyAccess: "",
    disablePersonUseLibrary: "",
    SRHRInfoServices: "",
    registrationCostPerMonth: "",
    registrationCostPerYear: "",
    eventsTitle: "",
    eventExtract: "",
    monthOfTheEvent: "",
  };
  const [formData, setFormData] = React.useState(formStates);
  // function handleSubmit() {
  //   setPage(page + 1);
  // }
  const MultiPageForm = () => {
    switch (page) {
      case 0:
        return <BasicInfo formData={formData} setFormData={setFormData} />;
      case 1:
        return <StaffInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <Resources formData={formData} setFormData={setFormData} />;
      case 3:
        return <Services formData={formData} setFormData={setFormData} />;
      case 4:
        return <Events formData={formData} setFormData={setFormData} />;
      default:
        return <BasicInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(formData.name);
        type Input = inferProcedureInput<AppRouter["libRegistration"]["add"]>;
        const input: Input = {
          name: formData.name,
          libraryType: formData.type,
          yearOfEstablishment: formData.yearOfEstablishment,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          website: formData.website,
          latitude: formData.latitude,
          longitude: formData.longitude,
          country: formData.country,
          State: formData.State,
          adress: formData.adress,
          extract: formData.extract,
          openingTime: formData.openingTime,
          closingTime: formData.closingTime,
          numberOfProffesionalStaff: formData.numberOfProffesionalStaff,
          numberOfUnproffessionalStaff: formData.numberOfUnproffessionalStaff,
          numberOfUsers: formData.numberOfUsers,
          numberOfComputerSets: formData.numberOfComputerSets,
          numberOfELibrariesPlartform: formData.numberOfELibrariesPlartform,
          readingSpaceCapacity: formData.readingSpaceCapacity,
          numberOfReadingTablets: formData.numberOfReadingTablets,
          numberOfBooks: formData.numberOfBooks,
          numberOfJournals: formData.numberOfJournals,
          internetFacilities: formData.internetFacilities,
          printAndCopyAccess: formData.printAndCopyAccess,
          disablePersonUseLibrary: formData.disablePersonUseLibrary,
          SRHRInfoServices: formData.SRHRInfoServices,
          registrationCostPerMonth: formData.registrationCostPerMonth,
          registrationCostPerYear: formData.registrationCostPerYear,
          eventsTitle: formData.eventsTitle,
          eventExtract: formData.eventExtract,
          monthOfTheEvent: formData.monthOfTheEvent,
        };
        try {
          await addLibrary.mutateAsync(input);
          setFormData(formStates);
          setPage(0);
        } catch (cause) {
          console.error({ cause }, "Failed to add the library");
        }
      }}
    >
      {MultiPageForm()}

      {page < 4 && (
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
        >
          Next
        </button>
      )}

      {page > 0 && (
        <button
          type="button"
          onClick={() => setPage(page - 1)}
          className="mt-5 w-[250px] cursor-pointer rounded-md bg-blue px-2 py-2 font-medium text-white"
        >
          Back
        </button>
      )}

      {page === 4 && (
        <button
          // onClick={handleSubmit}
          disabled={addLibrary.isLoading}
          type="submit"
          className="mt-5 w-[250px] cursor-pointer rounded-md bg-pink-500 px-2 py-2 font-medium text-white"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default Index;

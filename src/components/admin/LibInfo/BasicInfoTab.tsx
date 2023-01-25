import {
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineDesktop,
  AiOutlineTablet,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import {
  BsPhone,
  BsGlobe,
  BsPersonCheck,
  BsPerson,
  BsHouseDoor,
} from "react-icons/bs";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import { FiTablet, FiBookOpen } from "react-icons/fi";

interface libraryProps {
  id: string;
  name: string;
  yearOfEstablishment: string;
  email: string;
  phoneNumber: string;
  website: string;
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
}

const BasicInfoTab = (props: libraryProps) => {
  return (
    <div className="pl-5">
      <article className="mt-3">{props.extract}</article>
      <p className="mt-2">Established in {props.yearOfEstablishment}</p>
      <div className="mt-5 flex flex-col gap-3 text-[#3C3838]">
        <div className="flex items-center gap-5">
          <AiOutlineMail size={25} />
          <p className="text-lg">{props.email}</p>
        </div>
        <div className="flex items-center gap-5">
          <BsPhone size={25} />
          <p className="text-lg">{props.phoneNumber}</p>
        </div>
        <div className="flex items-center gap-5">
          <IoLocationOutline size={25} />
          <p className="text-lg">{props.adress}</p>
        </div>
        <div className="flex items-center gap-5">
          <AiOutlineClockCircle size={25} />
          <p className="text-lg">
            Opens {props.openingTime} - {props.closingTime}{" "}
          </p>
        </div>
        <div className="flex items-center gap-5">
          <BsGlobe size={25} />
          <p className="text-lg">{props.website}</p>
        </div>
      </div>

      <div>
        <h3 className="mt-5 text-xl font-medium text-blue">
          Library staff and User strength
        </h3>
        <div className="mt-3 flex flex-col gap-3 text-[#3C3838]">
          <div className="flex items-center gap-5">
            <BsPersonCheck size={25} />
            <p className="text-lg">
              {props.numberOfProffesionalStaff} Proffesional Staffs
            </p>
          </div>
          <div className="flex items-center gap-5">
            <BsPerson size={25} />
            <p className="text-lg">
              {props.numberOfUnproffessionalStaff} Unprofessional staff.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <IoPeopleOutline size={25} />
            <p className="text-lg">
              {props.numberOfUsers} Registered library users
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="mt-5 text-xl font-medium text-blue">
          Library Amenities and Resources
        </h3>
        <div className="mt-3 flex flex-col gap-3 text-[#3C3838]">
          <div className="flex items-center gap-5">
            <AiOutlineDesktop size={25} />
            <p className="text-lg">
              {props.numberOfComputerSets} Computer Sets
            </p>
          </div>
          <div className="flex items-center gap-5">
            <AiOutlineTablet size={25} />
            <p className="text-lg">
              {props.numberOfELibrariesPlartform} E-Library Plartforms
            </p>
          </div>
          <div className="flex items-center gap-5">
            <BsHouseDoor size={25} />
            <p className="text-lg">
              {props.readingSpaceCapacity} Capacity Reading Space
            </p>
          </div>

          <div className="flex items-center gap-5">
            <FiTablet size={25} />
            <p className="text-lg">
              {props.numberOfReadingTablets} Reading Tablets
            </p>
          </div>
          <div className="flex items-center gap-5">
            <FiBookOpen size={25} />
            <p className="text-lg">{props.numberOfBooks} Books and Journals</p>
          </div>
          <div className="flex items-center gap-5">
            <BsPersonCheck size={25} />
            <p className="text-lg">
              {props.disablePersonUseLibrary} Disability Access
            </p>
          </div>

          <div className="flex items-center gap-5">
            <AiOutlineQuestionCircle size={25} />
            <p className="text-lg">
              {props.SRHRInfoServices} SRHR Information Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoTab;

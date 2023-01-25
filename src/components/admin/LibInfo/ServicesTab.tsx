import { BsGlobe, BsHouseDoor, BsPersonCheck } from "react-icons/bs";
import {
  AiOutlineTablet,
  AiOutlineDesktop,
  AiOutlinePrinter,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

interface Props {
  registrationCostPerMonth: string;
  registrationCostPerYear: string;
}

const ServicesTab = (props: Props) => {
  return (
    <div className="pl-3">
      <h3 className="mt-5 text-xl font-medium text-[#3C3838]">
        General Services
      </h3>
      <div className="mt-5 grid grid-cols-3">
        <div className="mt-3 flex flex-col pl-2">
          <BsGlobe fill="#1B4F98" size={25} />
          <p className="text-lg text-[#303030]">Internet Access</p>
        </div>
        <div className="mt-3 flex flex-col pl-2">
          <AiOutlineTablet fill="#1B4F98" size={25} />
          <p className="text-lg text-[#303030]">E-Libraries</p>
        </div>
        <div className="mt-3 flex flex-col pl-2">
          <AiOutlineTablet fill="#1B4F98" size={25} />
          <p className="text-lg text-[#303030]">Reading Tablets</p>
        </div>
        <div className="mt-3 flex flex-col pl-2">
          <AiOutlineDesktop fill="#1B4F98" size={25} />
          <p className="text-lg text-[#303030]">Computers</p>
        </div>
        <div className="mt-3 flex flex-col pl-2">
          <AiOutlinePrinter fill="#1B4F98" size={25} />
          <p className="text-lg text-[#303030]">Print and Copy</p>
        </div>
        <div className="mt-3 flex flex-col pl-2">
          <BsHouseDoor fill="#1B4F98" size={25} />
          <p className="text-lg text-[#303030]">Reading Space</p>
        </div>
        <div className="mt-3 flex flex-col pl-2">
          <BsPersonCheck fill="#1B4F98" size={25} />
          <p className="text-lg text-[#303030]">Disable Access</p>
        </div>
        <div className="mt-3 flex flex-col pl-2">
          <AiOutlineQuestionCircle fill="#1B4F98" size={25} />
          <p className="text-lg text-[#303030]">SRHR Info</p>
        </div>
      </div>

      <div>
        <h3 className="mt-[2rem] text-xl font-medium text-[#3C3838]">
          Registration Cost
        </h3>
        <div className="w-[350px] bg-[#F6F6F6]">
          <p className="mt-3 py-5 px-3 text-lg">
            <span className="font-bold text-blue">Monthly</span> plan for N
            <span className="font-bold text-blue">
              {props.registrationCostPerMonth}
            </span>
          </p>
        </div>
        <div className="w-[350px] bg-[#F6F6F6]">
          <p className="mt-3 py-5 px-3 text-lg">
            <span className="font-bold text-blue">Yearly</span> plan for N
            <span className="font-bold text-blue">
              {props.registrationCostPerYear}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesTab;

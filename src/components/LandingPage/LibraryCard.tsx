import { CiGlobe } from "react-icons/ci";
import { IoBookSharp } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsTablet } from "react-icons/bs";
import { HiOutlineDeviceTablet } from "react-icons/hi";

import Image from "next/legacy/image";

interface Props {
  name: string;
  internetFacilities: string;
  numberOfELibrariesPlartform: string;
  numberOfReadingTablets: string;
  numberOfComputerSets: string;
  numberOfBooks: string;
  readingSpaceCapacity: string;
}

const LibraryCard = ({
  name,
  internetFacilities,
  numberOfELibrariesPlartform,
  numberOfComputerSets,
  numberOfBooks,
  readingSpaceCapacity,
  numberOfReadingTablets,
}: Props) => {
  return (
    <div>
      <div className="relative h-[240px] w-[300px]">
        <Image
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg"
          alt="library-img"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div>
        <div className="bg-[#F1F6FC] py-2 pl-3">
          <h3>{name}</h3>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <CiGlobe size={30} />
              <div className="">
                <h3 className="text-lg font-medium">{internetFacilities}</h3>
                <h3>Internet</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BsTablet size={30} />
              <div className="">
                <h3 className="text-lg font-medium">
                  {numberOfELibrariesPlartform}
                </h3>
                <h3>E-Library</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <HiOutlineDeviceTablet size={30} />
              <div className="">
                <h3 className="text-lg font-medium">
                  {numberOfReadingTablets}
                </h3>
                <h3>Tablets</h3>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <AiOutlineDesktop size={30} />
              <div className="">
                <h3 className="text-lg font-medium">{numberOfComputerSets}</h3>
                <h3>Desktops</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IoBookSharp size={30} />
              <div className="">
                <h3 className="text-lg font-medium">{numberOfBooks}</h3>
                <h3>Books</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BiHomeAlt size={30} />
              <div className="">
                <h3 className="text-lg font-medium">{readingSpaceCapacity}</h3>
                <h3>Space</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;

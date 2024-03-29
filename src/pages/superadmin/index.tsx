import { FiBook } from "react-icons/fi";
import { BsPersonPlus, BsPeopleFill } from "react-icons/bs";
import { api } from "../../utils/api";
import { Footer, Nav } from "../../components/LandingPage";
import Link from "next/link";

const Index = () => {
  const libraryQuery = api.libRegistration.all.useQuery();
  return (
    <>
      <Nav />
      <main className="pl-5 md:flex md:flex-col md:items-center">
        <h3 className="mt-[2rem] text-xl tracking-wide">Overview</h3>
        <div className="mt-2 flex gap-5 md:mt-5">
          <section className="h-[130px] w-[160px] rounded-md bg-[#f6f6f6] pl-3 pt-4 md:w-[331px]">
            <div className="flex justify-between">
              <FiBook size={30} stroke="#1B4F98" />
            </div>
            <div>
              <h3 className="mt-3 font-bold text-blue">32,650</h3>
              <p className="mt-3 text-lg font-medium text-[#999999]">
                Libraries
              </p>
            </div>
          </section>

          <section className="h-[130px] w-[160px] rounded-md bg-[#f6f6f6] pl-3 pt-4 md:w-[331px]">
            <div className="flex justify-between">
              <BsPersonPlus size={30} fill="#1B4F98" />
            </div>
            <h3 className="mt-3 font-bold text-blue">32,650</h3>
            <p className="mt-3 text-lg font-medium text-[#999999]">
              Library Admins
            </p>
          </section>
        </div>
        <div className="mt-5 flex gap-5">
          <section className="h-[130px] w-[160px] rounded-md bg-[#f6f6f6] pl-3 pt-4 md:w-[331px]">
            <div className="flex justify-between">
              <BsPeopleFill size={30} fill="#1B4F98" />
            </div>
            <h3 className="mt-3 font-bold text-blue">32,650</h3>
            <p className="mt-3 text-lg font-medium text-[#999999]">Users</p>
          </section>

          <section className="h-[130px] w-[160px] rounded-md bg-[#f6f6f6] pl-3 pt-4 md:w-[331px]">
            <div className="flex justify-between">
              <BsPersonPlus size={30} fill="#1B4F98" />
            </div>
            <h3 className="mt-3 font-bold text-blue">32,650</h3>
            <p className="mt-3 text-lg font-medium text-[#999999]">LT Admins</p>
          </section>
        </div>

        <section className="mt-5">
          <h3 className="mt-[2rem] text-xl tracking-wide">
            Pending Libraries Entries
          </h3>
          <section className="mt-5 md:grid md:grid-cols-2 md:gap-5">
            {libraryQuery.data?.map((library) => (
              <div
                key={library.id}
                className="h-[140px] w-[331px] rounded-md bg-[#f6f6f6] "
              >
                <div className="mt-5 space-y-1 pl-3 pt-2">
                  <h3 className="text-lg font-medium text-blue">
                    {library.name}
                  </h3>
                  <p className="font-medium text-[#999999]">
                    created 5 days ago
                  </p>
                  <div className="flex items-center gap-5">
                    <button
                      className={
                        library.approved
                          ? "bg-[#C6F6D5] px-2 py-1 font-medium text-[#1C4532]"
                          : "bg-[#FEEBC8] px-2 py-1 font-medium text-[#652B19]"
                      }
                    >
                      {library.approved ? "Approved" : "Pending"}
                    </button>

                    <Link href={`/libraries/${library.id}`}>
                      <p className="items-center font-medium text-blue">
                        View Library &rarr;
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
      <div className="mt-[2rem] w-full pl-0">
        <Footer />
      </div>
    </>
  );
};

export default Index;

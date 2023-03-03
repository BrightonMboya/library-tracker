import { api } from "../../../utils/api";
import Link from "next/link";
import { Footer, Nav } from "../../../components/LandingPage";

const Admins = () => {
  const admins = api.adminRouter.all.useQuery();
  return (
    <>
      <Nav />
      <main className="md:flex md:flex-col md:items-center">
        {admins.isLoading && <p>Fetching Admins Info</p>}
        {admins.isError && (
          <p>Encountered the error while fetching, please check your network</p>
        )}

        <section className="mb-[5rem] mt-[2rem] flex flex-col items-center justify-center space-y-5 md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
          {admins.data?.map((admin) => (
            <div
              key={admin.id}
              className="h-[140px] w-[331px] rounded-md bg-[#f6f6f6]"
            >
              <div className="mt-5 space-y-1 pl-3 pt-2 md:mt-0 ">
                <h3 className="text-lg font-medium text-blue">
                  {admin.fullName}
                </h3>
                <p className="font-medium text-[#999999]">created 5 days ago</p>
                <div className="flex items-center gap-5">
                  <button
                    className={
                      admin.approved
                        ? "bg-[#C6F6D5] px-2 py-1 font-medium text-[#1C4532]"
                        : "bg-[#FEEBC8] px-2 py-1 font-medium text-[#652B19]"
                    }
                  >
                    {admin.approved ? "Approved" : "Pending"}
                  </button>

                  <Link href={`/superadmin/admins/${admin.id}`}>
                    <p className="items-center font-medium text-blue">
                      View admin &rarr;
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Admins;

import { api } from "../../utils/api";
import Link from "next/link";

const Admins = () => {
  const admins = api.adminRouter.all.useQuery();
  return (
    <main>
      {admins.isLoading && <p>Fetching Admins Info</p>}
      {admins.isError && (
        <p>Encountered the error while fetching, please check your network</p>
      )}

      <section className="flex flex-col items-center justify-center space-y-5">
        {admins.data?.map((admin) => (
          <div
            key={admin.id}
            className="h-[140px] w-[331px] rounded-md bg-[#f6f6f6]"
          >
            <div className="mt-5 space-y-1 pl-3 pt-2">
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

                <Link href={`/libraries/${admin.id}`}>
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
  );
};

export default Admins;

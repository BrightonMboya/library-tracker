import { api } from "../../../utils/api";
import { Footer, Nav } from "../../../components/LandingPage";
import type { inferProcedureInput } from "@trpc/server";
import type { AppRouter } from "../../../server/api/root";
import { useRouter } from "next/router";
import Image from "next/legacy/image";

const Index = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const adminQuery = api.adminRouter.byId.useQuery({ id });
  const approveQuery = api.adminRouter.approve.useMutation();
  const utils = api.useContext(); // for invalidating the query after admin Approval

  const onApproval = async (isApproved: boolean) => {
    type Input = inferProcedureInput<AppRouter["adminRouter"]["approve"]>;
    const input: Input = { approve: isApproved, id: id };
    try {
      await approveQuery.mutateAsync(input);
      utils.libRegistration.invalidate(); // now invalidate the query
      router.reload(); // and reload the page
    } catch (cause) {
      console.error({ cause }, "Failed to approve the Admin");
    }
  };

  if (adminQuery.error) {
    return <div>Failed to fetch the Data</div>;
  }
  return (
    <>
      <Nav />
      <main className="mt-5 flex flex-col md:mt-[2rem] md:mb-[3rem] md:flex-row  md:justify-center">
        <section className="ml-5 w-[335px] rounded-t-md border-t-[4px] border-t-[#CCE1FC] bg-[#f6f6f6] px-3 pb-5">
          <h3 className="mt-3 text-lg font-medium">Basic Information</h3>
          {/* show the aprove buttons if the library is not approved and the session role is superadmin */}
          {adminQuery.data?.approved ? (
            <p className="mt-3 text-lg tracking-wide text-blue">
              This Admin is approved
            </p>
          ) : (
            <div className="mt-5 flex items-center gap-5">
              <button
                className="cursor-pointer rounded-md  bg-[#E4E4E4] px-4 py-2"
                onClick={() => onApproval(false)}
              >
                Decline
              </button>
              <button
                className="cursor-pointer rounded-md  bg-blue px-4 py-2 tracking-wide text-white"
                onClick={() => onApproval(true)}
              >
                Approve
              </button>
            </div>
          )}
          <p className="mt-3 text-lg font-medium">Full Name</p>
          <p>{adminQuery.data?.fullName}</p>

          <h3 className="mt-3 text-lg font-medium">Email</h3>
          {adminQuery.data?.email}
          <h3 className="mt-3 text-lg font-medium">Phone Number</h3>
          <p>{adminQuery.data?.phoneNumber}</p>
          <h3 className="mt-3 text-lg font-medium">State</h3>
          <p>{adminQuery.data?.state}</p>

          <h3 className="mt-3 text-lg font-medium">Country</h3>
          <p>{adminQuery.data?.country}</p>
          <h3 className="mt-3 text-lg font-medium">Adress</h3>
          <p>{adminQuery.data?.adress}</p>
        </section>

        <div className="md:space-y-5 lg:flex">
          <section className="ml-5 mt-[2rem] h-[280px] w-[335px] rounded-t-md border-t-[4px] border-t-[#CCE1FC] bg-[#f6f6f6] px-3 pb-4 md:mt-0">
            <h3 className="mt-3 mb-5 text-lg font-medium">Identity Card</h3>
            <div className="relative h-[200px] w-[300px]">
              <Image
                src={adminQuery.data?.identityCardUrl as string}
                alt="Idenity Card"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </section>

          <section className="ml-5 mt-[2rem] mb-[2rem] h-[280px] w-[335px] rounded-t-md border-t-[4px] border-t-[#CCE1FC] bg-[#f6f6f6] px-3 pb-4 md:mt-0">
            <h3 className="mt-3 mb-5 text-lg font-medium">Passport Card</h3>
            <div className="relative h-[200px] w-[300px]">
              <Image
                src={adminQuery.data?.passportUrl as string}
                alt="passport card"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;

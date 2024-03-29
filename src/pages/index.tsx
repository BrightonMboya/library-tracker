import { type NextPage } from "next";
import {
  Footer,
  HeroSection,
  Contribute,
  LibraryNearYou,
} from "../components/LandingPage";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  // console.log(sessionData?.user, "is it?");
  return (
    <>
      <main className="">
        {/* {session && <p>{session.user?.email}</p>} */}
        <HeroSection />
        <section className="container flex flex-col items-center  justify-center md:max-w-[100ch] xl:max-w-none">
          <LibraryNearYou />
        </section>
        <Contribute />

        <Footer />
      </main>
    </>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getSession(context);
//   return {
//     props: { session },
//   };
// };

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();
//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };

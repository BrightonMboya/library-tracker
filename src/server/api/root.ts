import { createTRPCRouter } from "./trpc";
import { adminRouter, libraryRegistrationRouter, library, userRouter } from "./routers";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  libRegistration: libraryRegistrationRouter,
  adminRouter: adminRouter,
  user: userRouter,
  library: library
});

// export type definition of API
export type AppRouter = typeof appRouter;

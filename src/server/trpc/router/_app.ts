import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { schoolsRouter } from "./school";
import { teamRouter } from "./team";
import { studentRouter} from "./student";
import { emergencyContactRouter } from "./emergencyContact";
import { caraHoursRouter } from "./caraHours";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  schools: schoolsRouter,
  team: teamRouter,
  students: studentRouter,
  ec: emergencyContactRouter,
  caraHours: caraHoursRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

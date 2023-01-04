import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const schoolsRouter = router({
  create: publicProcedure.input(z.object({ name: z.string(), userId: z.string() })).mutation(
    async ({ ctx, input }) => {
        return ctx.prisma.school.create({
            data: {
                name: input.name,
                users: {
                    connect: {
                        id: input.userId,
                    }
                }
            },
        });
    }
    ),
    getUsersSchools: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.school.findMany({
            include: {
                teams: true
            }
        });
    }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.school.findMany();
    }),
    getSchoolById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.school.findFirst({
            where: {
                id: input.id,
            },
            
        });
    }
    ),
});

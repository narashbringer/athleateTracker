import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const teamRouter = router({
  create: publicProcedure.input(z.object({ name: z.string(), userId: z.string(), schoolId: z.string(), })).mutation(
    async ({ ctx, input }) => {
        return ctx.prisma.team.create({
            data: {
                name: input.name,
                schoolId: input.schoolId,
                users: {
                    connect: {
                        id: input.userId,
                    }
                }
            },
        });
       
    }
    ),
    getUsersTeams: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.user.findUnique({
            where:{
            id: ctx.session.user.id
            },
            include:{
                teams: true
            }
        })
        }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.team.findMany();
    }),
    getById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.team.findUnique({
            where: {
                id: input.id,
            },
        });
    }),
    getStudents: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.team.findUnique({
            where: {
                id: input.id,
            },
            include: {
                students: {
                    include: {
                        caraHours: true,
                        caraEvents: true
                    }
                }
            }
        });
    }),
});

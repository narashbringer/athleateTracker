import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const caraHoursRouter = router({
    // id        String   @id @default(cuid())
    // name      String
    // week      String
    // Totalhours     Int
    // createdAt DateTime @default(now())
    // updatedAt DateTime @updatedAt
    // studentId String
    // student   student  @relation(fields: [studentId], references: [id])
    // caraEvents caraEvents[]
  create: publicProcedure.input(z.object({ name: z.string(),Week: z.string() , Totalhours: z.string(), studentId: z.string() })).mutation(
    async ({ ctx, input }) => {
        return ctx.prisma.caraHours.create({
            data: {
               name: input.name,
                week: input.Week,
                Totalhours: Number(input.Totalhours),
                studentId: input.studentId,
            },
        });
       
    }
    ),
    getByStudent: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.caraHours.input(z.object({studentId: z.string()})).findMany({
            where:{
                studentId: Input.studentId
            },
            include:{
                caraEvents: true
            }
        })
        }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.caraHours.findMany();
    }),
    getById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.caraHours.findUnique({
            where: {
                id: input.id,
            },
        });
    }),

});
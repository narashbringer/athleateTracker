
  import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const caraEventsRouter = router({
    // id        String   @id @default(cuid())
    // name      String
    // date      DateTime
    // hours     Int
    // createdAt DateTime @default(now())
    // updatedAt DateTime @updatedAt
    // studentId String
    // student   student  @relation(fields: [studentId], references: [id])
    // caraId    String
    // caraHours   caraHours  @relation(fields: [studentId], references: [id])
  create: publicProcedure.input(z.object({ name: z.string(),date: z.string() , Totalhours: z.string(), studentId: z.string(), caraId: z.string(), currentTotalHours:z.string()})).mutation(
    async ({ ctx, input }) => {
        ctx.prisma.caraHours.update({
            where: {
                id: input.caraId,
            },
            data: {
                Totalhours: Number(input.Totalhours) + Number(input.currentTotalHours)
            }
        }).then(() => {
        return ctx.prisma.caraEvents.create({
            data: {
               name: input.name,
               date: Date(input.date),
               hours: Number(input.Totalhours),
               caraId: input.studentId,
               studentId: input.studentId,
            },
        });
    })
    
       
    }
    ),
    getByStudent: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.caraEvents.input(z.object({studentId: z.string()})).findMany({
            where:{
                studentId: Input.studentId
            },
            include:{
                caraEvents: true
            }
        })
        }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.caraEvents.findMany();
    }),
    getById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.caraEvents.findUnique({
            where: {
                id: input.id,
            },
        });
    }),

});
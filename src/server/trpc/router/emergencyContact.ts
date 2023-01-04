import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const emergencyContactRouter = router({
    // id        String   @id @default(cuid())
    // name      String
    // relationship String 
    // email     String
    // phone     String
    // createdAt DateTime @default(now())
    // updatedAt DateTime @updatedAt
    // studentId String
    // student   student  @relation(fields: [studentId], references: [id])
  create: publicProcedure.input(z.object({ name: z.string(), 
    relationship: z.string(),
    email: z.string(),
    phone: z.string(),
    studentId: z.string(),

    })).mutation(
    async ({ ctx, input }) => {
        return ctx.prisma.emergencyContact.create({
            data: {
                name: input.name,
                relationship: input.relationship,
                email: input.email,
                phone: input.phone,
                studentId: input.studentId,
                
            },
        });
    }
    ),
    getAllByStudent: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.school.findMany({
            include: {
                teams: true
            }
        });
    }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.school.findMany();
    }),

});

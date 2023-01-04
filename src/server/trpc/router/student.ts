
import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const studentRouter = router({
  create: protectedProcedure.input(z.object({ 
    first_name: z.string(), 
    last_name: z.string(), 
    email: z.string(),
    schoolId: z.string(),
    teamIds: z.array(z.string()),
    gpa: z.string(),
    major: z.string().nullable().nullish(),
    minor: z.string().nullable().nullish(),
    progress_towards_degree: z.string(),
    seasons_remaining: z.string(),
    medically_eligible: z.boolean(),
    academically_eligible: z.boolean(),
    classes: z.array(z.string()).nullable().nullish(),
    documents: z.array(z.string()).nullable().nullish(),
    emergencyContact: z.array(z.string()).nullable().nullish(),
    caraHours: z.array(z.string()).nullable().nullish(),
    positions: z.array(z.string()),
    caraEvents: z.array(z.string()).nullable().nullish(),
     })).mutation(
    async ({ ctx, input }) => {
        return ctx.prisma.student.create({
            data: {
                first_name: input.first_name,
                last_name: input.last_name,
                email: input.email,
                schoolId: String(input.schoolId),
                teams: {
                    connect: (input.teamIds || []).map((id) => ({ id })),
                },
                gpa: Number(input.gpa),
                major: input.major || "",
                minor: input.minor || "",
                progress_towards_degree: Number(input.progress_towards_degree),
                seasons_remaining: Number(input.seasons_remaining),
                medically_eligible: input.medically_eligible,
                academically_eligible: input.academically_eligible,
                // classes: {
                //     connect: (input.classes || []).map((id) => ({ id })),
                // },
                // documents: {
                //     connect: (input.documents || []).map((id) => ({ id })),
                // },
                // emergencyContact: {
                //     connect: (input.emergencyContact || []).map((id) => ({ id })),
                // },
                // caraHours: {
                //     connect: (input.caraHours || []).map((id) => ({ id })),
                // },
                // positions: {
                //     connect: (input.positions  || []).map((id) => ({ id })),
                // },
                // caraEvents: {
                //     connect: (input.caraEvents  || []).map((id) => ({ id })),
                // },

            },
            },
        );
    }
    ),
    addClass: protectedProcedure.input(z.object({
        studentId: z.string(),
        classId: z.string(),
    })).mutation(
        async ({ ctx, input }) => {
            return ctx.prisma.student.update({
                where: {
                    id: input.studentId,
                },
                data: {
                    classes: {
                        connect: {
                            id: input.classId,
                        }
                    }
                }
            });
        }
    ),
    addDocument: protectedProcedure.input(z.object({
        studentId: z.string(),
        documentId: z.string(),
    })).mutation(
        async ({ ctx, input }) => {
            return ctx.prisma.student.update({
                where: {
                    id: input.studentId,
                },
                data: {
                    documents: {
                        connect: {
                            id: input.documentId,
                        }
                    }
                }
            });
        }
    ),
    addEmergencyContact: protectedProcedure.input(z.object({
        studentId: z.string(),
        emergencyContactId: z.string(),
    })).mutation(
        async ({ ctx, input }) => {
            return ctx.prisma.student.update({
                where: {
                    id: input.studentId,
                },
                data: {
                    emergencyContact: {
                        connect: {
                            id: input.emergencyContactId,
                        }
                    }
                }
            });
        }
    ),
    addCaraHours: protectedProcedure.input(z.object({
        studentId: z.string(),
        caraHoursId: z.string(),
    })).mutation(
        async ({ ctx, input }) => {
            return ctx.prisma.student.update({
                where: {
                    id: input.studentId,
                },
                data: {
                    caraHours: {
                        connect: {
                            id: input.caraHoursId,
                        }
                    }
                }
            });
        }
    ),
    addCaraEvent: protectedProcedure.input(z.object({
        studentId: z.string(),
        caraEventId: z.string(),
    })).mutation(
        async ({ ctx, input }) => {
            return ctx.prisma.student.update({
                where: {
                    id: input.studentId,
                },
                data: {
                    caraEvents: {
                        connect: {
                            id: input.caraEventId,
                        }
                    }
                }
            });
        }
    ),
    addPosition: protectedProcedure.input(z.object({
        studentId: z.string(),
        positionId: z.string(),
    })).mutation(
        async ({ ctx, input }) => {
            return ctx.prisma.student.update({
                where: {
                    id: input.studentId,
                },
                data: {
                    positions: {
                        connect: {
                            id: input.positionId,
                        }
                    }
                }
            });
        }
    ),

    getUsersSchools: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.student.findMany({
        });
    }),
    getAll: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.student.findMany();
    }),
    getById: publicProcedure.input(z.object({ id: z.string() })).query(({ ctx, input }) => {
        return ctx.prisma.student.findUnique({
            where: {
                id: input.id,
            },
            include: {
                teams: true,
                classes: true,
                documents: true,
                emergencyContact: true,
                caraHours: true,
                positions: true,
                caraEvents: true,
            },
        });
    }
    ),
});

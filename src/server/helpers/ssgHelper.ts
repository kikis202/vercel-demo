import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";

export const generateSSHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, currentUserId: null },
    transformer: superjson, // optional - adds superjson serialization
  });

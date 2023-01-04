# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.



## notes from asignment

-todos still need to clean up adding cara hours/ events
-still needed to add documents
-had a few other rough spots
-also would want to build out a team role up for the different metrics they might care about and also add a way to track some of -that over time (add a cragph of cara over 20 by week, or % of team below 2.3/4 gpa( almost failing))
-also forms need better validators. 
-style would need tightening up. 
-imporove some type safty
-add a few key automatted tests.
-add user roles for who can do what 
-add a more realistic auth provider then using discord.

how I woudl deploy this is to set up a mysql or postgresql database and push up the schema either using planetscale to make the db brainles

the main app is designed to be  deployed onto vercel which only requieres conection bettween git and vercel and then can be deployed with that one other issue fixed

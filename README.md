# Whitelist Webpack

This project demonstrates the ability to dynamically create the public folder entirely based on environment variables. It allows you to whitelist your application through proper use of environment variables.

In this simple demo, you can run `npm run build --env.platform={PLATFORM_NAME}` to generate the `public/*` files that now have the `PLATFORM_NAME` added to them appropriately.

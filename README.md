# boxcustodia-workflow-next

As a freelancing project, I was tasked with adapting the [previous version](https://github.com/Aplietexe/boxcustodia-workflow) of this project from pure React to Next.js 12 (the latest version at the moment).

As part of this, I refactored and adapted the code for SSG, as well as making the necessary changes to take advantage of Next.js performance optimizations (such as next/image).

The project uses Next.js, Bootstrap and styled-components, along with some helper libraries. For tooling, it uses TypeScript, ESLint with several plugins and Prettier.

For this demo, I upgraded to Next.js 13.

The result of all these optimizations is a website that obtains an excellent [score](https://pagespeed.web.dev/report?url=https%3A%2F%2Fboxcustodia-workflow-next.vercel.app%2F&form_factor=mobile) in Lighthouse, easily passing all tests.

[Live version](https://boxcustodia-workflow-next.vercel.app).

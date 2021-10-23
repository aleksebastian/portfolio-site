# Portfolio site

## Motivation

I built this website to better showcase my coding projects. I chose to use SvelteKit instead of Svelte to learn more about the things SvelteKit has to offer. Such as routing and server-side rendering, among other optimizations.

![Site mockup](https://raw.githubusercontent.com/aleksebastian/portfolio-site/main/mockup.png)

#### Check out the live site at [aleksebastian.dev](http://aleksebastian.dev)

## Advantages

- Because Svelte compiles to vanilla JavaScript, the bundle size was minute compared to a React bundle. As a result, the site is faster out of the box before implementing any other optimizations.
- The site was developed to take advantage of SvelteKit's powerful SSR capabilities to pre-fetch data from the Github API on the server resulting in a faster and smoother landing page load on the client.

## Future Enhancements

- I adopted tailwind CSS for the vast majority of the CSS in this project. However, I was unable to implement some solutions using tailwind, such as the mobile nav interface. I want to refactor that to take full advantage of tailwind CSS and explore it more in-depth.
- I also want to continue making optimizations to the code. And to add a few more minor design elements to the site to make it look more fleshed out.

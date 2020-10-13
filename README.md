<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" width="200"><defs/><rect fill="#3178c6" height="200" rx="19.531" width="200"/><rect fill="#3178c6" height="200" rx="19.531" width="200"/><path clip-rule="evenodd" d="M123.804 159.15v19.555c3.18 1.63 6.939 2.852 11.28 3.666 4.34.815 8.915 1.223 13.724 1.223 4.687 0 9.14-.448 13.358-1.345 4.218-.896 7.917-2.373 11.096-4.43 3.179-2.057 5.696-4.746 7.55-8.067 1.854-3.32 2.782-7.424 2.782-12.313 0-3.544-.53-6.65-1.59-9.32a21.78 21.78 0 00-4.585-7.118c-1.997-2.078-4.391-3.942-7.183-5.592-2.792-1.65-5.94-3.208-9.445-4.675a118.96 118.96 0 01-6.909-3.086c-2.037-.998-3.77-2.016-5.196-3.055-1.427-1.04-2.527-2.14-3.301-3.3-.774-1.161-1.162-2.475-1.162-3.942 0-1.344.347-2.556 1.04-3.636.692-1.08 1.67-2.006 2.934-2.78 1.264-.774 2.812-1.375 4.646-1.803 1.834-.428 3.872-.641 6.114-.641 1.63 0 3.352.122 5.165.366 1.814.245 3.638.622 5.472 1.13a38.092 38.092 0 015.35 1.926 29.483 29.483 0 014.798 2.689V96.33c-2.975-1.14-6.225-1.986-9.75-2.536-3.526-.55-7.571-.825-12.136-.825-4.646 0-9.048.499-13.205 1.497-4.157.998-7.815 2.556-10.974 4.675-3.158 2.118-5.654 4.817-7.488 8.097-1.834 3.28-2.752 7.2-2.752 11.763 0 5.826 1.682 10.796 5.044 14.911 3.362 4.115 8.467 7.598 15.314 10.45 2.69 1.1 5.197 2.179 7.52 3.238 2.323 1.06 4.33 2.16 6.021 3.3 1.692 1.141 3.026 2.384 4.005 3.728.978 1.344 1.467 2.872 1.467 4.583a7.012 7.012 0 01-.917 3.514c-.611 1.08-1.539 2.016-2.782 2.81-1.243.795-2.791 1.417-4.646 1.865-1.854.448-4.024.672-6.51.672-4.24 0-8.437-.743-12.594-2.23s-8.009-3.718-11.555-6.692zM90.93 110.97h25.086V94.922H46.094v16.048h24.963v71.452H90.93z" fill="#fff" fill-rule="evenodd"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 130 200" width="130"><defs/><path fill="#88b04b" fill-rule="evenodd" d="M50 55h30v90H50z"/><path fill="#88b04b" fill-rule="evenodd" d="M110 85v30H20V85z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.667 6.667" width="200"><defs/><path fill="#cb3837" d="M0 2.233h6.667v2.223H3.333v.37H1.852v-.37H0zm.37 1.852h.741v-1.11h.37v1.11h.37V2.604H.372zm1.852-1.481v1.852h.741v-.37h.74V2.603zm.741.37h.37v.74h-.37zm1.111-.37v1.481h.74v-1.11h.371v1.11h.37v-1.11h.37v1.11h.371V2.604z"/><path fill="#fff" d="M1.481 4.085h.37V2.604H.372v1.481h.74v-1.11h.37zM2.222 2.604v1.852h.741v-.37h.74V2.603zm1.111 1.11h-.37v-.74h.37zM5.185 2.974v1.111h.37v-1.11h.37v1.11h.371V2.604H4.074v1.481h.74v-1.11z"/></svg>

# No BS Typescript Module Boilerplate

This boilerplate focuses on keeping configuration to a minimum yet supporting all latest Typescript
features for making it as easy and worry-free as possible to get started building a performance
optimized NPM module.

This project is open to updates by its users, I ensure that PRs are relevant to the community.
In other words, if you find a bug or want a new feature, please help us by becoming one of the
[contributors](#contributors-) ✌️ ! See the [contributing section](#contributing).

:rotating_light: **Before continuing:**

- If you're creating a Lambda function for AWS consider looking at my [No BS Typescript Lambda Boilerplate]()
- If you're creating an API using Express.js consider looking at my [No BS Typescript Server Boilerplate]()
- If you're creating a React.js app consider looking at my [No BS React Boilerplate]()

## Like this project? :heart:

Please consider:

- [Buying me a coffee](https://www.buymeacoffee.com/jeanlescure) :coffee:
- Supporting me on [Patreon](https://www.patreon.com/jeanlescure) :trophy:
- Starring this repo on [Github](https://github.com/jeanlescure/string-crypto) :star2:

## How to get started using this boilerplate

The logic of this repo is structured in such a way that all you need to worry about is placing your
code in the `src` directory (using `src/index.ts` as entry point).

## Development and build scripts

I chose Rollup to handle the transpiling, compression, and any other transformations needed to get
your Typescript code running as quickly and performant as possible.

This repo uses `runkit.js` to validate your code's sanity. Why? Because [www.npmjs.com](https://www.npmjs.com/)
uses [Runkit](https://runkit.com/home) to allow potential users to play with your module, live on
their browser, which is one of the best ways to convince someone to use your modules in their code.
Runkit will look for the `runkit.js` by default and display that as the initial playground for the
user, so by making it the default validation method during development, this encourages proper
communication with the users of your code.

**Development**

```
yarn dev
```

Uses [concurrently]() to run Rollup in watch mode (which means it will transpile to `dist` when you
save changes to your code), as well as Nodemon to listen for changes in the `dist` directory and
re-run the `runkit.js` as you modify your source! This includes running node with the `--inspect`
flag so you can inspect your code using [Google Chrome Dev Tools](https://nodejs.org/en/docs/guides/debugging-getting-started/)
(by opening `chrome://inspect` in your browser), you're welcome ;)

**Build**

```
yarn build
```

This command will build the `dist/index.js`, uglified and tree-shaken so it loads/runs faster.

## Deployment

Remember to rename your module on the `package.json`, then just folllow usual NPM conventions:

```
npm login
npm publish
```

## Contributing

Yes, thank you! This plugin is community-driven, most of its features are from different authors.
Please update the docs and tests and add your name to the `package.json` file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

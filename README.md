![Typescript](https://assets.jeanlescure.io/f8mvuN.svg)
![plus](https://assets.jeanlescure.io/gxaoy.svg)
![NPM](https://assets.jeanlescure.io/iRlPH2h.svg)

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

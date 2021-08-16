[![Test](https://github.com/Avery2/ThoughtApp/actions/workflows/test.yml/badge.svg)](https://github.com/Avery2/ThoughtApp/actions/workflows/test.yml)

<img width="1136" alt="Screen Shot 2021-08-16 at 12 20 06 AM" src="https://user-images.githubusercontent.com/53503018/129514708-2cff0d2b-f43b-4742-8b27-974ed7d01966.png">

## Idea

I want to add text-to-speech capabilities to notion though an app. I plan to use open-source [DeepSpeech](https://github.com/mozilla/DeepSpeech) and the [Notion API](https://developers.notion.com/reference/intro). The reasoning to create an app is that I wanted an excuse to use Electron, and the Notion API can currently only update text, and you must manually record audio files in a seperate app and upload them. The goal is to be able to follow Notion's nested behaviour with toggle lists with just normal audio recording.

## Starting Development

Start the app in the `dev` environment:

```bash
yarn start
```

To package apps for the local platform:

```bash
yarn package
```

Made with Electron React Boilerplate which uses [Electron](https://electron.atom.io/), [React](https://facebook.github.io/react/), [React Router](https://github.com/reactjs/react-router), [Webpack](https://webpack.js.org/) and [React Fast Refresh](https://www.npmjs.com/package/react-refresh).

See electron-react-boilerplate [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation).

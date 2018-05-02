# How this project was initialised

    react-native init RNTS
    yarn add --dev @types/react @types/react-native react-native-typescript-transformer typescript
    touch rn-cli.config.js

Copy the following into rn-cli-config.js:

    module.exports = {  
      getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer')
      },
      getSourceExts() {
        return ['ts', 'tsx'];
      }
    }

    touch tsconfig.json

Copy the following into tsconfig.json:

    {
      "compilerOptions": {
        "target": "es2015",
        "module": "es2015",
        "jsx": "react-native",
        "baseUrl": ".",
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true
      }
    }

    mv App.js App.tsx

    open ios/RNTS.xcodeproj

Change the default bundle identifier from `org.reactjs.native.example.RNTS` to:

    uk.co.bottledlogic.portotv.app

<!-- Change your code signing team from `None` to your account -->

# Restarting a running app

1. Close the running packager
2. Make any desired changes
3. Do `run react-native start --reset-cache`
4. Do `react-native run-ios` to restart the simulator (for iOS), or `cmd-R` in Xcode to restart it for tvOS. `yarn run start` [may suffice](https://github.com/catarizea/generator-react-native-tvos) for tvOS..?
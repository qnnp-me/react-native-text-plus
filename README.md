# react-native-text-plus [中文](README_CN.md)

A React Native component for text with gradient and text style attributes.

## Installation

### npm

```sh
npm install react-native-text-plus
```

### yarn

```sh
yarn add react-native-text-plus
```

## Usage

```tsx
import { Text, TextContextProvider } from 'react-native-text-plus';

// ...

<TextContextProvider value={{
  fontSize: 14,
  fontFamily: '...',
  ... // same as Text style
}}>
  <View>
    <Text
      // text attributes
      fontWeight="bold"
      // ... as Text style and Text props
      style={{
        // only work for Text
      }}
      // text attributes end

      // gradient attributes
      colors={['#000', '#fff']} // for gradient
      start={{ x: 0, y: 0 }}
      //...  gradient attributes only work with colors, same as LinearGradient props
      // end
      // locations
      // useAngle
      // angleCenter
      // angle
      // gradient attributes end
    >Hello, World!</Text>
  </View>
</TextContextProvider>

// ...

```

## Dependencies

> "@react-native-masked-view/masked-view": "^0.3.0",
>
> "react-native-linear-gradient": "^2.8.0"
>
> // if you need lower version dependencies, please PR or issue

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

# react-native-text-plus

desc

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
  ...
}}>
  <View>
    <Text fontWeight="bold">Hello, World!</Text>
  </View>
</TextContextProvider>

// ...

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

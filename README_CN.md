# react-native-text-plus [English](README_CN.md)

一个React Native组件，用于文本的渐变色和样式属性。

## 安装

### npm

```sh
npm install react-native-text-plus
```

### yarn

```sh
yarn add react-native-text-plus
```

## 使用

```tsx
import { Text, TextContextProvider } from 'react-native-text-plus';

// ...

<TextContextProvider value={{
  fontSize: 14,
  fontFamily: '...',
  ... // 和Text的样式属性一样
}}>
  <View>
    <Text
      // text 属性
      fontWeight="bold"
      // ... 可以设置Text的样式属性
      style={{
        // 只对Text样式有作用
      }}
      // text attributes end

      // 渐变属性
      colors={['#000', '#fff']}
      start={{ x: 0, y: 0 }}
      //...  渐变属性仅当有colors时才有效，与LinearGradient props相同
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

## 依赖项

> "@react-native-masked-view/masked-view": "^0.3.0",
>
> "react-native-linear-gradient": "^2.8.0"
>
> // 如果需要较低版本的依赖关系，请PR或问题

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

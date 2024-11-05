import { StyleSheet, View } from 'react-native';
import { Text, TextContextProvider } from 'react-native-text-plus';

export default function App() {
  return (
    <TextContextProvider
      value={{
        color: 'red',
        fontSize: 30,
        lineHeight: 40,
      }}
    >
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    </TextContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

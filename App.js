import { View, Text } from "react-native";
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
    </View>
  );
}

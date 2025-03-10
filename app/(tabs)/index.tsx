import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./homepage";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

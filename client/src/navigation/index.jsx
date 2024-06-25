import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShowAllProduct from "../pages/ShowAllProduct";
import AddProduct from "../pages/addproduct";
import Login from "../pages/login";
import Products from "../pages/products";


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ShowAllProduct" component={ShowAllProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

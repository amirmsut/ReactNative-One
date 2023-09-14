import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Signin from "./src/screens/auth/Signin/Signin";
import Splash from "./src/screens/auth/Splash/Splash";
import Signup from "./src/screens/auth/Signup/Signup";

const WEB_CLIENT_ID =
    "286125874361-mjcgbtn5v0p0iur07s3mvlfe9n4dqad4.apps.googleusercontent.com";
const IOS_CLIENT_ID =
    "286125874361-l0k696tlla80308vib3gbvpc1c7npov9.apps.googleusercontent.com";
const REVERSE_IOS_CLIENT_ID =
    "com.googleusercontent.apps.286125874361-l0k696tlla80308vib3gbvpc1c7npov9";

export default function App() {
    //
    useEffect(() => {}, []);
    //

    // const Stack = createNativeStackNavigator();

    const Stack = createNativeStackNavigator();
    return (
        // <SafeAreaView>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
        // </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     themeHeader: {
//         margin: 16,
//         fontSize: 16,
//     },
// });

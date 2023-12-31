import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image } from "react-native";

import Signin from "./src/screens/auth/Signin/Signin";
import Splash from "./src/screens/auth/Splash/Splash";
import Signup from "./src/screens/auth/Signup/Signup";
import { colors } from "./src/utils/colors";

// Tabs imports
import Home from "./src/screens/app/Home/Home";
import Profile from "./src/screens/app/Profile/Profile";
import Settings from "./src/screens/app/Settings/Settings";
import ProductDetails from "./src/screens/app/ProductDetails/ProductDetails";
import Favorites from "./src/screens/app/Favorites/Favorites";
import CreateListing from "./src/screens/app/CreateListing/CreateListing";
import MyListing from "./src/screens/app/MyListing/MyListing";

// // const WEB_CLIENT_ID =
// //     "286125874361-mjcgbtn5v0p0iur07s3mvlfe9n4dqad4.apps.googleusercontent.com";
// // const IOS_CLIENT_ID =
// //     "286125874361-l0k696tlla80308vib3gbvpc1c7npov9.apps.googleusercontent.com";
// // const REVERSE_IOS_CLIENT_ID =
// //     "com.googleusercontent.apps.286125874361-l0k696tlla80308vib3gbvpc1c7npov9";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// context
export const UserContext = React.createContext();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateListing"
                component={CreateListing}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MyListing"
                component={MyListing}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const Tabs = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let icon;

                if (route.name === "Home") {
                    icon = focused
                        ? require("./src/assets/tabs/home_active.png")
                        : require("./src/assets/tabs/home.png");
                } else if (route.name === "ProfileStack") {
                    icon = focused
                        ? require("./src/assets/tabs/profile_active.png")
                        : require("./src/assets/tabs/profile.png");
                } else if (route.name === "Favorites") {
                    icon = focused
                        ? require("./src/assets/tabs/bookmark_active.png")
                        : require("./src/assets/tabs/bookmark.png");
                }
                // You can return any component that you like here!
                return (
                    <Image style={{ width: 24, height: 24 }} source={icon} />
                );
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { borderTopColor: colors.lightGrey },
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
);

export default function App() {
    // isSignedIn
    const isSignedIn = false;

    //
    // Theme Navigation
    const theme = {
        colors: {
            background: colors.white,
        },
    };

    const [user, setUser] = useState();

    return (
        <SafeAreaProvider>
            <UserContext.Provider value={{ user, setUser }}>
                <NavigationContainer theme={theme}>
                    <Stack.Navigator>
                        {isSignedIn ? (
                            <>
                                <Stack.Screen
                                    name="Tabs"
                                    component={Tabs}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="ProductDetails"
                                    component={ProductDetails}
                                    options={{ headerShown: false }}
                                />
                            </>
                        ) : (
                            <>
                                <Stack.Screen
                                    name="Splash"
                                    component={Splash}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Signin"
                                    component={Signin}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="Signup"
                                    component={Signup}
                                    options={{ headerShown: false }}
                                />
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </UserContext.Provider>
        </SafeAreaProvider>
    );
}

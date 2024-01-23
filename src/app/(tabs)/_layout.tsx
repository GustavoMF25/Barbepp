import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons'
import { TemaProvider } from "@/context/TemaContext";
import { Drawer } from 'expo-router/drawer';

export default function TabRoutesLayout() {
    return (
        <TemaProvider>
            {/* <Drawer>
                <Drawer.Screen
                    name="profile" // This is the name of the page and must match the url from root
                    options={{
                        title: 'profile',
                        drawerLabel: 'overview'
                        // tabBarIcon: ({ size, color }) => <MaterialIcons name="person" size={size} color={color} />
                    }}
                />
            </Drawer> */}
            
            <Tabs screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Tabs.Screen
                    name="Home"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ size, color }) => <Feather name="home" size={size} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Perfil',
                        tabBarIcon: ({ size, color }) => <Feather name="user" size={size} color={color} />
                    }}
                />
            </Tabs>
        </TemaProvider>
    )
}
import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons'
import { TemaProvider } from "@/context/TemaContext";
import { Drawer } from 'expo-router/drawer';

export default function TabRoutesLayout() {
    return (
        <TemaProvider>

            <Tabs screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Tabs.Screen
                    name="Home"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ size, color }) => <Feather name="home" size={size} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="servicos"
                    options={{
                        title: 'Serviços',
                        href: '/servicos/',
                        tabBarIcon: ({ size, color }) => <Feather name="dollar-sign" size={size} color={color} />
                    }}
                />
                <Tabs.Screen
                    name="agendamento"
                    options={{
                        title: 'Agendamento',
                        href: '/agendamento/',
                        tabBarIcon: ({ size, color }) => <Feather name="calendar" size={size} color={color} />
                    }}
                />
            </Tabs>
        </TemaProvider>
    )
}
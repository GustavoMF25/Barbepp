
import { Feather } from '@expo/vector-icons'
import { TemaProvider } from "@/context/TemaContext";
import { Drawer } from 'expo-router/drawer';

export default function TabRoutesLayout() {
    return (
        <TemaProvider>
            <Drawer initialRouteName="Perfil">
                <Drawer.Screen
                    name="index"
                    options={{
                        title: 'Agendamento',
                        drawerLabel: 'Agendamento',
                        drawerIcon: ({ size, color }) => <Feather name="user" size={size} color={color} />,
                        drawerStyle: { paddingTop: '5%' },
                        // drawerItemStyle: {backgroundColor: 'red'}
                    }}

                />
                <Drawer.Screen
                    name="criar_agendamento"
                    options={{
                        title: 'Criar agendamento',
                        drawerLabel: 'Criar agendamento',
                        drawerIcon: ({ size, color }) => <Feather name="user" size={size} color={color} />,
                        drawerStyle: { paddingTop: '5%' },
                        // drawerItemStyle: {backgroundColor: 'red'}
                    }}

                />
                {/* <Drawer.Screen
                    name="Editar"
                    options={{
                        title: 'Editar Perfil',
                        drawerLabel: 'Editar perfil',
                        drawerIcon: ({ size, color }) => <Feather name="edit" size={size} color={color} />,
                        drawerStyle: { paddingTop: '55%' }
                    }}
                /> */}
            </Drawer>
        </TemaProvider>
    )
}
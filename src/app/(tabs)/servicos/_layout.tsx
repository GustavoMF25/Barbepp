
import { Feather } from '@expo/vector-icons'
import { TemaProvider } from "@/context/TemaContext";
import { Drawer } from 'expo-router/drawer';

export default function TabRoutesLayout() {
    return (
        <TemaProvider>
            <Drawer initialRouteName="Servicos">
                <Drawer.Screen
                    name="index"
                    options={{
                        title: 'Serviços',
                        drawerLabel: 'Serviços',
                        drawerIcon: ({ size, color }) => <Feather name="dollar-sign" size={size} color={color} />,
                        drawerStyle: { paddingTop: '5%' },
                        // drawerItemStyle: {backgroundColor: 'red'}
                    }}

                />
                <Drawer.Screen
                    name="criar"
                    options={{
                        title: 'Criar serviços',
                        drawerLabel: 'Criar Serviços',
                        drawerIcon: ({ size, color }) => <Feather name="edit" size={size} color={color} />,
                        drawerStyle: { paddingTop: '55%' }
                    }}
                />
            </Drawer>
        </TemaProvider>
    )
}
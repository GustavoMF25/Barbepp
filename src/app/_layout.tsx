import { TemaContext, TemaProvider } from '@/context/TemaContext'
import { AuthProvider } from '@/context/AuthProvider';
import { MaterialIcons } from '@expo/vector-icons'
import { Slot } from 'expo-router'

export default function Default() {
    return (
        <>
            <TemaProvider>
                <AuthProvider>
                    <Slot />
                </AuthProvider>
            </TemaProvider>
        </>
    )
}
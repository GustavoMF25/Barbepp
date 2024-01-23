import { TemaContext, TemaProvider } from '@/context/TemaContext'
import { MaterialIcons } from '@expo/vector-icons'
import { Slot } from 'expo-router'

export default function Default() {
    return (
        <>
            <TemaProvider>
                <Slot />
            </TemaProvider>
        </>
    )
}
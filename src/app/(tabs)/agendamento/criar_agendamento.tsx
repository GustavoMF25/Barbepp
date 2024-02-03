import { ButtonLink } from "@/component/Buttons";
import { TemaContext } from "@/context/TemaContext";
import { Link } from "expo-router";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function Agendamento() {

    const { tertiaryColor, secondaryColor, prymaryColor } = useContext(TemaContext)

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
            }}>
            <Text style={{ fontSize: 44, fontWeight: '700' }}>
                CRIAR AGENDAMENTO
            </Text>

            <View style={{ width: '30%' }}>
                <Link href={'/'} asChild>
                    <ButtonLink title="Login" />
                </Link>
            </View>
        </View>
    )
}
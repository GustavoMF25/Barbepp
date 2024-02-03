import { ButtonIcon } from "@/component/Buttons";
import { Link } from "expo-router";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "@/context/AuthProvider";

export default function Default() {
    const { user } = useAuth();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10, backgroundColor: '#FFFFFF' }}>
            <View>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Image style={{ width: 300, height: 300, alignSelf: "center", justifyContent: 'center', resizeMode: 'contain', borderRadius: 186 }} source={require(`../../../assets/1.png`)} />
                </View>
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <View style={{ marginVertical: 30 }}>
                        <Text style={{ fontSize: 22, fontStyle: 'italic' }}>Atalhos -> {user?.name}</Text>
                    </View>

                    <View style={{ marginHorizontal: 50 }}>
                        <ButtonIcon title="Agendar horário" nomeIcon={'calendar'} tamanhoicon={30} hrefBtn="/agendamento/criar_agendamento" />
                        <ButtonIcon title="Serviços" nomeIcon={'dollar-sign'} tamanhoicon={30} hrefBtn="/servicos/" />
                    </View>

                </View>
            </View>
            {/* <Text style={{ fontSize: 44, fontWeight: '700' }}>
                Home
            </Text>
            <Link href={'/profile'} asChild>
                <Button title="Perfil" />
            </Link> */}

        </View>
    )
}
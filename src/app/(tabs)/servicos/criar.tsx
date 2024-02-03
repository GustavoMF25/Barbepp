import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Default() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 44, fontWeight: '700' }}>
                EDITAR
            </Text>
            <Link href={'/(tabs)/servicos/'} asChild>
                <Button title="Serviços" />
            </Link>

        </View>
    )
}
import { Button, Text, View } from "react-native";
import {  Link, useLocalSearchParams  } from "expo-router";

export default function Product() {

    const { id } = useLocalSearchParams ()

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 44, fontWeight: '700' }}>
                Produto: {id}
            </Text> 

            <Link href={'/profile'} asChild>
                <Button title=" Voltar" />
            </Link>

        </View>
    )
}
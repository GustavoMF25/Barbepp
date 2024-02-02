import { TemaContext } from "@/context/TemaContext";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { forwardRef, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
    title: string;
    onClick?: any;
    nomeIcon?: any;
    tamanhoIcon?: any;
    hrefBtn?:any;
}

export const Button = ({ title, onClick }: Props) => {
    const { tertiaryColor, secondaryColor, prymaryColor } = useContext(TemaContext)

    return (
        <TouchableOpacity
            onPress={onClick}
            style={{
                width: '100%',
                padding: 8,
                backgroundColor: prymaryColor,
                alignItems: "center",
                borderRadius: 5,
                padding: 10
            }}
        >
            <Text style={{
                fontSize: 14, fontWeight: "700", letterSpacing: 0.5, color: "white"
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}


export const ButtonLink = forwardRef<TouchableOpacity, Props>(({ title, ...rest }, ref) => {
    const { tertiaryColor, secondaryColor, prymaryColor } = useContext(TemaContext)

    return (
        <TouchableOpacity
            ref={ref}
            style={{
                width: '100%',
                padding: 8,
                backgroundColor: prymaryColor,
                alignItems: "center"
            }}
            {...rest}
        >
            <Text style={{
                fontSize: 14, fontWeight: "700", letterSpacing: 0.5, color: "white"
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
})
export const ButtonIcon = forwardRef<TouchableOpacity, Props>(({ title, nomeIcon, tamanhoIcon, hrefBtn = 20, ...rest }, ref) => {
    const { tertiaryColor, secondaryColor, prymaryColor } = useContext(TemaContext)

    return (
        <Link href={hrefBtn} asChild>
            <TouchableOpacity
                ref={ref}
                style={{
                    width: '100%',
                    borderRadius: 10,
                    height: 60,
                    borderWidth: 1,
                    margin: 10,
                    alignItems: 'center',
                    // justifyContent: 'space-around',
                    flexDirection: 'row'
                }}
                {...rest}
            >
                <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                    <Feather name={nomeIcon} size={tamanhoIcon} color={secondaryColor}/>
                </View>
                <View style={{ width: '70%', justifyContent: 'center', paddingLeft: 15 }}>

                    <Text style={{fontSize: 18, fontStyle: 'italic', fontWeight: 'bold'}}>{title}</Text>

                </View>

            </TouchableOpacity>
        </Link>
    )
})
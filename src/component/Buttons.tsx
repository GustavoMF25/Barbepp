import { TemaContext } from "@/context/TemaContext";
import { forwardRef, useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    onClick?: any;
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
// @ts-nocheck
import { Link } from "expo-router";
import React, { useContext } from "react";
import { SafeAreaView, StatusBar, Text, View, Image } from "react-native";
import { Field, Formik } from "formik";
import * as yup from "yup";
import { Button } from "@/component/Buttons";
import CustomInput from "@/component/Input";
import { REACT_NATIVE_APP_LOGO } from "@env";
import { TemaContext } from "@/context/TemaContext";

const RecuperarLoginSchema = yup.object({
    email: yup
        .string()
        .email("O email precisa ser valido")
        .required("O email é obrigatório"),
    senha: yup
        .string()
        .required("A senha é obrigatória"),
    confirmarSenha: yup
        .string()
        .oneOf([yup.ref('senha')], 'As senhas não são identicas')
        .required("Confiramr a senha é obrigatória"),
});

export default function RecuperacaoSenha() {

    const { tertiaryColor, secondaryColor } = useContext(TemaContext)

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: "80%", alignItems: "center", padding: 50, elevation: 10, backgroundColor: tertiaryColor, maxWidth: 600 }}>
                    <Text style={{ fontSize: 24, letterSpacing: 0.5 }}>Recuperar login</Text>
                    <Image style={{ width: 200, height: 100, alignSelf: "center", resizeMode: 'contain', }} source={{ uri: REACT_NATIVE_APP_LOGO }} />
                    <Formik
                        validationSchema={RecuperarLoginSchema}
                        initialValues={{ email: "", senha: "", confirmarSenha: "" }}
                        onSubmit={values => console.log(values)}

                    >
                        {({ handleSubmit }) => (
                            <>
                                <Field
                                    component={CustomInput}
                                    name="email"
                                    placeholder="Email"
                                    keyboardType="email-address"
                                />

                                <View style={{ width: '50%', alignItems: "center", marginTop: 10 }}>
                                    <Button onClick={handleSubmit} title="Submit" />
                                </View>

                                <View style={{ width: '100%', alignItems: "flex-end" }}>
                                    <Link href={'/'} asChild>
                                        <Text style={{ color: 'blue', marginTop: 32 }}> Lembrei meu Login !</Text>
                                    </Link>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
            </SafeAreaView >
        </>
    )
}
// @ts-nocheck 
import { Link, router } from "expo-router";
import React, { useContext } from "react";
import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import * as AuthSession from 'expo-auth-session';
import { Field, Formik } from "formik";
import * as yup from "yup";
import { Button } from "@/component/Buttons";
import CustomInput, { InputLogin } from "@/component/Input";
import { REACT_NATIVE_APP_LOGO } from "@env";
import { TemaContext } from "@/context/TemaContext";
import { useAuth } from '@/context/AuthProvider';

const loginSchema = yup.object({
    email: yup
        .string()
        .email("O email precisa ser valido")
        .required("O email é obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória"),
});

export default function Login() {

    const { tertiaryColor, secondaryColor, prymaryColor } = useContext(TemaContext)

    const authEndpoint = 'https://localhost:8000'; // Substitua pela URL da sua API Laravel
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });

    const { setUser, singIn } = useAuth();
    const RequestLogin = async (params) => {

        singIn(params, setUser)
        // alert(params)
        // setUser({
        //     name: "John Doe",
        // });
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, alignItems: "center", padding: 20 }}>
                <View style={{ flex: 1.5, justifyContent: 'center', }}>
                    <Image style={{ width: 300, height: 300, alignSelf: "center", justifyContent: 'center', resizeMode: 'contain', borderRadius: 186 }} source={require(`../../../assets/1.png`)} />
                </View>
                <View style={{ flex: 1.5, display: 'flex', alignItems: "center", justifyContent: 'center', width: '100%' }}>
                    <Text style={{ fontSize: 22 }}>LOGIN</Text>
                    <Formik
                        validationSchema={loginSchema}
                        initialValues={{ email: "", password: "" }}
                        onSubmit={values => RequestLogin(values)}
                    >
                        {({ handleSubmit }) => (
                            <>
                                <Field
                                    component={CustomInput}
                                    name="email"
                                    placeholder="Email"
                                    keyboardType="email-address"
                                />
                                <Field
                                    component={CustomInput}
                                    name="password"
                                    placeholder="Senha"
                                    secureTextEntry
                                />

                                <View style={{ width: '80%', alignItems: "center", marginTop: 80 }}>
                                    <Button onClick={handleSubmit} title="Login" />
                                </View>

                                <View style={{ width: '100%', alignItems: "center" }}>
                                    <Link href={'/RecuperacaoSenha'} asChild>
                                        <Text style={{ color: 'blue', marginTop: 32 }}> Esqueci minha senha</Text>
                                    </Link>
                                </View>
                            </>
                        )}
                    </Formik>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 30, height: 30, alignItems: 'flex-end', justifyContent: 'center', resizeMode: 'contain', borderRadius: 186 }} source={require(`../../../assets/sw.png`)} />
                        <Text>TODOS OS DIREITOS RESERVADOS</Text>
                    </View>
                </View>
            </SafeAreaView >
        </>
    )
}
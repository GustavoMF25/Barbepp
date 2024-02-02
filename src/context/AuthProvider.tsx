import { api } from "@/services/api";
import obterTokenCSRF from "@/utils/CSRF";
import { useSegments, useRouter, router } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import * as Device from 'expo-device';

type User = {
    id: string;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
}

type AuthLogin = {
    email: string;
    password: string
}

type AuthType = {
    user: User | null;
    setUser: (user: User | null) => void;
    singIn: (login: AuthLogin | null) => void;
    setLoading: (loading: boolean) => void;
    loading: boolean;
}



const AuthContext = createContext<AuthType>({
    user: null,
    setUser: () => { },
    singIn: () => { },
    setLoading: () => { },
    loading: false
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user: any) {
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        const inAuthGroup = segments[0] === "(auth)";
        if (
            !user &&
            !inAuthGroup
        ) {
            router.replace("/login");
        } else if (user && inAuthGroup) {
            router.replace("/(tabs)/Home");
        }
    }, [user, segments]);
}

export async function singIn(params: any, setUser: any) {

    params.device_name = Device.deviceName
    await api.post('/api/login', params).then((response) => {
        console.log(response.data)
        setUser(response.data.user)
        router.replace('/(tabs)/Home')
    }).catch((err) => {
        console.log(err)
    })

}



export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    

    useProtectedRoute(user);
    const authContext: AuthType = {
        user,
        setUser,
        singIn,
        loading,
        setLoading
    };

    return <AuthContext.Provider value={authContext}>
        {children}
    </AuthContext.Provider>;
}
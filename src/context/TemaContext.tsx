'use client'
import { createContext, useEffect, useState } from "react"

type AuthContextProps = {
    prymaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    hoverColor: string,
};

export const TemaContext = createContext({} as AuthContextProps)


export function TemaProvider({ children }: any) {

    const [prymaryColor, setPrymaryColor] = useState<string>('#943746')
    const [secondaryColor, setSecondaryColor] = useState<string>('#000')
    const [tertiaryColor, setTertiaryColor] = useState<string>('#fafafa')
    const [hoverColor, setHoverColor] = useState<string>('#5BA850')

    useEffect(() => {
        setPrymaryColor('#943746')
        setSecondaryColor('#000')
        setTertiaryColor('#fafafa')
        setHoverColor('#5BA850')
    }, [])


    return (
        <TemaContext.Provider value={{ prymaryColor, secondaryColor, tertiaryColor, hoverColor }}>
            {children}
        </TemaContext.Provider>
    )
}
import React from 'react'
import { Text, TextInput, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons';


const CustomInput = (props: any) => {
    const {
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        placeholder,
        ...inputProps
    } = props

    const hasError = errors[name] && touched[name]

    return (
        <>
            <Text style={{ width: '80%', alignItems: "flex-start", }}>{placeholder + ":"}</Text>
            {/* <View style={{ width: '80%', alignItems: "center", flexDirection: 'row' }}> */}
                {/* <Feather name="at-sign" size={24} color="black" /> */}
                <TextInput
                    style={[
                        styles.textInput,
                        hasError && styles.errorInput
                    ]}
                    value={value}
                    onChangeText={(text) => onChange(name)(text)}
                    onBlur={() => {
                        setFieldTouched(name)
                        onBlur(name)
                    }}
                    {...inputProps}
                />
            {/* </View> */}
            {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '80%',
        margin: 10,
        backgroundColor: '#FFFFFF',
        borderColor: '#943746',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        borderRadius: 10
    },
    errorText: {
        fontSize: 10,
        color: 'red',
    },
    errorInput: {
        borderColor: 'red',
    }
})

export default CustomInput
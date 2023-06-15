import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import { colors } from "../utils/colors"
import { RoundedButton } from '../components/RoundedButton'

export default function Focus({ addSubject }) {
    const [subject, setSubject] = useState(null);

    const onChangeHandle = (e) => {
        setSubject(e)
    }

    console.log(subject)

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Focus Features</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    label="What do you want to focus on?"
                    value={subject}
                    onChangeText={onChangeHandle}
                />
                <View style={styles.button} >
                    <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        flex: 1,
        marginRight: 10,
    },
    button: {
        justifyContent: 'center',
    },
    inputContainer: {
        padding: 25,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    label: {
        paddingTop:0,
        paddingLeft: 25,
        color: colors.white,
        textAlign: 'left'
    }
})
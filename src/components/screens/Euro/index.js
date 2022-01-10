import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./style.js";
import EuroCot from "../../../services/EuroCot.js"

export default function Euro() {

    const [real, setReal] = useState(0);
    const [euro, setEuro] = useState(0);
    const [resul, setResul] = useState(0);

    EuroCot.getValue().then(v => {
        setEuro(parseFloat(v.bid).toFixed(2));
    });

    useEffect(() => {
        if (real === "" || isNaN(real)) {
            setReal(0);
        } else {
            setResul((euro * parseFloat(real)).toFixed(2));
        }

    }, [real]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Euro</Text>

            <View style={styles.area}>
                <Text style={styles.label}>Real</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Digite o valor em Real"
                    value={real}
                    onChangeText={v => setReal(v)}
                />

            </View>

            <View style={styles.areaResult}>
                <Text style={styles.label}>Euro:</Text>
                <Text style={styles.result}>€ {resul}</Text>
            </View>

        </SafeAreaView>
    );
}
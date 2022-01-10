import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import styles from "./style.js";
import DolarCot from "../../../services/DolarCot.js"

export default function Dolar() {

    const [real, setReal] = useState(0);
    const [dolar, setDolar] = useState(0);
    const [resul, setResul] = useState(0);

    DolarCot.getValue().then(v => {
        setDolar(parseFloat(v.bid).toFixed(2));
    });

    useEffect(() => {
        if (real === "" || isNaN(real)) {
            setReal(0);
        } else {
            setResul((dolar * parseFloat(real)).toFixed(2));
        }
    }, [real]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Dolar</Text>

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
                <Text style={styles.label}>Dolar:</Text>
                <Text style={styles.result}>$ {resul}</Text>
            </View>

        </SafeAreaView>
    );
}
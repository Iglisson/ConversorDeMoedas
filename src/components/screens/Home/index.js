import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./style.js";

export default function Home({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}> Iglisson Ruan </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Dolar")}>
                <Text style={styles.textButton}>Real para Dolar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Euro")}>
                <Text style={styles.textButton}>Real para Euro</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
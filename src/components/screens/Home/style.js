import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    name: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#11538C"
    },
    button: {
        backgroundColor: "#11538C",
        width: "90%",
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignContent: "center",
        alignItems: "center",
        marginTop: 100,
        borderRadius: 10
    },
    textButton: {
        fontSize: 24,
        color: "#F0F1F2"
    }
});

export default styles;
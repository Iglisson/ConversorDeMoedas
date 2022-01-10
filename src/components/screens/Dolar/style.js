import { StyleSheet } from "react-native";

const color = "#11538C";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 20,
        color: color
    },
    area: {
        width: "90%",
        flexShrink: 1
    },
    label: {
        fontSize: 24,
        fontWeight: "bold",
        color: color
    },
    input: {
        borderWidth: 1,
        borderColor: color,
        fontSize: 24,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20,
        color: color
    },
    areaResult: {
        width: "90%"
    },
    result: {
        borderWidth: 1,
        borderColor: "#11538C",
        fontSize: 24,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20,
        color: color
    }
});

export default styles;
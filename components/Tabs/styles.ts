import Colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        padding: 20,
    },
    content: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    animation: {
        width: 300,
        height: 300,
    },
    title: {
        fontSize: 24,
        color: Colors.text,
        marginTop: 20,
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        color: Colors.text,
        marginTop: 10,
        textAlign: "center",
    },
});

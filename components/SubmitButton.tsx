import { Pressable, StyleSheet, Text } from "react-native";

export default function SubmitButton({ onPress }: { onPress: () => void }) {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#289e4d",
        padding: 18,
        borderRadius: 8,
        width: "100%",
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
    },
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import SubmitButton from "./SubmitButton";

export default function Options({
    quoteOptions,
    handleSubmitChoices,
    handleWordPress,
}: {
    quoteOptions: string[];
    handleSubmitChoices: () => void;
    handleWordPress: (count: string) => void;
}) {
    return (
        <View style={styles.optionContainer}>
            {quoteOptions.length > 0 ? (
                quoteOptions.map((word, index) => {
                    return (
                        <Pressable key={index} onPress={() => handleWordPress(word)}>
                            <Text style={styles.optionButton}>{word}</Text>
                        </Pressable>
                    );
                })
            ) : (
                <SubmitButton onPress={handleSubmitChoices} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginTop: 30,
        marginBottom: 10,
        minHeight: 100,
    },
    optionButton: {
        textAlign: "center",
        backgroundColor: "white",
        borderColor: "#bdbdbd",
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    },
});

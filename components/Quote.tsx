/* I found it challenging to get the text to wrap correctly in the Quote component.
 ** I'm curious to know your solution to this problem.
 */

import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Quote({
    quoteWithBlanks,
    currentChoices,
}: {
    quoteWithBlanks: string[];
    currentChoices: string[];
}) {
    // Track empty spaces to accurately sequence the user's choices.
    let emptySpaceCount: number = 0;

    return (
        <View style={styles.quoteContainer}>
            <Text style={styles.quoteTitle}>Well Known [Quotes]</Text>
            <View style={styles.quoteContent}>
                {quoteWithBlanks.map((part, index) => {
                    if (part === "_") {
                        emptySpaceCount++;
                        return (
                            <Pressable key={index}>
                                <Text style={[styles.currentChoiceText, styles.blankSpace]}>
                                    {currentChoices[emptySpaceCount - 1]}
                                </Text>
                            </Pressable>
                        );
                    }
                    return (
                        <View key={index}>
                            <Text style={styles.quoteText}>{part}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    quoteContainer: {
        flex: 1,
        marginTop: 55,
        borderBottomWidth: 1,
        gap: 15,
    },
    quoteTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    quoteContent: {
        fontSize: 18,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
    },
    quoteText: {
        fontSize: 18,
        lineHeight: 35,
    },
    blankSpace: {
        minWidth: 100,
        padding: 8,
        backgroundColor: "white",
        borderColor: "#bdbdbd",
        borderWidth: 1,
        borderRadius: 8,
    },
    currentChoiceText: {
        textAlign: "center",
    },
});

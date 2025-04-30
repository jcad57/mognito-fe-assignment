// Normally on a larger application I would explore state management libraries
// like Redux or Context API to manage the state of the application. However,
// for this small app I just used local state management.

import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { checkForWin } from "../utils/checkForWin";
import { fetchQuoteData } from "../utils/fetchQuote";

import Words from "./Words";
import Quote from "./Quote";
import HeaderImage from "./HeaderImage";

export default function Challenge() {
    // Manage state for setting up and managing the challenge.
    const [quote, setQuote] = useState<string>("");
    const [quoteWithBlanks, setQuoteWithBlanks] = useState<string[]>([]);
    const [quoteOptions, setQuoteOptions] = useState<string[]>([]);

    // Manage state for user choices.
    const [currentChoices, setCurrentChoices] = useState<string[]>([]);

    useEffect(() => {
        // Fetch quote data from supabase on mount
        const fetchAndSetQuoteData = async () => {
            const quoteData = await fetchQuoteData();

            if (!quoteData) {
                alert("Error fetching quote data. Please try again later.");
                return;
            }

            // Separate the quote at underscores upon fetching.
            if (quoteData.quoteWithBlanks) setQuoteWithBlanks(quoteData.quoteWithBlanks.split(/(_)/));
            if (quoteData.options) setQuoteOptions(quoteData.options);
            if (quoteData.quote) setQuote(quoteData.quote);
        };
        fetchAndSetQuoteData();
    }, []);

    function handleWordPress(option: string) {
        // Remove user's choice from list of available options
        setQuoteOptions((prevOptions) => {
            return prevOptions.filter((prevOption) => prevOption !== option);
        });

        // And add option to a list of user's current choices
        setCurrentChoices((prevChoices) => {
            return [...prevChoices, option];
        });
    }

    function handleSubmitChoices() {
        // Check for win
        const results = checkForWin(currentChoices, quoteWithBlanks, quote);
        if (results) {
            alert("Correct!");
        } else {
            alert("Not quite right, try again!");
        }
    }

    return (
        <View style={styles.challengeContainer}>
            <View style={styles.headerImage}>
                <HeaderImage />
            </View>
            <Quote quoteWithBlanks={quoteWithBlanks} currentChoices={currentChoices} />
            <Words
                quoteOptions={quoteOptions}
                handleWordPress={handleWordPress}
                handleSubmitChoices={handleSubmitChoices}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    challengeContainer: {
        position: "relative",
        flex: 1,
        marginTop: 150,
        justifyContent: "space-between",
        padding: 30,
        backgroundColor: "#DFFFE0",
        borderTopRightRadius: 48,
        borderTopLeftRadius: 48,
    },
    headerImage: {
        position: "absolute",
        top: -95,
        alignSelf: "center",
        margin: "auto",
    },
});

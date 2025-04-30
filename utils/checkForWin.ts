export function checkForWin(currentChoices: string[], quoteWithBlanks: string[], quote: string) {
    let result = "";
    let spacesToCheck = 0;

    // Insert the user's choices into the spaces where the blanks are
    // in the quote.
    quoteWithBlanks.forEach((part, i) => {
        // Skip the underscores
        if (part === "_") {
            return;
        }
        result += part;

        // The user's choices are inserted into the quote at the
        // correct positions.
        if (spacesToCheck < currentChoices.length) {
            result += currentChoices[spacesToCheck];
            spacesToCheck++;
        }
    });

    return result === quote;
}

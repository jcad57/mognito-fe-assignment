import { supabase } from "../data/supabase";

async function fetchColumn<T>(column: string): Promise<T | undefined> {
    const { data, error } = await supabase.from("quote").select(column).single();

    if (error) {
        console.error(`Error fetching ${column}:`, error);
        alert(`Error fetching ${column.replace(/_/g, " ")}. Please try again later.`);
        return;
    }

    return data?.[column as keyof typeof data] as T;
}

async function fetchQuote(): Promise<string | undefined> {
    return fetchColumn<string>("original_text");
}
async function fetchQuoteWithBlanks(): Promise<string | undefined> {
    return fetchColumn<string>("fill_in_the_blank");
}
async function fetchOptions(): Promise<string[] | undefined> {
    return fetchColumn<string[]>("options");
}

export async function fetchQuoteData() {
    const [quote, options, quoteWithBlanks] = await Promise.all([fetchQuote(), fetchOptions(), fetchQuoteWithBlanks()]);

    return { quote, options, quoteWithBlanks };
}

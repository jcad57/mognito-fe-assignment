import { SafeAreaView, StyleSheet } from "react-native";
import Challenge from "../components/Challenge";

export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <Challenge />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white" },
});

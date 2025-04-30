import { Image, StyleSheet, View } from "react-native";

export default function HeaderImage() {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/quote.png")} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        backgroundColor: "white",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#BFEFC0",
    },
    image: {
        width: 100,
        height: 100,
        margin: "auto",
    },
});

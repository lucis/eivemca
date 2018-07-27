import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSize: {
        fontSize: 18
    }
});

class ReviewPurchaseScreen extends React.Component {
    render() {
        return (
            <View style={styles.mainContent}>
                <Text style={styles.textSize}>Review Purchase Screen</Text>
            </View>
        );
    }
}

export default ReviewPurchaseScreen;
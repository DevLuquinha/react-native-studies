import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex:1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
    },
    numberImc: {
        fontSize: 48,
        color: "#FF0043",
        width: "100%",
        fontWeight: "bold"
    },
    infomartion: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold"
    },
    sharedBox: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    sharedText: {
        fontSize: 15,
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30
    },
    shareButton: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
    }
})

export default styles
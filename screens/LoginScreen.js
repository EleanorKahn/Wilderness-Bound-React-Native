import { useEffect, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import * as SecureStore from "expo-secure-store";

const LoginScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        console.log("username:", username);
        console.log("password: ", password);
        console.log("remember: ", remember);
    };

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Username"
                leftIcon={{ type: "font-awesome", name: "user-o" }}
                
            />
        </View>
    )
};

export default LoginScreen;
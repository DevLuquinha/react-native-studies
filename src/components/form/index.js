import React, {useState} from "react"
import { 
    Text,
    TextInput, 
    View, 
    TouchableOpacity, 
    Vibration,
    Pressable,
    Keyboard} from "react-native"
import ResultImc from "./result-imc"
import styles from "./style"

export default function Form(){
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    function verificationImc(){
        if(imc == null){
            setErrorMessage("Campo obrigatório*");
            Vibration.vibrate();
        }
    }

    function imcCalculator(){
        let heightFormat = height.replace(",", ".");
        let weightFormat = weight.replace(",", ".");
        return setImc((weightFormat / (heightFormat*heightFormat)).toFixed(2));
    }

    function validatonImc(){
        if(weight != null && height != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual: ");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
        }
        else{
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e a altura");
        }
    }

    return(
        <View style={styles.formContext}>
            {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric" />

            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input} 
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.365"
            keyboardType="numeric" />

            <TouchableOpacity
            style={styles.buttonCalculator}
            onPress={() => {validatonImc()}}>
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
            </Pressable> 
            :
            <View style={styles.exhibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() => {validatonImc()}}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>}
        </View>
    );
}

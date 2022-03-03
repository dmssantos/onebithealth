import React, { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMassageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButtom, setTextButtom] = useState("Calcular");

  function imcCalculator() {
    setImc((weight / (height * height)).toFixed(2));
    if(imc < 18.5){
      console.log("imc: abaixo do peso");
    } else if(imc >= 18.5 && imc <= 24.9){
      console.log("imc: peso normal");
    }
    return 
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setMassageImc("Seu imc é: ");
      setTextButtom("Calcular novamente");
      setHeight(null);
      setWeight(null);
      return
    }

    setImc(null);
    setTextButtom("Calcular");
    setMassageImc("Preencha o peso e altura")
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>

        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric" />

        <Text style={styles.formLabel}>Peso</Text>

        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.365"
          keyboardType="numeric" />

        <TouchableOpacity
          onPress={() => validationImc()}
          style={styles.buttonCalculator}>

          <Text style={styles.textButtonCalculator}>{textButtom}</Text>

        </TouchableOpacity>
    
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
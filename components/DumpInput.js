import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const DumpInput = (props) => {
  const [enteredDump, setEnteredDump] = useState("");

  const dumpInputHandler = (enteredText) => {
    setEnteredDump(enteredText);
  };

  const addDumpHandler = () => {
    props.onAddDump(enteredDump);
    setEnteredDump("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Brain Dump"
          style={styles.input}
          onChangeText={dumpInputHandler}
          value={enteredDump}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="#ea907a" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              color="#aacdbe"
              onPress={props.onAddDump.bind(this, enteredDump)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "80%",
    borderColor: "#fbc687",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "50%",
  },
});

export default DumpInput;

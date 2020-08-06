import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, ImageBackground } from "react-native";

import DumpItem from "./components/DumpItem";
import DumpInput from "./components/DumpInput";

const image = { uri: "https://drive.google.com/thumbnail?id=1UduWdedVTJR7pbw7G7G7pGozm98aLqbO"};

export default function App() {
  const [brainDumps, setBrainDumps] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addDumpHandler = (dumpTitle) => {
    setBrainDumps((currentDumps) => [
      ...currentDumps,
      { id: Math.random().toString(), value: dumpTitle },
    ]);
    setIsAddMode(false);
  };

  const removeDumpHandler = (dumpId) => {
    setBrainDumps((currentDumps) => {
      return currentDumps.filter((dump) => dump.id !== dumpId);
    });
  };

  const cancelDumpAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffeadb",
        paddingTop: 300,
        paddingLeft: 50,
        paddingRight: 50,
        
      }}
    >
    <ImageBackground source={image} style={styles.image}>
      <Button
        title="ADD NEW DUMP"
        color="#679b9b"
        onPress={() => setIsAddMode(true)}
      />
      <DumpInput
        visible={isAddMode}
        onAddDump={addDumpHandler}
        onCancel={cancelDumpAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={brainDumps}
        renderItem={(itemData) => (
          <DumpItem
            id={itemData.item.id}
            onDelete={removeDumpHandler}
            title={itemData.item.value}
          />
        )}
      />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginTop: 300,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    
  
    
    
    
  },
});

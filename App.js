import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import DumpItem from "./components/DumpItem";
import DumpInput from "./components/DumpInput";

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
        backgroundColor: "pink",
        paddingTop: 300,
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <Button
        title="Add New Dump"
        color="#ea907a"
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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginTop: 300,
  },
});

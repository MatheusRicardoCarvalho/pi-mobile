import { Modal, SafeAreaView, StyleSheet } from "react-native";
import { FilterUsers } from "../../../components/Filter/FilterUsers";
import { useState } from "react";


export function FilterModal(){
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
          <FilterUsers />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
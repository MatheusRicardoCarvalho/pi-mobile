import { Modal } from "react-native";
import { FilterUsers } from "../../../components/Filter/FilterUsers";
import { useState } from "react";


export function FilterModal(){
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <FilterUsers />

        </Modal>
    )
}
import { StyleSheet, Text, View, Modal as NewModal, Pressable, } from 'react-native';
import React from 'react'

const Modal = ({ isVisible, actionDeleteItem }) => {
    return (
        <NewModal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.centeredView}>
                <View style={{ backgroundColor: "white" }}>
                    <Text>¿Queres eliminar este elemento?</Text>
                    <Pressable
                        onPress={() => actionDeleteItem()}
                        style={{ backgroundColor: "red" }}
                    >
                        <Text>eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </NewModal >
    )
}
export default Modal
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margintTop: 22
    }
})
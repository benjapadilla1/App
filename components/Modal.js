import { StyleSheet, Text, View, Modal as NewModal, Pressable, } from 'react-native';
import React from 'react'

const Modal = ({ isVisible, actionDeleteItem, actionCompleteItem, cancelar }) => {
    return (
        <NewModal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.centeredView}>
                <View style={{ backgroundColor: "white", alignItems: "center" }}>
                    <Text>¿Que acción quieres hacer con este elemento?</Text>
                    <Pressable
                        onPress={() => actionDeleteItem()}
                        style={{ backgroundColor: "red", width: "100%", alignItems: "center" }}
                    >
                        <Text>Eliminar</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => actionCompleteItem()}
                        style={{ backgroundColor: "green", width: "100%", alignItems: "center" }}
                    >
                        <Text>Marcar item como completado</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => cancelar()}
                        style={{ width: "100%", alignItems: "center" }}
                    >
                        <Text>Cancelar</Text>
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
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 50,
    }
})
import { StyleSheet, Button, Text, TextInput, View, FlatList, Pressable, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import Modal from './components/Modal';
export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setitemSelected] = useState({})

  const onHandleChange = (t) => setTextItem(t)
  const addItem = () => {
    setList(currenState => [
      ...currenState,
      { id: Math.random().toString(), value: textItem }
    ])
    setTextItem("")
  }

  const selectedItem = (id) => {
    setitemSelected(list.filter((item) => item.id === id)[0])
    setModalVisible(true)
  }
  const deleteItem = () => {
    setList((currenState) => currenState.filter(item => item.id !== itemSelected.id))
    setitemSelected({})
    setModalVisible(false)
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <Text>Lista de shopping</Text>
      <View style={styles.addItem}>
        <TextInput
          value={textItem}
          style={styles.input}
          placeholder="Agregar item a la lista"
          onChangeText={onHandleChange}
        />
        <TouchableOpacity onPress={addItem}>
          <Text style={styles.addButton}> Add </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} style={styles.deleteItem} />
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#536976",
    padding: 30,
    margin: "0px auto",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  addItem: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  items: {
    marginTop: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  deleteItem: {
    marginTop: 30,
  },
  addButton: {
    backgroundColor: "#FAA618",
    borderRadius: "15px",
  },
})
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header';
import ListItems from './Components/ListItems';
import AddItems from './Components/AddItems';



const App = () => {


  const [items, setItems] = useState([
    { id: uuidv4(), text: 'Steak' }
  ]);


  const addItem = (text) => {
    if (!text) {
      alert('Please Input Something')
    } else {
      setItems(prevItems => {
        return [{ id: uuidv4(), text }, ...prevItems];
      })
    }
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  return (

    < View style={styles.container} >
      <Header />
      <AddItems addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItems item={item} deleteItem={deleteItem} />} />
    </View >
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

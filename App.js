import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';

const App = () => {
	const [ items, setItems ] = useState([
		{ id: Math.floor(Math.random() * 100000), text: 'Milk' },
		{ id: Math.floor(Math.random() * 100000), text: 'Eggs' },
		{ id: Math.floor(Math.random() * 100000), text: 'Bread' },
		{ id: Math.floor(Math.random() * 100000), text: 'Juice' }
	]);

	const deleteItem = (id) => {
		setItems((prevItems) => {
			return prevItems.filter((item) => item.id != id);
		});
	};

	const addItem = (text) => {
		if (!text) {
			Alert.alert('Error', 'Please enter an item name', { text: 'Ok' });
		} else {
			setItems((prevItems) => {
				return [ { id: Math.floor(Math.random() * 100000), text }, ...prevItems ];
			});
		}
	};

	return (
		<View style={styles.container}>
			<Header />
			<AddItem addItem={addItem} />
			<FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 60
	}
});

export default App;

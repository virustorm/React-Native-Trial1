import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './Components/Header';
import ListItem from './Components/ListItem';

const App = () => {
	const [ items, setItems ] = useState([
		{ id: Math.random(), text: 'Milk' },
		{ id: Math.random(), text: 'Eggs' },
		{ id: Math.random(), text: 'Bread' },
		{ id: Math.random(), text: 'Juice' }
	]);

	return (
		<View style={styles.container}>
			<Header />
			<FlatList data={items} renderItem={({ item }) => <ListItem item={item} />} />
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

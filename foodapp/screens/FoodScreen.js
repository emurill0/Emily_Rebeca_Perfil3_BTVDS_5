// FoodScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const foods = [
    { id: '1', name: 'Pizza', description: 'Delicious cheese pizza', photo: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Burger', description: 'Juicy beef burger', photo: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Pasta', description: 'Classic Italian pasta', photo: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Sushi', description: 'Fresh sushi rolls', photo: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Salad', description: 'Healthy green salad', photo: 'https://via.placeholder.com/150' },
    { id: '6', name: 'Ice Cream', description: 'Sweet vanilla ice cream', photo: 'https://via.placeholder.com/150' }
];

const FoodScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <FlatList
            data={foods}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
});

export default FoodScreen;

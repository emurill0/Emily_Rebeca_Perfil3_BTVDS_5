import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const students = [
  { id: '1', name: 'Emily Murillo', carnet: '20220021', photo: '../assets/emi.jpeg' },
  { id: '2', name: 'María López', carnet: '20220151', photo: '../assets/rebekita.jpeg' }
];

const StudentScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.photo }} style={styles.photo} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.carnet}>{item.carnet}</Text>
      <Card photo={item.photo} name={item.name} description={item.carnet} />
    </View>
  );

  return (
    <FlatList
      data={students}
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
  carnet: {
    fontSize: 16,
    color: '#666',
  },
});

export default StudentScreen;

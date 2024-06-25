import axios from 'axios';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const AddProduct = ({ navigation }) => {
  const [p_name, setP_name] = useState('');
  const [p_desc, setP_desc] = useState('');
  const [p_qunty, setP_qunty] = useState('');
  const [p_price, setP_price] = useState('');

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:4001/products', {
        p_name,
        p_desc,
        p_qunty,
        p_price,
      });

      console.log(response.data);
      navigation.navigate('Products');
    } catch (error) {
      console.error('Failed to add product', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={p_name}
        onChangeText={setP_name}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        value={p_desc}
        onChangeText={setP_desc}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Quantity"
        value={p_qunty}
        onChangeText={setP_qunty}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        value={p_price}
        onChangeText={setP_price}
        keyboardType="numeric"
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default AddProduct;
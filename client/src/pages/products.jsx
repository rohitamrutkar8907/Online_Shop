import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const Products = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4001/products');
      setProducts(response.data.data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/products/${id}`);
      // Update the state to remove the deleted product
      setProducts((prevProducts) => prevProducts.filter((product) => product.p_id !== id));
    } catch (error) {
      console.log('Failed to delete product', error);
    }
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.p_name}</Text>
      <Text style={styles.productDesc}>{item.p_desc}</Text>
      <Text style={styles.productQuantity}>{item.p_qunty}</Text>
      <Text style={styles.productPrice}>{item.p_price}</Text>
      <Button title="Delete" onPress={() => deleteProduct(item.p_id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.p_id.toString()}
      />
      <Button title="Logout" onPress={() => navigation.replace('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productItem: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDesc: {
    fontSize: 14,
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 14,
  },
  productPrice: {
    fontSize: 14,
  },
});

export default Products;

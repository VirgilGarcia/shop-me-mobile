import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProductsFromStorage();
  }, []);

  const loadProductsFromStorage = async () => {
    try {
      const savedProducts = await AsyncStorage.getItem('products');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      }
    } catch (error) {
      console.error('Error loading products from storage:', error);
    }
  };

  const saveProductsToStorage = async (updatedProducts) => {
    try {
      await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));
    } catch (error) {
      console.error('Error saving products to storage:', error);
    }
  };

  const addProduct = (product) => {
    const newProduct = { id: Date.now(), name: product.name, quantity: product.quantity };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProductsToStorage(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    saveProductsToStorage(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shop<Text style={styles.strokedText}>Me!</Text></Text>
      <AddProductForm onAddProduct={addProduct} />
      <ProductList products={products} onDeleteProduct={deleteProduct} />
      <Text style={styles.footer}>© 2023 Virgil Garcia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7a342',
    padding: 15,
    fontFamily: 'Poppins',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
  },
  strokedText: {
    fontWeight: 'bold'
  },
  footer: {
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold'
  },
});

export default App;

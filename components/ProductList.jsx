import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Product from './Product';

const ProductList = ({ products, onDeleteProduct }) => {
  return (
    <View style={styles.productList}>
      {products.length === 0 ? (
        <Text>Il n'y a aucun produits dans votre liste.. 😢</Text>
      ) : (
        <View>
          <Text>Il y a {products.length} produit(s) dans votre liste !</Text>
          {products.map((product) => (
            <Product key={product.id} product={product} onDeleteProduct={onDeleteProduct} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productList: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    marginTop: 50,
    shadowColor: 'rgba(73, 73, 73, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});

export default ProductList;

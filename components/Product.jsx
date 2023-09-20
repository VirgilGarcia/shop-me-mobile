import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Product = ({ product, onDeleteProduct }) => {
  const handleDelete = () => {
    onDeleteProduct(product.id);
  };

  return (
    <View style={styles.product}>
      <Text>{product.name}</Text>
      {product.quantity > 0 && <Text>(x{product.quantity})</Text>}
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.buttonText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(235, 235, 235)',
    borderRadius: 25,
    paddingLeft: 15,
    marginVertical: 10,
  },
  deleteButton: {
    backgroundColor: '#D21818', // Changez la couleur de fond en rouge
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white', // Changez la couleur du texte en blanc pour une meilleure lisibilité
  },
});

export default Product;

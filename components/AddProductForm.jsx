import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleInputChange = (text) => {
    setNewProduct(text);
  };

  const handleQuantityChange = (text) => {
    setQuantity(text);
  };

  const handleSubmit = () => {
    if (newProduct.trim() !== '') {
      onAddProduct({ name: newProduct, quantity: parseInt(quantity) });
      setNewProduct('');
      setQuantity('');
    }
  };

  return (
    <View style={styles.addProduct}>
      <Text style={styles.heading}>Ajouter un produit</Text>
      <View style={styles.formulaire}>
        <TextInput
          style={styles.input}
          placeholder="Nom du produit"
          value={newProduct}
          onChangeText={handleInputChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantité"
          value={quantity}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addProduct: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    marginTop: 50,
    shadowColor: 'rgba(73, 73, 73, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 10,
    paddingBottom: 10,
  },
  formulaire: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '48%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'rgb(233, 233, 233)',
  },
  addButton: {
    backgroundColor: 'green', // Changez la couleur de fond en vert
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white', // Changez la couleur du texte en blanc pour une meilleure lisibilité
  },
});

export default AddProductForm;

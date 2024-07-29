import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { name: 'DIGISCHOOL', icon: 'https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-qlr0q7d82s1a0jmzxozozufvp8cxd3sbadz8bxwby8.jpg', description: 'Comprehensive solution for administration, documentation, tracking, reporting, and automation for primary and secondary schools.' },
  { name: 'SPEEDUCATION', icon: 'https://speedlinkng.com/wp-content/uploads/elementor/thumbs/lms-2-qlr0q7d81go7a3ppqeq4sdjtvq6pcbuksft0eos2bk.jpg', description: 'All in one learning management system for colleges and higher institutions' },
  { name: 'SPEED ERP SOLUTION', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/erp-600x600.jpg', description: 'managing routine business operations like accounting, purchasing, project management, risk management, and compliance' }
];

const { width } = Dimensions.get('window');

const Products = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.products}>
        <Text style={styles.h4}>Our Products</Text>
        <Text style={styles.h2}>Comprehensive IT SOLUTIONS that sets your business apart</Text>
        <Text style={styles.p}>Bringing Speed to your business</Text>
        <View style={styles.productsGrid}>
          {products.map((product, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.productCard}
              onPress={() => setExpandedIndex((prevIndex) => prevIndex === index ? null : index)}
            >
              <Image source={{ uri: product.icon }} style={styles.productIcon} />
              <View style={[styles.productNameContainer, expandedIndex === index && styles.expanded]}>
                <Text style={styles.productName}>{product.name}</Text>
                {expandedIndex === index && (
                  <View style={styles.productDetails}>
                    <Text style={styles.productDescription}>{product.description}</Text>
                    <TouchableOpacity style={styles.productCtaButton}>
                      <Ionicons name="arrow-forward" size={24} color="white" />
                      <Text style={styles.buttonText}>Learn More</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.viewProductsButton}>
          <Text style={styles.viewProductsButtonText}>View all our products</Text>
          <Ionicons name="paper-plane" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  products: {
    backgroundColor: '#0808d5',
    padding: 20,
    alignItems: 'center',
  },
  h4: {
    fontSize: 18,
    color: 'white',
    marginTop: 40,
    marginBottom: 10,
  },
  h2: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    width: width * 0.8,
  },
  p: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
    width: width * 0.8,
  },
  productsGrid: {
    width: width,
    alignItems: 'center',
  },
  productCard: {
    backgroundColor: 'white',
    width: width * 0.9,
    height: 280,
    marginBottom: 100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  productIcon: {
    width: '100%',
    height: 250,
  },
  productNameContainer: {
    position: 'absolute',
    bottom: -80,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    height: 100,
  },
  expanded: {
    height: 250,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productDetails: {
    marginTop: 10,
    alignItems: 'center',
  },
  productDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  productCtaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a00c0c',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
  viewProductsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a00c0c',
    padding: 15,
    borderRadius: 5,
    marginTop: 40,
  },
  viewProductsButtonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
});

export default Products;
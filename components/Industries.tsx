import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const industries = [
  { name: 'Retail, Ecommerce', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/online-shop.png' },
  { name: 'Education & e-learning', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/elearning.png' },
  { name: 'Healthcare & Fitness', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/fitness.png' },
  { name: 'Social Networking', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/global-network.png' },
  { name: 'Logistics & Distribution', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/logistics.png' },
  { name: 'Government institutions', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/enterprise.png' },
  { name: 'Real Estate', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/real-estate.png' },
  { name: 'Travel & Hospitality', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/room-service.png' },
  { name: 'Food & Restaurant', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/restaurant-1.png' },
  { name: 'On-Demand Solutions', icon: 'https://speedlinkng.com/wp-content/uploads/2022/08/solution.png' }
];

interface Industry {
    name: string;
    icon: string;
  }

const Industries = () => {
  const renderIndustryCard = ({ item }: { item: Industry }) => (
    <View style={styles.industryCard}>
      <Image source={{ uri: item.icon }} style={styles.industryIcon} />
      <Text style={styles.industryName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.industries}>
      <Text style={styles.title}>Industries We Serve</Text>
      <Text style={styles.subtitle}>Perfect Blend of Innovation & Ideation Of Solutions For Every Industry.</Text>
      <FlatList
        data={industries}
        renderItem={renderIndustryCard}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2; // 60 is the total horizontal padding and gap

const styles = StyleSheet.create({
  industries: {
    padding: 20,
    marginTop: 120,
  },
  title: {
    color: 'rgb(23, 23, 68)',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#4A4A4A',
    marginBottom: 20,
    fontSize: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  industryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: cardWidth,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  industryIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  industryName: {
    fontSize: 16,
    color: '#1a1a1aba',
    textAlign: 'center',
  },
});

export default Industries;
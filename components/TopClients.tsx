import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const TopClients = () => {
  const clients = [
    { src: "https://speedlinkng.com/wp-content/uploads/2022/09/primerose-highschool.png", alt: "CGRP, University of Port Harcourt" },
    { src: "https://speedlinkng.com/wp-content/uploads/2022/09/redeemers-high-school.png", alt: "Laser Engineering and Resources Consultants Limited" },
    { src: "https://speedlinkng.com/wp-content/uploads/2022/09/SPH-LOGO.png", alt: "Foundation for Agric and Social Transformation" },
    { src: "https://speedlinkng.com/wp-content/uploads/2022/09/cefor-logo.png", alt: "Primerose High School" },
    { src: "https://speedlinkng.com/wp-content/uploads/2022/09/cgrp-logo.png", alt: "Primerose High School" },
    { src: "https://speedlinkng.com/wp-content/uploads/2022/09/laser-engineering-2.png", alt: "Primerose High School" },
    { src: "https://speedlinkng.com/wp-content/uploads/2022/09/FAST-LOGO.png", alt: "Primerose High School" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Top Clients</Text>
      <View style={styles.dotContainer}>
        <Ionicons name="ellipse" size={10} color="#0c5bd2" />
        <Ionicons name="ellipse" size={10} color="#0c5bd2" />
        <Ionicons name="ellipse" size={10} color="#0c5bd2" />
        <Ionicons name="remove" size={24} color="#0c5bd2" style={styles.dash} />
      </View>
      <Text style={styles.subtitle}>Meet our happy clients</Text>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
        autoplay
        autoplayTimeout={1}
        loop
      >
        {clients.map((client, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: client.src }} style={styles.clientImage} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(8, 8, 53)',
    marginBottom: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dash: {
    marginLeft: 5,
    marginBottom: -8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  wrapper: {
    height: 100,
    width: width - 40,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clientImage: {
    width: width / 3,
    height: 80,
    resizeMode: 'contain',
  },
});

export default TopClients;
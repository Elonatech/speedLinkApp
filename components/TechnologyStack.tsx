import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const TechnologyStack = () => {
  const techIcons = [
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/c-sharp-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "C# Icon" },
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/android-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "Android Icon" },
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/postgre-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "PostgreSQL Icon" },
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Node-Js-Logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "Node.js Icon" },
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/Gulp-logo-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "Gulp Icon" },
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/React-icon-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "React Icon" },
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/css-3-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "CSS Icon" },
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/python-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "Python Icon" },
    { src: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/php-qlr0q7d58lgekoy4kwqfxe7lhuhyfagf9b949gog90.png", alt: "PHP Icon" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Technology stack</Text>
      <View style={styles.dotContainer}>
        <Ionicons name="ellipse" size={10} color="#0c5bd2" />
        <Ionicons name="ellipse" size={10} color="#0c5bd2" />
        <Ionicons name="ellipse" size={10} color="#0c5bd2" />
        <Ionicons name="remove" size={24} color="#0c5bd2" style={styles.dash} />
      </View>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
        autoplay
        autoplayTimeout={1}
        loop
      >
        {techIcons.map((icon, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: icon.src }} style={styles.techIcon} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    padding: 40,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dash: {
    marginLeft: 5,
    marginBottom: -8,
  },
  wrapper: {
    height: 100,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  techIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default TechnologyStack;
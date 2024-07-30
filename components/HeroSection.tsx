import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Video } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import { ResizeMode } from 'expo-av';

const HeroSection = () => {
  return (
    <View style={styles.heroContainer}>
      <ImageBackground
        source={{ uri: 'https://speedlinkng.com/wp-content/uploads/2022/09/tech-background-1.jpg' }}
        style={styles.imageBackground}
      >
        <Video
          source={{ uri: 'https://res.cloudinary.com/dny7tqd0d/video/upload/v1720457608/Circuit-27725_xvfck7.mp4' }}
          style={styles.backgroundVideo}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          isMuted
        />
        <View style={styles.colorOverlay} />
        <View style={styles.content}>
          <Text style={styles.title}>We provide comprehensive IT solutions that makes businesses standout</Text>
          <Text style={styles.subtitle}>We're a team of IT experts who help you transform and scale your organization</Text>
          <TouchableOpacity style={styles.ctaButton}>
            <FontAwesome name="arrow-right" size={24} color="white" style={styles.arrowIcon} />
            <Text style={styles.buttonText}>IT SOLUTIONS AND SERVICES</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  heroContainer: {
    position: 'relative',
    width: width,
    height: height * 0.8,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  colorOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 23, 109, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -width * 0.4 }, { translateY: -height * 0.3 }],
    alignItems: 'center',
    width: width * 0.8,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  ctaButton: {
    backgroundColor: '#0693e3',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  arrowIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HeroSection;

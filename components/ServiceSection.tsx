import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ServiceSection = () => {
  return (
    <ScrollView style={styles.serviceSection}>
      <View style={styles.serviceContent}>
        <View style={styles.textContent}>
          <Text style={styles.heading2}>SPEEDLINK HI-TECH SOLUTIONS LIMITED</Text>
          <Text style={styles.heading3}>A complete Solution IT provider</Text>
          <Text style={styles.paragraph}>Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems provider, known for providing clients with Enterprise world-class solutions addressing their local business needs. We deliver positive, rapid and the best return on investment "ROI" solutions for our customers.</Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.buttonText}>who we are</Text>
            <Ionicons name="paper-plane-outline" size={24} color="white" style={styles.telIcon} />
          </TouchableOpacity>
        </View>
        <Image 
          source={{uri: "https://speedlinkng.com/wp-content/uploads/2022/08/Speed-web-01-1024x682.jpg"}}
          style={styles.imageContent}
        />
      </View>
      <View style={styles.serviceBox}>
        <Image 
          source={{uri: "https://speedlinkng.com/wp-content/uploads/2024/02/pearson-vue-1.gif"}}
          style={styles.boxImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.boxHeading}>Pursue Your Certification Dreams with Speedlink!</Text>
          <Text style={styles.boxParagraph}>We're excited to announce that we're now an official Pearson VUE testing center! Schedule your exam today and unlock your full potential.</Text>
        </View>
        <TouchableOpacity style={[styles.ctaButton, styles.boxButton]}>
          <Text style={styles.buttonText}>Get Certified</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  serviceSection: {
    flex: 1,
    padding: 20,
    marginTop: 70,
    marginBottom: 100,
  },
  serviceContent: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  textContent: {
    marginBottom: 20,
  },
  heading2: {
    fontWeight: '700',
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
    letterSpacing: 2,
  },
  heading3: {
    fontWeight: 'bold',
    color: 'rgb(6, 6, 48)',
    fontSize: 32,
    lineHeight: 38,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 20,
  },
  imageContent: {
    width: '100%',
    height: 300,
    borderRadius: 40,
  },
  ctaButton: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  telIcon: {
    fontSize: 18,
  },
  serviceBox: {
    backgroundColor: 'rgba(3, 17, 74, 0.851)',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  boxImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  boxHeading: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  boxParagraph: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.925)',
    marginBottom: 20,
    textAlign: 'center',
  },
  boxButton: {
    backgroundColor: 'red',
  },
});

export default ServiceSection;
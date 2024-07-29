import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CaseStudies = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Case Studies</Text>
      <Text style={styles.description}>
        We're proud to have helped build innovative solutions solving complex problems across varying industries. Check out what we've been up to.
      </Text>
      <TouchableOpacity style={styles.moreWorkButton}>
        <Text style={styles.buttonText}>See more of our work</Text>
        <Ionicons name="paper-plane" size={18} color="white" />
      </TouchableOpacity>
      <View style={styles.caseStudyContainer}>
        <View style={styles.caseStudy}>
          <View style={[styles.caseStudyText, styles.redBackground]}>
            <Text style={styles.caseStudyTitle}>Integration of a secured and reliable examination platform</Text>
            <Text style={styles.caseStudyDescription}>
              We built a hitch-free proctoring software for the School of Public Health, University of Port Harcourt that offers students and test takers the freedom to take a proctored exam at any time in any given location...
            </Text>
            <TouchableOpacity style={styles.caseStudyButton}>
              <Text style={styles.caseStudyButtonText}>View Case Study</Text>
              <Ionicons name="arrow-forward" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/pexels-christina-morillo-1181244-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.jpg" }}
            style={styles.image}
          />
        </View>
        <View style={[styles.caseStudy, styles.caseStudyTwo]}>
          <Image
            source={{ uri: "https://speedlinkng.com/wp-content/uploads/elementor/thumbs/training-comressesd-scaled-qlr0q7d26yjle1wxvxacrmfqfvrovgbuxrrizsl79c.webp" }}
            style={styles.image}
          />
          <View style={[styles.caseStudyText, styles.blueBackground]}>
            <Text style={styles.caseStudyTitle}>Hybrid Learning Facility</Text>
            <Text style={styles.caseStudyDescription}>
              We developed a platform that can accommodate students who are unable to attend classes in person while also allowing students to attend classes in person or remotely with real-time audio and visual communication...
            </Text>
            <TouchableOpacity style={styles.caseStudyButton}>
              <Text style={styles.caseStudyButtonText}>View Case Study</Text>
              <Ionicons name="arrow-forward" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  moreWorkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C82333',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    marginRight: 5,
    fontSize: 16,
  },
  caseStudyContainer: {
    marginTop: 20,
  },
  caseStudy: {
    marginBottom: 40,
  },
  caseStudyText: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  redBackground: {
    backgroundColor: '#F8D7DA',
  },
  blueBackground: {
    backgroundColor: '#D1ECF1',
  },
  caseStudyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  caseStudyDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  caseStudyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  caseStudyButtonText: {
    color: 'white',
    marginRight: 5,
    fontSize: 16,
  },
  caseStudyTwo: {
    marginTop: 40,
  },
});

export default CaseStudies;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ServiceKey = 'IT Services' | 'Network Services' | 'Technical Security' | 'Digital Marketing' | 'Cloud Services' | 'Collaboration System' | 'Certified Training';

type ServiceDetail = {
  title: string;
  description: string[];
  image: string;
};

const services: ServiceKey[] = [
  'IT Services',
  'Network Services',
  'Technical Security',
  'Digital Marketing',
  'Cloud Services',
  'Collaboration System',
  'Certified Training'
];

const serviceDetails: Record<ServiceKey, ServiceDetail> = {
  'IT Services': {
    title: 'IT SERVICES',
    description: [
      'Software Application Development',
      'Software Installation',
      'Web design and development'
    ],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  'Network Services': {
    title: 'NETWORKING SERVICES',
    description: [
      'Routing and Switching',
      'VOIP – Voice over Internet Protocol',
      'Fibre to the home',
      'ISP – Internet Service Provider'
    ],
    image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  'Technical Security': {
    title: 'TECHNICAL SECURITY',
    description: [
      'Video surveillance',
      'Intrusion prevention systems',
      'GPS tracking system',
      'Access control and time-attendance solutions'
    ],
    image: 'https://media.istockphoto.com/id/1477430518/photo/medical-cybersecurity-tablet-and-hands-of-doctor-surgeon-or-nurse-with-virtual-hologram-for.jpg?s=2048x2048&w=is&k=20&c=reSUAXLFGLrKYPEcNwCNshs3DxHTSGou559Wwuhn-kA='
  },
  'Digital Marketing': {
    title: 'DIGITAL MARKETING',
    description: [
      'Social Media Marketing',
      'Digital Advertising',
      'Media planning and buying',
      'Search Engine Optimization',
      'Email marketing'
    ],
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D'
  },
  'Cloud Services': {
    title: 'CLOUD SERVICES',
    description: [
      'Storage Infrastructure',
      'Cloud Hosting',
      'Cloud Based ERP/CRM'
    ],
    image: 'https://media.istockphoto.com/id/1695598546/photo/businessman-using-tablet-to-transfer-data-on-cloud-computing-seamless-data-transfer-and.webp?b=1&s=170667a&w=0&k=20&c=cV19qWSSMWVTunFQHjGdxOgmDMFqTZ972atFPYd9mtc='
  },
  'Collaboration System': {
    title: 'COMMUNICATION & COLLABORATION SYSTEM',
    description: [
      'Audio & Video conferencing',
      'Live Streaming',
      'Radio Communications Systems'
    ],
    image: 'https://media.istockphoto.com/id/1478421401/photo/diverse-male-and-female-warehouse-inventory-managers-talking-using-laptop-computer-and.webp?b=1&s=170667a&w=0&k=20&c=IeHQmHLyw3imdCqaKHBUkOs6T2CVs3mwRzoWIFI2N9M='
  },
  'Certified Training': {
    title: 'CERTIFIED TRAINING',
    description: [
      'Mikrotik Certification',
      'CCTV Installation',
      'Web app development',
      'Web design and Development'
    ],
    image: 'https://media.istockphoto.com/id/619257608/photo/paraplegic-person-receiving-certificate-after-seminar.jpg?s=2048x2048&w=is&k=20&c=24SktNjDUs6EBwCKXl7wpYQ_QPf_AsOe3--0_p8Bjq8='
  }
};

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceKey>('Technical Security');

  return (
    <ScrollView style={styles.services}>
      <Text style={styles.heading2}>Services we offer</Text>
      <Text style={styles.para}>We offer a wide range of specialized services designed to meet your goals</Text>
      <View style={styles.servicesContainer}>
        <ScrollView style={styles.servicesList}>
          {services.map((service) => (
            <TouchableOpacity
              key={service}
              style={[
                styles.serviceItem,
                activeService === service && styles.activeServiceItem
              ]}
              onPress={() => setActiveService(service)}
            >
              <Text style={[
                styles.serviceItemText,
                activeService === service && styles.activeServiceItemText
              ]}>{service}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.serviceDetails}>
          <View style={styles.detailsHeader}>
            <TouchableOpacity style={styles.whoWeDoButton}>
              <Text style={styles.whoWeDoButtonText}>Who we do</Text>
              <Ionicons name="paper-plane-outline" size={20} color="rgba(255,255,255,0.8)" />
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={{ uri: serviceDetails[activeService].image }}
            style={styles.detailsContent}
            imageStyle={styles.backgroundImage}
          >
            <View style={styles.overlay}>
              <Text style={styles.detailsTitle}>{serviceDetails[activeService].title}</Text>
              {serviceDetails[activeService].description.map((item, index) => (
                <View key={index} style={styles.descriptionItem}>
                  <Ionicons name="arrow-forward" size={16} color="white" style={styles.arrow} />
                  <Text style={styles.descriptionText}>{item}</Text>
                </View>
              ))}
              <TouchableOpacity style={styles.exploreMoreButton}>
                <Text style={styles.exploreMoreButtonText}>Explore More</Text>
                <Ionicons name="arrow-forward" size={16} color="white" style={styles.explorArr} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  services: {
    flex: 1,
    padding: 20,
  },
  heading2: {
    color: 'rgb(2, 2, 86)',
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  para: {
    color: '#4a4a4a',
    fontSize: 20,
    marginBottom: 20,
    lineHeight: 28,
  },
  servicesContainer: {
    flexDirection: 'column',
  },
  servicesList: {
    maxHeight: 300,
    marginBottom: 20,
  },
  serviceItem: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(187, 11, 11, 0.789)',
    marginBottom: 10,
    borderRadius: 20,
  },
  serviceItemText: {
    fontSize: 24,
  },
  activeServiceItem: {
    backgroundColor: 'rgb(169, 22, 22)',
  },
  activeServiceItemText: {
    color: 'white',
  },
  serviceDetails: {
    marginTop: 20,
  },
  detailsHeader: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  whoWeDoButton: {
    backgroundColor: 'rgb(140, 14, 14)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  whoWeDoButtonText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 20,
    marginRight: 5,
  },
  detailsContent: {
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: 20,
  },
  backgroundImage: {
    opacity: 0.7,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  detailsTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  descriptionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  arrow: {
    marginRight: 10,
  },
  exploreMoreButton: {
    backgroundColor: '#30c6de',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  exploreMoreButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 5,
  },
  explorArr: {
    marginLeft: 5,
  },
});

export default Services;
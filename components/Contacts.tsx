import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const Contact = () => {
  const [expandedItems, setExpandedItems] = useState({
    digitalServices: false,
    cloudServices: false,
    networkingServices: false,
    certifiedTraining: false,
  });

  const toggleExpand = (item: keyof typeof expandedItems) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const renderServiceItem = (title: string, key: keyof typeof expandedItems) => (
    <TouchableOpacity onPress={() => toggleExpand(key)} style={styles.serviceItem}>
      <Ionicons 
        name={expandedItems[key] ? "caret-up" : "caret-forward"} 
        size={24} 
        color="white" 
      />
      <Text style={styles.serviceText}>{title}</Text>
    </TouchableOpacity>
  );

  const renderQuickLink = (title: string) => (
    <View style={styles.quickLinkItem}>
      <Ionicons name="caret-forward" size={24} color="white" />
      <Text style={styles.quickLinkText}>{title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Image 
          source={{uri: "https://speedlinkng.com/wp-content/uploads/2022/09/speedlink-logo-footer.png"}}
          style={styles.logo}
        />
        <Text style={styles.text}>
          Providing ICT solutions that make businesses stand out. We can provide you with the highest levels of
          technical expertise, strategic thinking, and hands-on skills.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Services</Text>
        {renderServiceItem("Digital Services", "digitalServices")}
        {renderServiceItem("Cloud Services", "cloudServices")}
        {renderServiceItem("Networking Services", "networkingServices")}
        {renderServiceItem("Certified Training", "certifiedTraining")}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Links</Text>
        {renderQuickLink("Our Products")}
        {renderQuickLink("Case Studies")}
        {renderQuickLink("Who we are")}
        {renderQuickLink("Why choose us")}
        {renderQuickLink("What we do")}
        {renderQuickLink("Meet our Team")}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Locate us</Text>
        <Text style={styles.address}>
          Road 6 Extension, Okey Wali Estate, Rumualoglu, Port Harcourt, Rivers State
        </Text>
        <View style={styles.contactInfo}>
          <FontAwesome name="phone" size={20} color="white" />
          <Text style={styles.contactText}>+2349167716220</Text>
        </View>
        <View style={styles.contactInfo}>
          <FontAwesome name="envelope" size={20} color="white" />
          <Text style={styles.contactText}>admin@speedlinkng.com</Text>
        </View>
        <View style={styles.socialIcons}>
          <FontAwesome name="facebook" size={24} color="white" style={styles.socialIcon} />
          <FontAwesome name="twitter" size={24} color="white" style={styles.socialIcon} />
          <FontAwesome name="youtube" size={24} color="white" style={styles.socialIcon} />
          <FontAwesome name="instagram" size={24} color="white" style={styles.socialIcon} />
          <FontAwesome name="linkedin" size={24} color="white" style={styles.socialIcon} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a0e27',
    padding: 20,
  },
  section: {
    backgroundColor: '#1a2238',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  serviceText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  quickLinkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quickLinkText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  address: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4b4f58',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  contactText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  socialIcon: {
    backgroundColor: '#4b4f58',
    borderRadius: 5,
    padding: 10,
  },
});

export default Contact;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderDropdownItems = (items: string[]) => {
    return items.map((item, index) => (
      <TouchableOpacity key={index} style={styles.dropdownItem}>
        <FontAwesome name="square" size={12} color="rgba(132, 64, 64, 0.785)" style={styles.squareIcon} />
        <Text style={styles.dropdownItemText}>{item}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.navbar}>
      <Image
        source={{ uri: 'https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={toggleMobileMenu} style={styles.menuIcon}>
        <Ionicons name={isMobileMenuOpen ? "close" : "menu"} size={30} color="#0A2863" />
      </TouchableOpacity>
      {isMobileMenuOpen && (
        <ScrollView style={styles.navLinks}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>About Us</Text>
            <MaterialIcons name="arrow-drop-down" size={25} color="#0A2863" />
          </TouchableOpacity>
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Who we are</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>What we do</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Why Speedlink</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Meet our Team</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>Our partners & top Clients</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Services</Text>
            <MaterialIcons name="arrow-drop-down" size={25} color="#0A2863" />
          </TouchableOpacity>
          <View style={styles.dropdown}>
            <View style={styles.gridContainer}>
              <View style={styles.gridItem}>
                <Text style={styles.gridHeader}>IT Services</Text>
                {renderDropdownItems([
                  'Software Application Development',
                  'Web design/development',
                  'Software installations'
                ])}
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridHeader}>Cloud Services</Text>
                {renderDropdownItems([
                  'Storage infrastructure',
                  'Cloud hosting',
                  'Cloud based ERP/CRM'
                ])}
              </View>
            <View style={styles.gridItem}>
                <Text style={styles.gridHeader}>Networking Services</Text>
                {renderDropdownItems([
                    'Fiber-to-the-home',
                    'Routing and Switching',
                    'Voice Over Internet Protocol - VOIP',
                    'Internet Service Provider - ISP'
                ])}
                </View>
            <View style={styles.gridItem}>
                <Text style={styles.gridHeader}>Digital Marketing</Text>
                {renderDropdownItems([
                    'Social Media Marketing',
                    'Digital Advertising',
                    'Media Planning and Buying',
                    'Search Engine Optimization'
                ])}
                </View>
            <View style={styles.gridItem}>
                <Text style={styles.gridHeader}>Technical Security</Text>
                {renderDropdownItems([
                    'Video Surveillance (CCTV)',
                    'Intrusion Prevention Systems',
                    'Fire detection and fire extinguisher systems',
                    'Alarm systems'
                ])}
                </View>
            <View style={styles.gridItem}>
                <Text style={styles.gridHeader}>Certified Training</Text>
                {renderDropdownItems([
                    'Mikrotik Certification',
                    'CCTV Installation',
                    'Web app development',
                    'Web design and Development'
                ])}
                </View>
            </View>
          </View>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Case Study</Text>
            <MaterialIcons name="arrow-drop-down" size={25} color="#0A2863" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Product</Text>
            <MaterialIcons name="arrow-drop-down" size={25} color="#0A2863" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navLink}>Resources</Text>
            <MaterialIcons name="arrow-drop-down" size={25} color="#0A2863" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={24} color="#0A2863" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.getInTouchButton}>
            <Text style={styles.getInTouchButtonText}>Get in Touch</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 40,
  },
  menuIcon: {
    padding: 5,
  },
  navLinks: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    zIndex: 1000,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  navLink: {
    color: '#0A2863',
    fontSize: 18,
    marginRight: 5,
  },
  dropdown: {
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemText: {
    color: '#021052',
    fontSize: 16,
  },
  searchIcon: {
    marginVertical: 10,
  },
  getInTouchButton: {
    backgroundColor: '#DA2124',
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  getInTouchButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  gridContainer: {
    marginTop: 10,
  },
  gridItem: {
    marginBottom: 15,
  },
  gridHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0A2863',
  },
  squareIcon: {
    marginRight: 10,
  },
});

export default Navbar;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    console.log('Toggling menu:', !isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const renderDropdownContent = (dropdown: string) => {
    if (openDropdown !== dropdown) return null;

    switch (dropdown) {
      case 'About Us':
        return (
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownItem}>Who we are</Text>
            <Text style={styles.dropdownItem}>What we do</Text>
            <Text style={styles.dropdownItem}>Why Speedlink</Text>
            <Text style={styles.dropdownItem}>Meet our Team</Text>
            <Text style={styles.dropdownItem}>Our partners & top Clients</Text>
          </View>
        );
      case 'Product & Services':
        return (
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownItem}>IT Services</Text>
            <Text style={styles.dropdownItem}>Cloud Services</Text>
            <Text style={styles.dropdownItem}>Networking Services</Text>
            <Text style={styles.dropdownItem}>Digital Marketing</Text>
            <Text style={styles.dropdownItem}>Technical Security</Text>
            <Text style={styles.dropdownItem}>Certified Training</Text>
            <TouchableOpacity 
              onPress={() => Linking.openURL('https://laptop-taupe.vercel.app/')}
              style={styles.dropdownItem}
            >
              <Text style={styles.dropdownItemText}>Laptop</Text>
            </TouchableOpacity>
          </View>
        );
      case 'Solutions':
      case 'Resources':
        return (
          <View style={styles.dropdownContent}>
            <Text style={styles.dropdownItem}>Dropdown content</Text>
          </View>
        );
      default:
        return null;
    }
  };

  const renderNavItem = (title: string, hasDropdown: boolean = false) => (
    <TouchableOpacity 
      style={styles.navItem} 
      onPress={() => hasDropdown && toggleDropdown(title)}
    >
      <Text style={styles.navLink}>{title}</Text>
      {hasDropdown && (
        <MaterialIcons 
          name={openDropdown === title ? "arrow-drop-up" : "arrow-drop-down"} 
          size={25} 
          color="#000"
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.navbar}>
      <Image
        source={{ uri: 'https://speedlinkng.com/wp-content/uploads/2023/06/1-223x93.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={toggleMobileMenu} style={styles.menuIcon}>
        <Ionicons name={isMobileMenuOpen ? "close" : "menu"} size={30} color="#000" />
      </TouchableOpacity>
      {isMobileMenuOpen && (
        <ScrollView style={styles.navLinks}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
            <Text style={styles.searchPlaceholder}>Search ...</Text>
          </View>
          {renderNavItem('Home')}
          {renderNavItem('About Us', true)}
          {renderDropdownContent('About Us')}
          {renderNavItem('Product & Services', true)}
          {renderDropdownContent('Product & Services')}
          {renderNavItem('Case Study')}
          {renderNavItem('Solutions', true)}
          {renderDropdownContent('Solutions')}
          {renderNavItem('Resources', true)}
          {renderDropdownContent('Resources')}
          {renderNavItem('Contact')}
          <TouchableOpacity style={styles.getInTouchButton}>
            <Text style={styles.getInTouchButtonText}>Get in touch</Text>
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
    elevation: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchPlaceholder: {
    color: '#888',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  navLink: {
    color: '#000',
    fontSize: 16,
  },
  dropdownContent: {
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 10,
  },
  dropdownItem: {
    color: '#666',
    fontSize: 14,
    paddingVertical: 5,
  },
  getInTouchButton: {
    backgroundColor: '#DA2124',
    padding: 10,
    borderRadius: 4,
    marginTop: 15,
  },
  getInTouchButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  dropdownItemText: {
    color: '#666',
    fontSize: 14,
  },
});

export default Navbar;
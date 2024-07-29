// TopBar.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const TopBar = () => {
  return (
    <LinearGradient
      colors={['rgb(235, 15, 15)', 'rgb(13, 13, 235)']}
      style={styles.topBar}
    >
      <View style={styles.left}>
        <Icon name="facebook" style={[styles.icon, styles.background]} />
        <Icon name="twitter" style={[styles.icon, styles.background]} />
        <Icon name="linkedin" style={[styles.icon, styles.background]} />
        <Icon name="instagram" style={[styles.icon, styles.background]} />
      </View>
      <View style={styles.right}>
        <View style={styles.contactItem}>
          <Icon name="phone" style={[styles.icon, styles.phone]} />
          <Text style={styles.contactText}>tel: +2349167716220</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="envelope" style={styles.icon} />
          <Text style={styles.contactText}>info@speedlinkng.com</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 10,
    marginHorizontal: 4,
  },
  background: {
    backgroundColor: '#FFFFFF1c',
    padding: 8,
    borderRadius: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    padding: 8,
    backgroundColor: '#FFFFFF1c',
    borderRadius: 5,
  },
  contactText: {
    color: 'white',
    fontSize: 12,
  },
  phone: {
    marginRight: 8,
  },
});

export default TopBar;

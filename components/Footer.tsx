import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.containerFooter}>
            <Text style={styles.footerText}>
                Copyright © 2022 - 2024 Speedlink Hi-TECH Solutions Limited.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerFooter: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'rgba(40, 38, 38, 0.789)',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    footerText: {
        paddingTop: 25,
        color: 'rgb(243, 226, 226)',
        fontSize: 12,
    },
});

export default Footer;
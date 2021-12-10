import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

// Modules
import { LinearGradient } from 'expo-linear-gradient';

// Assets
import SplashImg from '../../assets/splash.png'
import Edukall from '../../assets/edukall.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

export function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(routesPaths.onboardingTransparency) 
        }, 1000);
    }, [])

    return (
        <LinearGradient
            colors={baseGradients.linearDarkBlue.colors}
            style={styles.container}
            start={baseGradients.linearDarkBlue.start}
            end={baseGradients.linearDarkBlue.end}
        >
            <Image source={SplashImg} style={{ height: 142/1.1, width: 242/1.1 }} />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

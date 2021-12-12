import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'

// Modules
import LottieView from 'lottie-react-native';

// Assets
import { ButtonBase } from '../../components/Button';
import logoIcon2 from '../../assets/logoIcon2.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

export function OnboardingTransparency({navigation}) {
    return (
            <View style={styles.container}>
                <View style={{height: 40 }} />
                <Image source={logoIcon2} style={{ height: 203/1.7, width: 203/1.7, alignSelf: 'center'}} />

                <ResponsiveText style={{color: '#222', marginVertical: 10, textAlign: 'center'}} h2>
                    Transparência na palma da sua mão!
                </ResponsiveText>

                <View style={{height: 317, width: 317, alignSelf: 'center', elevation: 10, borderRadius: 317, backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center'}}>
                    <LottieView
                        source={require('./animation.json')} 
                        style={{
                            width: 180,
                            height: 180,
                        }}
                        autoPlay
                        loop
                    />
                </View>

                <ResponsiveText style={{color: '#222', marginVertical: 10, textAlign: 'center'}} h4>
                    Informação para a população sobre dados abertos é um dos objetivos do Governo do Ceára.
                </ResponsiveText>
                
                <ButtonBase
                    label="Prosseguir"
                    onPress={() => navigation.navigate(routesPaths.onboardingEasy)}
                    style={{alignSelf: 'center'}}
                />
                
            </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingBottom: 40,
        paddingTop: 10,
        backgroundColor: baseColors.backgroundWhite,
    },
})

import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'

// Modules
import LottieView from 'lottie-react-native';

// Assets
import Play from '../../assets/Play.png'
import { ButtonBase } from '../../components/Button';

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

export function OnboardingEasy({navigation}) {
    return (
            <View style={styles.container}>
                <View style={{height: 70 }} />

                <ResponsiveText style={{color: '#222', marginVertical: 10, textAlign: 'center'}} h2>
                    Nunca foi tão fácil consultar e entender dados públicos 
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
                    Saiba tudo que está acontecendo na sua cidade através dos dados abertos.
                </ResponsiveText>
                
                <ButtonBase
                    label="Prosseguir"
                    onPress={() => navigation.navigate(routesPaths.home)}
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
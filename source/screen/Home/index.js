import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions, ImageBackground } from 'react-native'

// Modules

// Assets
import fornecimento from '../../assets/fornecimento.png'
import shadow from './shadow.png'
import background from './background.png'
import obras from './obras.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors, baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

const screenWidth = Dimensions.get('window').width

export function Home({navigation}) {

    const imageWidth = 324
    const imageHeight = 258
    const proportion = imageWidth / imageHeight

    const imageWidthResized = screenWidth * 0.8
    const imageHeightResized = imageWidthResized / proportion

    return (
        <View style={styles.container}>

            <ResponsiveText style={{color: '#000', marginVertical: 10, marginTop: 50, alignSelf: 'center'}} h1>
                Informações
            </ResponsiveText>

            <View>
                <ImageBackground source={background} style={{ width: imageWidthResized, height: imageHeightResized, alignSelf: 'center'}}>
                    <ResponsiveText h4 style={{color: '#F8F8F8', marginVertical: 5, alignSelf: 'center'}}>
                        Despesas por Obras
                    </ResponsiveText>
                    <Image source={obras} style={{ width: screenWidth * 0.75, resizeMode: 'contain' , alignSelf: 'center'}} />
                </ImageBackground>

                <Image source={shadow} style={{ width: screenWidth * 0.8, resizeMode: 'stretch' , alignSelf: 'center', marginTop: 10}} />
            </View>

            <TouchableOpacity 
                activeOpacity={0.5} 
                onPress={() => navigation.navigate(routesPaths.questions)}
                style={{
                    position: 'absolute', 
                    bottom: 130, 
                    backgroundColor: 'rgba(248, 248, 248, 0.6)',
                    borderRadius: 20,
                    right: 20,
                    elevation: 5
                }} 
            >
                <ResponsiveText 
                    h4
                    style={{
                        color: '#000', 
                        textAlign: 'center', 
                        paddingHorizontal: 20, 
                        paddingVertical: 7, 
                        backgroundColor: '#FFF', 
                        borderRadius: 20, 
                }}
                >
                    Dúvidas
                </ResponsiveText>
            </TouchableOpacity>

            <Image source={fornecimento} style={{ width: screenWidth, resizeMode: 'stretch' , alignSelf: 'center'}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: baseColors.backgroundWhite
    },
})

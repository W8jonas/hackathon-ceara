import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions } from 'react-native'

// Modules

// Assets
import fornecimento from '../../assets/fornecimento.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors, baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

const screenWidth = Dimensions.get('window').width

export function Home({navigation}) {
    return (
        <View style={styles.container}>

            <ResponsiveText style={{color: '#000', marginVertical: 10, marginTop: 50, alignSelf: 'center'}} h1>
                Informações
            </ResponsiveText>


            <ResponsiveText style={{color: '#000', marginVertical: 10}} h4>
                Próximo desafio:{'\n'}28/11, 19:00
            </ResponsiveText>

            <TouchableOpacity 
                activeOpacity={0.5} 
                onPress={() => navigation.navigate(routesPaths.home)}
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

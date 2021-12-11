import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions, ImageBackground } from 'react-native'

// Modules
import Carousel from 'react-native-snap-carousel';

// Assets
import fornecimento from '../../assets/fornecimento.png'
import shadow from './shadow.png'
import background from './background.png'
import obras from './obras.png'
import coronavirus from './coronavirus.png'
import contratosEConvenios from './contratosEConvenios.png'
import despesasNotaEmpenho from './despesasNotaEmpenho.png'
import servidoresPublicos from './servidoresPublicos.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors, baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

const screenWidth = Dimensions.get('window').width

export function Home({navigation}) {
    const ref = useRef()

    const imageWidth = 324
    const imageHeight = 258
    const proportion = imageWidth / imageHeight

    const imageWidthResized = screenWidth * 0.8
    const imageHeightResized = imageWidthResized / proportion

    const data = [
        {label: 'obras', title: 'Despesas por Obras', image: obras, redirect: true },
        {label: 'contratosConvenios', title: 'Contratos e Convênios', image: contratosEConvenios, redirect: true },
        {label: 'despesasNotaEmpenho', title: 'Despesas por nota de empenho', image: despesasNotaEmpenho },
        {label: 'servidoresPublicos', title: 'Servidores Públicos', image: servidoresPublicos },
        {label: 'coronavirus', title: 'Coronavírus', image: coronavirus },
    ]

    function _renderItem({item}) {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => item.redirect 
                        ? navigation.navigate(routesPaths.redirect, {label: item.label}) 
                        : navigation.navigate(routesPaths.indicators, {label: item.label})
                    }
                >
                    <ImageBackground source={background} style={{ width: imageWidthResized, height: imageHeightResized, alignSelf: 'center'}}>
                        <ResponsiveText h4 style={{color: '#F8F8F8', marginVertical: 5, alignSelf: 'center'}}>
                            {item.title}
                        </ResponsiveText>
                        <Image source={item.image} style={{ width: screenWidth * 0.75, resizeMode: 'contain' , alignSelf: 'center'}} />
                    </ImageBackground>
                </TouchableOpacity>

                <Image source={shadow} style={{ width: screenWidth * 0.8, resizeMode: 'stretch' , alignSelf: 'center', marginTop: 10}} />
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <ResponsiveText style={{color: '#000', marginVertical: 10, marginTop: 50, alignSelf: 'center'}} h1>
                Informações
            </ResponsiveText>

            <View style={{height: 80}} />
        
            <Carousel
                ref={(c) => { ref.current = c; }}
                data={data}
                renderItem={_renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth * 0.8}
            />

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

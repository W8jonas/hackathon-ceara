import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions, ScrollView } from 'react-native'

// Modules
import { Audio } from 'expo-av';

// Assets
import fornecimento from '../../assets/fornecimento.png'
import { Header } from '../../components/Header';

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors, baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';


import car from './car.png'
import contract from './contract.png'
import hotel from './hotel.png'
import partnership from './partnership.png'

const screenWidth = Dimensions.get('window').width


export function Redirect({ route, navigation }) {

    const {label} = route.params

    const options = {
        'obras': ['Rodoviárias', 'Edificações'],
        'contratosConvenios': ['Contratos', 'Convênios'],
    }

    const [sound, setSound] = useState()

    async function playSound() {
        console.log('Playing Sound');
        await sound.playAsync()
    }

    useEffect(() => {
        console.log('Loading Sound');
        Audio.Sound.createAsync(
           require('../../assets/sounds/pop.mp3')
        ).then(({sound}) => {setSound(sound)})
    }, [])

    useEffect(() => {
        return sound
          ? () => {sound.unloadAsync()}
          : undefined
    }, [sound])


    return (
        <View style={styles.container}>

            <View style={{marginTop: 50 }}>
                <Header title="Escolha o assunto" size={'large'} onPress={() => navigation.goBack()} />
            </View>

            <View>
                {options[label].map((item) => (
                    <Button
                        key={item}
                        label={item}
                        onPress={() => {
                            navigation.navigate(routesPaths.indicators, {label: item})
                            playSound()
                        }}
                    />
                ))}
            </View>
            
            <View style={{height: 200}} />
            <Image source={fornecimento} style={{ width: screenWidth, resizeMode: 'stretch', alignSelf: 'center' }} />
        </View>
    )
}


function Button({label, onPress, style}) {
    
    function getIcon(label) {
        switch (label) {
            case 'Rodoviárias':
                return car
    
            case 'Edificações':
                return hotel
    
            case 'Contratos':
                return contract
    
            case 'Convênios':
                return partnership
    
            default:
                return partnership
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={{
                backgroundColor: baseColors.base2, 
                height: 50, 
                width: '90%', 
                borderRadius: 30, 
                alignSelf: 'center',
                paddingHorizontal: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                elevation: 2,
                marginVertical: 30,
                ...style
            }}
        >
            <ResponsiveText h4 style={{color: '#FFF'}}>
                {label}
            </ResponsiveText>

            <Image source={getIcon(label)} style={{ width: screenWidth, resizeMode: 'contain', position: 'relative', bottom: 20 }} />
        </TouchableOpacity>
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

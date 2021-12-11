import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions, ScrollView } from 'react-native'

// Modules
import Accordion from 'react-native-collapsible/Accordion';

// Assets
import fornecimento from '../../assets/fornecimento.png'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors, baseGradients } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

const screenWidth = Dimensions.get('window').width


export function Redirect({ route, navigation }) {

    const {label} = route.params

    const options = {
        'obras': ['Rodoviárias', 'Edificações'],
        'contratosConvenios': ['Contratos', 'Convênios'],
    }

    console.log('options: ', label)

    return (
        <View style={styles.container}>

            <View 
             style={{ 
                    marginTop: 50, 
                    marginBottom: 20, 
                    width: '100%', 
                    flexDirection: 'row', 
                    justifyContent: 'space-around', 
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.goBack()}

                >
                    <ResponsiveText
                        h4
                        style={{
                            color: '#000',
                        }}
                    >
                        A
                    </ResponsiveText>
                </TouchableOpacity>

                <ResponsiveText style={{ color: '#000', alignSelf: 'center' }} h3>
                    Escolha o assunto
                </ResponsiveText>

            </View>
            
            <View>
                {options[label].map((item) => (
                    <Button key={item} label={item} onPress={() => navigation.navigate(routesPaths.indicators, {label: item})}  />
                ))}
            </View>

            <Image source={fornecimento} style={{ width: screenWidth, resizeMode: 'stretch', alignSelf: 'center' }} />
        </View>
    )
}


function Button({label, onPress, style}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={{
                backgroundColor: baseColors.base2, 
                height: 50, 
                width: '80%', 
                borderRadius: 30, 
                justifyContent: 'center',
                paddingHorizontal: 20,
                elevation: 2,
                marginVertical: 10,
                ...style
            }}
        >
            <ResponsiveText h4 style={{color: '#FFF'}}>
                {label}
            </ResponsiveText>
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

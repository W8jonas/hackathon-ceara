import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'

// Modules

// Assets
import { ButtonBase } from '../../components/Button';
import { SimpleButton } from '../../components/SimpleButton';

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors } from '../../config/style';
import { routesPaths } from '../../routes/routesPaths';

export function OnboardingTopics({navigation}) {

    const THEMES = [
        'Despesas por nota de empenho',
        'Coronavírus',
        'Servidores públicos',
        'Contratos e convênios',
        'Despesas em obras',
        'Todos',
    ]

    const [themesSelected, setThemesSelected] = useState(['Todos'])

    function handleSetTheme(theme) {
        if (!themesSelected.find(item => item===theme)) {
            setThemesSelected((old) => [...old, theme])
        } else {
            setThemesSelected((old) => old.filter((item) => item !== theme))
        }
    }

    return (
            <View style={styles.container}>

                <ResponsiveText style={{color: '#222', paddingHorizontal: 50, alignSelf: 'center', textAlign: 'center', position: 'absolute', top: 50}} h2>
                    Quais temas você gostaria de ver?
                </ResponsiveText>

                <View style={{height: 1 }} />

                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                    {THEMES.map((theme) => (
                        <SimpleButton
                            key={theme}
                            label={theme}
                            onPress={() => handleSetTheme(theme)}
                            style={{
                                backgroundColor: themesSelected.includes(theme) ? baseColors.base3 : 'rgba(34, 34, 34, 0.01)', 
                                maxWidth: '48%', marginVertical: 10}}
                        />
                    ))}
                </View>

                <ResponsiveText style={{color: '#222', marginVertical: 10, textAlign: 'center'}} h4>
                    Informação para a população sobre dados abertos é um dos objetivos do Governo do Ceára.
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

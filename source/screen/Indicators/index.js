import React, { useState, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Header } from '../../components/Header'
import { ResponsiveText } from '../../components/ResponsiveText'

// Modules

// Assets

// Functions
import background from './background.png'

// Components

export function Indicators({route, navigation}) {
    const {label} = route.params

    const data = {
        'obras': [],
        'Contratos': [
            {
                topic: 'Total ',
                list: [
                    'Média de despesa em contratos: 486474',
                    'Quantidade de despesas: 3884',
                    'Aprox 20 mi',
                ]
            }
        ],
        'Convênios': [
            {
                topic: 'Total ',
                list: [
                    'Média de despesa em Convênios: 491032 ',
                    'Quantidade de despesas: 3884',
                    'Aprox  19 mi',
                ]
            }
        ],
        'despesasNotaEmpenho': [
            {
                topic: '1º trimestre ',
                list: [
                    'Média de gasto por despesa: 154349 ',
                    'Quantidade de despesas: 29930',
                    'Aprox 25 mi despesas totais',
                ]
            },
            {
                topic: '2º trimestre',
                list: [
                    'Média de gasto  112314 ',
                    'Quantidade de despesas: 46806',
                    'Aprox 20 mi',
                ]
            },
            {
                topic: '3º trimestre',
                list: [
                    'Média de gasto 104898 ',
                    'Quantidade de despesas 53380',
                    'Aprox 17',
                ]
            },
            {
                topic: '4º Trimestre',
                list: [
                    'Média de gasto 87129 ',
                    'Quantidade de despesas 79308',
                    'Aprox 18 mi',
                ]
            }
        ],
        'servidoresPublicos': [
            {
                topic: 'Total ',
                list: [
                    'Média de gasto por despesa: 4313',
                    'Quantidade de servidores: 1,93 mi',
                    'Aprox 8,2 mi ',
                ]
            }
        ],
        'coronavirus': [
            {
                topic: 'Total ',
                list: [
                    'Média de despesa no Coronavírus: 151665',
                    'Quantidade de despesas: 9872',
                    'Aprox  11,5 mi',
                ]
            }
        ],
    }

    return (
        <View style={{flex: 1}}>
            <View style={{backgroundColor: '#006C30', width: '100%', height: 80, paddingTop: 30, alignItems: 'center', justifyContent: 'center'}}>
                <ResponsiveText
                    h2
                    style={{
                        color: '#FFF',
                    }}
                >
                    {label}
                </ResponsiveText>
            </View>

            <Header title="Indicadores" onPress={() => navigation.goBack()} />

            <ScrollView>
                {data[label].map((data) => (
                    <View style={{paddingHorizontal: 20, marginVertical: 10}}>
                        <View style={{backgroundColor: 'rgba(193, 193, 193, 0.8)', borderRadius: 12, elevation: 5}}>
                            <ResponsiveText h5 style={{color: '#000', marginTop: 10, paddingHorizontal: 10}}>
                                {data.topic}
                            </ResponsiveText>

                            <Image source={background} style={{ width: '90%', resizeMode: 'contain', alignSelf: 'center', marginBottom: 10 }} />
                        </View>

                        <ResponsiveText p style={{color: '#000', paddingHorizontal: 8, marginTop: 5}}>
                            {data.list.map((item) => (
                                '▪ ' + item + '\n'
                            ))}
                        </ResponsiveText>
                    </View>
                ))}
            </ScrollView>

        </View>
    )
}


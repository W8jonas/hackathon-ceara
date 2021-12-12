import React, { useState, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity, Image, Alert, Linking } from 'react-native'
import { Header } from '../../components/Header'
import { ResponsiveText } from '../../components/ResponsiveText'

// Modules
import * as Sharing from 'expo-sharing'
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';

// Assets

// Functions
import background from './background.png'
import share from './share.png'

// Components

export function Indicators({route, navigation}) {
    const {label} = route.params

    async function openShareDialogAsync() {
        if (!(await Sharing.isAvailableAsync())) {
            Alert.alert(`Uh oh, sharing isn't available on your platform`);
            return;
        }
    
        await Sharing.shareAsync(share);
    }

    async function openShareDialogAsyncV2(shareText) {
        const fileDetails = {
            extension: '.png',
            shareOptions: {
                mimeType: 'image/png',
                dialogTitle: shareText,
                message: shareText,
                UTI: 'image/png',
            },
        }

        const downloadPath = `${FileSystem.cacheDirectory}${fileDetails.extension}`;
        const { uri: localUrl } = await FileSystem.downloadAsync(
          'https://i.imgur.com/LpcRm2c.png',
          downloadPath
        )
        await Sharing.shareAsync(localUrl, fileDetails.shareOptions);
    }

    const data = {
        'Rodoviárias': [
            {
                topic: 'Média de despesa em contratos',
                title: 'R$ 1.225.494,00',
                list: [
                    'Esse indicador mostra o quanto foi despendido de recurso no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas',
                title: '1162',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas total',
                title: 'Aprox. R$ 17,5 mi',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade total de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            }
        ],
        'Edificações': [
            {
                topic: 'Média de despesa em contratos',
                title: 'R$ 847.216,00',
                list: [
                    'Esse indicador mostra o quanto foi despendido de recurso no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas',
                title: '640',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas total',
                title: 'Aprox. R$ 12 mi',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade total de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            }
        ],
        'Contratos': [
            {
                topic: 'Média de despesa em contratos',
                title: 'R$ 486.474,00',
                list: [
                    'Esse indicador mostra o quanto foi despendido de recurso no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas',
                title: '3884',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas total',
                title: 'Aprox. R$ 20 mi',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade total de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            }
        ],
        'Convênios': [
            {
                topic: 'Média de despesa em Convênios',
                title: 'R$ 491.032,00',
                list: [
                    'Esse indicador mostra o quanto foi despendido de recurso no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas',
                title: '3884',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas total',
                title: 'Aprox. R$  19 mi',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade total de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
        ],
        'despesasNotaEmpenho': [
            {
                topic: 'Média de gasto por despesa',
                title: 'R$ 154.349,00',
                list: [
                    'Esse indicador mostra o quanto foi despendido de recurso no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas',
                title: '29930',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas total',
                title: 'Aprox. R$ 25 mi',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade total de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
            // {
            //     topic: '2º',
            // title: 'trimestre',
            //     list: [
            //         'Média de gasto  112314 ',
            //         'R$ Quantid.ade,00 de despesas: 46806',
            //         'Aprox 20 mi',
            //     ]
            // },
            // {
            //     topic: '3º',
            // title: 'trimestre',
            //     list: [
            //         'Média de gasto 104898 ',
            //         'R$ Quantid.ade,00 de despesas 53380',
            //         'Aprox 17',
            //     ]
            // },
            // {
            //     topic: '4º',
            // title: 'Trimestre',
            //     list: [
            //         'Média de gasto 87129 ',
            //         'R$ Quantid.ade,00 de despesas 79308',
            //         'Aprox 18 mi',
            //     ]
            // }
        ],
        'servidoresPublicos': [
            {
                topic: 'Média de gasto por despesa',
                title: 'R$ 4.313,00',
                list: [
                    'Esse indicador mostra o quanto foi despendido de recurso no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de servidores',
                title: '1,93 mi',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas total',
                title: 'Aprox. R$ 8,2 mi',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade total de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
        ],
        'coronavirus': [
            {
                topic: 'Média de despesa no Coronavírus:',
                title: 'R$ 151.665,00',
                list: [
                    'Esse indicador mostra o quanto foi despendido de recurso no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas:',
                title: '9872',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
            {
                topic: 'Quantidade de despesas total',
                title: '11, 5mi',
                list: [
                    'Esse indicador tem o propósito de informar a quantidade total de despesas no ano de 2020 nesse tipo de despesa.',
                ]
            },
        ],
    }

    const links = {
        'Rodoviárias': 'https://drive.google.com/drive/folders/1rfgK2-AGFR53cUUTL7xRWE-X2qhRT0BK?usp=sharing',
        'Edificações': 'https://drive.google.com/drive/folders/1MRIXD1fULHwvM08XvaSDfPccjAUL1ma7?usp=sharing',
        'Contratos': 'https://drive.google.com/drive/folders/1ca0zL7OQHBj3hGzh3PKpC-4qNjd9gkC_?usp=sharing',
        'Convênios': 'https://drive.google.com/drive/folders/1kJPcpMo99OhkLybY2lmKO4zQlFtYjkR-?usp=sharing',
        'despesasNotaEmpenho': 'https://drive.google.com/drive/folders/1F5EbimAoh_H8iDiSMVBPj2346TuVCSDn?usp=sharing',
        'servidoresPublicos': 'https://drive.google.com/drive/folders/16C2LUz_UntMubCPeeq-tVsEIRwrKUpCw?usp=sharing',
        'coronavirus': 'https://drive.google.com/drive/folders/1apnm8MUTOITUJbm-SKW2tz2vE_w0-GGa?usp=sharing',
    }

    const [sound, setSound] = useState()

    async function playSound() {
        console.log('Playing Sound');
        await sound.playAsync()
    }

    useEffect(() => {
        console.log('Loading Sound');
        Audio.Sound.createAsync(
           require('../../assets/sounds/popcork.mp3')
        ).then(({sound}) => {setSound(sound)})
    }, [])

    useEffect(() => {
        return sound
          ? () => {sound.unloadAsync()}
          : undefined
    }, [sound])

          
	function handleOpenWeb() {
        const webUrl = links[label]

		Linking.canOpenURL(webUrl).then((supported) => {
			if (supported) {
				Linking.openURL(webUrl)
			} else {
				console.log(`Don't know how to open URI: ${webUrl}`)
			}
		})
	}


    return (
        <View style={{flex: 1}}>
            <View style={{backgroundColor: '#006C30', width: '100%', height: 80, paddingTop: 30, alignItems: 'center', justifyContent: 'center'}}>
                <ResponsiveText
                    h3
                    style={{
                        color: '#FFF',
                    }}
                >
                    {label === 'despesasNotaEmpenho' ? 'Despesas por nota de empenho' : label === 'servidoresPublicos' ? 'Servidores Públicos' : label}
                </ResponsiveText>
            </View>

            <Header title="Indicadores" size={'large'} onPress={() => navigation.goBack()} />

            <ScrollView>
                {data[label].map((data) => (
                    <View key={data.topic} style={{paddingHorizontal: 20, marginVertical: 10}}>
                        <View style={{backgroundColor: 'rgba(193, 193, 193, 0.8)', borderRadius: 12, elevation: 5}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <ResponsiveText h5 style={{color: '#000', marginTop: 10, paddingLeft: 10,}}>
                                    {data.topic}
                                </ResponsiveText>
                                <TouchableOpacity 
                                    activeOpacity={0.5} 
                                    onPress={() =>
                                        openShareDialogAsyncV2(data.topic)
                                    }
                                >
                                    <Image source={share} style={{ width: 37, height: 37, resizeMode: 'contain', position: 'relative', right: 5, top: 5}} />
                                </TouchableOpacity>
                            </View>
                                <Image source={background} style={{ width: '90%', resizeMode: 'contain', alignSelf: 'center', marginBottom: 10 }} />
                                <ResponsiveText h1 bold style={{color: '#FFF', position: 'absolute', top: 80, alignSelf: 'center'}}>
                                    {data.title}
                                </ResponsiveText>
                        </View>

                        <ResponsiveText p style={{color: '#000', paddingHorizontal: 8, marginTop: 5}}>
                            {data.list.map((item) => (
                                '▪ ' + item + '\n'
                            ))}
                        </ResponsiveText>
                    </View>
                ))}
                
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <View 
                        style={{
                            backgroundColor: 'rgba(248, 248, 248, 0.6)',
                            borderRadius: 30,
                            elevation: 5,
                            alignSelf: 'center',
                        }} 
                    >
                        <ResponsiveText 
                            h5
                            style={{
                                color: '#000', 
                                paddingHorizontal: 20, 
                                paddingVertical: 6, 
                                backgroundColor: '#FFF', 
                                borderRadius: 30, 
                        }}
                        >
                            Fonte dos dados: {'\n'}
                            Controladoria do Estado
                        </ResponsiveText>
                    </View>

                    <TouchableOpacity 
                        activeOpacity={0.5} 
                        onPress={() => {playSound(), handleOpenWeb()}}
                        style={{
                            backgroundColor: 'rgba(248, 248, 248, 0.6)',
                            borderRadius: 30,
                            elevation: 5,
                            alignSelf: 'center',
                        }} 
                    >
                        <ResponsiveText 
                            h5
                            style={{
                                color: '#000', 
                                textAlign: 'center', 
                                paddingHorizontal: 20, 
                                paddingVertical: 10, 
                                backgroundColor: '#FFF', 
                                borderRadius: 30, 
                        }}
                        >
                            Baixar dados
                        </ResponsiveText>
                    </TouchableOpacity>
                </View>

                <View style={{height: 40}} />
                
            </ScrollView>
        </View>
    )
}

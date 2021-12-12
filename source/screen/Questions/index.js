import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions, ScrollView } from 'react-native'

// Modules
import Accordion from 'react-native-collapsible/Accordion'

// Assets
import fornecimento from '../../assets/fornecimento.png'
import { Header } from '../../components/Header'

// Functions

// Components
import { ResponsiveText } from '../../components/ResponsiveText'
import { baseColors, baseGradients } from '../../config/style'
import { routesPaths } from '../../routes/routesPaths'

const screenWidth = Dimensions.get('window').width

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. '

const SECTIONS = [
    {
        title: 'O que são dados abertos?',
        content: 'São dados que qualquer pessoa pode livremente acessá-los, utilizá-los, modificá-los e compartilhá-los para qualquer finalidade, estando sujeito a, no máximo, a exigências que visem preservar sua proveniência e sua abertura.',
    },
    {
        title: 'Há perigo em compartilhar esses dados?',
        content: 'Os dados abertos servem para que a sociedade possa verificar, esclarecer, fiscalizar e acompanhar as informações produzidas pelo governo, dessa maneira, não nenhuma informação sensível neles. ',
    },
    {
        title: 'Existe lei que o obriga os dados a serem compartilhados?',
        content: 'Sim. Em 18 de novembro de 2011 foi sancionada a Lei de Acesso a Informação Pública (Lei 12.527/2011) que regula o acesso a dados e informações detidas pelo governo.A Política de Dados Abertos foi consolidada pelo Decreto n.º 8.777, de 2016. ',
    },
    {
        title: 'Qual a finalidade do app Ceará na mão?',
        content: 'Possibilitar ao cearense e todo aquele interessado em dados abertos do governo do Ceára mais facilidade e transparência.',
    },
    {
        title: 'O que são metadados?',
        content: 'Metadados são geralmente descritos como dados sobre dados e são essenciais na organização e classificação de conjuntos de dados. Todo conjunto de dados estruturado faz uso de metadados para descrever a forma e os tipos de dados nele contidos.',
    },
]


export function Questions({ navigation }) {

    const [activeSections, setActiveSections] = useState([])

    function _renderSectionTitle(section) {
        return (
            <View style={styles.section}>
                <Text>{section.content}</Text>
            </View>
        )
    }

    function _renderHeader(section) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        )
    }

    function _renderContent(section) {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        )
    }

    function _updateSections(activeSections) {
        setActiveSections(activeSections)
    }

    return (
        <View style={styles.container}>

            <View style={{marginTop: 50 }}>
                <Header title="Dúvidas recorrentes" size={'large'} onPress={() => navigation.goBack()} />
            </View>

            <ScrollView>
                <Accordion
                    sections={SECTIONS}
                    activeSections={activeSections}
                    renderHeader={_renderHeader}
                    renderContent={_renderContent}
                    onChange={_updateSections}
                    touchableComponent={TouchableOpacity}
                    touchableProps={{activeOpacity: 0.7}}
                />
            </ScrollView>

            <Image source={fornecimento} style={{ width: screenWidth, resizeMode: 'stretch', alignSelf: 'center' }} />
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
    header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        alignSelf: 'center',
        elevation: 4,
        width: '90%', marginVertical: 10
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        marginHorizontal: 20,
        backgroundColor: '#F5FCFF',
        marginTop: -20,
    },
})

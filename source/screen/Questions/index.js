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

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const SECTIONS = [
    {
        title: 'Como posso ver X',
        content: BACON_IPSUM,
    },
    {
        title: 'Como posso ver X',
        content: BACON_IPSUM,
    },
    {
        title: 'Como posso ver X',
        content: BACON_IPSUM,
    },
    {
        title: 'Como posso ver X',
        content: BACON_IPSUM,
    },
    {
        title: 'Como posso ver X',
        content: BACON_IPSUM,
    },
];



export function Questions({ navigation }) {

    const [activeSections, setActiveSections] = useState([])

    function _renderSectionTitle(section) {
        return (
            <View style={styles.section}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    function _renderHeader(section) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    function _renderContent(section) {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    function _updateSections(activeSections) {
        setActiveSections(activeSections)
    };

    return (
        <View style={styles.container}>

            <View style={{ marginTop: 50, marginBottom: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
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
                    Dúvidas recorrentes
                </ResponsiveText>

                <ResponsiveText style={{ color: '#000', alignSelf: 'center' }} h3>

                </ResponsiveText>
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
        backgroundColor: '#F5FCFF',
        marginTop: -25,
    },
    section: {
        padding: 20,
        backgroundColor: '#ccF',
    },
})

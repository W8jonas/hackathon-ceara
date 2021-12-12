import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'

// Modules

// Assets

// Functions
import setinha from '../../assets/setinha.png'
import { ResponsiveText } from '../ResponsiveText'

// Components

export function Header({onPress, title, size}) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10}}>
            <TouchableOpacity onPress={onPress}>
                <Image source={setinha} style={{ width: 36, height: 34, resizeMode: 'contain', marginVertical: 10}} />
            </TouchableOpacity>

            {size === 'large' ?
            <ResponsiveText h3 style={{color: '#000', paddingHorizontal: 8, marginTop: 5}}>
                {title}
            </ResponsiveText> : <ResponsiveText p style={{color: '#000', paddingHorizontal: 8, marginTop: 5}}>
                {title}
            </ResponsiveText>}

            <ResponsiveText p style={{color: '#000', paddingHorizontal: 8, marginTop: 5}}>
                    
            </ResponsiveText>
        </View>
    )
}

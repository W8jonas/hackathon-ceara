import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { baseColors } from '../../config/style'
import { ResponsiveText } from '../ResponsiveText'

// Modules

// Assets

// Functions

// Components

export function SimpleButton({label, onPress, style}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={{
                backgroundColor: 'rgba(34, 34, 34, 0.05)', 
                height: 50, 
                width: '80%', 
                borderRadius: 30, 
                justifyContent: 'center', 
                alignItems: 'center', 
                elevation: 2, 
                ...style
            }}
        >
            <ResponsiveText h5 style={{color: '#222222', textAlign: 'center'}}>
                {label}
            </ResponsiveText>
        </TouchableOpacity>
    )
}

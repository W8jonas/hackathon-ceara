import React from 'react'
import { LogBox } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AppLoading from 'expo-app-loading'
import { useFonts, Roboto_400Regular, Roboto_700Bold,  } from '@expo-google-fonts/roboto'

import { Home } from '../screen/Home'
import { routesPaths } from './routesPaths'
import { SplashScreen } from '../screen/SplashScreen'
import { OnboardingTransparency } from '../screen/OnboardingTransparence'
import { OnboardingEasy } from '../screen/OnboardingEasy'
import { OnboardingTopics } from '../screen/OnboardingTopics'
import { Questions } from '../screen/Questions'
import { Redirect } from '../screen/Redirect'
import { Indicators } from '../screen/Indicators'


LogBox.ignoreLogs(['Setting a timer for a long period'])
LogBox.ignoreLogs(['Warning: `flexWrap: `wrap`` is not supported with the `VirtualizedList`'])

const Stack = createStackNavigator()

export function Routes() {
    const [fontsLoaded] = useFonts({
		Roboto_400Regular, 
        Roboto_700Bold,
	})

    if (!fontsLoaded) {
		return <AppLoading />
	}

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="splash">
                <Stack.Screen name={routesPaths.splash} component={SplashScreen} />
                <Stack.Screen name={routesPaths.onboardingTransparency} component={OnboardingTransparency} />
                <Stack.Screen name={routesPaths.onboardingEasy} component={OnboardingEasy} />
                <Stack.Screen name={routesPaths.onboardingTopics} component={OnboardingTopics} />
                <Stack.Screen name={routesPaths.home} component={Home} />
                <Stack.Screen name={routesPaths.questions} component={Questions} />
                <Stack.Screen name={routesPaths.redirect} component={Redirect} />
                <Stack.Screen name={routesPaths.indicators} component={Indicators} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

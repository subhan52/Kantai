import { colors, spacing, typography } from "app/theme"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { TextStyle, ViewStyle } from "react-native"
import { AirWallexScreen, ChargingStationsScreen, TxnHistScreen, UserSettingsScreen } from "app/screens"
import { Icon } from "app/components"
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { commonConstants } from "app/utils/commonConstants"

export type DashboardNavigatorParamList = {
  // whichever screens we can able to navigate to should be listed here
  ChargingStations: undefined
  TxnHist: undefined
  AirWallex: undefined
  TxnDetails: undefined
  Logout: undefined
  UserSettings: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DashBoardTabScreenProps<T extends keyof DashboardNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<DashboardNavigatorParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >

const Tab = createBottomTabNavigator<DashboardNavigatorParamList>()

export function DashboardNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="ChargingStations"
        component={ChargingStationsScreen}
        options={{
          tabBarLabel: commonConstants.CHARGING_STATIONS,
          tabBarIcon: ({ focused }) => (
            <Icon icon="view" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="TxnHist"
        component={TxnHistScreen}
        options={{
          // tabBarLabel: commonConstants.CHARGING_STATIONS,
          tabBarIcon: ({ focused }) => (
            <Icon icon="menu" color={focused ? colors.darkest : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="AirWallex"
        component={AirWallexScreen}
        options={{
          // tabBarLabel: commonConstants.CHARGING_STATIONS,//  to change the name of the bottom tab label
          tabBarIcon: ({ focused }) => (
            <Icon icon="bell" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="UserSettings"
        component={UserSettingsScreen}
        options={{
          // tabBarLabel: commonConstants.CHARGING_STATIONS,//  to change the name of the bottom tab label
          tabBarIcon: ({ focused }) => (
            <Icon icon="settings" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.bold,
  lineHeight: 16,
}

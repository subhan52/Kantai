import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { DashBoardTabScreenProps, DashboardNavigatorParamList } from "app/navigators"
import { spacing } from "app/theme"
import { RouteProp, useRoute } from "@react-navigation/native"
import { Screen, Text } from "app/components"
// import { useStores } from "app/models"

// interface ChargingStationsScreenProps extends AppStackScreenProps<"ChargingStations"> {}
export const ChargingStationsScreen: FC<DashBoardTabScreenProps<"ChargingStations">> = observer(
  function ChargingStationsScreen(_props) {
    const route = useRoute<RouteProp<DashboardNavigatorParamList, "ChargingStations">>()
    const params = route.params

    // handle Web links
    React.useEffect(() => {
      if (params !== undefined && Object.keys(params).length > 0) {
        console.log("params are more than one :", params)
      }
    }, [params])
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        style={$root}
        preset="scroll"
        contentContainerStyle={$screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        <Text text="chargingStations is the place to write all of your MAPS" />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

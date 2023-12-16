import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { DashBoardTabScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { spacing } from "app/theme"
// import { useStores } from "app/models"

// interface ChargingStationsScreenProps extends AppStackScreenProps<"ChargingStations"> {}
export const ChargingStationsScreen: FC<DashBoardTabScreenProps<"ChargingStations">> = observer(
  function ChargingStationsScreen(_props) {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll" contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}>
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

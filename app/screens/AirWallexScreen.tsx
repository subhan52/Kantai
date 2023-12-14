import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface AirWallexScreenProps extends AppStackScreenProps<"AirWallex"> {}

export const AirWallexScreen: FC<AirWallexScreenProps> = observer(function AirWallexScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="airWallex" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

import { Text, Image, Pressable, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/src/styles/colors"
import { styles } from "./style"


type Props = {
    icon: keyof typeof MaterialIcons.glyphMap
    name: string
    OnPress: () => void
}

export function Category({icon, name}: Props){

    return (

    <View >
    <Pressable style={styles.container} OnPress={onPress}>
        <MaterialIcons size={16} color={colors.gray[400]} name={icon}> </MaterialIcons>
        <Text style={styles.name}>{name}</Text>
    </Pressable>
    </View>
)
}
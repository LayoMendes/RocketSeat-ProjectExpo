import { Text, Image, Pressable, View, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/styles/colors";
import { styles } from "./style"; // Verifique se o caminho está correto

type Props = PressableProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  name: string;
  isSelected: boolean
};

export function Category({ icon, name, isSelected, ...rest}: Props) {
  // Defina o onPress
  const onPress = () => {
    console.log("Categoria clicada:", name);
  };
  
  const color = isSelected ? colors.green[300] : colors.gray[400]


  return (
    <View>
      <Pressable style={styles.container} {...rest}>
        <MaterialIcons size={16} color={color} name={icon} />
        <Text style={[styles.name, { color }]}>{name}</Text>
      </Pressable>
    </View>
  );
}



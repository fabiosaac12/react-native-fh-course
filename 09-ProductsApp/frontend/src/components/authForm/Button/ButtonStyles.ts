import {StyleSheet} from "react-native";
import {Size} from "../../../models/Size";

const fontSize = {
  small: 14,
  normal: 17,
  large: 20
}

const paddingVertical = {
  small: 7,
  normal: 10,
  large: 13,
}

const paddingHorizontal = {
  small: 17,
  normal: 20,
  large: 23,
}

export const useStyles = (size: Size) => StyleSheet.create({
  container: {
    borderColor: 'white',
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: paddingVertical[size],
    paddingHorizontal: paddingHorizontal[size],
    marginTop: 20
  },
  text: {
    color: 'white',
    fontSize: fontSize[size]
  }
})

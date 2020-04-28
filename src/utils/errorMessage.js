import { showMessage } from "react-native-flash-message";

export default function errorMessage(e) {
  showMessage({
    message: "Erro de validação",
    description: `${e}`,
    backgroundColor: "#ff7171", // background color
  })
}
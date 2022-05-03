import pdf from "@react-pdf/renderer";

const { View, Font, StyleSheet, Document, Page, Image, Text } = pdf;
import { styles } from "./stylesPDF";

const FooterPdf = () => {
  return (
    <View>
      <Text>
        {" "}
        <Text> Evaluación Ginecológica Integral </Text>
        <Text>| Colposcopía</Text>
      </Text>
    </View>
  );
};

export default FooterPdf;

import pdf from "@react-pdf/renderer";
import Img from "./logo.png";

const { View, Font, StyleSheet, Document, Page, Image, Text } = pdf;

import { styles } from "./stylesPDF";
import FooterPdf from "./FooterPdf";

const Pdf = () => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View style={styles.header}>
          <Image src={Img} style={styles.img} />
          <Text style={styles.fecha}>22 de Febrero 2022 Detalle</Text>
        </View>
        <Text style={styles.title}>
          Evaluación Ginecológica Integral{" "}
          <Text style={styles.titleSpan}>| Colposcopía</Text>
        </Text>
        <View style={styles.info}>
          <Text style={styles.paciente}>PACIENTE</Text>
          <Text style={styles.pacienteNombre}>
            María de los Ángeles Porras Lluen
          </Text>
          <Text style={styles.pacienteData}>
            DNI 78765478 · 28 años · +51 998272762
          </Text>
        </View>
        <View style={styles.sectionData}>
          <Text style={styles.field}>ANTECEDENTES</Text>
          <View style={styles.fieldData}>
            <View style={styles.fieldDataLeft}>
              <Text>Etapa fertil</Text>
              <Text>Periodo de lactancia</Text>
              <Text>Ciclo menstrual irregular</Text>
              <Text>No recuerda fecha de última regla</Text>
              <Text>0 Gestaciones</Text>
              <Text>0 Partos</Text>
            </View>
            <View style={styles.fieldDataRight}>
              <View>
                <Text style={styles.fieldDataTitle}>
                  Intervenciones en cuello uterino
                </Text>
                <Text>Cono asa, Cono frío, Crioterapia</Text>
              </View>
              <View style={styles.fieldDataRightBottom}>
                <Text style={styles.fieldDataTitle}>
                  Antecedentes de cáncer familiar
                </Text>
                <Text>Mama, Endometrio, Ovario, Colón</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sectionData}>
          <Text style={styles.field}>MOTIVO DEL EXAMEN</Text>
          <View style={styles.fieldData}>
            <Text>Seguimiento normal</Text>
          </View>
        </View>
        <View style={styles.sectionData}>
          <Text style={styles.field}>EXAMEN FÍSICO</Text>
          <View style={styles.fieldData}>
            <View style={styles.fieldDataColumn}>
              <Text style={styles.fieldDataTitle}>Vulva</Text>
              <Text>Normal</Text>
            </View>
            <View style={styles.fieldDataColumn}>
              <Text style={styles.fieldDataTitle}>Vagina</Text>
              <Text>Normal</Text>
            </View>
            <View style={styles.fieldDataColumn}>
              <Text style={styles.fieldDataTitle}>Perineo</Text>
              <Text>Episiorrafia</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionData}>
          <Text style={styles.field}>RESULTADO DEL EXAMEN</Text>
          <View style={styles.fieldData}>
            <Text>Adecuado</Text>
          </View>
        </View>
        <View style={styles.sectionData}>
          <Text style={styles.field}>HALLAZGOS EN EL CUELLO UTERINO</Text>
          <View style={styles.fieldData}>
            <View style={styles.fieldDataHallazgos}>
              <View style={styles.fieldDataHallazgosZona}>
                <Text style={styles.fieldDataTitle}>
                  Zona de transformación
                </Text>
                <Text>ZT1</Text>
              </View>
              <View style={styles.fieldDataHallazgosZona}>
                <Text style={styles.fieldDataTitleBlue}>
                  HALLAZGOS NORMALES
                </Text>
                <View style={styles.fieldDataHallazgosBottom}>
                  <View style={styles.fieldDataColumn}>
                    <Text style={styles.fieldDataTitle}>
                      Epitelio escamoso original
                    </Text>
                    <Text>Maduro</Text>
                  </View>
                  <View style={styles.fieldDataColumn}>
                    <Text style={styles.fieldDataTitle}>
                      Epitelio metaplásico
                    </Text>
                    <Text>Presenta Quistes de Naboth</Text>
                  </View>
                  <View style={styles.fieldDataColumn}>
                    <Text style={styles.fieldDataTitle}>Epitelio columnar</Text>
                    <Text>Ectropion</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* <FooterPdf /> */}

        <Text
          style={styles.pagination}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page size="A4" style={styles.body}>
        <Text>Page 2</Text>
        <Text
          style={styles.pagination}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default Pdf;

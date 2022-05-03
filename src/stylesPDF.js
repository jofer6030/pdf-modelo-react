import pdf from "@react-pdf/renderer";
const { StyleSheet, Font } = pdf;

import InterBold from "./fonts/static/Inter-Bold.ttf";
import InterLight from "./fonts/static/Inter-Light.ttf";
import InterMedium from "./fonts/static/Inter-Medium.ttf";
import InterRegular from "./fonts/static/Inter-Regular.ttf";
import InterSemiBold from "./fonts/static/Inter-SemiBold.ttf";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: InterBold,
      fontWeight: "bold",
    },
    {
      src: InterLight,
      fontWeight: "light",
    },
    {
      src: InterRegular,
      fontWeight: "normal",
    },
    {
      src: InterMedium,
      fontWeight: "medium",
    },
    {
      src: InterSemiBold,
      fontWeight: "semiBold",
    },
  ],
});

export const styles = StyleSheet.create({
  body: {
    paddingTop: 32,
    paddingBottom: 65,
    paddingHorizontal: 40,
    fontFamily: "Inter",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  img: {
    width: 64,
    height: 32,
  },
  fecha: {
    fontSize: 8,
    fontWeight: "light",
    color: "#384B56",
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "semiBold",
    marginVertical: 25,
    color: "#384B56",
  },
  titleSpan: {
    color: "#007CC3",
  },
  info: {
    color: "#384B56",
    lineHeight: 1.6,
  },
  paciente: {
    color: "#7C8E98",
    fontSize: 8,
    fontWeight: "semiBold",
  },
  pacienteNombre: {
    fontWeight: "medium",
    fontSize: 10,
  },
  pacienteData: {
    fontSize: 8,
    fontWeight: "light",
  },
  sectionData: {
    fontSize: 8,
    color: "#384B56",
    display: "flex",
    flexDirection: "row",
    marginTop: 26,
  },
  field: {
    fontWeight: "semiBold",
    color: "#7C8E98",
    width: 94,
    position: "relative",
    bottom: 4,
  },
  fieldData: {
    borderTop: "1px solid #7C8E98",
    flex: "1",
    paddingTop: 8,
    display: "flex",
    flexDirection: "row",
    marginLeft: 21,
    fontWeight: "light",
    lineHeight: 2,
  },
  fieldDataLeft: {
    marginRight: 87,
  },
  fieldDataTitle: {
    fontWeight: "medium",
  },
  fieldDataRightBottom: {
    marginTop: 8,
  },
  fieldDataColumn: {
    marginRight: 105,
  },
  fieldDataHallazgos: {
    width: "100%",
  },
  fieldDataHallazgosZona: {
    borderBottom: "1px dashed #7C8E98",
  },
  fieldDataTitleBlue: {
    color: "#007CC3",
    fontWeight: "light",
    marginTop: 8,
    marginBottom: 4,
  },
  fieldDataHallazgosBottom: {
    display: "flex",
    flexDirection: "row",
  },
  pagination: {
    position: "absolute",
    bottom: 24,
    right: 24,
    fontSize: 10,
    color: "#204860",
    fontWeight: "semiBold",
  },
});

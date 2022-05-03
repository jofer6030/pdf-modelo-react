import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Pdf from "./Pdf";
import pdf from "@react-pdf/renderer";

const { PDFViewer, PDFDownloadLink } = pdf;
import img from "./logoimm.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PDFViewer
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Pdf />
      </PDFViewer>
      <PDFDownloadLink document={<Pdf />} fileName="pdfInforme">
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
    </div>
  );
}

export default App;

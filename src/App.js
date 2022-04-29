

import ReactPdf from './Component/ReactPdf';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  return (
    <div >
      {/* <PDFDownloadLink document={<ReactPdf />} fileName="somename.pdf">
      {({loading}) =>
        loading ? <button>loading</button> : <button>'Download now!'</button>
      }
    </PDFDownloadLink> */}
      
      <ReactPdf></ReactPdf>
      
    </div>
  );
}

export default App;

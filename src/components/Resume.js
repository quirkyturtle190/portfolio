// Import the styles
import { Document, Page, pdfjs } from "react-pdf";
import "./Resume.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {
    return (
        <div className="pdf">
            <Document file="portfolio/resume.pdf" options="pdf.worker.js">
                <Page pageNumber={1} width={1500}/>
            </Document>
        </div>
    );
}
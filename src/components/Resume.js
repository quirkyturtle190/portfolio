// Import the styles
import { Document, Page, pdfjs } from "react-pdf";
import "./Resume.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume() {
    return (
        <div className="resume">
            <Document file="/resume.pdf" options="pdf.worker.js">
                <Page pageNumber={1} height={document.getElementsByClassName('resume')[0]?.clientHeight*0.8 ?? 150}/>
            </Document>
        </div>
    );
}
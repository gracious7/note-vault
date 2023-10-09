import PdfViewer from './PdfPreview';

function View() {
  // Provide a default value (empty string) if selectedPdfUrl is null
   const pdfurl = "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview"

  return (
    <div className="min-h-screen flex items-center justify-center">
      <PdfViewer pdfUrl={pdfurl} />
    </div>
  );
}

export default View;

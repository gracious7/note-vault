import React from 'react';

import PdfViewer from './PdfPreview';

function View() {
   const pdfUrl = "https://drive.google.com/file/d/1jMzhKL3f9R1DnIin9Ac7oIvlHzqArjdp/preview"

  return (
    <div className="min-h-screen flex items-center justify-center">
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default View;

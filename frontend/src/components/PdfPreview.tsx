import React from 'react';
import AdminSidebar from './AdminSidebar';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  // Convert the provided URL to the embedded URL format
  const embedUrl = pdfUrl;

  return (
  <div className="admin-container">
   <AdminSidebar />
      <main className="dashboard">
         <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full mr-4"> 
               <h4 className="text-center text-xl font-semibold mb-4">A book is a dream that you hold in your hand.</h4>
                  <div className="aspect-w-16 aspect-h-9">
                     <iframe
                        src={embedUrl}
                        className="w-[850px] h-[500px]"
                        frameBorder="0"
                        title="PDF Viewer"
                     ></iframe>
                  </div>
            </div>
         </div>
      </main>
    </div>
  );
};

export default PdfViewer;

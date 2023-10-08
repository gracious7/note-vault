declare module 'pdfjs-dist/webpack' {
   const pdfjsLib: any;
   export default pdfjsLib;
 }
 
 declare module 'pdfjs-dist/build/pdf.worker' {
   const worker: any;
   export default worker;
 }
 
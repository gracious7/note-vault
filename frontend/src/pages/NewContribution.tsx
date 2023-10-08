import { useState, ChangeEvent, FormEvent } from 'react';
import AdminSidebar from '../components/AdminSidebar';


const NewContribution = () => {
  const [file, setFile] = useState<File | null>(null);
  const [bookOrCopy, setBookOrCopy] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [branch, setBranch] = useState<string>('');
  const [semester, setSemester] = useState<string>('');
  const [subject, setSubject] = useState<string>('');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile: File | undefined = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile: File | null = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setFileName(droppedFile.name);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your actual API endpoint for handling contributions
    const apiUrl = 'YOUR_API_ENDPOINT';

    if (file && bookOrCopy && fileName && branch && semester && subject) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('bookOrCopy', bookOrCopy);
        formData.append('fileName', fileName);
        formData.append('branch', branch);
        formData.append('semester', semester);
        formData.append('subject', subject);

        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          // Contribution created successfully, you can redirect or show a success message
          console.log('Contribution created successfully!');
          setFile(null);
          setBookOrCopy('');
          setFileName('');
          setBranch('');
          setSemester('');
          setSubject('');
        } else {
          // Handle contribution creation failure, show an error message, or perform other actions
          console.error('Contribution creation failed!');
        }
      } catch (error) {
        console.error('Error while creating the contribution:', error);
      }
    } else {
      // Handle validation errors, e.g., show a message to the user
      console.error('Please fill in all fields.');
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="contribution-management">
        <article>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:mr-9 lg:my-4 mt-14 mx-4" >
            <h2 className="text-3xl font-semibold mb-4 text-center">Upload here</h2>
            <div className="mb-4">
              <div
                className="border-dashed border-2 border-gray-300 p-4 rounded cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <label htmlFor="file" className="text-gray-600 cursor-pointer">
                  Drag and drop your file here or click to select a file.
                </label>
                {file && <p className="mt-2">{file.name}</p>}
              </div>
              <input
                type="file"
                id="file"
                accept=".pdf, .doc, .docx, .txt, .jpeg, .png," // Specify allowed file types
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Book or Copy</label>
              <input
                required
                type="text"
                placeholder="Book or Copy"
                value={bookOrCopy}
                onChange={(e) => setBookOrCopy(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">File Name</label>
              <input
                required
                type="text"
                placeholder="File Name"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Branch</label>
              <input
                required
                type="text"
                placeholder="Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Semester</label>
              <input
                required
                type="text"
                placeholder="Semester"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Subject</label>
              <input
                required
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-indigo-400"
              />
            </div>

            <button
              type="submit"
              className="bg-[#056be0] text-white font-semibold px-4 py-2 rounded hover:bg-[#054ae0] transition duration-300"
            >
              Create
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewContribution;
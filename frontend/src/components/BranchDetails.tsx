import React from 'react';
import data from '../assets/data/data.json';

// Define the interfaces for the data structure
interface Section {
  name: string;
  link: string;
  contributor: string;
  uploadedDate?: string;
}

interface SemesterData {
  books: Section[];
  topper_notes: Section[];
  videos: { name: string; link: string }[];
}

const BranchDetails: React.FC = () => {
  // Replace 'branchName' and 'semesterName' with actual data from your component state
  const branchName = 'Computer Science';
  const semesterName = 'Semester 2';

  // Get the data for the specified branch and semester
  const branchData = data[branchName];
  const semesterData = branchData && branchData[semesterName];

  // Example function to render sections
  const renderSections = (sections: Section[]) => {
    return (
      <ul className="divide-y divide-gray-300">
        {sections.map((section, index) => (
          <li key={index} className="py-2">
            <div className="text-gray-800 font-semibold">{section.name}</div>
            <div className="text-sm text-gray-600">
              Link: <a href={section.link} target="_blank" rel="noopener noreferrer">{section.link}</a>
            </div>
            <div className="text-sm text-gray-600">
              Contributor: {section.contributor}
            </div>
            {section.uploadedDate && (
              <div className="text-sm text-gray-600">
                Uploaded Date: {section.uploadedDate}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">{branchName} - {semesterName}</h1>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Books</h2>
        {semesterData && semesterData.books && renderSections(semesterData.books)}
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Topper Notes</h2>
        {semesterData && semesterData.topper_notes && renderSections(semesterData.topper_notes)}
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Videos</h2>
        {semesterData && semesterData.videos && renderSections(semesterData.videos)}
      </div>
    </div>
  );
};

export default BranchDetails;

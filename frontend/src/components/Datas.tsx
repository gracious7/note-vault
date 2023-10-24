
import data from "../assets/data/data.json"; // Replace with the actual path

const branchx = "Bio-Medical";
const semesterx = "Semester 1";
const subjectx = "Digital Communication";

const books = data[branchx][semesterx][subjectx].books;
const videos = data[branchx][semesterx][subjectx].videos;
const topperNotes = data[branchx][semesterx][subjectx].topper_notes;

const BookSection = () => {
  return (
    <div>
      <h2>Books:</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <a href={book.link}>{book.name}</a>
          </li>
        ))}
      </ul>

      <h2>Videos:</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <a href={video.link}>{video.name}</a>
          </li>
        ))}
      </ul>

      <h2>Topper Notes:</h2>
      <ul>
        {topperNotes.map((note, index) => (
          <li key={index}>
            <a href={note.link}>{note.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSection;

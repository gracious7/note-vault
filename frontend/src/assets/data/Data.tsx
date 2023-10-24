interface Video {
   name: string;
   link: string;
 }
 
 interface SubjectData {
   books: Array<{
     name: string;
     link: string;
     contributor: string;
     uploadedDate: string;
   }>;
   topper_notes: Array<{
     name: string;
     link: string;
     contributor: string;
     uploadedDate: string;
   }>;
   videos: Video[];
 }
 
 interface SemesterData {
   [subject: string]: SubjectData;
 }
 
 interface BranchData {
   [semester: string]: SemesterData;
 }
 
 interface Data {
   [branch: string]: BranchData;
 }
 
 // Example data (adjust to match your data structure)
 const data: Data = 
 {
   "Bio-Medical": {
       "Semester 1": {
           "Digital Communication": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Operating System": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Microprocessor & Microcontroller": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Digital Image Processing": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Pattern recognition": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Control System Engineering": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Data Science": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        }
    },
    "Semester 2": {
        "Digital Communication": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Operating System": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Microprocessor & Microcontroller": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Digital Image Processing": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Pattern recognition": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Control System Engineering": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Data Science": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        }
    },
    "Semester 3": {
        "Digital Communication": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Operating System": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Microprocessor & Microcontroller": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Digital Image Processing": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Pattern recognition": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Control System Engineering": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        },
        "Data Science": {
            "books": [
                {
                    "name": "B.P. Lathi, Zhi Ding Modern Digital and Analog Communication",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Sahyog-The Mentorship Club",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "topper_notes": [
                {
                    "name": "Digital Communication same as book",
                    "link": "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
                    "contributor": "Big3",
                    "uploadedDate": "25-10-2023"
                }
            ],
            "videos": [
                {
                    "name": "Gate Smasher",
                    "link": "https://www.youtube.com/watch?v=O0gtKDu_cJc&list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe&index=1"
                }
            ]
        }
    },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },  
   "Bio-Technology": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Chemical": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Computer Science": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Electronics & Communication": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Electrical": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Information Technology": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Mechanical": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Metallurgy & Material": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Mining": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "Civil": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   },
   "B.Arch": {
       "Semester 1": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 2": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 3": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 4": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 5": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 6": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 7": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       },
       "Semester 8": {
           "Digital Communication": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Operating System": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Microprocessor & Microcontroller": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Digital Image Processing": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Pattern recognition": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Control System Engineering": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           },
           "Data Science": {
               "books": [
                   {
                       "name": "Book 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "topper_notes": [
                   {
                       "name": "Topper Note 1",
                       "link": "Link 1",
                       "contributor": "Contributor 1",
                       "uploadedDate": "2023-10-23"
                   }
               ],
               "videos": [
                   {
                       "name": "Video 1",
                       "link": "Link 1"
                   }
               ]
           }
       }
   }
}

export default data;
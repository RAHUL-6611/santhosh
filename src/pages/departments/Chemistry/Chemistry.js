import { getImageUrl } from "../../../config";

import blab from "./facility/BTech_Lab_1.jpg"
import clab from "./facility/Cheminformatics_Lab 1.jpg"

export const Chemistry = {
	basePath: "/chem",
	About: {
		DeptName: "Chemistry Department",
		ShortName: "CHEM",
		LongName: "DEPARTMENT OF CHEMISTRY",

		DeptImg: getImageUrl("unknown.jpg"),

		count: [
			{
				name: "Ph.D Scholars",
				count: 45,
			},
		],

		about: `The Department of Chemistry has been functioning right from the inception of the institution in 1985. The Department initially functioned as a supporting department catering to the demands of the under-graduate students. The Ph.D. research program was started from the year 1997 onwards. The Department is handling mainly B. Tech (Chemistry and Chemistry Laboratory). In addition to that it is also supporting B. Tech Chemical Engineering and PG courses, M. Tech and M.Sc., offered by Civil Engineering and Physics Department respectively. The department is equipped with Laboratory facility to conduct B. Tech laboratory courses.
			Over the years, the department has developed intellectual capacity to carryout research activities in the fields of Polymer Chemistry and Chemiformatics. The department has a total of 74 publications so far in reputed journals of high impact factor. Also the department has secured sponsored research grants to the tune of Rs. 80 Lahks from the funding agencies such as DST, UGC-DAE CSR, MoEF, and CSIR
			`,

		vision: [
			{
				point:
					"To develop a suitable platform for enriching and creating the chemical knowledge needed for Technical Education.",
			},
		],

		Mission: [
			{
				point:
					"To update infrastructural and intellectual capability of the Department for the changing needs of Technical Education.",
			},
			{
				point:
					"To impart quality teaching by adopting innovative Pedagogical approaches.",
			},
		],

		Hod: {
			name: "Dr. S. Rajagopan",
			Designation: "HOD CHEMISTRY Department",
			content:
				"HOD Cse Department Welcome to the department of Computer Science and Engineering. Here we will explore This is the message by cse hod.",
			img: getImageUrl("Unknown_person.jpg"),
		},
	},

	Faculty: {
		
	},
	Research: [
		{
			name: "complex forming acrylate polymers",
			img: "",
			shortContent: "",
			longContent: "Novel complex forming acrylate polymers for metal ion recovery (Dr. T. Kaliyappan), DST (Young Scientist Scheme), 7.92 Lahks",
		},
		{
			name: "Synthesis, Structure and optical properties of polymer",
			img: "",
			shortContent: "",
			longContent: "Synthesis, Structure and optical properties of polymer gelled photonic crystals by irradiation and non-implantation techniques (Dr. T. Kaliyappan), UGC-DAE CSR, 9.6 Lakhs",
		},
		{
			name: "chelating polymers",
			img: "",
			shortContent: "",
			longContent: "Development of novel chelating polymers for the effective sorption of chromium ions from tannery wastes (Dr. T. Kaliyappan), MoEF, 17.3 Lakhs",
		},
		{
			name: "Functional chelating polymeric ligands",
			img: "",
			shortContent: "",
			longContent: "Functional chelating polymeric ligands for industrial effluent treatment (Dr.T. Kaliyappan), CSIR, 21.0 Lakhs",
		},
		{
			name: "Ontology",
			img: "",
			shortContent: "",
			longContent: "Ontology based reactivity modelling system for organic chemicals through a semantic structure markup method (Dr.P.Sankar), DST, 24.25 Lakhs",
		},
		
	],
	curriculum: [
		{
			name: "B.Tech",
			desc: "A Bachelor of Technology is an undergraduate academic degree conferred after the completion of a three-year, a four-year or a five-year program of studies at an accredited university or accredited university-level institution.",
			regulations: {},
			syllabusPdfLink: [
				{
					name: "Regulations",
					link:"",
				},
				{
					name: "Curriculum ",
					link:"",
				}
			],
		},
		{
			name: "B.Tech",
			desc: "A degree conferred after the completion of a three-year, a four-year or a five-year program of studies at an accredited university or accredited university-level institution.",
			regulations: {},
			syllabusPdfLink: [
				{
					name: "Regulations",
					link:"",
				},
				{
					name: "Curriculum ",
					link:"",
				}
			],
		},
		
	],
	facilities: [
		{
			name: "Btech LAB 1",
			img: blab,
			content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at tempore hic, consectetur autem laudantium non doloribus unde nihil error reprehenderit et porro, ea in totam quo iusto dolore velit."
		},
		{
			name: "Research Laboratory I - Research in the area of Polymer Science",
			img: clab,
			content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at tempore hic, consectetur autem laudantium non doloribus unde nihil error reprehenderit et porro, ea in totam quo iusto dolore velit."
		},
		{
			name: "Research Laboratory II - Research in the area of Cheminformatics",
			img: clab,
			content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at tempore hic, consectetur autem laudantium non doloribus unde nihil error reprehenderit et porro, ea in totam quo iusto dolore velit."
		},
	],
};

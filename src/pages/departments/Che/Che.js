import { getImageUrl } from "../../../config";

import Image from "../../../../src/components/assets/Unknown_person.jpg";

import Dimg from "../../../../src/components/assets/chem.jpg";

export const Che = {
	basePath: "/che",
	About: {
		DeptName: "Chemical engineering",
		ShortName: "CHE",
		LongName: "DEPARTMENT OF CHEMICAL ENGINEERING",

		DeptImg: Dimg,

		count: [
			{
				name: "B.Tech Students",
				count: 170,
			},
		],

		about:
			"The Department of chemical engineering was established in the year 1998 with a vision to impart high quality chemical engineering education and to serve the needs of industries and societies through technical services, consultancy and research. This department is only the sixth chemical engineering department in the Government/Government aided sector in the region of Tamil Nadu and Puducherry. The department offers a B.tech course in Chemical Engineering with an annual intake of 30 students in first year and 6 students in second year through lateral entry scheme. The department jointly with the Department of Civil Engineering is also offering an M.Tech course in Environmental Engineering from the academic year 2003-2004. The Department is steered to achieve the pinnacles of excellence by a team of highly qualified and dedicated faculty members, whose area of specialisation include petroleum and petrochemicals, process control and simulation, energy technology, process engineering and design.",

		vision: [
			{
				point:
					"To become a Department that Imparts High Quality Education to its Graduates and prepares them to be leaders in Chemical Engineering and Allied Fields.",
			},
		],

		Mission: [
			{
				point:
					"To Provide Strong Technical Foundation in the Field of Chemical Engineering",
			},
			{
				point:
					"To Prepare the Students Coming from Different Socio Economic Levels for a Successful Career in Chemical and Allied Engineering Fields",
			},
			{
				point:
					"To make Professional Leaders, Academicians and Engineers with the highest moral values and ethics.",
			},
		],

		Hod: {
			name: "Dr. R. Sridar",
			designation: "HOD CHE department",
			img: Image,
			phnNo: "9894757209",
			email: "hod.che@pec.edu",
			content: `The Department of Chemical Engineering is the only department both in the Govt. and
			Private Institutions offering Chemical Engineering in the region of Puducherry. The
			department has a small team of dedicated faculty members specialized in Process Systems
			Engineering and Control, Plant Design and Membrane Separations, Process Design and
			Supercritical Fluids, Petroleum Refining and Petrochemicals, Environmental Engineering
			and Bio-chemical Engineering. With its expertise, the department has been able to
			significantly contribute to the Government of Puducherry departments like the DSTE and the
			Civil Supplies and Consumer Affairs (DCS &amp; CA). The department has well equipped
			laboratory facilities which can give good hands on experience to its undergraduate students.
			Alumni of the department occupying coveted positions in Academia (IIT, NIT, IIPE, and in
			some US Universities) and Industries (IOCL, BARC, IGCAR, EIL, RIL, BIOCON, IDEA,
			ESSAR etc.,) is an asset to the department. The department has the potential to make a
			significant contribution in the area of Process Modeling and Simulation in particular and in
			the other niche areas of Chemical Engineering in general. I am happy to share a great
			moment of happiness and pride as the department is stepping into its 25 th year (Academic
			Year 2022-23) and gearing up for its Silver Jubilee celebration with the launching of a post
			graduate and a Ph.D programmes. I am sure that the department is poised to create a
			positive impact not only in the region of Puducherry but also at the National/International
			arena.`,
		},
	},
	Faculty: {
		professors: {
			title: "Professors",
			faculties: [
				{
					name: "Dr. G.Zayaraz, B.Tech., M.Tech., Ph. D.,",
					img: getImageUrl("ZayarazG.png"),
					Subject: "Software Architecture, Information Security",
					email: "gzayaraz@pec.edu",
					number: 9443958140,
				},
				{
					name: "Dr.D.Loganathan, M.Sc.(Tech.), Ph. D",
					img: getImageUrl("img6.jpg"),
					Subject: "Database Systems, Graphics, Automata & Management",
					email: "drloganathan@pec.edu",
					number: 9486018682,
				},
				{
					name: "Dr.N.Sreenath, M.Tech.,Ph.D.(IIT-M).,",
					img: getImageUrl("img8.jpg"),
					Subject: "High speed networks, Optical Network",
					email: "nsreenath@pec.edu",
					number: 9443289642,
				},
				{
					name: "Dr. K. Vivekanandan, B. E., M. Tech.,Ph.D.",
					img: getImageUrl("img2.jpg"),
					Subject: "Software Engineering, Agile Programming",
					email: "k.vivekanandan@pec.edu",
					number: 9443777795,
				},
				{
					name: "Dr.E. Ilavarasan, M.Tech., Ph. D",
					img: getImageUrl("img7.jpg"),
					Subject: "Distributed Systems, Microprocessors",
					email: "eilavarasan@pec.edu",
					number: 9443084714,
				},
				{
					name: "Dr. Ka. Selvaradjou, M.Tech., Ph.D.,",
					qualification: "Phd, M.tech cse, B.tech",
					Year: 10,
					img: getImageUrl("img3.jpg"),
					Subject: " Microprocessors, Computer Hardware & Sensor Networks",
					email: "selvaraj@pec.edu",
					number: 9444684258,
				},
				{
					name: "Dr. M. Sugumaran, M.Sc.,M.Phil.,M.Tech.,Ph.d",
					img: getImageUrl("img4.jpg"),
					Subject: "Algorithms, Theoretical ComputerScience, Computer Networks",
					email: "sugu@pec.edu",
					number: 9488829865,
				},
				{
					name: "Dr. R. Manoharan, M.Tech., Ph.D.,",
					img: getImageUrl("img5.jpg"),
					Subject:
						"High Speed Networks, Internet Technology, Software Engineering",
					email: " rmanoharan@pec.edu",
					number: 9443468480,
				},
				{
					name: "Dr. F. Sagayaraj Francis, M.Tech., M.B.A., Ph. D.,",
					img: getImageUrl("img1.png"),
					Subject: "Database Systems, Graphics, Automata & Management",
					email: " fsfrancis@pec.edu",
					number: 9443467590,
				},
				{
					name: "Dr. (Mrs). R.Kalpana, B.Tech., M.Tech., Ph. D.,",
					img: getImageUrl("Unknown_person.jpg"),
					Subject: "OOD, Distributed Computing, Middleware Technology",
					email: " rkalpana@pec.edu",
					number: 9443051212,
				},
				{
					name: "Dr. A. Amuthan, B.Tech., M. E., Ph. D.,",
					img: getImageUrl("Unknown_person.jpg"),
					Subject: "Software Engineering , Computer Networks, Network Security",
					email: " amuthan@pec.edu",
					number: 9444104373,
				},
			],
		},

		associateProfessors: {
			title: "Associate Professors",
			faculties: [
				{
					name: "Dr.S.Lakshmana Pandian, B.E., M.E., Ph. D.,",
					img: getImageUrl("img9.jpg"),
					Subject: " Language Technologies, Compiler Design",
					email: "lpandian72@pec.edu",
					number: 9443101692,
				},
				{
					name: "Dr. (Mrs.) K. Saruladha, B.Tech., M.Tech., Ph.D.,",
					img: getImageUrl("img11.jpg"),
					Subject:
						"Ontology matching, Data management, Opinion mining and Sentiment analysis",
					email: "charuladha@pec.edu",
					number: 9442396080,
				},
				{
					name: "Dr. (Mrs.) J. Jayabharathy, B.Tech., M.Tech., Ph. D.,",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Distributed Computing",
					email: " bharathyraja@pec.edu",
					number: 9443292660,
				},
				{
					name: "Dr.K.Sathiyamurthy, M.Tech.,Ph. D.,",
					img: getImageUrl("img10.jpg"),
					Subject:
						"Web Services and Internet Technology, NLP, Information Retrieval, E-Learning.",
					email: "sathiyamurthyk@pec.edu",
					number: 9443459362,
				},
				{
					name: "Dr. E. Karunakaran, M.Tech., Ph. D.,",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: " Microprocessors, Computer Hardware & Sensor Networks",
					email: "ekaruna@pec.edu",
					number: 9442156328,
				},
			],
		},

		assistantProfessors: {
			title: "Assistant Professors",
			faculties: [
				{
					name: "Dr.N. Sivakumar, B.Tech., M.Tech., Ph.D., MHRM",
					img: getImageUrl("img15.jpg"),
					Subject: "Database Management System, Computer Graphics",
					email: "sivakumar11@pec.edu",
					number: 9840901054,
				},
				{
					name: "Ms.R. Sarala, B.Tech., M.Tech.,",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Computer Networks, Software Engineering",
					email: "sarala@pec.edu",
					number: 9442366902,
				},
				{
					name: "Dr.J.Kumaran @ Kumar, M.C.A.,M.Tech., Ph. D.,",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "AOP, Programming Languages",
					email: "kumaran@pec.edu",
					number: 944330076,
				},
				{
					name: "Dr.M. Thirumaran, B.Tech., M.Tech., Ph. D.",
					qualification: "Phd, M.tech cse, B.tech",
					Year: 10,
					img: getImageUrl("img13.jpg"),
					Subject:
						"Automata Languages and Computation, Compiler Design, Web Technology",
					email: "thirumaran@pec.edu",
					number: 9894593367,
				},
				{
					name: "Dr. (Mrs.) V. Akila, B.E., M.E., Ph. D.,",
					img: getImageUrl("img16.jpg"),
					Subject: "Mining Software Repositories, Social Network Analysis",
					email: "akila@pec.edu",
					number: 9786853753,
				},
				{
					name: "Dr. (Mrs.) Salini P, B.Tech., M.Tech., Ph.D.,",
					img: getImageUrl("img14.jpg"),
					Subject:
						"Software Engineering, Information Security, Distributed Computing",
					email: "salini@pec.edu",
					number: 9994738640,
				},
				{
					name: "Dr. M. Thenmozhi, B.Tech., M.E.,Ph. D.,",
					img: getImageUrl("img12.jpg"),
					Subject:
						"Data Warehousing and Data Mining, Distributed Computing, Operating Systems, Ontology",
					email: "thenmozhi@pec.edu",
					number: 9500893708,
				},
				{
					name: "Dr. (Mrs.) J. I. Sheeba, B.E., M.E., Ph. D.,",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Data Mining, Network Security, Database Management System",
					email: "sheeba@pec.edu",
					number: 9443084976,
				},
			],
		},

		supportingStaff: {
			title: "Supporting Staff",
			faculties: [
				{
					name: "Dr. (Mrs.) R. Kavitha Kumar, M.Sc., M.Phil., Ph. D.,",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "OOPS, Web Design, Pervasive Computing",
					email: "rkavithakumar@pec.edu",
					number: 0,
				},
				{
					name: "Mr.P.Sethuraman ",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Junior Instructor",
					email: "",
					number: 0,
				},
				{
					name: "Mr.N.Shanmugam ",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Junior Instructor",
					email: "",
					number: 0,
				},
				{
					name: "Mr.K.Carounamourthy ",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Mechanic",
					email: "",
					number: 0,
				},
				{
					name: "Mr.D.Soundramoorthy ",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Mechanic",
					email: "",
					number: 0,
				},
				{
					name: "Mr.J.Codandaraman ",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Lab. Attendant",
					email: "",
					number: 0,
				},
				{
					name: "Mr.K.Azhiaselvam ",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Lab. Attendant",
					email: "",
					number: 0,
				},
				{
					name: "Mr.L.Ayyappan",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Lab. Attendat",
					email: "",
					number: 0,
				},
				{
					name: "Mr.Devanandan",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "Lab. Attendat",
					email: "",
					number: 0,
				},
				{
					name: "Mr.K.Banugoban",
					img: getImageUrl("Unknown_person.jpg"), //unknown
					Subject: "MTS",
					email: "",
					number: 0,
				},
			],
		},
	},
	Research: [
		{
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		{
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		{
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		{
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		{
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		{
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
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
		
	],
};

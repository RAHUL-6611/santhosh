import { getImageUrl } from "../../../config";

import Image from "../../../../src/components/assets/IT_HOD.png";

import Dimg from "../../../../src/components/assets/audi.jpg";

export const MBA = {
	basePath: "/MASTER-BUSINESS-ADMINISTRATION",
	About: {
		DeptName: "Business and Administration",
		ShortName: "MBA",
		LongName: "DEPARTMENT OF MASTER OF BUSINESS ADMINISTRATION",

		DeptImg: Dimg,

		count: [
			{
				name: "B.Tech Students",
				count: 185,
			},
			{
				name: "M.Tech IOT Students",
				count: 12,
			},
		],

		about:
			"The Department of Information Technology has well experienced faculty, skilled technical staff and well equipped laboratories. MBA offers one undergraduate program B.Tech. (Information Technology). MBA aims at providing high qualMBAy training to students through the latest in Information Technology. In order to maintain the standard of education, MBA constantly upgrades the academic syllabi so as to keep the students well to deal wMBAh changing trends in the field of Information Technology. MBA also emphasizes on Information SecurMBAy, Image Processing, Software Engineering, Optical and Mobile Networks, Soft Computing, Complex Event Processing, Data Mining, Web Technology and several other recent topics. The Department of Information Technology is accredMBAed by NBA (National Board of AccredMBAation). So far, eight batches of students have successfully completed the degree course wMBAh flying colours.",

		vision: [
			{
				point:
					"To Produce Competent Professionals in Information Technology so as to Achieve the Global Innovation of Engineering and Technology",
			},
		],

		Mission: [
			{
				point:
					"To Provide High Quality Education and Training in Information Technology Through Advanced Learning Environment with State-of-the Art Facilities, Teaching Methodologies, Contemporary Curriculum and Research",
			},
		],

		Hod: {
			name: "Dr. V. Govindasamy",
			designation: "HOD MBA Department",
			img: Image,
			phnNo: "9488821647",
			email: "vgopu@pec.edu",
			content: `Welcome to Department of Information Technology. 
			Our Department imparts excellence in Engineering Education. 
			The Department of  MBA strongly believes in building career and enriching young minds.
			The  Department offers the three  courses:
			1)  B.Tech in MBA, 
			2)	M. Tech  (IoT),
			3)	Ph.D. 
			I am highly confident that the students of our  Department Students  will show a great level of professional competence.
			Wishing  You success in all your endeavours!`,
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
	Research: [],
	curriculum: [],
	facilities: [],
};

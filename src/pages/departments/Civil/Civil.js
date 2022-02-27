import { getImageUrl } from "../../../config";

import Image from "../../../../src/components/assets/CIVIL_HOD.jpg"

import Dimg from "../../../../src/components/assets/pec_civil.jpg"

export const Civil = {
	basePath: "/Civil",
	About: {
		DeptName: "Civil engineering",
		ShortName: "CIVIL",
		LongName: "DEPARTMENT OF CIVIL ENGINEERING",

		DeptImg: Dimg,

		count : [
			{
				name: "B.Tech Students",
				count : 23
			},
			{
				name: "M.Tech Students",
				count : 23
			},
			{
				name: "MCA Students",
				count : 23
			},
			{
				name: "Ph.d Scholars",
				count : 23
			},
			{
				name: "Faculty",
				count : 23
			},
			{
				name: "Staff",
				count : 23
			},
		],

		about:
			"The Department of Civil Engineering was established during the inception of the college. Apart from offering B.Tech in Civil Engineering, two M.Tech programmes in Structural Engineering and Environmental Engineering specialization and PhD  programme in Civil Engineering are offered. The major strength of this department is its faculty. Highly qualified, experienced and committed faculty members significantly contribute to the growth of the college in general and this department in particular. Students are offered world class training both in theory and practice. Industrial training is part of the curriculum both for UG and PG Students.",

			vision: [
				{
					point : "To create skilled and employable engineers through teaching, training and research to serve and provide sustainable solutions to the society with professional and ethical commitment."
				},
			 ],
			 Mission: [
				{
					point : "To provide a dynamic learning environment through innovative teaching methodologies and contemporary curriculum so as to prepare competitive students for successful profession",
				},
				{
					point : "To impart technical skills through rigorous laboratory practices hands on field training so as to prepare the students to face real world situations.",
				},
				{
					point : "To actively encourage and mentor students through academic and research activities to develop the ability to be creative and innovative, to face the challenges of rapidly changing technology and development.",
				},
			 ],

		Hod: {
			name: "Dr.V.Murugaiyan",
			Designation: "HOD CIVIL department",
			img: Image,
		}
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
	Research: {
		research1: {
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		research2: {
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		research3: {
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		research4: {
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		research5: {
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
		research6: {
			name: "",
			img: "",
			shortContent: "",
			longContent: "",
		},
	},
	curriculum: {
		btech: {
			regulations: {},
			syllabusPdf: "",
		},
		mtech: {
			regulations: {},
			syllabusPdf: "",
		},
		mca: {
			regulations: {},
			syllabusPdf: "",
		},
		phd: {
			regulations: {},
			syllabusPdf: "",
		},
	},
	facilities: [
		{
			name: "Electronic Devices and Circuits Lab",
			img: "",
			content: " practical oriented electronic circuits that are very essential for the students to solidify their theoretical concepts. This Manual provides a communication bridge between the theory and practical world of the electronic circuits.",
		},
		{
			name: "Microprocessor Lab",
			img: "",
			content: "The purpose of this laboratory is to train the students to be familiar with the software and hardware of microprocessors so that they can gain enough experiences to meet the demand of the microprocessor era. The facilities in the laboratory enable students to build a firm background in microprocessor hardware as well as software .",
		},
		{
			name: "Embedded System Design Lab",
			img: "",
			content: "Embedded Systems Design Lab The ESD Lab is used to teach students to design and simulate digital circuits. The lab includes Oscilloscopes, Arbitrary Function Generators, Power Supplies and Multimeters. Many high tech software packages are installed to allow students to create embedded systems.",
		},
		{
			name: "Sensors & Transducers Lab",
			img: "",
			content: "The word “Transducer” is the collective term used for both Sensors which can be used to sense a wide range of different energy forms such as movement, electrical signals, radiant energy, thermal or magnetic energy, etc., and Actuators which can be used to switch voltages or currents.",
		},
		{
			name: "Process Control Lab",
			img: "",
			content: "Multi Process trainer, Multi variable Laboratory type Level Process, Calibration test bench, PLC trainer, Distributed Control system, Control Valve Characteristics Setup,",
		},
		{
			name: "Virtual Instrumentation Lab",
			img: "",
			content: "Virtual instrumentation is the use of customizable software and modular measurement hardware to create user-defined measurement systems, called virtual instruments. Traditional hardware instrumentation systems are made up of fixed hardware components, such as digital multimeters and oscilloscopes that are completely specific to their stimulus, analysis, or measurement function. Because of their hard-coded function, these systems are more limited in their versatility than virtual instrumentation systems.",
		},
	],
};

import { getImageUrl } from "../../../config";

import Image from "../../../../src/components/assets/ECE_HOD.jpg";

import Dimg from "../../../../src/components/assets/ecedept.jpg";

export const ECE = {
	basePath: "/ece",
	About: {
		DeptName: "Electronics and Communication engineering",
		ShortName: "ECE",
		LongName: "DEPARTMENT OF Electronics and Communication engineering",

		DeptImg: Dimg,

		count: [
			{
				name: "B.Tech Students",
				count: 344,
			},
			{
				name: "M.Tech Students(ECE)",
				count: 14,
			},
			{
				name: "M.Tech Students(WC)",
				count: 3,
			},
			{
				name: "Research Scholars",
				count: 66,
			},
		],

		about:
			"The Dept. of Electronics and Communication Engineering, Pondicherry Engineering College was established during the inception of the institute, in 1985. It has a strong undergraduate programme in Electronics and Communication Engineering B.Tech (ECE) along with M.Tech in Electronics and Communication Engineering and M.Tech Wireless Communication and Ph.D degrees. The principal mission of the department is to formulate a very strong foundation in the various aspects of Electronics and Communication and provide training in the contemporary areas such as VLSI, Embedded system, Wireless communication, IOT etc.",

		vision: [
			{
				point:
					"To produce globally competitive and socially sensitized engineering graduates and to bring out quality research in the frontier areas of Electronics and Communication Engineering.",
			},
		],

		Mission: [
			{
				point:
					"To provide quality and contemporary education in the domain of Electronics and Communication Engineering through periodically updated curriculum, best-of-breed laboratory facilities, collaborative ventures with industries and effective teaching-learning process.",
			},
		],

		Hod: {
			name: "Dr. Gnanou Florence Sudha",
			Designation: "HOD ECE department",
			img: Image,
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
		{
			name: "COMMUNICATION LAB-III",
			img: "",
			content:
				"The objective of this lab is to familiarise the students with microwave and optical communication techniques/technologies in microwave communication. The students study the operation and characteristics of microwave sources such as klystron and gunn diodes, load impedance and standing wave measurements, antenna gain and radiation pattern measurements. Optical communication deals with the study of the characteristics of the optical fibre and also analog and digital fibre links using LED and LASER sources.",
		},
		{
			name: "ADVANCED COMMUNICATION LAB",
			img: "",
			content:
				"This lab is an advancement of the communication lab-III where the students perform experiments using advanced equipments such as the vector network analyser, spectrum analyser, DTA and RCA.",
		},
		{
			name: "PG COMMUNICATION DESIGN AND SIMULATION LAB",
			img: "",
			content:
				"This lab course for M.Tech students teaches the students on microwave sources and devices, optical fibre and characteristic and design of microwave and optical fibre communication links. Students are also trained to handle and perform experiments using advanced equipment available in the lab.",
		},
		{
			name: "High Performance Communication Lab",
			img: "",
			content:
				" Facility created for design and analysis of wireless communication systems using advanced testing equipment’s like Spectrum Analyser, CDMA Trainer, High frequency DSO and OFDM trainer kit and Special simulation tools NetSim and QUALNET(Research)",
		},
		{
			name: "Freescale Systems Lab",
			img: "",
			content:
				"This lab has been established as a collaborative venture between Pondicherry Engineering College and M/S Freescale Semiconductors. India Pvt. Ltd. in accordance with the MoU signed during September, 2008. Freescale Semiconductors has donated ninety development tools which include Hardware and Software.",
		},
		{
			name: "COMMUNICATION LABORATORY-I",
			img: "",
			content:
				"Students construct and analyse circuits on analog communication transmitter and receiver. The students conduct experiment to understand the signals available at different stages of AM and FM receivers.",
		},
		{
			name: "COMMUNICATION LABORATORY-II",
			img: "",
			content:
				"The objective of this course is to familiarise the students with different blocks in digital communication different digital communication. Different digital modems and codecs are constructed and tested.",
		},
		{
			name: "Computer Networks Laboratory",
			img: "",
			content:
				"HP Core 2 Duo @2.9 GHz, 2GB RAM, 160GB HDD , Windows 7/ Windows 8. 100Mbps Internet facility. 10KVA UPS.",
		},
		{
			name: "Electronic Devices Laboratory",
			img: "",
			content:
				"The primary objective of the lab is to serve as a platform for understanding the operating principles of electron devices through experiments and also to study their characteristics.",
		},
		{
			name: "DIGITAL CIRCUITS DESIGN LAB",
			img: "",
			content:
				"The lab is intented for sophomores for practising their theoretical knowledge by designing. Constucting and testing the combinational as well as sequential digital circuits.",
		},
		{
			name: "ELECTRONICS CIRCUITS LAB-I",
			img: "",
			content:
				"The students are offered hands-on experience in designing, constructing and testing the analog electronics circuits. The students design the circuits, solder them and then test the performance experimentally. This lab nurtures all the skills that are essential to design and test advanced electronics and communication circuits. The students also validate the experimental results using PSpice computer simulator.",
		},
		{
			name: "ELECTRONICS CIRCUITS LAB-II",
			img: "",
			content:
				"This laboratory course is an advanced extension of Electonics circuits lab-I. The students design advanced analog and pulse circuits.They construct the circuit and test them. This lab builds the confidence of the students to design the advanced electronic circuits. The students study the impact of various design parameters on the performance of the circuits using PSpice computer simulator.",
		},
		{
			name: "Wireless Communication Laboratory",
			img: "Lenovo V530 - Intel® core TM :3-8100 CPU @3.60 GHz 4 GB RAM 64-bit Operating system X64 based processor - Windows 10. HP - Intel® core TM :i5-6500CPU@3.20 GHz 4 GB RAM 64-bit Operating system X64 based processor - Windows 10. Labview 2018 and my RIO tool kit",
			content: "",
		},
	],
};

import { getImageUrl } from "../../../config";

import Image from "../../../../src/components/assets/CSE_HOD.png"


export const CSE = {
	basePath: "/cse",
	About: {
		DeptName: "Computer science and engineering",
		ShortName: "CSE",
		LongName: "COMPUTER SCIENCE AND ENGINEERING",

		DeptImg: getImageUrl("cse.jpg"),

		count : [
			{
				name: "B.Tech Students",
				count : 481
			},
			{
				name: "M.Tech Data Science Students",
				count : 20
			},
			{
				name: "M.Tech Information Security Students",
				count : 19
			},
			{
				name: "Ph.d Scholars",
				count : 85
			},
			{
				name: "MCA Students",
				count : 84
			},
		],

		about:
			"The Department of Computer Science and Engineering was established in the year 1987 with the objective of imparting high quality education in the field of Computer Science. It provides a comprehensive program that emphasizes on Advanced Data Structures and Algorithms, Advanced Software Design, Artificial Intelligence, Parallel and Distributed Systems, Graphics and Image Processing, Machine Learning, Internet of Things, Information Security, Digital Forensics and Big Data Mining.The department has competent and committed faculty which encourages students' involvement in various academic and co-curricular activities. The department has well equipped computer laboratories with more than 400 computers and a Research Laboratory to carry out research and project activities.  The department has the latest infrastructure facilities with high speed Internet, advanced software labs, hardware labs, seminar halls and class rooms equipped with LCD projectors. Students of all programmes can take project internship with different organizations. This component has been included in the curriculum to provide exposure for the students to work in an organization environment, as well as a chance to apply the learning in solving real-world business problems. The department has a long tradition of producing technically competent engineers since 1987 and it has renowned alumni occupying prominent positions in the industry, academia and research all over the world. The students of the department have got placements in major companies like HP, ZOHO, HCL, NOKIA, INFOSYS, RELIANCE, CTS, L&T INFOTECH etc.The Department faculty are actively involved in various AICTE- RPS, UGC and SERB Sponsored Research Projects, Consultancy projects and Collaborative Projects with other government sectors.",

			vision: [
				{
					point : "To explore innovative approaches to enhance and expand learning opportunities through the integration of various technologies."
				},
				{
					point : "To build a strong research and teaching environment that responds to the real-time challenges of the industry.",
				},
				
			 ],

			 Mission: [
				{
					point : "To inculcate the blend of competence, aptitude of knowledge and investigate flair through devising an ambient environment for sustainable learning.",
				},
				{
					point : "To transform attitude, values, priorities by changing mindset and instill positive outlook for socially conscious intellectual development.",
				},
				{
					point : "Incubate, apply and spread innovative ideas to evolve the department as a centre of excellence in thrust areas.",
				},
			 ],

		Hod: {
			name: "Dr. G. Zayaraz",
			Designation: "HOD CSE Department",
			content: "HOD Cse Department Welcome to the department of Computer Science and Engineering. Here we will explore This is the message by cse hod.",
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
			name: "Distributed Computing Lab",
			img: "",
			content: "Intel Core i5 second generation 2400 @ 3.1Ghz 6 MB L3 cache 500 GB 7200 rpm Serial ATA HDD, 2 GB 1066 MHz DDR3 RAM, 18.5 inch Digital Color Monitor, 10/100/ 1000 Network Port. 10 KVA UPS with Exide SMF Batteries (one Hour Backup)",
		},
		{
			name: "Wireless LAN Lab",
			img: "",
			content: "Intel i5 , RAM - 2GB DDR3 1333, Hard Disk 320 GB 7200 RPM SATA / 300 8.5 HDD SATA DVD writer 22x PS/2 key board block 3 button scroll optical USB mouse HCL led wide 18.5 Monitor with Speaker Intel Core i5 second generation 2400 @ 3.1Ghz 6MB L3 cache 500 GB 7200 rpm Serial ATA HDD, 2 GB 1066 MHz DDR3 RAM, 18.5 inch Digital Color Monitor, 10/100/ 1000 Network Port",
		},
		{
			name: "Problem Solving Lab",
			img: "",
			content: "Desktop Computers: INFINITE LA390 PRO Intel Core i5, 2400@3.10 GHz 6MB, Intel H77 Chipset, 2GB DDR3, 500 GB Hard Disk, Accessories, 10/100/1000 On-board NIC Desktop Computers - Intel® Core™ i5-4570 Processor @ 3.2 GHz Processor, Intel chipset H81,4 GB DDR3 RAM , 500 GB HDD, 47 cm (18.5 inch) LED Digital Colour Monitor, 16X DVD writer, 1000 Mbps on board integrated network port Windows 8.1 Professional Licensed Desktop Computers - Intel® Core™ i3-4160 Processor @ 3.6 GHz Processor, 4 GB DDR3 RAM , 500 GB HDD, 47 cm (18.5 inch) LED Digital Color Monitor, 16X DVD writer, 1000 Mbps on board integrated network port Windows 8.1 Professional Licensed Preloaded 10 KVA UPS with Exide SMF Batteries (one Hour Backup)",
		},
		{
			name: "Hardware and Network Trouble Shooting Lab",
			img: "",
			content: "Desktop Computers - Intel® Core™ i5-4570 Processor @ 3.2 GHz Processor, Intel chipset H81,4 GB DDR3 RAM , 500 GB HDD, 47 cm (18.5 inch) LED Digital Colour Monitor, 16X DVD writer, 1000 Mbps on board integrated network port Windows 8.1 Professional Licensed Preloaded 10 KVA UPS with Exide SMF Batteries (one Hour Backup)",
		},
		{
			name: "Information Security Lab",
			img: "",
			content: "HP 406 Series core I5- 4570 DSTP HP Intel core I5-4 th Gen Processor, 4GB DDR3 RAM, 500 GB HDD,DVDRW HP18.5” LED Monitor HP Usb Keyboard&amp; Mouse RestIntel Xeon processor E5 2600 v4 product family. Operating System Options: Microsoft Windows Server 2008 R2. Chipset: Intel C610 series chipset.",
		},
		{
			name: "Embedded Systems Lab",
			img: "",
			content: "HCL Desktop Computers - Intel i5 , RAM - 2GB DDR3 1333, Hard Disk 320 GB 7200 RPM SATA / 300 8.5 HDD SATA DVD writer 22x PS/2 key board block 3 button scroll optical USB mouse HCL led wide 18.5 Monitor with speaker Red Hat V5.5 Media (10 Nos.) HP Desktop Computers - Intel Core i5 4570 @ 3.2 GHz, or Higher, 4 GB DDR3-1600 RAM, 500 GB 7200 RPM SATA Hard Disk or higher, 47cm (18.5 inch) LED Digital Colour monitor, 8X DVD RW or higher, Integrated Intel PRO 10/100/1000 Network (15 Nos.) ARM 7 Trainer Boards, ARM Cortex Trainer Boards Intel Galileo Development Boards, JLINK Debugger Interface kits such as, Matrix Graphic LCD Interface, Real, Time Clock Interface, I2C Interface Card, Temperature Transducer Measurement",
		},
		{
			name: "Microprocessor s and Microcontroller s Lab",
			img: "",
			content: "8085 Microprocessor trainer kits, 8086 Microprocessor trainer kits, 8051Microcontroller trainer kits, Interface kits like Stepper motors, Traffic controllers, Elevators, Music synthesizers, Desktop computers.",
		},
		{
			name: "Data Analytics Lab",
			img: "",
			content: "Desktop Computers - Intel core i5 RAM-2GB DDR3, 320 GB, DVD writer Lx Infinite Pro Bl1280 5W Rms H1 Media Speakers-Black, HCL 3button W/Scroll Optical Mouse- HCL 101+14 button Int Keyboard Blk Vista Kit Free Dos Preloaded LX Infiniti Pro BL 1280, Intel G31 Chipset, Intel Core 2 Duo E7200 2.53GHz 1066MHz 3MB cache, 320 GB HDD, keyboard, mouse, DOS Preloaded 47cm HCL Wide LCD W/Speaker TCO Blk",
		},
		{
			name: "Research Lab",
			img: "",
			content: "Intel Core i3- 4 th Gen Desktop. H81 Intel Chipset, Mother Board, 4GB DDR3 RAM, 500GB HDD, DVD, RW HP 18.5” LED Monitor HP USB Keyboard HP USB mouse Intel Core 2 Duo CPU E 7500 @ 2.93GHz 2.94GHz RAM 2.00GB HID- complaint mouse standard PS/2 Keyboard HCMEL WBTII monitor (HCL)",
		},
		{
			name: "Srinivasa Ramanujam Computer Centre",
			img: "",
			content: "Desktop Computers - Intel Core 2 Duro E 7300 2.666 GHz 3MB Cache 1066 Mhz Fsb DDR2 RAM 667 Mhz Intel G 31 Chipset With Mother Board Optical Mouse 17&quot; TFT Monitor , OS Free Linux /Doss, Microsoft, Novel, HCL Systems Desktop Computers - Intel® Core™ i5-4570 Processor @ 3.2 GHz Processor, Intel chipset H81,4 GB DDR3 RAM , 500 GB HDD, 47 cm (18.5 inch) LED Digital Colour Monitor, 16X DVD writer, 1000 Mbps on board integrated network port Windows 8.1 Professional Licensed Preloaded (30 Nos)",
		},
		{
			name: "Web Technology Lab",
			img: "",
			content: "HP Desktop Computer 10th Generation Intel® Core™ i5 processor 3.0 Ghz Windows 10 Home Single Language. 8 GB DDR4- 2666 MHz RAM (1 x 8 GB) 256 GB  SSD. 500GB 7200 rpm SATA HDD, Numeric KVA UPS BENQ- Digital Projector MS560P – SVGA(800X600) , DLP – Support for 1.1X, TR 1.96-2.15, HDMIx EPSON – PRINTER - M2170 Monochrome All-in- One Wi-Fi Duplex InkTank Printer(Black)",
		},
		{
			name: "Artificial Intelligence and Data Science Lab",
			img: "",
			content: "HP Desktop Computer 10th Generation Intel® Core™ i5 processor 3.0 Ghz Windows 10 Home Single Language. 8 GB DDR4-2666 MHz RAM (1 x 8 GB) 256 GB  SSD. 500GB 7200 rpm SATA HDD, Numeric KVA UPS HP Desktop Computerh Generation Intel® Core™ i5 processor 3.0 Ghzdows 10 Home Single Language.B DDR4-2666 MHz RAM (1 x 8 GB) 256 GB . 500GB 7200 rpm SATA HDD, Numeric KVA",
		},
	],
};

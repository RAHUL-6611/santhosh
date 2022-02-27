import React from "react";

import { getImageUrl } from "../../../../config";

const Facilities = ({ value }) => {

	let facility = value.facilities

	return (
		<div className="flex w-full bg-grey flex-col px-20 pt-10 justify-center items-center">
			<div className="block sm:grid sm:grid-cols-2  md:flex md:flex-col justify-center items-center">
				{
					facility.map((e, index)=>{
						return (
							<>
			  <div key={e.name} className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
					<img
						src={getImageUrl("appl2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">{e.name}</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						    {e.content}
						</div>
					</div>
				</div>
							</>
						)
					})
				}
{/* 
				<div className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
					<img
						src={getImageUrl("appl2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">DISTRIBUTED COMPUTING LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						Intel Core i5 second generation 2400 @ 3.1Ghz 6 MB L3 cache 500 GB 7200 rpm Serial ATA HDD, 2 GB 1066 MHz DDR3 RAM, 18.5 inch Digital Color
Monitor, 10/100/ 1000 Network Port.

10 KVA UPS with Exide SMF Batteries (one Hour Backup)

						</div>
					</div>
				</div>
				<div className="fac block md:flex md:flex-row justify-around py-10 ">
					<img
						src={getImageUrl("dc2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">RESEARCH LABORATORY:</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						Intel Core i5-4570 Processor @ 3.2 Ghz. Intel Chipset OEM Motherboard, 4GB DDR3 RAM @ 1600 Mhz,500 GB 7250rpm Serial ATA HDD ,47 CM 18.5 Inch Led Digital Colour Monitor TCO05 Certifird,104 Keys Keyboard Optical Mouse With Us13 Interface,6 Usb Ports,Audio Parts,16*DVD Writer.8.1 Professional Windows Preloaded

Intel Core i3 Processor   3 Ghz  OS Window 8.1 Preloaded Memory 2.4 Gbsingle Channel Ddr3 Display Monitor,19.5"Keyboard, Mouse

Intel Core i3- 4thGen Desktop. H81 Intel Chipset, Mother Board, 4GB DDR3 RAM, 500GB HDD, DVD, RW HP 18.5” LED Monitor HP USB Keyboard HP USB mouse
Intel Core 2 Duo CPU E 7500 @ 2.93GHz 2.94GHz RAM 2.00GB HID- complaint mouse standard PS/2 Keyboard HCMEL WBTII monitor (HCL)

						</div>
					</div>
				</div>
				<div className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
					<img
						src={getImageUrl("dc1.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">HARDWARE AND TROUBLE SHOOTING LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						Desktop Computers - Intel® Core™ i5-4570 Processor @ 3.2 GHz Processor, Intel chipset H81,4 GB DDR3 RAM , 500 GB HDD, 47 cm (18.5 inch) LED Digital Colour Monitor, 16X DVD writer, 1000 Mbps on board integrated network port Windows 8.1 Professional Licensed Preloaded
10 KVA UPS with Exide SMF Batteries (one Hour Backup)

						</div>
					</div>
				</div>
				<div className="fac block md:flex md:flex-row justify-around py-10 ">
					<img
						src={getImageUrl("hard2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">DATA ANALYTICS LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						Desktop Computers - Intel core i5 RAM-2GB DDR3, 320 GB, DVD writer Lx Infinite Pro Bl1280 5W Rms H1 Media Speakers-Black, HCL 3button W/Scroll
Optical Mouse- HCL 101+14 button Int Keyboard Blk Vista Kit Free Dos Preloaded

LX Infiniti Pro BL 1280, Intel G31 Chipset, Intel Core 2 Duo E7200 2.53GHz 1066MHz 3MB cache, 320 GB HDD, keyboard, mouse, DOS Preloaded
47cm HCL Wide LCD W/Speaker TCO Blk 

						</div>
					</div>
				</div>
				<div className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
					<img
						src={getImageUrl("hard1.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">MICROPROCESSOR LABORATORY:</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						8085 Microprocessor trainer kits, 8086  Microprocessor trainer kits, 8051Microcontroller trainer kits, Interface kits like Stepper motors, Traffic controllers, Elevators, Music synthesizers, Desktop computers. 

						</div>
					</div>
				</div>

				<div className="fac block md:flex md:flex-row justify-around py-10 ">
					<img
						src={getImageUrl("hard2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">INFORMATION SECURITY LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
							HP 406 Series core I5- 4570 DSTP HP Intel core I5-4th Gen Processor, 4GB DDR3 RAM, 500 GB HDD, DVDRW HP18.5” LED Monitor HP Usb Keyboard & Mouse Rest 

Intel Xeon processor E5 2600 v4 product family. Operating System Options: Microsoft Windows Server 2008 R2. Chipset: Intel C610 series chipset. Memory: Up to 1.5TB (24 DIMM slots): 4GB/8GB/16GB/32GB/64GB DDR4 up to 2400MT/s

5KVA UPS with 120 minutes backup with 3 hrs.

The following open source security tools are available: Zed Attack Proxy (ZAP), Nmap,   Wireshark, Whois,    Burp Suite,       Network Miner, Nessus,   Wifi Scanner

						</div>
					</div>
				</div>
				<div className="fac block md:flex md:flex-row-reverse justify-around py-10 ">
					<img
						src={getImageUrl("hard1.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">PROBLEM SOLVING LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						Desktop Computers: INFINITE LA390 PRO Intel Core i5, 2400@3.10 GHz 6MB, Intel H77 Chipset, 2GB DDR3, 500 GB Hard Disk, Accessories, 10/100/1000 On-board NIC

Desktop Computers - Intel® Core™ i5-4570 Processor @ 3.2 GHz Processor, Intel chipset H81,4 GB DDR3 RAM , 500 GB HDD, 47 cm (18.5 inch) LED Digital Colour Monitor, 16X DVD writer, 1000 Mbps on board integrated
network port Windows 8.1 Professional Licensed

Desktop Computers - Intel® Core™ i3-4160 Processor @ 3.6 GHz Processor, 4 GB DDR3 RAM , 500 GB HDD, 47 cm (18.5 inch) LED Digital Color Monitor, 16X DVD writer, 1000 Mbps on board integrated network port Windows 8.1 Professional Licensed Preloaded

						</div>
					</div>
				</div>

				<div className="fac block md:flex md:flex-row justify-around py-10 ">
					<img
						src={getImageUrl("hard2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">WIRELESS LAN LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						Intel i5 , RAM - 2GB DDR3 1333, Hard Disk 320 GB 7200 RPM SATA / 300 8.5 HDD SATA DVD writer 22x PS/2 key board block 3 button scroll optical USB mouse HCL led wide 18.5 Monitor with
Speaker

Intel Core i5 second generation 2400 @ 3.1Ghz 6MB L3 cache 500 GB 7200 rpm Serial ATA HDD, 2 GB 1066 MHz DDR3 RAM, 18.5 inch Digital Color
Monitor, 10/100/ 1000 Network Port

						</div>
					</div>
				</div>


				<div className="fac block md:flex md:flex-row justify-around py-10 ">
					<img
						src={getImageUrl("hard2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">EMBEDDED SYSTEM LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						HCL Desktop Computers - Intel i5 , RAM - 2GB
DDR3 1333, Hard Disk 320 GB 7200 RPM SATA / 300 8.5 HDD SATA DVD writer 22x PS/2 key board block 3 button scroll optical USB mouse HCL led wide 18.5 Monitor with speaker Red Hat V5.5 Media
(10 Nos.)	

HP Desktop Computers - Intel Core i5 4570 @ 3.2
GHz, or Higher, 4 GB DDR3-1600 RAM, 500 GB 7200 RPM SATA Hard Disk or higher, 47cm (18.5 inch) LED Digital Colour monitor, 8X DVD RW or higher, Integrated Intel PRO 10/100/1000 Network (15 Nos.)

						</div>
					</div>
				</div>

				<div className="fac block md:flex md:flex-row justify-around py-10 ">
					<img
						src={getImageUrl("hard2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">WEB TECHNOLOGIES LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						HP Desktop Computer
10th Generation Intel® Core™ i5 processor 3.0 Ghz Windows 10 Home Single Language. 8 GB DDR4-2666 MHz RAM (1 x 8 GB) 256 GB  SSD.
500GB 7200 rpm SATA HDD, Numeric KVA UPS
 
BENQ- Digital Projector  MS560P – SVGA(800X600) , DLP – Support for 1.1X, TR 1.96-2.15, HDMIx



						</div>
					</div>
				</div>
					

				<div className="fac block md:flex md:flex-row justify-around py-10 ">
					<img
						src={getImageUrl("hard2.jpg")}
						className="p-10 Facility-img"
						alt=""
					/>
					<div className="details flex flex-col md:md:w-1/2   mx-5 ">
						<div className="title_of_fac border-red-900 border-b-4 font-bold text-3xl text-slate-500 text-left">
							<h3 className="text-4xl">ARTIFICIAL INTELLIGENCE AND DATA SCIENCE LAB</h3>
						</div>
						<div className="details_of_fac text-2xl text-left pt-5">
						HP Desktop Computer
10th Generation Intel® Core™ i5 processor 3.0 Ghz Windows 10 Home Single Language.
8 GB DDR4-2666 MHz RAM (1 x 8 GB) 256 GB  SSD. 500GB 7200 rpm SATA HDD, Numeric KVA UPS
 
 
BENQ- Digital Projector  MS560P – SVGA(800X600) , DLP – Support for 1.1X, TR 1.96-2.15, HDMIx
 
EPSON – PRINTER - M2170 Monochrome All-in-One Wi-Fi Duplex InkTank Printer(Black)


						</div>
					</div>
				</div> */}
					
			</div>
		</div>
	);
};

export default Facilities;

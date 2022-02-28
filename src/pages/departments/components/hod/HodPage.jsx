import React from 'react'
import "./style2.css"
import zayaraj from "./ZayarazG.png"

const HodPage = () => {
  return (
    <div className="hod_body">    
        <h1 className="h1tag">HOD's Message</h1>
    <div className="hod_container">
        <div className="profile">
            <div className="image"><img src={zayaraj} alt="" /></div>
            <div className="content">
                <p className="name">Dr. G. Zayaraz</p>
                <div>
                    <span><i className="fas fa-phone-alt"></i></span>
                    <span className="number">94439 58140</span>
                </div>
                <div>
                    <span><i className="fas fa-envelope"></i></span>
                    <span className="email"> hod.cse@pec.edu</span>
                </div>
            </div>
        </div>
        <div className="right-box">

            <div className="msg">

                The department aims at providing high quality education to students through the latest in computer
                technology to enable them to undertake careers in the Information Technology field, pursue advanced
                studies
                abroad and take up Entrepreneurship.The department offers B.Tech. (CSE), M.Tech. (Distributed
                Computing),
                M.Tech. (Information Security), MCA and Ph.D. programmes. In order to maintain the standard of
                education,
                the department constantly upgrades the academic syllabi so as to keep the students well trained to
                deal
                with
                the changing trends in the field of Computer Science and Engineering. The department places emphasis
                on
                Distributed and Parallel Computing, Information Security, Internet of Things, Embedded Systems,
                Natural
                Language Processing Technologies, Artificial Intelligence, Machine Learning, Data Mining and Data
                Analytics
                and several other recent topics.

                <br />
                The curriculum of all courses are designed in such a way so as to enable students to carry out major
                and
                minor projects in leading industries/institutions, besides their regular classes and seminars. The
                students
                of the department have been placed in major companies like TCS, HCL, Broadcom, CTS, Infosys, SAP
                Labs,
                SAPIENT, Aspire Systems, Wipro Systems, ARICENT, Mbit wireless technologies, L&T Infotech etc. The
                Department regularly organizes a series of lectures from academicians and professionals of the
                highest
                repute, which lays importance on the latest innovative technologies in the field of Computer Science
                and
                Engineering. With our vision and mission, we strive to impart quality education to its pupils,
                thereby
                enabling them to stand out as individuals competent in the domain.
            </div>

        </div>

    </div>
</div>
  )
}

export default HodPage
import React from 'react'
import "./index.css"
import doct from "./doctoral.png"
import master from "./masters.png"
import bach from "./bachelors.png"

const index = () => {
  return (
    <div>
        <div class="placement_container">
        <h1 class="place_heading">Placement Details</h1>
        <p class="place_text">The students of CSE Department have been placed in major companies like <strong> TCS, HCL,
                Qualcomm, Zoho, Broadcom,
                CTS,
                Infosys, SAP Labs, SAPIENT, Aspire Systems, Wipro Systems, ARICENT, Mbit wireless technologies, L&T
                Infotech
                etc. </strong>
        </p>
        <div class="placement_stat">
            <div class="one">
                <h2>Placement Statistics 2020-2022</h2>
                <div class="details">
                    <div class="text">
                        <div class=" color ug">
                            <h3>UG</h3>
                            <ul>
                                <li> Placement Percentage : <strong> 88% </strong> </li>
                                <li> PA : <strong> Rs. 5,00,000-Rs. 12,00,000 </strong></li>
                                <li>Offers : <strong> 126 </strong></li>
                            </ul>
                        </div>
                        <div class=" color pgmtech">
                            <h3>PG-M.Tech </h3>
                            <ul>
                                <li>Placement Percentage : <strong>50% (60% Intenship) </strong> </li>
                            </ul>
                        </div>
                        <div class=" color pgmca">
                            <h3>PG-MCA</h3>
                            <ul>
                                <li>Placement Percentage : <strong> 25% </strong></li>
                            </ul>
                        </div>
                    </div>
                    <div class="image">
                        <img class="img" src={bach} alt=""/>
                        <img class="img" src={master} alt=""/>
                        <img class="img" src={doct} alt=""/>
                    </div>

                </div>

            </div>
        </div>
        <p class="minor"><span>*******</span><strong> Minor courses offered by the dept. improves overall placement
                percentage
                in the university campus </strong><span>*******</span>
        </p>
    </div>
    </div>
   
  )
}

export default index
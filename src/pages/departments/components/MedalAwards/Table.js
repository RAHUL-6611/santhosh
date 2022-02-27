/* 
  Row component written as a simple function:
  https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components
  
  Any components that do not have state should be written this way,
  see: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
*/
import React from 'react';
import "./table.css"

export default function Table(){
  return(
    <>
       <div class="award_container">
        <div class="head">Awards and Medals</div>
        <p>Faculty Awards</p>
        <table class="table table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th title="Field #1">Sl. No.</th>
                    <th title="Field #2">Award</th>
                    <th title="Field #3">Faculty Name</th>
                    <th title="Field #4">Place &amp; Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>Global Teacher Prize</td>
                    <td>Dr. Rahul Gandhi</td>
                    <td>PTU, 2020</td>
                </tr>
            </tbody>
        </table>

        <p>Student Awards</p>
        <table class="table table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th title="Field #1">Sl. No.</th>
                    <th title="Field #2">Award</th>
                    <th title="Field #3">Student Name</th>
                    <th title="Field #4">Place &amp; Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                <tr>
                    <td>19</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>Global Student Prize</td>
                    <td>Ashneer Grover</td>
                    <td>PTU, 2020</td>
                </tr>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  )
};
  /*
   * Render the above component into the div#app
   */
/* 
  Row component written as a simple function:
  https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components
  
  Any components that do not have state should be written this way,
  see: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
*/
import React from 'react';
import "./table.css"

const Row = ({Award, title, Receiver}) => (
    <div className="row">
      <div>{Award}</div>
      <div>{title}</div>
      <div>{Receiver}</div>
    </div>
  );
  
  /*
    Table component written as an ES6 class
  */
  class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {Award: 1, title: 'This Award', Receiver: 'lokesh', }, 
          {Award: 2, title: 'This Award', Receiver: 'raju'}, 
          {Award: 3, title: 'This Award', Receiver: 'Ramesh' },
        ],
      };
    }
  
    render() {
      const rows = this.state.data.map( (rowData) => <Row {...rowData} />);
  
      return (
        <div className="table">
          <div className="header">
            <div>Award</div>
            <div>Title</div>
            <div>Receiver</div>
          </div>
          <div className="body">
            {rows}
          </div>
        </div>
      );
      
    }
  }
  
  export default Table;
  /*
   * Render the above component into the div#app
   */
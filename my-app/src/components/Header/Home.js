import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <Table striped bordered hover className="shadow-lg">
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Venue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>July 9</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button variant="primary">BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>July 11</td>
            <td>TORONTO, ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
              <Button variant="primary">BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>July 13</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <Button variant="primary">BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>July 21</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
              <Button variant="primary">BUY TICKETS</Button>
            </td>
          </tr>
          <tr>
            <td>July 27</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
              <Button variant="primary">BUY TICKETS</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Home;

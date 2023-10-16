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
/*import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
    <div>
      <Link to="/movies">
       <button>Movies</button>
      </Link>
    </div>
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Table bordered className="shadow-lg bg-white">
        <tbody>
          <tr>
            <td className="px-3 py-2">July 9</td>
            <td className="px-3 py-2">DETROIT, MI</td>
            <td className="px-3 py-2">DTE ENERGY MUSIC THEATRE</td>
            <td>
              <Button variant="primary" className="px-3 py-2 rounded-lg">
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2">July 11</td>
            <td className="px-3 py-2">TORONTO, ON</td>
            <td className="px-3 py-2">BUDWEISER STAGE</td>
            <td>
              <Button variant="primary" className="px-3 py-2 rounded-lg">
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2">July 13</td>
            <td className="px-3 py-2">BRISTOW, VA</td>
            <td className="px-3 py-2">JIFFY LUBE LIVE</td>
            <td>
              <Button variant="primary" className="px-3 py-2 rounded-lg">
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2">July 21</td>
            <td className="px-3 py-2">PHOENIX, AZ</td>
            <td className="px-3 py-2">AK-CHIN PAVILION</td>
            <td>
              <Button variant="primary" className="px-3 py-2 rounded-lg">
                BUY TICKETS
              </Button>
            </td>
          </tr>
          <tr>
            <td className="px-3 py-2">July 27</td>
            <td className="px-3 py-2">LAS VEGAS, NV</td>
            <td className="px-3 py-2">T-MOBILE ARENA</td>
            <td>
              <Button variant="primary" className="px-3 py-2 rounded-lg">
                BUY TICKETS
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </>
  );
};

export default Home;
*/

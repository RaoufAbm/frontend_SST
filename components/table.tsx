import styles from "/app/page.module.css";

import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';

function table() {
  return (
    <div>
    <MDBTable className='table-responsive'>
      <MDBTableHead light>
        <tr>
          <th scope='col'></th>
          <th scope='col'>Product Detail Views</th>
          <th scope='col'>Unique Purchases</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Product Revenue</th>
          <th scope='col'>Avg. Price</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='col'>Value</th>
          <td>18,492</td>
          <td>228</td>
          <td>350</td>
          <td>$4,787.64</td>
          <td>$13.68</td>
        </tr>
        <tr>
          <th scope='col'>Percentage change</th>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            -48.8%
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            14.0%
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            46.4%
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            29.6%
          </td>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            -11.5%
          </td>
        </tr>
        <tr>
          <th scope='col'>Absolute change</th>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            -17,654
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            28
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            111
          </td>
          <td className='text-success'>
            <MDBIcon className='me-1' fas icon='caret-up' />
            $1,092.72
          </td>
          <td className='text-danger'>
            <MDBIcon className='me-1' fas icon='caret-down' />
            $-1.78
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  );
}
export default table;

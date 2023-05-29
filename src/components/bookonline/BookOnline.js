import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './BookOnline.css'
import Logo from '../../assets/img/logo.png'


const BookOnline = () => {

  return (
    <div className='d-flex justify-content-center min-vh-100 align-items-center' id="form">

    <Form>
    <div className='d-flex justify-content-center'>
    <img src={Logo} alt='Kitty Corner' width="200"/>
    
    </div>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridLastName">

          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="0123456789" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Booking Date</Form.Label>
          <Form.Control type='date' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Services Type</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Dry Grooming</option>
            <option>Basic Grooming</option>
            <option>Full Grooming</option>
            <option>Spa & Massage</option>
            <option>Anti Mites & Fungus</option>
            <option>Shaving / Styling Cut</option>
            <option>ToothBrush + Coral Cleansing</option>
            <option>Flea & Fungi Treatment</option>
            <option>Injection for Flea & Fungus</option>
          </Form.Select>
        </Form.Group>

        </Row>
        <Form.Group as={Col} controlId="formGridSize">
          <Form.Label>Cat Size</Form.Label>
        <Form.Check type="checkbox" label="Small Size" />
        <Form.Check type="checkbox" label="Medium Size" />
        <Form.Check type="checkbox" label="Large Size" />

          </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
      </Form.Group>

      <a href="/catSalon" className="btn btn-primary btn-lg w-100" >
        <span className="fw-bold">Book Now</span>
      </a>
    </Form>
    </div>
  )
}

export default BookOnline;
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav
  
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/#">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/#">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
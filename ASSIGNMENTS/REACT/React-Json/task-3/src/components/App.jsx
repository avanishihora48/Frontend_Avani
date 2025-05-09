import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import { UserAuthContextProvider } from '../Context/UserAuthContext'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Container style={{ width: '400px' }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Router>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </Router>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  )
}

export default App

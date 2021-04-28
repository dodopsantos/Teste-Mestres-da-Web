import React, { useContext, useState } from 'react'
import { Container } from './styles'
import { Col, Row, FormGroup, Label, Input, Form } from 'reactstrap'

import AuthContext from '../../contexts/auth'

const Login: React.FC = () => {
  const context = useContext(AuthContext)

  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleLogin() {
    const flag = await context.Login(user, password)

    if (flag) {
      console.log('logado')
    } else {
      alert('Usuário: teste@teste.com - Senha: 1234')
    }
  }

  return (
    <Container className="col-12">
      <div className="marvel">
        <div className="title">
          <h1>MARVEL</h1>
        </div>
      </div>
      <div className="content vert-offset-top-5">
        <Form>
          <Col className="col-10 col-md-5 col-xl-3 offset-1 offset-md-2">
            <h3>Bem-vindo(a) de volta!</h3>
            <p>Acesse sua conta:</p>

            <Row className="mb-3">
              <input
                type="text"
                placeholder="Usuário"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="default"
              />
            </Row>
            <Row className="mt-3">
              <input
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="default"
                type="password"
              />
            </Row>
            <Row className="d-flex justify-content-between ml-2 mr-2 mt-3">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Salvar login
                </Label>
              </FormGroup>
              <a href="#" className="forget">
                Esqueci a senha
              </a>
            </Row>
            <Row className="mt-3 mb-3">
              <button className="submit" onClick={handleLogin}>
                Login
              </button>
            </Row>
            <Row className="ml-3 mt-3">
              <p>
                Ainda não tem op login?{' '}
                <a href="#" className="signup">
                  Cadastre-se
                </a>
              </p>
            </Row>
          </Col>
        </Form>
      </div>
    </Container>
  )
}

export default Login

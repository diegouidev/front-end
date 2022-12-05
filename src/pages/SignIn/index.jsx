import { useState } from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { Background, Container, Form } from "./style";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }
  return(
    <Container>
      <Form>
        <h1>Cloud Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu Login</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Entar" onClick={handleSignIn}/>
        <Link to="/register">
          <FiLogIn /> Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
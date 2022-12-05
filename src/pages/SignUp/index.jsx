import { useState } from "react";
import { Background, Container, Form } from "./style";
import { Link, useNavigate } from 'react-router-dom'

import { api } from "../../services/api"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'


export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password) {
      return toast.error("Preencha todos os campos!")
    }
    // cadastrando o usuário na api
    api.post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!")
        // redirecionando o usuário para a tela de login
        navigate("/")
      })
      .catch(error => {
        if(error.response){
          toast.error(error.response.data.message)
        } else {
          toast.error("Não foi possivel cadastrar")
        }
      })
  }

  return(
    <Container>
      <Background />
      <Form>
        <h1>Cloud Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">
          Voltar para o Login
        </Link>
      </Form>
    </Container>
  )
}
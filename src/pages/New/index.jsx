import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Container, Form } from './styles'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { api } from '../../services/api'


export function New(){
  const [title, seTitle] = useState("")
  const [description, seDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(!title){
      return toast.error("Digite o titulo da nota.")
    }
    if(newTag){
      return toast.error("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar, clique para adicionar ou deixe o campo vazio.")
    }
    if(newLink){
      return toast.error("Você deixou uma link no campo para adicionar, mas não clicou em adicionar, clique para adicionar ou deixe o campo vazio.")
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })
    toast.success("Nota criada com sucesso!")
    handleBack()
  }

  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText
              title="Voltar"
              onClick={handleBack}
            />
          </header>

          <Input
           placeholder="Titulo"
           onChange={e => seTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={e => seDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem 
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />

                ))
              }

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button
           title="Salvar"
           onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}
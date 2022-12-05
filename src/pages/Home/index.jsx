import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { RiAddLine, RiSearch2Line } from 'react-icons/ri'
import { api } from '../../services/api'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'


export function Home(){
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagSelected(tagName){
    if(tagName === "all"){
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)
   
    if(alreadySelected){
      const filterTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filterTags)

    } else {
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  },[])

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }
    fetchNotes()

  }, [tagsSelected, search])

  return(
    <Container>
      <Brand>
        <h1>Cloud Notes</h1>
      </Brand>
      <Header />

      <Menu>
        <h3>Filtrar notas</h3>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText 
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>
      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={RiSearch2Line}
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content className='scrol'>
        <Section title="Minhas Notas">
          {
            notes.map(note => (
              <Note 
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
        
      </Content>

      <NewNote to="/new">
        <RiAddLine />
        Criar nota
      </NewNote>

    </Container>
  )
}
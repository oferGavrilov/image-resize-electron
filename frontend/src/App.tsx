import { useState, useEffect } from 'react'
import { personService } from './services/person.service'
import { Person } from './models/person.model'

function Home () {
  const [persons, setPersons] = useState<Person[]>([])

  useEffect(() => {
    loadPersons()
  }, [])

  async function loadPersons () {
    const data = await personService.getPersons()
    console.log(data)
    // setPersons(data)
  }

  if(!persons) return (<div>Loading...</div>)
  return (
    <section className="home-section h-screen text-white">
      <div className='flex items-center flex-col py-12 gap-y-4'>
        <h2 className='text-3xl'>Person Contents</h2>
        {persons.map(person => (
          <div key={person.id} className='border-gray-600 border-2 p-4 tracking-tight text-2xl min-w-[360px] shadow-lg shadow-gray-700 rounded-lg font-mono'>
            <h1>Person Name: {person.name}</h1>
            <p>Person Age: {person.age}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home

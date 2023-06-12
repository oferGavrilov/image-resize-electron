import axios from 'axios'



export const personService = {
      getPersons,
}


async function getPersons () {
      try {
            const {data} = await axios.get(`/api/`)
            return data
      } catch (error) {
            console.log(error)
      }
}
import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : '//localhost:4000'

export const personService = {
      getPersons,
}


async function getPersons () {
      try {
            const {data} = await axios.get(baseUrl)
            return data
      } catch (error) {
            console.log(error)
      }
}
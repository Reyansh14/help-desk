import axios from 'axios'

const api_url = 'api/tickets/'

// Get ticket notes
const getNotes = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(api_url + ticketId + '/notes', config)

    return response.data
}

const noteService = {
    getNotes
}

export default noteService
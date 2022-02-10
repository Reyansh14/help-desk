import axios from "axios";
const api_url = '/api/tickets'

// Create new ticket
const createTicket = async (ticketData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(api_url, ticketData, config)

    return response.data
}

// Get all tickets
const getTickets = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(api_url, config)

    return response.data
}

// Get user ticket
const getTicket = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(api_url + ticketId, config)

    return response.data
}

const ticketService = {
    createTicket,
    getTickets,
    getTicket
}

export default ticketService
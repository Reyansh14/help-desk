import axios from 'axios'

const api_url = '/api/users'

//register user

const register = async (userData) => {
    const response = await axios.post(api_url, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

const authService = { 
    register
}

export default authService
import axios from 'axios'

const api_url = '/api/users/'

//register user
const register = async (userData) => {
    const response = await axios.post(api_url, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//login user
const login = async (userData) => {
    const response = await axios.post(api_url + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//logout user
const logout = () => localStorage.removeItem('user')

const authService = { 
    register,
    logout,
    login
}

export default authService
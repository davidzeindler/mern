import axios from 'axios'

const API_URL = '/api/library/'

const createLibrary = async (libraryData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const response = await axios.post(API_URL, libraryData, config)
    return response.data
}

const joinLibrary = async (libraryData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const response = await axios.post(API_URL, libraryData, config)
    return response.data
}

const addBookToLibrary = async (libraryData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const response = await axios.post(API_URL, libraryData, config)
    return response.data
}

const getBooks = async token => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const response = await axios.get(API_URL+'books', config)
    return response.data
}

const getLibrary = async token => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

const bookService = { getBooks }
  
export default bookService;
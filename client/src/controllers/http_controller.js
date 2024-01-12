import axios from "axios"

class HttpController {
    constructor (baseURL) {
        this._baseURL = baseURL
    }


     getData = async (url, params = {}) => {
        try {
          const res = await axios.get(`${this._baseURL}${url}`, {params})
            .then(response=>response.data)
          return res;
        } catch (error) {
          console.error('GET Request Error:', error);
          throw error;
        }
      }
    
      postData = async (url, data = {}) => {
        try {
          const response = await axios.post(`${this._baseURL}${url}`, data);
          return response.data;
        } catch (error) {
          console.error('POST Request Error:', error);
          throw error;
        }
      }
    
      putData = async (url, data = {}) => {
        try {
          const response = await axios.put(`${this._baseURL}${url}`, data);
          return response.data;
        } catch (error) {
          console.error('PUT Request Error:', error);
          throw error;
        }
      }
    
      deleteData = async (url, data) => {
        try {
          const response = await axios.post(`${this._baseURL}${url}`, data);
          console.log(response);
          return response.data;
        } catch (error) {
          console.error('DELETE Request Error:', error);
          throw error;
        }
      }

      updateData = async (url, data) => {
        try {
          const response = await axios.put(`${this._baseURL}${url}`, data, {
            headers: { 'Content-Type': 'application/json' },
          });
          console.log(response);
          return response.data;
        } catch (error) {
          console.error('PUT Request Error:', error);
          throw error;
        }
      };

    };
    
   

export default HttpController
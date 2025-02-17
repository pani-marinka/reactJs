import axios from "axios";


export const sendCandidateData = async (candidate) => {
/**
 * Об'єкт candidate
 * 
 * @typedef {Object} candidate
 * @property {string} id 
 * @property {string} name 
 * @property {string} position 
 * @property {string} email 
 * @property {string} phone 
 * @property {file} photo 
 */

    try {
        const formData = new FormData();
        formData.append('id', candidate.id);
        formData.append('name',candidate.name);
        formData.append('email', candidate.email);
        formData.append('position', candidate.position);
        formData.append('phone', candidate.phone);
      
      if (candidate.file) {
        formData.append('file', candidate.file);
      }

      const response = await axios.post(
        'https://wa-server-2-d6303887a0d7.herokuapp.com/api/v1/team-members/join',
        formData,
        {
          headers: {
            'Accept': 'application/json'
          }
        }
      );
  
      console.log('Response data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }   
  };  

   
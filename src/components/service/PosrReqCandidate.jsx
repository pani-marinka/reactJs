import { useState, useEffect, useCallback } from "react";

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
console.log("============== cand", candidate);

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
  
      const response = await fetch('https://wa-server-2-d6303887a0d7.herokuapp.com/api/v1/team-members/join', 
      {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Response data:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;  
    }
  };  

   
import { useState, useEffect, useCallback } from "react";
import { Flex, Text, Image, Box, Grid } from "@chakra-ui/react"

export const ListOfMembers = () => {
    
  const [arrayMembers, setArrayMembers] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://wa-server-2-d6303887a0d7.herokuapp.com/api/v1/team-members`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setArrayMembers(data);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>   
      <div className='whiteLine'></div>
      <h2>Working with GET request</h2>
      <div className='whiteLine'></div>
      <h2>Team Members</h2>
      <div className='whiteLine'></div>
      {error && <p style={{ color: "red" }}>Get error: {error}</p>}
      <ul>
        {arrayMembers.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
      <div className='whiteLine'></div>
    </div>
  );
};
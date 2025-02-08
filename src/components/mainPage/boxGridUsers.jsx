
import { Text, Image, Box, Grid } from "@chakra-ui/react"
import React, { useState, useEffect }  from "react";

export const Demo = () => {

  /**
 * Об'єкт member
 * 
 * @typedef {Object} member
 * @property {string} id 
 * @property {string} name 
 * @property {string} position 
 * @property {string} email 
 * @property {string} phone 
 * @property {string} photo 
 */

     const [members, setMembers] = useState([
        {
          id: '1',
          name: 'Salvador Stewart Flynn Thomas Salva',
          position: 'Leading specialist of the department',
          email: 'JeromeKlarkaJerome',
          phone: '+38 (098) 278 76 24',
          photo: '../images/title.jpg'
        },
        {
          id: '2',
          name: 'John Doe',
          position: 'Senior Developer',
          email: 'johndoe@example.com',
          phone: '+38 (098) 123 45 67',
          photo: '../images/Winny.jpg'
        },
        {
          id: '3',
          name: 'Jane Smith',
          position: 'Project Manager',
          email: 'janesmith@example.com',
          phone: '+38 (098) 234 56 78',
          photo: '../images/title.jpg'
        },
        {
          id: '4',
          name: 'Michael Johnson',
          position: 'UI/UX Designer',
          email: 'michaeljohnson@example.com',
          phone: '+38 (098) 345 67 89',
          photo: '../images/Salvador.jpg'
        },
        {
          id: '5',
          name: 'Emily Davis',
          position: 'HR Specialist',
          email: 'emilydavis@example.com',
          phone: '+38 (098) 456 78 90',
          photo: '../images/title.jpg'
        },
        {
          id: '6',
          name: 'David Brown',
          position: 'Marketing Expert',
          email: 'davidbrown@example.com',
          phone: '+38 (098) 567 89 01',
          photo: '../images/John.jpg'
        },
        {
          id: '7',
          name: 'David New Brown',
          position: 'Full stack',
          email: 'davidbrown@example.com',
          phone: '+38 (098) 567 89 01',
          photo: '../images/title.jpg'
        }
      ]);
      const [numbers, setNumbers] = useState(6);
     const [screenWidth, setScreenWidth] = useState(window.innerWidth);  
     const [columns, setColumns] = useState(3);
     const [btn, setBtn] = useState(true);


     const handleClick = () => {
      if (btn) {
      setNumbers(members.length); 
      setBtn(false)
      } else {
       setNumbers(6); 
      setBtn(true);
      };
    };

     useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
    
    return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Слухаємо зміни ширини екрану лише один раз при монтуванні компонента
    
    useEffect(() => {
      if (screenWidth < 1025 && screenWidth > 767 && columns !== 2) {
        setColumns(2); 
      } else if (screenWidth < 768 && columns !== 1) {
        setColumns(1); 
      } else if (screenWidth >= 1025 && columns !== 3) {
        setColumns(3); 
      }
    }, [screenWidth, columns]); 
    
const renderViewMembers = (range = 3, numberShow = 6) => {
              const memberElements = [];
              const bottonElements = [];


              let showSize = numberShow;

              if ( numberShow > members.length ) { 
              showSize = members.length; 
              };
          
              for (let i = 0; i < showSize; i++) {
              const member = members[i]; // Отримуємо кожного члена

              memberElements.push(
                <Box p={4} boxShadow="xl" bg="accent_2" width="282px" height="254px" mx="auto" overflow="hidden" key={member.id}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    borderRadius="full"
                    boxSize="70px"
                    mx="auto"
                    mb={3}
                  />
                  <Text fontSize="md" isTruncated noOfLines={1} mb={4}>
                    {member.name}
                  </Text>
                  <Text isTruncated noOfLines={1}>
                    {member.position}
                  </Text>
                  <Text isTruncated noOfLines={1}>
                    {member.email}
                  </Text>
                  <Text isTruncated noOfLines={1}>
                    {member.phone}
                  </Text>
                </Box>
              );
  }

  const  viewBotton = () => {
    if (btn) {
      bottonElements.push (
          <>
          <div className='whiteLine'></div>
          <div className="btn-wrapper">
          <button className="btn" onClick={handleClick}>Show more</button>
          </div>
          </>
      );
    } else {
      bottonElements.push (
        <>
        <div className='whiteLine'></div>
        <div className="btn-wrapper">
        <button className="btn" onClick={handleClick}>Show less</button>
        </div>
        </>
      );
    };
  }
  viewBotton();
  // Повертаємо JSX з Grid
  return (
            <>
            <Grid templateColumns={`repeat(${range}, 1fr)`} gap={4}  color="black.500" textAlign="center" columnGap="2">
            {memberElements}
            </Grid>
            {bottonElements}
            </>
  );
};
  


  return renderViewMembers(columns, numbers);
}


// return (
//   <> 
//   <Grid templateColumns="repeat(3, 1fr)" gap={1} color="black.500" textAlign="center">
// <Box p={4} boxShadow="xl" bg="accent_2"    width="282px" height="254px" mx="auto" overflow="hidden">
  
// <Image
//         src="../images/title.jpg"
//         alt="Sample Image"
//         borderRadius="full" // Кругла форма
//         boxSize="70px" // Встановлення розміру фото
//         mx="auto" 
//         mb={4}
//       />
//   <Text fontSize="md" isTruncated noOfLines={1} mb={4}> Salvador Stewart Flynn Thomas Salva  </Text>
//   <Text isTruncated noOfLines={1} >Leading specialist of the department</Text>
//   <Text isTruncated noOfLines={1} >JeromeKlarkaJeromeKlarka19233623...</Text>
//   <Text isTruncated noOfLines={1} > +38 (098) 278 76 24  </Text>
// </Box>
// <Box p={4} boxShadow="xl" bg="accent_2"    width="282px" height="254px" mx="auto" overflow="hidden">
  
// <Image
//         src="../images/title.jpg"
//         alt="Sample Image"
//         borderRadius="full" // Кругла форма
//         boxSize="70px" // Встановлення розміру фото
//         mx="auto" 
//         mb={4}
//       />
//   <Text fontSize="md" isTruncated noOfLines={1} mb={4}> Salvador Stewart Flynn Thomas Salva  </Text>
//   <Text isTruncated noOfLines={1} >Leading specialist of the department</Text>
//   <Text isTruncated noOfLines={1} >JeromeKlarkaJeromeKlarka19233623...</Text>
//   <Text isTruncated noOfLines={1} > +38 (098) 278 76 24  </Text>
// </Box>
// <Box p={4} boxShadow="xl" bg="accent_2"    width="282px" height="254px" mx="auto" overflow="hidden">
  
// <Image
//         src="../images/title.jpg"
//         alt="Sample Image"
//         borderRadius="full" // Кругла форма
//         boxSize="70px" // Встановлення розміру фото
//         mx="auto" 
//         mb={4}
//       />
//   <Text fontSize="md" isTruncated noOfLines={1} mb={4}> Salvador Stewart Flynn Thomas Salva  </Text>
//   <Text isTruncated noOfLines={1} >Leading specialist of the department</Text>
//   <Text isTruncated noOfLines={1} >JeromeKlarkaJeromeKlarka19233623...</Text>
//   <Text isTruncated noOfLines={1} > +38 (098) 278 76 24  </Text>
// </Box>
// </Grid>
// </> 
// );
// }

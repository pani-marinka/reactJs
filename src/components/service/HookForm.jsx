
import { useForm } from "react-hook-form";
import { useState } from "react";
import  RadioSelect from './RadioSelect';
import { sendCandidateData  } from './PosrReqCandidate';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  HStack,
} from "@chakra-ui/react";

export default function HookForm() {
    const [candidate, setCandidate] = useState();
    const [successResult, setSuccessResult] = useState(false);
    const [errorPost, setErrorPost] = useState(null);

/**
 * Об'єкт користувача.
 * 
 * @typedef {Object} candidate
 * @property {string} id 
 * @property {string} name 
 * @property {string} position 
 * @property {string} email 
 * @property {string} phone 
 * @property {fle} photo 
 */

const [filePhoto, setFilePath] = useState("");
const [position, setPosition] = useState("Frontend Developer");


const handlePositionChange = (value) => {
    setPosition(value);
  };


  function viewFormRegistr (paramSuccess) {
    if (paramSuccess) {
        return (
        <>
        <div className="successForm"> </div>
        <div className="whiteLine"> </div>
        <div>
        {errorPost && <p style={{ color: "red" }}>Error post: {errorPost}</p>}
        </div>
        </>
    );

    } else {
        return (
            <Box p={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>

            <Input
            border="1px solid lightgray"
            id="name"
            placeholder="Your name"
            {...register("name", { validate: validateName })}
            />
             <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
            </FormControl>
            <div className="whiteLine"></div>

            <FormControl isInvalid={errors.email}>
            <Input
            border="1px solid lightgray"
            id="email"
            placeholder="Email"
            {...register("email", { validate: validateEmail})}
            />
             <FormErrorMessage>
            {errors.email && errors.email.message}
            </FormErrorMessage>
            </FormControl>
            <div className="whiteLine"></div>
   
            <FormControl isInvalid={errors.phone}>
            <Input
            border="1px solid lightgray"
            id="phone"
            placeholder="Phone"
            {...register("phone", { validate: validatePhone})}
            />
            <div> <h4>+38(XXX) XXX-XX-XX</h4></div>
            <FormErrorMessage>
            {errors.phone && errors.phone.message}
            </FormErrorMessage>
            </FormControl>

            <div className="whiteLine"></div>
            
            <RadioSelect onPositionChange={handlePositionChange} />

            <div className="whiteLine"></div>
            {/* Вибір файлу */}
            <FormControl isInvalid={errors.file}>
            <HStack spacing={0} boxSizing="border-box"   >    

            <Button
            as="label"
            htmlFor="file-upload"
            boxSizing="border-box"

            sx={{
            width: "100px",
            height: "38px",    
            boxSizing: "border-box",   
            backgroundColor: "white",  // білий фон
            color: "gray",  // сірий текст
            border: "1px solid",  // сіра рамка
            cursor: "pointer",
            borderRadius: 0,
            marginTop: 0, 
            }}
            mt={1}> 
            UPLOAD
            </Button>
            <Input
            type="text"
            value={filePhoto ? filePhoto.name : ""} // Показуємо ім'я файлу           
            readOnly
            placeholder="Your photo"
            border="1px solid lightgray"
            height="38px" // Зрівнюємо з кнопкою
            boxSizing="border-box"
            className="upload-input"
            />

            <Input
            type="file"
            id="file-upload"
            display="none"
            onChange={handleFileChange}
            /> 
            </HStack>

            </FormControl>
            <div className="whiteLine"> </div>
       
            <div className="btn-wrapper">
            <Button
             className={`${(!isValid || !filePhoto) ? "disabled" : "btn"}`}             
            isLoading={false}  
            isDisabled={!isValid || !filePhoto}
             type="submit">Sign-Up</Button>
            </div>
        </form>
      </Box>
    )};
  };

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        // Перевіряємо тип файлу
        const isValidType = file.type === "image/png" || file.type === "image/jpeg";
        if (isValidType) {
            setFilePath(file); // Якщо файл правильного типу, показуємо його ім'я
        } else {
            alert("Будь ласка, виберіть файл з форматом PNG або JPG/JPEG");
            setFilePath(""); // Якщо файл неправильного типу, очищуємо поле
        }
    } else {
        setFilePath(""); // Якщо файл не вибрано, очищуємо поле
    }
};

    const {
        handleSubmit,
        register,
        formState: { errors, isValid },
      } =  useForm({
        mode: "onChange", // це дозволить форму перевіряти валідність при кожній зміні
    });
  
     const onSubmit = (data) => {
        const updatedCandidate = {
          ...candidate,
          id: `${Date.now() + "_" + data.email}`,
          name: data.name,
          email: data.email,
          phone: data.phone,
          position: position,
          photo: filePhoto || null, // Якщо файл вибраний, додаємо його, інакше null
        };
    
        setCandidate(updatedCandidate);  // Оновлюємо стан

        //console.log("Updated Candidate Object:", updatedCandidate);

        const processCandidate = async () => {
            try {
              const result = await sendCandidateData(updatedCandidate);
              console.log('Candidate processed successfully:', result);
            } catch (error) { 
              console.error('Processing error:', error);
              setErrorPost(error.message);                       
            }
          };
          
         processCandidate();

        //передати для post & refresh
       if (isValid && filePhoto) setSuccessResult(true); 
      

        return viewFormRegistr(successResult);
    };


    //   function onSubmit(values) {
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));
    //         resolve();
    //       }, 3000);
    //     });
    //   }

  
    function validateName(value) {
        if (!value) return "Прізвище обов'язкове";
        if (!/^[a-zA-Zа-яА-ЯіІїЇєЄ-]+$/.test(value)) {
          return "Прізвище повинно містити лише букви або дефіс";
        }
        return true;
    }

    const validateEmail = (value) => {
        if (!value) return "Email обов'язковий";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          return "Невірний формат email";
        }
        return true;
    };
    
    const validatePhone = (value) => {
        if (!value) return "Телефон обов'язковий";
        const regex = /^\+38\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
        if (!regex.test(value)) {
          return "Невірний формат телефону. Використовуйте формат: +38(XXX) XXX-XX-XX";
        }
        return true;
    };
      
        return viewFormRegistr(successResult);
  }

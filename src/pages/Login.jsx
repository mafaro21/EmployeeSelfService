import { useState } from "react";
import "../App.css";
import "../css/Login.css";
import Logo from "../img/PHC_Logo.png";
import { Button, Center, Box, Input, Spinner, Image } from "@chakra-ui/react";
import { API } from "../config";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Auth";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form"
import Loader from '../components/Loader'

function Login() {
  const [placeText, setPlaceText] = useState(false); //text that shows up when user clicks in input field
  const [loading, setLoading] = useState(false); // loading circle when user has submitted their id
  const [ID, setID] = useState(""); //collecting the user's id
  const [disabled, setDisabled] = useState(false); // button disabler
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, formState: { errors }, handleSubmit } = useForm()

  const toast = useToast();

  const placeTextDiv = placeText ? (
    <div style={{ color: "black", fontSize: "18px" }}>
      use this format: 602954590c94
    </div>
  ) : (
    ""
  );

  // const handleSubmit = (e) => {
  //   //handling the id the user has entered after they click login
  //   e.preventDefault();

  //   setLoading(true);
  //   setPlaceText(false);
  //   setErrorDiv(false);

  //   Validation();

  //   const EmpId = {
  //     code: staffID,
  //   };

  //   if (Validation()) {
  //     axios
  //       .post(`${API}/employee/login`, EmpId)
  //       .then((res) => {
  //         // console.log(res.data);
  //         const empData = res.data;
  //         dispatch(
  //           authActions.setLogin({
  //             employee: empData.employee,
  //             token: empData.token,
  //             isAuthenticated: true,
  //           })
  //         );

  //         toast({
  //           title: "Logged In!",
  //           description: "You have successfully logged in.",
  //           status: "success",
  //           duration: 4000,
  //           isClosable: true,
  //           position: "top-right",
  //         });

  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setErrorDiv(true);
  //         setErrorText("This Employee does not exist");
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //         setDisabled(false);
  //       });
  //   }
  // };

  // const Validation = () => {
  //   // validating whether the id is in correct format or not
  //   const staffPatt = /^[A-Za-z0-9]*$/;
  //   if (ID.trim().length < 1 && staffID.trim().length < 1) {
  //     setErrorDiv(true)
  //     setLoading(false)
  //     setErrorText('Both fields are empty, please enter your Staff & National ID')
  //   } else
  //     if (ID.trim().length < 1) {
  //       setErrorDiv(true)
  //       setLoading(false)
  //       setErrorText('Please enter your ID')
  //     }
  //     else if (staffID.trim().length < 1) {
  //       setErrorDiv(true);
  //       setLoading(false);
  //       setErrorText("Please enter your Staff ID");
  //     } else if (!staffPatt.test(staffID)) {
  //       setErrorDiv(true);
  //       setLoading(false);
  //       setErrorText("Your Staff ID is invalid");
  //     }
  //     else if (ID.trim().length > 12 || ID.trim().length < 11) {
  //       setErrorDiv(true)
  //       setLoading(false)
  //       setErrorText('Your ID is not valid')
  //     }
  //     else {
  //       return true;
  //     }
  // };

  // const Loader = loading ? ( // loading circle
  //   <Box pt={4}>
  //     <Spinner
  //       color="#FF6201"
  //       p={4}
  //       thickness="3px"
  //       speed="0.85s"
  //       emptyColor="gray.200"
  //     />
  //   </Box>
  // ) : (
  //   ""
  // );



  const onSubmit = (data) => {
    setLoading(true);
    setDisabled(true);

    axios.post(`http://localhost:8888/auth/login`, data)
      .then((res) => {
        console.log(res.data);
        // const empData = res.data;
        // dispatch(
        //   authActions.setLogin({
        //     employee: empData.employee,
        //     token: empData.token,
        //     isAuthenticated: true,
        //   })
        // );

        toast({
          title: "Logged In!",
          description: "You have successfully logged in.",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "This user may not exist",
          description: "You have successfully logged in.",
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
        setDisabled(false);
      })
  }


  return (
    <>
      <Center className="bg-color login">
        <Box>
          <Image
            // src={Logo}
            // src={Chr}
            // src={Pink}
            className="logo"
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Input
                w="300px"
                p="6"
                mt="4"
                bg="white"
                borderRadius="xl"
                onClick={() => setPlaceText(true)}
                {...register('staffId', { pattern: /^[A-Za-z0-9]*$/ })}
                aria-invalid={errors.staffId ? "true" : "false"}
                placeholder="Enter your Staff ID"
                variant="outline"
                focusBorderColor="#FF6201"
                isRequired
              />
              {errors.staffId && <p role="alert" style={{ color: "red" }}>Your id is invalid</p>}

            </Box>
            <Input
              w='300px'
              p='6'
              mt='2'
              bg='white'
              borderRadius='xl'
              onClick={() => setPlaceText(true)}
              {...register('nationalId', { minLength: { value: 11, message: 'too short' }, maxLength: { value: 13, message: 'too long' } })}
              aria-invalid={errors.nationalId ? "true" : "false"}
              placeholder='Enter your National ID'
              variant='outline'
              focusBorderColor='#FF6201'
              isRequired
            />
            {errors.nationalId && <p role="alert" style={{ color: "red" }}>{errors.nationalId.message}</p>}
            {placeTextDiv}

            {loading ? (
              <Loader />
            ) : (
              <Box pt={3}>
                <Button
                  colorScheme="orange"
                  size="md"
                  // onClick={handleSubmit}
                  isDisabled={disabled}
                  type="submit"
                >
                  Login
                </Button>
              </Box>
            )}
          </form>
        </Box>

      </Center>
    </>
  );
}

export default Login;

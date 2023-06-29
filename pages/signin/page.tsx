'use client'
import {
   Flex,
   Box,
   FormControl,
   FormLabel,
   Input,
   Checkbox,
   Stack,
   Link,
   Button,
   Heading,
   useColorModeValue,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
   const userName = useRef("");
   const pass = useRef("");

   const onSubmit = async () => {
      const result = await signIn("credentials", {
         username: userName.current,
         password: pass.current,
         redirect: true,
         callbackUrl: "app/page",
      });
   };

   return (
      <Flex
         minH={'100vh'}
         align={'center'}
         justify={'center'}
         bg={useColorModeValue('gray.50', 'gray.800')}>
         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
               <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            </Stack>
            <Box
               rounded={'lg'}
               bg={useColorModeValue('white', 'gray.700')}
               boxShadow={'lg'}
               p={8}>
               <Stack spacing={4}>
                  <FormControl id="email" onChange={e => (userName.current = e.target.value)}>
                     <FormLabel>Email address</FormLabel>
                     <Input type="email" />
                  </FormControl>
                  <FormControl id="password" onChange={e => (pass.current = e.target.value)}>
                     <FormLabel>Password</FormLabel>
                     <Input type="password" />
                  </FormControl>
                  <Stack spacing={10}>
                     <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox>Remember me</Checkbox>
                        <Link color={'blue.400'}>Forgot password?</Link>
                     </Stack>
                     <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                           bg: 'blue.500',
                        }}
                        onClick={onSubmit}>
                        Sign in
                     </Button>
                     <Button as={"a"} href="./signup/page">
                        Зарегестрироваться
                     </Button>
                  </Stack>
               </Stack>
            </Box>
         </Stack>
      </Flex>
   )
};
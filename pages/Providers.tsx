"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";


interface Props {
   children: ReactNode;
}
function Providers({ children }: Props) {
   return <SessionProvider>
      <ChakraProvider>
         {children}
      </ChakraProvider>
   </SessionProvider>;
}

export default Providers;
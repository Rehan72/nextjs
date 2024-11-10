
'use client'

import { useEffect } from "react";



export default function RootLayout({ children }) {
    useEffect(() => {
        document.body.classList.add('custom-class');
        return () => {
           document.body.classList.remove('custom-class');
        };
     }, []);
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <StoreProvider>
        <AuthProvider>
         <ToastProvider>
          <>"hgfgf"</> */}
        {children}
        {/* <ToastContainer/>
        </ToastProvider>
        </AuthProvider>
        </StoreProvider> */}
      </body>
    </html>
    
  );
}

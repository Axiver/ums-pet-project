import { Container, Box, Button } from "@mui/material";
import { signIn } from "next-auth/react";
import Head from "next/head";
import { EmailRequestBody } from "./api/notification/sendNotificationEmail";

export default function Home() {
  async function sendNotificationEmail() {
    const requestBody: EmailRequestBody = {
      emailID: "karandeepsingh00@icloud.com",
      name: "Karan",
      message: "This is a test message",
    };

    const response = await fetch("/api/sendNotificationEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    console.log(data);
  }

  async function testSignIn() {
    // api call to test sign in
    const response = await fetch("/api/auth/testSignIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  async function testSignInNextAuth() {
    signIn("credentials", {
      email: "karandeepsingh00@icloud.com",
      password: "testtesttest",
    });
  }

  return (
    <Container maxWidth="md">
      <Head>
        <title>Bookmark Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" color="primary" sx={{ m: 2, textAlign: "center", width: "60%" }} onClick={() => signIn()}>
            Sign In
          </Button>
          <br />
          <Button variant="contained" color="primary" sx={{ m: 2, textAlign: "center", width: "60%" }} onClick={sendNotificationEmail}>
            Send Notification Email
          </Button>
          <br />
          <Button variant="contained" color="primary" sx={{ m: 2, textAlign: "center", width: "60%" }} onClick={testSignIn}>
            Test Sign In (Hardcoded credentials, Prisma)
          </Button>
          <Button variant="contained" color="primary" sx={{ m: 2, textAlign: "center", width: "60%" }} onClick={testSignInNextAuth}>
            Test Sign In (Hardcoded credentials, NextAuth)
          </Button>
        </Box>
      </main>
    </Container>
  );
}

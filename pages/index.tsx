import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Home.module.css";
import petr from "../public/petr.png";

const axios = require("axios");

export default function Home() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [funfact, setFunfact] = useState("");
  const [funfactErr, setFunfactErr] = useState(false);

  function makeRequest() {
    console.log(name);
    axios
      .get("https://hack-tech-app-endpoint.herokuapp.com/test", {
        params: {
          name: name,
          email: email,
          funfact: funfact,
        },
      })
      .then(function (response: any) {
        console.log(response);
        setName("");
        setNameErr(false);
        setEmail("");
        setEmailErr(false);
        setFunfact("");
        setFunfactErr(false);
        toast("Success!");
      })
      .catch(function (error: any) {
        if (name == "") setNameErr(true);
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
          setEmailErr(true);
        if (funfact == "") setFunfactErr(true);
      });
  }

  return (
    <>
      <Head>
        <title>Nathan Huey Deliverable</title>
        <meta name="Deliverable" content="Deliverable for Hack At UCI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main className={styles.main}>
        <div className={styles.container}>
          <Box className={styles.card}>
            <h3>
              <b>Hack UCI Application</b>
            </h3>
            <div className={styles.entry}>
              <h4>
                <b>Name</b>
              </h4>
              <TextField
                size="small"
                value={name}
                onChange={(e: any) => {
                  setName(e.target.value);
                  setNameErr(false);
                }}
                error={nameErr}
                helperText={nameErr ? "Name Required" : " "}
              />
            </div>
            <div className={styles.entry}>
              <h4>
                <b>Email</b>
              </h4>
              <TextField
                size="small"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                  setEmailErr(false);
                }}
                error={emailErr}
                helperText={emailErr ? "Invalid Email" : " "}
              />
            </div>
            <div className={styles.entry}>
              <h4>
                <b>Fun Fact</b>
              </h4>
              <TextField
                size="small"
                rows={2}
                multiline
                value={funfact}
                onChange={(e: any) => {
                  setFunfact(e.target.value);
                  setFunfactErr(false);
                }}
                error={funfactErr}
                helperText={funfactErr ? "Fun Fact Required" : " "}
              />
            </div>
            <Button
              variant="contained"
              className={styles.button}
              sx={{
                background: "linear-gradient(to right, #ff7b5c, #ff6c81)",
              }}
              onClick={() => makeRequest()}
            >
              Submit
            </Button>
          </Box>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Image
              src={petr}
              alt="/petr.png"
              width={175}
              height={225}
              className={styles.image}
            />
          </div>
        </div>
      </main>
    </>
  );
}

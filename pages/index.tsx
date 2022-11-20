import React from "react";
import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../styles/Home.module.css";
import petr from "../public/petr.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nathan Huey Deliverable</title>
        <meta name="Deliverable" content="Deliverable for Hack At UCI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              <TextField size="small" />
            </div>
            <div className={styles.entry}>
              <h4>
                <b>Email</b>
              </h4>
              <TextField size="small" />
            </div>
            <div className={styles.entry}>
              <h4>
                <b>Fun Fact</b>
              </h4>
              <TextField size="small" rows={2} multiline />
            </div>
            <Button
              variant="contained"
              className={styles.button}
              sx={{
                background: "linear-gradient(to right, #ff7b5c, #ff6c81)",
              }}
            >
              Submit
            </Button>
          </Box>
        </div>
        <div className={styles.container}>
          <Image src={petr} alt="/petr.png" width={175} height={225} />
        </div>
      </main>
    </>
  );
}

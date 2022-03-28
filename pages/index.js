import Head from "next/head";
import { useState } from "react";
import { ErrorModal } from "../components/ErrorModal";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  const [error, setError] = useState(true);

  return (
    <div className="App bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      {error && <ErrorModal />}
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      <Modal />
    </div>
  );
}

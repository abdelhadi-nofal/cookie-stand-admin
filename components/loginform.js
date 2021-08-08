import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitHandeler(event) {
    event.preventDefault();
    props.loginHandler({ username: username, password: password });
  }

  function usernameChangeHandler(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  function passwordChangeHandler(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <header className="flex items-center justify-between p-4 bg-green-500">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
        <Link href="/overview">
          <a className="p-1 rounded bg-green-50"> Overview </a>
        </Link>
      </header>

      <main>
        <form
          onSubmit={submitHandeler}
          className="flex-col w-2.7/3 m-3 text-center bg-green-300 border border-green-500 rounded-md"
        >
          <h2 className="w-full mb-3 font-bold mt-7">USER NAME </h2>
          <input
            name="username"
            type="text"
            onChange={usernameChangeHandler}
            className="w-5/6 py-1 mx-auto "
            placeholder="User Name"
          />
          <h2 className="w-full mt-4 mb-3 font-bold">PASSWORD </h2>
          <input
            name="password"
            type="password"
            onChange={passwordChangeHandler}
            className="w-5/6 py-1 mx-auto "
            placeholder="password"
          />
          <input
            type="submit"
            value="SIGN IN"
            className="w-5/6 py-2 mx-auto mt-8 mb-5 bg-green-500 rounded"
          />
        </form>
      </main>

      <footer className="flex items-center justify-between p-4 bg-green-500 text-black-100">
        <div> &copy;2021</div>
      </footer>
    </div>
  );
}

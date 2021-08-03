import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [sotreData, setStoreData] = useState("");
  function createHandler(event) {
    event.preventDefault();

    const storeData = {
      location: event.target.location.value,
      minCustomers: event.target.min.value,
      maxCustomers: event.target.max.value,
      avgCookies: event.target.avg.value,
    };
    setStoreData(storeData);
  }
  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between p-4 bg-green-500">
        <h1 className="text-3xl">Cookie Stand Admin</h1>
      </header>

      <main className="">
        <form
          className="flex-col w-3/4 p-2 mx-auto my-8 bg-green-300 rounded-md "
          onSubmit={createHandler}
        >
          <h1 className="my-3 text-2xl text-center">Create Cookie Stand</h1>
          <div className="flex ">
            <label className="mx-1">Location</label>
            <input name="location" className="flex-auto bg-gray-100 " />
          </div>
          <div className="flex w-3.2/4 mx-auto my-5">
            <div className="flex-col w-1/4">
              <h2>Minimum Customers per hour</h2>
              <input type="number" name="min" className="" />
            </div>
            <div className="flex-col w-1/4">
              <h2>Maximum Customers per hour</h2>
              <input type="number" name="max" className="" />
            </div>
            <div className="flex-col w-1/4">
              <h2>Average Cookies per Sale</h2>
              <input type="number" name="avg" className="" />
            </div>
            <button className="w-1/4 bg-green-500 ">Create</button>
          </div>
        </form>

        <p className="my-3 text-center text-gray-600 text-1xl">
          {JSON.stringify(sotreData)}
        </p>
      </main>

      <footer className="flex justify-between p-4 bg-green-500">
        &copy;2021
      </footer>
    </div>
  );
}

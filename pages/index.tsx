import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [price, setPrice] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [distance, setDistance] = useState(0);
  const [people, setPeople] = useState(1);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const amount = (price * (distance / mileage)) / people;

    setAmount(amount || 0);
  }, [price, mileage, distance, people]);

  return (
    <>
      <Head>
        <title>Fuel Contribution Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center">
          Fuel Contribution Calculator
        </h1>
        <form className="mt-6">
          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="price"
                id="price"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={price}
                onChange={(event) => setPrice(parseInt(event.target.value))}
              />
            </div>
          </div>

          {/* Mileage */}
          <div>
            <label
              htmlFor="mileage"
              className="block text-sm font-medium text-gray-700"
            >
              Mileage
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="mileage"
                id="mileage"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={mileage}
                onChange={(event) => setMileage(parseInt(event.target.value))}
              />
            </div>
          </div>

          {/* Distance */}
          <div>
            <label
              htmlFor="distance"
              className="block text-sm font-medium text-gray-700"
            >
              Distance
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="distance"
                id="distance"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={distance}
                onChange={(event) => setDistance(parseInt(event.target.value))}
              />
            </div>
          </div>

          {/* People */}
          <div>
            <label
              htmlFor="people"
              className="block text-sm font-medium text-gray-700"
            >
              People
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="people"
                id="people"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={people}
                onChange={(event) => setPeople(parseInt(event.target.value))}
              />
            </div>
          </div>
        </form>

        <div className="mt-4">
          <p className="text-3xl text-center text-green-500">
            Please pay <span className="font-bold">&#x20b9;{amount}</span>!
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;

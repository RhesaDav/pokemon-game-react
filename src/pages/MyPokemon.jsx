import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataMyPokemon,
  renameMyPokemon,
  realeseMyPokemon,
  generatePrimeNum,
} from "../store/actions/pokemon.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyPokemon() {
  const dispatch = useDispatch();
  const { listMyPokemon, rename, primeNumber, isLoading } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getDataMyPokemon());
  }, [dispatch]);

  const handleRelease = (id) => {
    dispatch(generatePrimeNum());
    console.log(primeNumber);
    if (primeNumber?.isPrimeNumber === true) {
      toast(`success ${primeNumber?.number} is prime number`);
      setTimeout(() => {
        dispatch(realeseMyPokemon(id)).then(() => {
          dispatch(getDataMyPokemon());
        });
      }, 1000);
    } else {
      toast(`failed ${primeNumber?.number} is not prime number`);
    }
  };

  const handleRename = async (name) => {
    console.log(name);
    await dispatch(renameMyPokemon(name));
    if (rename.acknowledged === true) {
      console.log(rename);
      toast(`Name Changed`);
      dispatch(getDataMyPokemon());
    } else {
      toast("Failed To Rename, Try Again");
      dispatch(getDataMyPokemon());
    }
  };
  return (
    <div>
      {isLoading === true ? (
        <div>
          <h1>Loading ...</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-center font-bold text-4xl my-10">My Pokemon</h1>
          <div className="grid grid-cols-5 text-center">
            {listMyPokemon?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-red-100 w-10/12 h-78 m-5 items-center flex flex-col justify-between"
                >
                  <div className="bg-green-100 mb-10 w-full p-5">
                    <div>{item.name.toUpperCase()}</div>
                    <div>{item.nickname.toUpperCase()}</div>
                  </div>
                  <div className="h-full w-32">
                    <img
                      className="h-38 object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="mt-10 w-full flex justify-evenly">
                    <button
                      className="border-solid border-2 border-sky-500 p-5 mb-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                      onClick={() => handleRelease(item._id)}
                    >
                      RELEASE
                    </button>
                    <button
                      className="border-solid border-2 border-sky-500 p-5 mb-5 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
                      onClick={() => handleRename(item.nickname)}
                    >
                      RENAME
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

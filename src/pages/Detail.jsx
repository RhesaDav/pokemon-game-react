import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailPokemon } from "../store/actions/pokemon.action";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  let isSuccess = true;
  const { id } = useParams();
  const { detail, isLoading } = useSelector((state) => state);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  useEffect(() => {
    dispatch(getDetailPokemon(id));
  }, [dispatch]);

  useEffect(() => {
    console.log(isLoading);
  }, []);
  
  const handleCatch = async () => {
    if (isSuccess === false) {
      isSuccess = true;
      toast('You Got It !!')
      setTimeout(() => {
        navigate('/my-pokemon')
      },1500)
    } else {
      isSuccess = false;
      toast('Failed to catch')
    }
    console.log(isSuccess);

    const result = [0, 1];
    for (var i = 2; i < 50; i++) {
      result.push(result[i - 2] + result[i - 1]);
    }
    console.log(result);

    const parsed = {
      name: detail.name,
      nickname: detail.name,
      image: detail?.sprites?.other.dream_world.front_default,
    };
    console.log(parsed)

    const postToBackend = await axios.post(
      "http://127.0.0.1:5000/pokemon",
      parsed
    );
    console.log(postToBackend);
  };

  return (
    <div cla>
      {isLoading === true ? (
        <div>
          <h1>Loading ....</h1>
        </div>
      ) : (
        <div className="flex">
          <ToastContainer/>
          <div className="w-1/3 m-10">
            <div className="justify-center flex flex-col gap-10">
              <h1 className="text-center text-3xl font-bold">
                {detail?.name.toUpperCase()}
              </h1>
              <img
                src={detail?.sprites?.other.dream_world.front_default}
                alt=""
              />
            </div>
            <div>
              <div>
                {detail?.types?.map((item, idx) => {
                  return (
                    <div key={idx} className="my-5">
                      <h1 className="">
                        Type :{" "}
                        <span className="bg-blue-100 p-3 rounded-xl w-20 text-center font-bold m-5">
                          {item.type.name.toUpperCase()}
                        </span>
                      </h1>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-blue-200 p-5 text-4xl rounded-2xl hover:bg-blue-500 hover:bg-blue-100"
                  onClick={handleCatch}
                >
                  Catch
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center w-2/3">
            {detail?.moves?.map((item, idx) => {
              return (
                <div key={idx} className="flex items-center">
                  <div className="w-32 h-16 text-center bg-red-200 text-center mx-2 my-3 rounded-xl p-2">
                    {item.move.name.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>
          {/* <Modal
            isOpen={modal}
            style={customStyles}
            onRequestClose={() => setModal(false)}
            contentLabel="Example Modal"
          >
            <h2>Give name</h2>
            <button onClick={() => setModal(false)}>close</button>
            <form onSubmit={handleGiveName}>
              <input
                type="text"
                name="pokeName"
                placeholder="Give a name ..."
                defaultValue={detail?.name}
                readOnly={true}
              />
              <button>Rename</button>
            </form>
            <button>Save</button>
          </Modal> */}
        </div>
      )}
    </div>
  );
}

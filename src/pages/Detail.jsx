import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addToMyPokemon,
  getDetailPokemon,
} from "../store/actions/pokemon.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Detail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isSuccess = true;
  const { id } = useParams();
  const { detail, isLoading, catchPokemon } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDetailPokemon(id));
  }, [dispatch]);

  const handleCatch = async () => {
    if (isSuccess === false) {
      isSuccess = true;
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
      console.log(parsed);
      dispatch(addToMyPokemon(parsed));
      toast("You Got It !!");
      setTimeout(() => {
        navigate("/my-pokemon");
      }, 1500);
    } else {
      isSuccess = false;
      toast(`Failed to catch`);
    }
    console.log(isSuccess);
  };

  return (
    <div>
      {isLoading === true ? (
        <div>
          <h1>Loading ....</h1>
        </div>
      ) : (
        <div className="flex">
          <ToastContainer />
          <div className="w-1/3 m-10">
            <div className="justify-center flex flex-col gap-10">
              <h1 className="text-center text-3xl font-bold">
                {detail?.name.toUpperCase()}
              </h1>
              <img
                src={detail?.sprites?.other.dream_world.front_default}
                alt=""
                className="h-48"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex">
                {detail?.types?.map((item, idx) => {
                  return (
                    <div key={idx} className="flex justify-center p-2 my-5">
                      <span className="bg-blue-300 p-1 rounded-xl w-20 text-center font-bold mx-1">
                        {item.type.name.toUpperCase()}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="bg-blue-200 p-5 text-4xl rounded-2xl hover:bg-blue-500"
                  onClick={handleCatch}
                >
                  Catch
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center my-auto w-2/3 h-96 overflow-auto">
            {detail?.moves?.map((item, idx) => {
              return (
                <div key={idx} className="flex items-center bg-red-100">
                  <div className="w-32 h-16 text-center bg-red-200 mx-2 my-3 rounded-xl p-2">
                    {item.move.name.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

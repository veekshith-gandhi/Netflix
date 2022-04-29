/** @format */

import { useEffect, useState } from "react";
import Features from "../../Components/Features";
import List from "../../Components/List";
import Navbar from "../../Components/Navbar";
import axios from "axios";
import "./home.scss";
import { API, token } from "../../api";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const randomList = async () => {
      const AuthStr = "Bearer ".concat(token);
      try {
        const { data } = await axios.get(
          `${API}/lists?${type ? "type=" + type : ""}${
            genre ? "genre=" + genre : ""
          }`,
          {
            headers: {
              Authorization: AuthStr,
            },
          }
        );
        // console.log(data);
        setLists(data.list);
      } catch (error) {
        console.log(error);
      }
    };
    randomList();
  }, [genre, type]);

  return (
    <div className="home">
      <Navbar />
      <Features type={type} />
      {lists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </div>
  );
};

export default Home;

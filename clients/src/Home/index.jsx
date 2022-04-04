/** @format */

import Features from "../Components/Features";
import List from "../Components/List";
import Navbar from "../Components/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;

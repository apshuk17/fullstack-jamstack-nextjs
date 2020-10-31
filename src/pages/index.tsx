import fetch from "isomorphic-unfetch";
import Cars from '../components/Cars';

const Home = (props) => {
  return props?.cars ? <Cars cars={props.cars} /> : null;
};

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/cars");
  const cars = await response.json();

  return {
    props: {
      ...cars,
    },
  };
};

export default Home;

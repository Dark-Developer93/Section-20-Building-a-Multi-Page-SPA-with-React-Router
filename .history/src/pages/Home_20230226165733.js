import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>My Home Page</div>;<Link to="/products">Go to Products Page</Link>
    </>
  );
};

export default HomePage;

import Hr from "../atom/Hr";
import H1 from "../atom/H1";

const NavBar = () => {
  return (
    <>
      <div className="flex p-4 justify-evenly">
        <a href="http://localhost:5173">
          <H1>Naver</H1>
        </a>
        <a href="http://localhost:5173/signup">
          <H1>Sign Up</H1>
        </a>
        <a href="http://localhost:5173/signin">
          <H1>Sign In</H1>
        </a>
      </div>
      <Hr />
    </>
  );
};

export default NavBar;

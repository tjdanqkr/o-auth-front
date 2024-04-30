import H1 from "../atom/H1";
import Article from "../atom/Article";
import FormComponent from "../atom/FormComponent";
import Label from "../atom/Label";
import Input from "../atom/Input";
import { useState } from "react";
import Hr from "../atom/Hr";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../atom/Button";
import axios from "axios";

const SignIn = () => {
  const [searchParams] = useSearchParams();

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/auth/signin", state).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        if (searchParams.get("redirect")) {
          location.assign(`${searchParams.get("redirect")}?accessToken=${res.data.accessToken}&refreshToken=${res.data.refreshToken}&tokenType=${res.data.tokenType}`);
        }
      }
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/signup?redirect=${searchParams.get("redirect")}`);
  };
  return (
    <Article>
      <H1>회원가입</H1>
      <FormComponent onSubmitHandler={handleSubmit}>
        <Label>email</Label>
        <Input type="email" name="email" onChange={handleChange} required />
        <Label>password</Label>
        <Input type="password" name="password" onChange={handleChange} required />
        <Hr />
        <Input type="submit" value="로그인" />
        <Button type="button" onClick={handleClick}>
          회원가입
        </Button>
      </FormComponent>
    </Article>
  );
};

export default SignIn;

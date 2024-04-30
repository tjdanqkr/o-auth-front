import H1 from "../atom/H1";
import Article from "../atom/Article";
import FormComponent from "../atom/FormComponent";
import Label from "../atom/Label";
import Input from "../atom/Input";
import { useState } from "react";
import Hr from "../atom/Hr";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    birthday: "",
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 통신
    axios.post("http://localhost:8080/api/v1/auth/signup", state).then((res) => {
      if (res.status === 201) navigate(`/signin?redirect=${searchParams.get("redirect")}`);
    });
    // navigate(`/signin?redirect=${searchParams.get("redirect")}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Article>
      <H1>로그인</H1>
      <FormComponent onSubmitHandler={handleSubmit}>
        <Label>email</Label>
        <Input type="email" name="email" onChange={handleChange} required />
        <Label>password</Label>
        <Input type="password" name="password" onChange={handleChange} required />
        <Label>nickname</Label>
        <Input name="name" onChange={handleChange} required />
        <Label>성별</Label>
        남 <input type="radio" name="gender" value="남" onChange={handleChange} />
        여 <input type="radio" name="gender" value="여" onChange={handleChange} />
        <Label>생일</Label>
        <Input type="date" name="birthday" onChange={handleChange} required />
        <Hr />
        <Input type="submit" value="회원가입" />
      </FormComponent>
    </Article>
  );
};

export default Signup;

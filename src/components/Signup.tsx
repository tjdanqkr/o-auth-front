import H1 from "../atom/H1";
import Article from "../atom/Article";
import FormComponent from "../atom/FormComponent";
import Label from "../atom/Label";
import Input from "../atom/Input";
import { useState } from "react";
import Hr from "../atom/Hr";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../utils/network";

const Signup = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    nickname: "",
    gender: "",
    birthDay: "",
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await api("/api/v1/auth/signup", "POST", state);
    if (res.status === 201)
      navigate(`/signin?redirect=${searchParams.get("redirect")}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Article>
      <H1>회원가입</H1>
      <FormComponent onSubmitHandler={handleSubmit}>
        <Label>email</Label>
        <Input type="email" name="email" onChange={handleChange} required />
        <Label>password</Label>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
        <Label>nickname</Label>
        <Input name="nickname" onChange={handleChange} required />
        <Label>성별</Label>남{" "}
        <input type="radio" name="gender" value="남" onChange={handleChange} />
        여{" "}
        <input type="radio" name="gender" value="여" onChange={handleChange} />
        <Label>생일</Label>
        <Input type="date" name="birthDay" onChange={handleChange} required />
        <Hr />
        <Input type="submit" value="회원가입" />
      </FormComponent>
    </Article>
  );
};

export default Signup;

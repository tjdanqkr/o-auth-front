import H1 from "../atom/H1";
import Article from "../atom/Article";
import FormComponent from "../atom/FormComponent";
import Label from "../atom/Label";
import Input from "../atom/Input";
import { useEffect, useState } from "react";
import Hr from "../atom/Hr";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../atom/Button";
import { api, getRefresh } from "../utils/network";

const SignIn = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchParams.get("redirect")) return;
    const res = await api("/api/v1/auth/signin", "POST", state);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      redirect(res);
    }
  };
  const redirect = (res: any) => {
    const base = searchParams.get("redirect");
    if (base.split("?").length > 1) {
      const spUri = base.split("?");
      let uri = `${base.split("?")[0]}?token=${res.data.token}&tokenType=${
        res.data.tokenType
      }`;
      spUri[1].split("&").forEach((str) => {
        uri += `&${str.split("=")[0]}=${str.split("=")[1]}`;
      });
      location.assign(uri);
    } else {
      location.assign(
        `${searchParams.get("redirect")?.split("?")}?token=${
          res.data.token
        }&tokenType=${res.data.tokenType}`
      );
    }
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
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      refresh();
    }
  }, []);
  const refresh = async () => {
    const res = await getRefresh("/api/v1/auth/refresh");
    if (res.status === 200) redirect(res);
  };
  return (
    <Article>
      <H1>로그인</H1>
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

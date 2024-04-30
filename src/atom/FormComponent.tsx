type FormProps = {
  children: React.ReactNode;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};
const FormComponent = ({ children, onSubmitHandler }: FormProps) => {
  return <form onSubmit={onSubmitHandler}>{children}</form>;
};

export default FormComponent;

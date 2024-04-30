type props = {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const Button = ({ children, ...props }: props) => {
  return (
    <button {...props} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
      {children}
    </button>
  );
};
export default Button;

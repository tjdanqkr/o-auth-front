type props = {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
const WarningButton = ({ children, ...props }: props) => {
  return (
    <button className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600" {...props}>
      {children}
    </button>
  );
};
export default WarningButton;

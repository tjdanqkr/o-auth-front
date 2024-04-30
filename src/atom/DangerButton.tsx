type props = {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
const DangerButton = ({ children, ...props }: props) => {
  return (
    <button className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600" {...props}>
      {children}
    </button>
  );
};
export default DangerButton;

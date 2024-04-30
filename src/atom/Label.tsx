type props = {
  children: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
const Label = ({ children, ...props }: props) => {
  return (
    <label {...props} className="block text-sm font-medium leading-6 text-gray-900">
      {children}
    </label>
  );
};
export default Label;

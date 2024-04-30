type props = {
  children: React.ReactNode[] | React.ReactNode;
};
const Article = ({ children }: props) => {
  return <article className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">{children}</article>;
};
export default Article;

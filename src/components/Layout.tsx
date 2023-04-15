interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-sm:w-11/12">
      {children}
    </div>
  );
};

export default Layout;

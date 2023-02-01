interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="flex flex-col items-center">{children}</div>;
};

export default Layout;

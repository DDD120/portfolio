interface Props {
  children: React.ReactNode;
}

function Heading({ children }: Props) {
  return (
    <h2 className="flex justify-center items-center rounded-xl bg-green font-lsy text-white text-3xl w-56 h-12">
      {children}
    </h2>
  );
}

export default Heading;

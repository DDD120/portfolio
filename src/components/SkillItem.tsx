interface Props {
  children: React.ReactNode;
}

function SkillItem({ children }: Props) {
  return (
    <div className="px-6 py-1 border-green border-2 rounded-full text-green text-center">
      {children}
    </div>
  );
}

export default SkillItem;

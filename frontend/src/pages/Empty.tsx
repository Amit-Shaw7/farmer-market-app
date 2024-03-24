const Empty = ({ text }: { text: string }) => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <span>{text}</span>
    </div>
  );
};

export default Empty;
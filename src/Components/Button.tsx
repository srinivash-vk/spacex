interface _ButtonProps {
  name: string;
  onClick?: () => void;
}

export default function Button(props: _ButtonProps) {
  const { name, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="hover:text-black hover:italic font-medium px-4 py-2 rounded-md border border-white text-white hover:bg-gray-200"
    >
      {name} {"👈"}
    </button>
  );
}

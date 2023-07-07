function Input({ placeholder }) {
  return (
    <input
      type="text"
      className="w-full py-3 text-lg  border-b border-t-0 border-l-0 border-r-0 focus:border-transparent focus:ring-0 outline-none focus:border-b-[#51C14F] transition duration-150  focus:placeholder-[#51C14F]"
      placeholder={placeholder}
    />
  );
}

export default Input;

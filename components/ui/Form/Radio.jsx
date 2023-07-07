function Radio({ title, id, setValue, selected }) {

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="flex items-center mt-3 gap-x-2">
      <input
        id={id}
        type="radio"
        value={id}
        onChange={handleValueChange}
        name="web"
        className="checked:text-[#51C14F] checked:border-[#51C14F] checked:accent-[#51C14F] outline-none  focus:ring-0"
      />
      <label
        htmlFor={id}
        className={`${
          selected ? "text-[#51C14F]" : "text-[rgba(98,98,98,1)]"
        }  text-[15px] font-montserrat`}
      >
        {title}
      </label>
    </div>
  );
}

export default Radio;

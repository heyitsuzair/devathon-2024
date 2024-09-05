const IconButton = ({
  icon,
  bgColor,
  text,
  borderColor,
  textStyles,
  className,
  onClick = null,
}) => {
  return (
    <div
      className={`${className}  flex justify-center items-center rounded-md cursor-pointer`}
      onClick={onClick}
    >
      {icon}
      {text && (
        <p className={`${textStyles} font-semibold ml-[10px]`}>{text}</p>
      )}
    </div>
  );
};
export default IconButton;

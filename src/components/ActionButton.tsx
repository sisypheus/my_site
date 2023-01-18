const ActionButton = ({ children, onClick, props, text }: any) => {
  return (
    <button {...props} className="">
      {text}
    </button>
  );
};

export default ActionButton;

const FormCheckbox = ({ name, label, size, defaultChecked }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>

      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        className={`checkbox checkbox-accent ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;

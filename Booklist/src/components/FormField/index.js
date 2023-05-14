import React from "react";
import PropTypes from "prop-types";

const FormField = ({ label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}:</label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;

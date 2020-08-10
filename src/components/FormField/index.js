import React from 'react';

function FormField({ label, type, value, name, onChange }) {
    return (
        <div>
            <label>
                {label}:
                    <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={onChange} />
            </label>
        </div>
    );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
};

export default FormField;
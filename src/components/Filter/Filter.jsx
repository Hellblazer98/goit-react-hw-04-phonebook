import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (
        <div>
            <label>
                <p>Find contacts by name</p>
                <input type="text" value={value} onChange={onChange} />
            </label>
        </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}
import { useTheme } from '@mui/material/styles';
import { getInputValue } from '../FormHelper';
import style from './style';

const DatePicker = ({ stateName, eventInputValue, formStates }) => {
  const theme = useTheme();

  const handleChange = (e) => {
    eventInputValue(stateName, e.target.value);
  };

  return (
    <>
      <input
        required
        style={{
          ...style.dataPikerStyle,
          background: theme.palette.black.main,
          border: `1px solid ${theme.palette.primary.dark}`,
        }}
        id={stateName}
        name={stateName}
        type="date"
        placeholder={`Add ${stateName}`}
        onChange={handleChange}
        value={getInputValue(stateName, formStates)}
      />
    </>
  );
};

export default DatePicker;

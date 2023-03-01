import { useEffect } from 'react';
import { Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useSportContext from '../../../../contextApi/contexts/SportContext';
import { getAllSports } from '../../../../api/graphql/sport';
import { getInputValue } from '../FormHelper';
import style from './style';

const SelectControl = ({ stateName, eventInputValue, formStates }) => {
  const { sports, setSport } = useSportContext();

  const theme = useTheme();

  useEffect(() => {
    getSports();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getSports() {
    const sportsList = await getAllSports();
    setSport(sportsList);
  }
  const handleChange = (e) => {
    eventInputValue(stateName, e.target.value);
  };

  return (
    <Select
      sx={{ ...style.selectStyle, border: `1px solid ${theme.palette.primary.dark}` }}
      inputLabelProps={{ style: { color: 'white' } }}
      value={getInputValue(stateName, formStates)}
      inputProps={{ style: { color: 'white' } }}
      required
      id={stateName}
      label="Sport Type"
      onChange={handleChange}
    >
      {sports.map((ele, i) => {
        return (
          <MenuItem sx={{ color: theme.palette.primary.dark }} key={i} value={ele.sport_id}>
            {ele.type}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default SelectControl;

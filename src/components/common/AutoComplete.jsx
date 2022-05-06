import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutocompleteComponent = ({options, label}) => {
  return (
    <Autocomplete
      disablePortal
      id="autocomplete"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

export default AutocompleteComponent;

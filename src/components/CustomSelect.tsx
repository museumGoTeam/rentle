import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%'
  },
}));



type CustomSelectProps = {
  data: (string | number)[]
  value: string | unknown;
  name?: string,
  helperText?: string
  label?: string,
  className?: string;
  onChange: (value: string, name: string) => void;
} ;

const CustomSelect: React.FC<CustomSelectProps> = ({data,name, value,helperText,label, onChange}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    onChange(event.target.value as string, event.target.name ? event.target.name : '')
  };

  return (
    <FormControl focused className={classes.formControl}>
      <InputLabel shrink>{label}</InputLabel>
      <Select
        value={value}
        name={name}
        onChange={handleChange}
        displayEmpty
      >
        {data.map((dataItem) => (
          <MenuItem
            key={dataItem}
            value={dataItem}
          >
            {dataItem}
          </MenuItem>
        ))}
      </Select>
          {helperText ? <FormHelperText>{helperText}</FormHelperText> : <div></div>}
    </FormControl>
  );
};

export default CustomSelect;

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Input } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
    "& .MuiInput-underline:after": {
      display: 'none'
    },
    "& .MuiInput-underline:before": {
      display: 'none'
    },
    "& .MuiInputBase-root": {
      color: theme.palette.primary.main,
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 'bold',
      textAlign: 'right',
      outline: "none",
      border: "none",
      backgroundColor: "transparent",
    },
    "& .MuiSelect-nativeInput": {
      position: 'initial'
    }

  },
  select: {
    "& .MuiSelect-icon": {
      display: 'none'
    },
  },
  sellectItem: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
  },
  sellectedItem: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: "white !important",
  },
}));



type CustomSelectProps = {
  data: string[]
  value: string | unknown;
  name?: string,
  helperText?: string
  className?: string;
  onChange: (value: string | unknown, name: string) => void;
} ;

const CustomSelect: React.FC<CustomSelectProps> = ({data,name, value,helperText, onChange}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    onChange(event.target.value, event.target.name ? event.target.name : '')
  };

  return (
    <FormControl focused className={classes.formControl}>
      <Select
        value={value}
        name={name}
        onChange={handleChange}
        autoFocus
        className={classes.select}
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

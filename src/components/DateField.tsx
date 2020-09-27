import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider,KeyboardDatePicker,} from "@material-ui/pickers";





type DateFieldProps = {
  name?: string;
  value: string | undefined;
  label?: string,
  disableFuture?: boolean,
  disablePast?: boolean,
  onChange: (value: string, name: string) => void;
};

const DateField: React.FC<DateFieldProps> = ({name,value,label,disableFuture, disablePast, onChange}) => {

  const handleChange = (date: Date | null) => {
    if (date) {
      try {
        onChange(date.toISOString(), name ? name : "")
      } catch {
        onChange(date.toString(), name ? name : "")
      }
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        label={label}
        name={name}
        format="dd/MM/yyyy"
        margin="normal"
        value={value}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        fullWidth
        disableFuture={disableFuture}
        disablePast={disablePast}
        minDateMessage=""
        invalidDateMessage=""
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateField;

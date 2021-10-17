import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6} style={{fontStyle:"PT Sans"}}>
      <Controller
        style={{fontStyle:"PT Sans"}}
        control={control}
        fullWidth
        name={name}
        defaultValue=""
        render={({}) => (
          <TextField fullWidth label={label} required  style={{fontStyle:"PT Sans"}}/>
        )}
      />
    </Grid>
  );
};

export default FormInput;

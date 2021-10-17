import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOption, setShippingOption] = useState("");

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({
      id: code,
      label: name,
    })
  );

  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - ${sO.price.formatted_with_symbol}`,
  }));

  const getShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const getSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const getShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    getShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) getSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      getShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom style={{fontFamily: 'PT Sans'}}>
        Shipping Address
      </Typography>
      <FormProvider {...methods} style={{fontFamily: 'PT Sans'}}>
        <form onSubmit={methods.handleSubmit((data) => next({...data, shippingCountry, shippingSubdivision, shippingOption}))}>
          <Grid container spacing={3} style={{fontFamily: 'PT Sans'}}>
            <FormInput name="firstName" label="First name" />
            <FormInput name="lastName" label="Last name" />
            <FormInput name="address1" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel style={{fontFamily: 'PT Sans'}}>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                style={{fontFamily: 'PT Sans'}}
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id} style={{fontFamily: 'PT Sans'}}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel style={{fontFamily: 'PT Sans'}}>Shipping Subdivisions</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                style={{fontFamily: 'PT Sans'}}
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id} style={{fontFamily: 'PT Sans'}}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel style={{fontFamily: 'PT Sans'}}>Shipping Options</InputLabel>
              <Select
                value={shippingOption}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
                style={{fontFamily: 'PT Sans'}}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id} style={{fontFamily: 'PT Sans'}}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" variant="outlined" style={{fontFamily:"PT Sans"}}>
              Back to cart
            </Button>
            <Button type="submit" variant="contained" color="primary" style={{fontFamily:"PT Sans"}}>
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;

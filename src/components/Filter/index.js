import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  FormControl,
  Box,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";
import { Search } from "@material-ui/icons";

const PROVINCIAS = [
  "Álava",
  "Albacete",
  "Alicante",
  "Almería",
  "Asturias",
  "Ávila",
  "Badajoz",
  "Barcelona",
  "Burgos",
  "Cáceres",
  "Cádiz",
  "Cantabria",
  "Castellón",
  "Ciudad Real",
  "Córdoba",
  "La Coruña",
  "Cuenca",
  "Gerona",
  "Granada",
  "Guadalajara",
  "Guipúzcoa",
  "Huelva",
  "Huesca",
  "Islas Baleares",
  "Jaén",
  "León",
  "Lérida",
  "Lugo",
  "Madrid",
  "Málaga",
  "Murcia",
  "Navarra",
  "Orense",
  "Palencia",
  "Las Palmas",
  "Pontevedra",
  "La Rioja",
  "Salamanca",
  "Segovia",
  "Sevilla",
  "Soria",
  "Tarragona",
  "Santa Cruz de Tenerife",
  "Teruel",
  "Toledo",
  "Valencia",
  "Valladolid",
  "Vizcaya",
  "Zamora",
  "Zaragoza",
];

const useStyles = makeStyles((theme) => {
  return {
    card: {
      width: "50%",
    },
    content: {
      textAlign: "center",
    },
  };
});

const Filter = ({ onFilterChange }) => {
  const [concesionario, setConcesionario] = useState("");
  const [provincia, setProvincia] = useState("");

  const classes = useStyles();

  useEffect(() => {
    onFilterChange(concesionario, provincia);
  }, [concesionario, provincia]);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} md={7} className={classes.content}>
            <TextField
              label="Concesionario"
              variant="outlined"
              value={concesionario}
              onChange={(e) => setConcesionario(e.target.value)}
              style={{ minWidth: "75%", minHeight: "50px" }}
            />
          </Grid>

          <Grid item xs={12} md={4} className={classes.content}>
            <Box my={2}>
              <FormControl
                variant="outlined"
                className={classes.content}
                style={{ minWidth: "75%" }}
              >
                <InputLabel id="lblProvincia">Provincia</InputLabel>
                <Select
                  labelId="lblProvincia"
                  value={provincia}
                  onChange={(e) => setProvincia(e.target.value)}
                  className={classes.content}
                >
                  {PROVINCIAS.map((p) => (
                    <MenuItem value={p} key={p}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={1} className={classes.content}>
            <Search fontSize="large" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Filter;

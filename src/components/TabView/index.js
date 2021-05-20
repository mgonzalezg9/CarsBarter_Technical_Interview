import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box, Card, CardContent, Grid, Link } from "@material-ui/core";

const TABS = ["Horarios", "¿Dónde estamos?", "Contacto", "Referencia"];

const HORARIOS_TAB = TABS.indexOf("Horarios");
const LOCALIZACION_TAB = TABS.indexOf("¿Dónde estamos?");
const CONTACTO_TAB = TABS.indexOf("Contacto");
const REFERENCIA_TAB = TABS.indexOf("Referencia");

const HorariosTab = ({ timetable }) => {
  const data = JSON.parse(timetable.toString().replaceAll("'", '"'));

  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography variant="h6" color="initial">
            Nuestro horario:
          </Typography>
        </Grid>

        {Object.keys(data).map((k) => (
          <Grid item key={k} xs={12} md={6}>
            <Typography color="initial">{`${k}: ${data[k]}`}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const LocalizacionTab = ({ location }) => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography variant="h6" color="initial">
            Ubicación:
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography color="initial">
            Puede encontrarnos en{" "}
            <Link href={`https://maps.google.com/?q=${location}`}>
              {location}.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const ContactoTab = ({ contact }) => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography variant="h6" color="initial">
            Contacto:
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography color="initial">
            Para hablar con nostros llame al {contact}.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const ReferenciaTab = ({ link }) => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography color="initial">
            Puede obtener más información sobre el concesionario desde su
            entrada en <Link href={link}>autocasión.</Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const TabView = ({ link, timetable, contact, location }) => {
  const [current, setCurrent] = useState(HORARIOS_TAB);

  const handleChange = (event, newTab) => {
    setCurrent(newTab);
  };

  const renderTab = () => {
    switch (current) {
      case HORARIOS_TAB:
        return (
          <Card>
            <CardContent>
              <HorariosTab timetable={timetable}></HorariosTab>
            </CardContent>
          </Card>
        );

      case LOCALIZACION_TAB:
        return (
          <Card>
            <CardContent>
              <LocalizacionTab location={location}></LocalizacionTab>
            </CardContent>
          </Card>
        );

      case REFERENCIA_TAB:
        return (
          <Card>
            <CardContent>
              <ReferenciaTab link={link}></ReferenciaTab>
            </CardContent>
          </Card>
        );

      case CONTACTO_TAB:
        return (
          <Card>
            <CardContent>
              <ContactoTab contact={contact}></ContactoTab>
            </CardContent>
          </Card>
        );

      default:
        break;
    }
  };

  return (
    <div>
      <Paper>
        <Tabs
          value={current}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="pestañas con detalles del concesionario"
        >
          {TABS.map((t) => (
            <Tab key={t} label={t} />
          ))}
        </Tabs>
      </Paper>

      <Box mt={1}>{renderTab()}</Box>
    </div>
  );
};

export default TabView;

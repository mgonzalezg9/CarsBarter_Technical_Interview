import { Box, Typography } from "@material-ui/core";
import React from "react";
import TabView from "../components/TabView";
import Description from "../components/Description";

const Detail = ({ seller }) => {
  if (!seller) {
    return (
      <Typography variant="h5" color="initial">
        No se encontró el vendedor especificado
      </Typography>
    );
  }

  return (
    <Box px={4}>
      <Description
        name={seller.name}
        imageSrc={seller.moreImages}
        description={seller.description}
      />
      <Box mt={3}>
        <TabView
          link={seller.ownerId}
          timetable={seller.openingTime}
          location={seller.address}
          contact={seller.phoneNumber}
        />
      </Box>
      <Box mt={3}>
        <Typography color="initial">
          Última actualización de la información: {seller.lastUpdate}
        </Typography>
      </Box>
    </Box>
  );
};

export default Detail;

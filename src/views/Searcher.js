import React, { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Table from "../components/Table";
import { Box } from "@material-ui/core";
import axios from "axios";

const rows = [
  {
    id: 0,
    name: "MAGNA SUPERCARS",
    description:
      "Magna Supercars \n \nEl lugar de referencia para todos aquellos que quieren cumplir sus sueños con un coche de lujo.",
    imagen: "",
    moreImages:
      "//images0.autocasion.com/unsafe/260x146/ad/11/1155/2faa3d67173721827a80398f8f691e15f19de305.jpeg",
    openingTime:
      "{'Monday': ['09:00-19:00'], 'Tuesday': ['09:00-19:00'], 'Wednesday': ['09:00-19:00'], 'Thursday': ['09:00-19:00'], 'Friday': ['09:00-19:00'], 'Saturday': ['Cerrado'], 'Sunday': ['Cerrado']}",
    address: "AV/ CALCERON DE LA BARCA. URB. MAGNA MARBELLA, MARBELLA, Málaga",
    phoneNumber: 952944369,
    ownerId: "https://www.autocasion.com/profesional/magna-supercars",
    lastUpdate: "28/04/2021 17:44:29",
  },
  {
    id: 1,
    name: "RAYBANSCARS MURCIA",
    description:
      "Visite nuestra Autoferia Raybanscars en Crtra. Santa Catalina Nº170 \nVehículo en muy buen estado, mejor ver y probar. Consúltenos financiación y garantía, somos mayoristas con más de 20 años \nen el sector del automóvil. \n \nI.V.A. INCLUIDO TOTAL R.E.B.U",
    imagen: "",
    moreImages:
      "//images0.autocasion.com/unsafe/300x169/adv/11/1964/a2f67fbf13b3fdd4b268dec5a87b286959338085.jpeg",
    openingTime:
      "{'Monday': ['09:30-14:00', '16:30-21:00'], 'Tuesday': ['09:30-14:00', '16:30-21:00'], 'Wednesday': ['09:30-14:00', '04:30-21:00'], 'Thursday': ['09:30-14:00', '16:30-21:00'], 'Friday': ['09:30-14:00', '16:30-21:00'], 'Saturday': ['10:00-14:00'], 'Sunday': ['Cerrado']}",
    address: "CTRA SANTA CATALINA 167, SANTO ANGEL, Murcia",
    phoneNumber: 868868603,
    ownerId: "https://www.autocasion.com/profesional/raybanscars-1392466",
    lastUpdate: "28/04/2021 17:44:29",
  },
  {
    id: 2,
    name: "MERCEDES BENZ COMERCIAL VALENCIA MASSANASSA",
    description:
      "Mercedes-Benz Valencia somos Concesionario Oficial Mercedes-Benz de Turismos, Monovolúmenes, Furgonetas y Camiones. Disponemos de servicio de Recambios y Accesorios Originales Mercedes-Benz. Somos Concesionario Oficial Smart. \nTambién Ofrecemos Vehículos de Ocasión, encuentre vehículos seminuevos con muy pocos kilómetros y equipos opcionales de alta calidad que los hacen más atractivos, confortables y seguros. \nDirección: AV. DE PISTA, 50, MASSANASA, Valencia.",
    imagen: "",
    moreImages:
      "//images0.autocasion.com/unsafe/260x146/exposition/14/0975/7defcb33b369d8c1882fec22dcfdf79f1dfe0094.jpeg",
    openingTime: "{}",
    address: "AVDA. LA PISTA Nº50, MASSANASA, Valencia",
    phoneNumber: 960968593,
    ownerId:
      "https://www.autocasion.com/profesional/mercedes-benz-valencia-922255",
    lastUpdate: "28/04/2021 17:44:29",
  },
];

const BASE_URL = "http://localhost:3001";

const Searcher = () => {
  const [concesionarios, setConcesionarios] = useState([]);
  const [listado, setListado] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/data`)
      .then((res) => {
        setConcesionarios(res.data);
      })
      .catch((error) => {
        console.error("Error recuperando los concesionarios:", error);
      });
  }, []);

  const onFilterChange = (name, location) => {
    let nuevo = concesionarios
      .filter((c) => name === "" || c.name.includes(name))
      .filter((c) => location === "" || c.address.includes(location));

    setListado(nuevo);
    // console.log(nuevo);
  };

  return (
    <div>
      <Box display="flex" justifyContent="center" mt={2}>
        <Filter onFilterChange={onFilterChange}></Filter>
      </Box>
      <Box display="flex" justifyContent="center" mt={2}>
        <Table rows={listado} style={{ width: "50%" }}></Table>
      </Box>
    </div>
  );
};

export default Searcher;

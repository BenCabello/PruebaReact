import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SearchBar from './SearchBar'

const MiApi = () => {
  const [data, setData] = useState([]);
  const [dataFiltrada, setDataFiltrada] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mindicador.cl/api');
        const data = await response.json();
        console.log(data);
        setData(Object.values(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const sortedData = data.sort((a, b) => b.nombre - a.valor);

  const handleBusqueda = (busqueda) => {
    const datosFiltrados = data.filter((indicador) => {
      return indicador.nombre && indicador.nombre.toLowerCase().includes(busqueda.toLowerCase());
    });
    setDataFiltrada(datosFiltrados);
  };

  return (
    <div>
      <SearchBar filtrarIndicador={handleBusqueda} />
      <Row>
  {(dataFiltrada.length > 0 ? dataFiltrada : data).map((indicador, index) => (
    <Col key={index} xs={12} md={6} lg={4} xl={4} className="p-1 text-center">
      <Card className="bg-dark text-white" border="white">
        <Card.Body>
          <Card.Title>{indicador.nombre}</Card.Title>
          <Card.Text>{indicador.unidad_medida}</Card.Text>
          <Card.Text>{indicador.codigo}</Card.Text>
          <Card.Text>{indicador.valor}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  );
};

export default MiApi;
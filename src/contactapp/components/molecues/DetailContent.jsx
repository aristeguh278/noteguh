import React from "react";
import { Card, Text, Badge, Group, Modal, Button, Container } from "@mantine/core";
import { useParams } from "react-router-dom";
import { getDataNotes } from "../../utils/data";
import PropTypes from 'prop-types'

const DetailContent = ({ id }) => {
  const params = useParams();

  const showData = getDataNotes();
  const data = showData[params.id];

  return (
    <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card className="fancy_card" shadow="sm" padding="lg" radius="md" withBorder>
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}> {data.title}</Text>
        </Group>

        <Text size="sm" color="dimmed">
          {data.createdAt}
        </Text>
        <div
          className="fancy_card"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: "0.7rem",
            flexWrap: "wrap",
            gap: "10px",
          }}>
          {data.body}
        </div>
      </Card>
    </Container>
  );
};

DetailContent.propTypes={
  id:PropTypes.number
}

export default DetailContent;

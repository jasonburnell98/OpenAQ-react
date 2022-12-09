import { FC } from "react";
import { Card, Grid } from "semantic-ui-react";

const AirQualityCard = ({ firstCityAqi }: any) => {
  return (
    <div>
      <Grid.Column>
        <Card
          style={{
            backgroundColor: "#3578fe",
            marginTop: "60px",
            padding: "20px",
            width: "400px",
          }}
        >
          <Card.Content>
            <Card.Header style={{ marginBottom: "20px", color: "white" }}>
              City : {firstCityAqi[0]?.city}{" "}
              <sup>{firstCityAqi[0]?.country}</sup>
            </Card.Header>
            <Card.Meta
              style={{ marginBottom: "10px", fontSize: "20px", color: "Black" }}
            >
              Location : {firstCityAqi[0]?.location}
            </Card.Meta>
            <Card.Description
              style={{ marginBottom: "10px", fontSize: "16px", color: "Black" }}
            >
              {firstCityAqi[0]?.measurements[0]?.parameter}
              {" : "}
              {firstCityAqi[0]?.measurements[0]?.sourceName}
            </Card.Description>
            <Card.Description
              style={{ marginBottom: "10px", fontSize: "16px", color: "Black" }}
            >
              {" "}
              {firstCityAqi[0]?.measurements[0]?.value}
              {"  "}
              {firstCityAqi[0]?.measurements[0]?.unit}
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
};

export default AirQualityCard;

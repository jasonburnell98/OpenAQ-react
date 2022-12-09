import { Card, Grid } from "semantic-ui-react";

const CompareCard = ({ comparison }: any) => {
  return (
    <div>
      <Grid.Column>
        <Card
          style={{
            backgroundColor: "#3578fe",
            marginTop: "60px",
            padding: "20px",
          }}
        >
          <Card.Content>
            <Card.Header style={{ marginBottom: "20px", color: "white" }}>
              {comparison[0]?.city} has Better Air Quality
            </Card.Header>
            <Card.Description
              style={{ marginBottom: "10px", fontSize: "16px", color: "Black" }}
            >
              Difference {comparison?.differnce}{" "}
              {comparison[0]?.measurements[0]?.unit}
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
};

export default CompareCard;

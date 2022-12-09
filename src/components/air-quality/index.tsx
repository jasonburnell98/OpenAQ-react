import axios from "axios";
import { FC, useState } from "react";
import { Button, Container, Grid, } from "semantic-ui-react";
import AirQualityCard from "../card";
import InputField from "../input";
import SerachButton from "../button";
import { AirQualityResponse } from "./types";
import CompareCard from "../compare-cities-airquality";
import LoaderComponent from "../loader";

const AirQuality: FC = () => {
  const [firstCity, setFirstCity] = useState<string>("");
  const [secondCity, setSecondCity] = useState<string>("");
  const [firstCityAqi, setFirstCityAqi] = useState<AirQualityResponse>();
  const [secondCityAqi, setSecondCityAqi] = useState<AirQualityResponse>();
  const [comparison, setComparison] = useState<AirQualityResponse>();
  const [firstloader, setFirstLoader] = useState<boolean>(false);
  const [secondLoader,setSecondLoader] = useState<boolean>(false);
  const handleFirstCity = (firstCity: string) => {
    if (!firstCity) return;
    let city =
      firstCity.charAt(0).toUpperCase() + firstCity?.slice(1).toLowerCase();
    try {
      setFirstLoader(true);
      axios
        .get(`https://api.openaq.org/v1/latest?city=${city}`)
        .then((response) => setFirstCityAqi(response?.data?.results))
        .catch((err) => {
          setFirstLoader(false);
          console.log("err", err);
        });
        setFirstLoader(false)
    } catch (e) {
      setFirstLoader(false);
      throw new Error("Something error.Please try later!.");
    }
  };
  const handleSecondCity = async (secondCity: string) => {
    if (!secondCity) return;
    let city =
      secondCity.charAt(0).toUpperCase() + secondCity?.slice(1).toLowerCase();
    try {
      setSecondLoader(true);
      axios
        .get(`https://api.openaq.org/v1/latest?city=${city}`)
        .then((response) => {
          setSecondCityAqi(response?.data?.results);
        })
        .catch((err) => setSecondLoader(false));
        setSecondLoader(false)
    } catch (e) {
      setSecondLoader(false);
      throw new Error("Something error.Please try later!.");
    }
  };
  const handleCompare = (firstCityAqi: any, secondCityAqi: any) => {
    if (
      firstCityAqi[0]?.measurements[0]?.value >
      secondCityAqi[0]?.measurements[0]?.value
    ) {
      let differnce =
        firstCityAqi[0]?.measurements[0]?.value -
        secondCityAqi[0]?.measurements[0]?.value;
      setComparison({ ...secondCityAqi, differnce });
      return;
    } else {
      let differnce =
        secondCityAqi[0]?.measurements[0]?.value -
        firstCityAqi[0]?.measurements[0]?.value;
      setComparison({ ...firstCityAqi, differnce });
      return;
    }
  };

  return (
    <Container>
      <Grid>
        <Grid.Row style={{ marginTop: "50px" }}>
          <div>
            <InputField
              firstCity={firstCity}
              setFirstCity={setFirstCity}
              placeholder={"Enter first city"}
            />
            <SerachButton
              firstCity={firstCity}
              handleSearchCity={handleFirstCity}
              placeholder={"First city"}
            />
          </div>
          {firstCityAqi && secondCityAqi && (
            <div>
              <Button
                secondary
                onClick={() => {
                  handleCompare(firstCityAqi, secondCityAqi);
                }}
              >
                Compare Air Quality
              </Button>
            </div>
          )}
          <div>
            <InputField
              firstCity={secondCity}
              setFirstCity={setSecondCity}
              placeholder={"Enter second city"}
            />
            <SerachButton
              firstCity={secondCity}
              handleSearchCity={handleSecondCity}
              placeholder={"Second city"}
            />
          </div>
        </Grid.Row>
      </Grid>
      <Grid columns={3}>
        <Grid.Row>
          {firstloader ? (
            <LoaderComponent/>
          ) : (
            firstCityAqi && <AirQualityCard firstCityAqi={firstCityAqi} />
          )}
          {comparison && <CompareCard comparison={comparison} />}
          {secondLoader ? <LoaderComponent/> :secondCityAqi && <AirQualityCard firstCityAqi={secondCityAqi} />}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default AirQuality;

import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  return (
    <div>
      {digimons.map((digimon, index) => {
        return (
          <Card key={index}>
            <p>{digimon.name}</p>
            <p>
              <img src={digimon.img} alt="digimon" />
            </p>
            <p>{digimon.level}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Digimons;

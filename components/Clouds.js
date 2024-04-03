import Matter from "matter-js";
import { Image } from "react-native";

const Dino = (props) => {
  const width = props.size.width;
  const height = props.size.height;
  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  return (
    <Image
      style={{
        width: props.size.width,
        height: props.size.height,
        left: xPos,
        top: yPos,
        position: "absolute",
      }}
      resizeMode="stretch"
      source={props.extraOptions.image}
    />
  );
};

export default (world, color, pos, size, extraOptions) => {
  const dino = Matter.Bodies.rectangle(pos.x, pos.y, size.width, size.height, {
    label: "dino",
    restitution: 1,
    frictionAir: 0,
    isStatic: true,
  });
  Matter.World.add(world, dino);
  return {
    body: dino,
    color,
    pos,
    size,
    extraOptions,
    renderer: <Dino />,
  };
};

import Boundary from "../components/Boundary";

import Matter from "matter-js";
import Constants from "../Constants";
import Dino from "../components/Dino";
import Images from "../Images";

import LargeTree from "../components/LargeTree";
import SmallTree from "../components/SmallTree";
import Clouds from "../components/Clouds";

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 5.4;
  return {
    physics: { engine, world },

    Cloud: Clouds(
      world,
      "green",
      {
        x: Constants.WINDOW_WIDTH / 1.2,
        y: Constants.WINDOW_HEIGHT / 3.75,
      },
      { width: 80, height: 60 },

      {
        image: Images.cloud,
      }
    ),
    Cloud2: Clouds(
      world,
      "green",
      {
        x: Constants.WINDOW_WIDTH / 3.2,
        y: Constants.WINDOW_HEIGHT / 4,
      },
      { width: 80, height: 60 },

      {
        image: Images.cloud,
      }
    ),

    LargeTree: LargeTree(
      world,
      "green",
      {
        x: Constants.WINDOW_WIDTH / 2,
        y: Constants.WINDOW_HEIGHT / 1.95,
      },
      { width: 40, height: 60 },

      {
        image: Images.largeTree,
      }
    ),
    SmallTree: SmallTree(
      world,
      "green",
      {
        x: Constants.WINDOW_WIDTH,
        y: Constants.WINDOW_HEIGHT / 1.9,
      },
      { width: 45, height: 40 },

      {
        image: Images.smallTree,
      }
    ),
    Dino: Dino(
      world,
      "green",
      {
        x: 35,
        y: Constants.WINDOW_HEIGHT / 1.9,
      },
      { width: 40, height: 40 },

      {
        image: Images.dino,
      }
    ),

    BottomBoundary: Boundary(
      world,
      "black",
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 1.8 },
      { height: 1.3, width: Constants.WINDOW_WIDTH }
    ),
    LeftBoundary: Boundary(
      world,
      "transparent",
      { x: 2, y: 40 },
      { height: Constants.WINDOW_HEIGHT, width: 1.3 }
    ),
    LeftBoundary2: Boundary(
      world,
      "transparent",
      { x: 55, y: 40 },
      { height: Constants.WINDOW_HEIGHT, width: 1.3 }
    ),
    // TopBoundary: Boundary(
    //   world,
    //   "grey",
    //   { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 3.8 },
    //   { height: 1.3, width: Constants.WINDOW_WIDTH }
    // ),
  };
};

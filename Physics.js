import Matter, { Sleeping } from "matter-js";
import Constants from "./Constants";

const Physics = (entities, { touches, dispatch, events, time }) => {
  let engine = entities.physics.engine;
  if (events.length) {
    for (let i = 0; i < events.length; i++) {
      if (events[i].type === "jump") {
        Matter.Body.setVelocity(entities.Dino.body, { x: 10, y: -16 });
      }
    }
  }
  if (entities.SmallTree.body.position.x < 0) {
    dispatch({ type: "score" });
    Matter.Body.setPosition(entities.SmallTree.body, {
      x: Constants.WINDOW_WIDTH + 20,
      y: entities.SmallTree.body.position.y,
    });
  }

  if (entities.LargeTree.body.position.x < 0) {
    dispatch({ type: "score" });
    Matter.Body.setPosition(entities.LargeTree.body, {
      x: Constants.WINDOW_WIDTH + 20,
      y: entities.LargeTree.body.position.y,
    });
  }
  if (entities.Cloud.body.position.x < 0) {
    Matter.Body.setPosition(entities.Cloud.body, {
      x: Constants.WINDOW_WIDTH + 20,
      y: entities.Cloud.body.position.y,
    });
  }
  if (entities.Cloud2.body.position.x < 0) {
    Matter.Body.setPosition(entities.Cloud2.body, {
      x: Constants.WINDOW_WIDTH + 20,
      y: entities.Cloud2.body.position.y,
    });
  }

  Matter.Body.translate(entities.LargeTree.body, { x: -1.2, y: 0 });
  Matter.Body.translate(entities.SmallTree.body, { x: -1.2, y: 0 });
  Matter.Body.translate(entities.Cloud.body, { x: -1.4, y: 0 });
  Matter.Body.translate(entities.Cloud2.body, { x: -1.4, y: 0 });

  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;
    var objA = pairs[0].bodyA;
    var objB = pairs[0].bodyB;
    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

    if (objALabel === "smallTree" && objBLabel === "dino") {
      dispatch({ type: "gameOver" });
    }
    if (objALabel === "largeTree" && objBLabel === "dino") {
      dispatch({ type: "gameOver" });
    }
  });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default Physics;

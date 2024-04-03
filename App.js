import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
} from "react-native";


import { GameEngine } from "react-native-game-engine";
import entities from "./entities";
import React, { useEffect, useState } from "react";
import Physics from "./Physics";
import Images from "./Images";
import Constants from "./Constants";

export default function App() {
  const [gameEngine, setGameEngine] = useState(null);
  const [welcome, setWelcome] = useState(true);
  const [running, setRunning] = useState(false);
  const [score, setScore] = useState(0);
  if (welcome) {
    return (
      <View style={styles.welcome}>
        <Text style={{ fontSize: 20 }}>
          Press the button to start the game!
        </Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          Developed by Mahammad Aafil
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setWelcome(false);
            setRunning(true);
          }}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  } else
    return (
      <View style={styles.container}>
        {running && (
          <>
            <GameEngine
              ref={(ref) => {
                setGameEngine(ref);
              }}
              onEvent={(e) => {
                if (e.type === "gameOver") {
                  setRunning(false);
                  gameEngine.stop();
                }
                if (e.type === "score") {
                  setScore(score + 1);
                }
              }}
              systems={[Physics]}
              entities={entities()}
              style={styles.gameContainer}
            >
              <StatusBar style="auto" hidden={true} />
            </GameEngine>
            <View>
              <Text style={{ fontSize: 20 }}>Score: {score}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                gameEngine.dispatch({ type: "jump" });
              }}
            >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Jump</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
        {!running && (
          <View style={styles.gameOver}>
            <Text style={{ fontSize: 30, marginBottom: 10, color: "red" }}>
              Game Over
            </Text>
            <Text style={{ fontSize: 20 }}>Your Score : {score} </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setRunning(true);
                setScore(0);
              }}
            >
              <Text style={styles.buttonText}>Play Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  welcome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gameOver: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,

    marginTop: 20,
    width: 200,
    marginBottom: 150,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

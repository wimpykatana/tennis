import { Text, SafeAreaView, View, Button } from "react-native";

import { TENNIS_SCORES } from "@/constants/basic";
import { useState, useEffect } from "react";

export default function Index() {
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);
  const [gamePlayer1, setGamePlayer1] = useState(0);
  const [gamePlayer2, setGamePlayer2] = useState(0);
  const [setPlayer1, setSetPlayer1] = useState(0);
  const [setPlayer2, setSetPlayer2] = useState(0);
  const [isDeuce, setDeuce] = useState(false);
  const [isRubberSet, setRubberSet] = useState(false);
  const [isTieBreak, setTieBreak] = useState(false);

  const addScore = (player: number) => {
    
    if(isDeuce) {
      if(player === 1) {
        if(scorePlayer1 === 3 && scorePlayer2 === 4) {
          setScorePlayer1(3);
          setScorePlayer2(3);
          return;
        }
      }
      if(player === 2) {
        if(scorePlayer1 === 4 && scorePlayer2 === 3) {
          setScorePlayer1(3);
          setScorePlayer2(3);
          return;
        }
      }
    }
    
    player === 1 ? setScorePlayer1(scorePlayer1 + 1) : setScorePlayer2(scorePlayer2 + 1);
  }

  //score useEffect
  useEffect(() => {
    //Tiebreak
    if(isTieBreak){
      //player 1
      if(scorePlayer1 >= 7 && scorePlayer1 - scorePlayer2 >= 2) {
        setGamePlayer1(gamePlayer1 + 1);
        setScorePlayer1(0);
        setScorePlayer2(0);
      }
      //player 2
      if(scorePlayer2 >= 7 && scorePlayer2 - scorePlayer1 >= 2) {
        setGamePlayer2(gamePlayer2 + 1);
        setScorePlayer1(0);
        setScorePlayer2(0);
      }
      return;
    }

    //deuce
    if(scorePlayer1 === 3 && scorePlayer2 === 3) {
      setDeuce(true);
      return;
    }

    //player 1 win game
    if (scorePlayer1 === 4 && scorePlayer2 < 3) {
      setGamePlayer1(gamePlayer1 + 1);
      setScorePlayer1(0);
      setScorePlayer2(0);
    }
    
    //player 1 win game on deuce
    if (scorePlayer1 === 5 && scorePlayer2 === 3) {
      setGamePlayer1(gamePlayer1 + 1);
      setScorePlayer1(0);
      setScorePlayer2(0);
      setDeuce(false);
    }
    
    //player 2 win game
    if (scorePlayer2 === 4 && scorePlayer1 < 3) {
      setGamePlayer2(gamePlayer2 + 1);
      setScorePlayer1(0);
      setScorePlayer2(0);
    } 

    //player 2 win game on deuce
    if (scorePlayer2 === 5 && scorePlayer1 === 3) {
      setGamePlayer2(gamePlayer2 + 1);
      setScorePlayer1(0);
      setScorePlayer2(0);
      setDeuce(false);
    }
  }, [scorePlayer1, scorePlayer2]);


  //game useEffect
  useEffect(() => {

    if(gamePlayer1 === 6 && gamePlayer2 === 6) {
      setTieBreak(true);
      setRubberSet(false);
    }

    if(isTieBreak) {
      if(gamePlayer1 === 7) {
        setSetPlayer1(setPlayer1 + 1);
        setGamePlayer1(0);
        setGamePlayer2(0);
        setTieBreak(false);
      }

      if(gamePlayer2 === 7) {
        setSetPlayer2(setPlayer2 + 1);
        setGamePlayer1(0);
        setGamePlayer2(0);
        setTieBreak(false);
      }
    }

    if(gamePlayer1 === 5 && gamePlayer2 === 5) {
      setRubberSet(true);
    }

    if(isRubberSet) {
      //player 1 win rubber set
      if(gamePlayer1 === 7 && gamePlayer2 < 6) {
        setSetPlayer1(setPlayer1 + 1);
        setGamePlayer1(0);
        setGamePlayer2(0);
        setRubberSet(false);
      }

      //player 2 win rubber set
      if(gamePlayer2 === 7 && gamePlayer1 < 6) {
        setSetPlayer2(setPlayer2 + 1);
        setGamePlayer1(0);
        setGamePlayer2(0);
        setRubberSet(false);
      }

      return;
    }

    //player 1 win set
    if(gamePlayer1 === 6 && gamePlayer2 < 5) {
      setSetPlayer1(setPlayer1 + 1);
      setGamePlayer1(0);
      setGamePlayer2(0);
    }

    //player 2 win set
    if(gamePlayer2 === 6 && gamePlayer1 < 5) {
      setSetPlayer2(setPlayer2 + 1);
      setGamePlayer1(0);
      setGamePlayer2(0);
    }

  }, [gamePlayer1, gamePlayer2]);


  return (
    <SafeAreaView className="flex">
      <View>
        <Text className="text-3xl text-center">Tennis Score</Text>
      </View>

      <View>
        {
          isDeuce && (
            <Text className="text-2xl text-center">Deuce</Text>
          )
        }

        {
          isRubberSet && (
            <Text className="text-2xl text-center">Rubber Set</Text>
          )
        }

        {
          isTieBreak && (
            <Text className="text-2xl text-center">Tie Break</Text>
          )
        }
      </View>

      <View className="flex-row justify-evenly mt-10">
        <View className="flex justify-center items-center">
          <Text className="text-lg">Player 1</Text>
          <Button title="Add Score" onPress={() => addScore(1)} />
        </View>

        <View className="flex justify-center items-center">
          <Text className="text-lg">Player 1</Text>
          <Button title="Add Score" onPress={() => addScore(2)} />
        </View>
      </View>

      <View>
        <Text className="text-2xl text-center my-4">Score</Text>
        <View className="flex-row justify-evenly">
          <Text className="text-lg">{!isTieBreak ? TENNIS_SCORES[scorePlayer1] : scorePlayer1}</Text>
          <Text className="text-lg">:</Text>
          <Text className="text-lg">{!isTieBreak ? TENNIS_SCORES[scorePlayer2] : scorePlayer2}</Text>
        </View>
      </View>

      <View>
        <Text className="text-2xl text-center my-4">Game Score</Text>
        <View className="flex-row justify-evenly">
          <Text className="text-lg">{gamePlayer1}</Text>
          <Text className="text-lg">:</Text>
          <Text className="text-lg">{gamePlayer2}</Text>
        </View>
      </View>

      <View>
        <Text className="text-2xl text-center my-4">Set Score</Text>
        <View className="flex-row justify-evenly">
          <Text className="text-lg">{setPlayer1}</Text>
          <Text className="text-lg">:</Text>
          <Text className="text-lg">{setPlayer2}</Text>
        </View>
      </View>

      <View className="flex-row justify-evenly mt-10">
        <Button title="reset" onPress={() => {
            setScorePlayer1(0);
            setScorePlayer2(0);
            setGamePlayer1(0);
            setGamePlayer2(0);
            setSetPlayer1(0);
            setSetPlayer2(0);
            setDeuce(false);
            setRubberSet(false);
            setTieBreak(false);
          }} />
      </View>

    </SafeAreaView>
  );
}

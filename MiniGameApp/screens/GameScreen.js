import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function GenerateRandomNumber(min, max, exclude) {
    const randNm = Math.floor(Math.random() * (max - min)) + min;
    if (randNm === exclude) {
        return GenerateRandomNumber(min, max, exclude);
    } else {
        return randNm;
    }
}

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = GenerateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie","You know that this is wrong...",[{text: 'Sorry!', style:'cancel'}] )
            return;
        }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary)
        const newRandNumber = GenerateRandomNumber(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandNumber)
    }

    return (
        <View style={styles.sreen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>High or Low</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'graeter')}>+</PrimaryButton>
                </View>
            </View>
        </View>

    )
}

export default GameScreen;

const styles = StyleSheet.create({
    sreen: {
        flex: 1,
        padding: 24,
        marginTop: 45
    },

})
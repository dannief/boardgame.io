import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';
import Board from './src/components/Board';
import TicTacToe from './src/components/Game';
import { Client, WrappedBoard, WrappedBoardProps } from './lib/client/react-native';
const logo = require('./assets/img/logo.png');

console.log(Client);

const ClientTag: WrappedBoard = Client({
    game: TicTacToe,
    board: Board,
});

const Singleplayer = () => (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <ClientTag gameID="single" />
    </View>
);
export default Singleplayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 90,
        marginBottom: 24,
    },
});

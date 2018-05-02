/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';
import { Client, WrappedBoard } from '../../src/client/react-native';
import Board from './src/components/Board';
import TicTacToe from './src/components/Game';
// import logo from './assets/img/logo.png'; // Doesn't find it, somehow. Maybe a TypeScript issue (tsc ignores all but .ts(x) files).
const logo = require('./assets/img/logo.png');

const clientTag: WrappedBoard = Client({
    game: TicTacToe,
    board: Board,
});

const Singleplayer = () => (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <clientTag gameID="single" />
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

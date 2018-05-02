/*
 * Copyright 2018 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ComponentStyle, StyleObject } from '../utils/helpers';
import { BoardContext, BoardG, Marker } from './Game';

interface BoardProps {
    G: BoardG,
    ctx: BoardContext,
    moves: any,
    playerID: string,
    isActive: boolean,
    isMultiplayer: boolean,
    isConnected: boolean,
}
interface BoardState {
}

class Board extends React.Component<BoardProps, BoardState> {
    constructor(props: BoardProps){
        super(props);

    }

    private onClick(id: number): void {
        if(this.isActive(id)){
            this.props.moves.clickCell(id);
        }
    };

    private isActive(id: number): boolean {
        if(!this.props.isActive) return false;
        if(this.props.G.cells[id] !== null) return false;
        return true;
    }

    render(): JSX.Element {
        const tbody: JSX.Element[] = [];
        const marker: Marker = {
            '0': 'X',
            '1': 'O',
        };
        const ROWS: number = 3;
        const COLS: number = 3;
        for(let i = 0; i < ROWS; i++){
            const cells: JSX.Element[] = [];
            for(let j = 0; j < COLS; j++){
                const id: number = 3 * i + j;
                cells.push(
                    <TouchableHighlight
                        key={id}
                        onPress={() => this.onClick(id)}
                        style={[styles.cell, styles[`cell${id}`]]}
                        underlayColor="transparent"
                    >
                        <Text style={styles.value}>{marker[this.props.G.cells[id]]}</Text>
                    </TouchableHighlight>
                );
            }
            tbody.push(
                <View key={i} style={styles.row}>
                    {cells}
                </View>
            );
        }

        let disconnected: JSX.Element|null = null;
        if(this.props.isMultiplayer && !this.props.isConnected){
            disconnected = (
                <Text key="disconnected" style={styles.infoText}>
                    Disconnected!
                </Text>
            );
        }

        let winner: JSX.Element|null = null;
        if(this.props.ctx.gameover !== undefined){
            winner = (
                <Text key="winner" style={styles.infoText}>
                    Winner: {marker[this.props.ctx.gameover]}
                </Text>
            );
        }

        let player: JSX.Element|null = null;
        if(this.props.playerID !== null){
            player = (
                <Text key="player" style={styles.infoText}>
                    Player: {this.props.playerID}
                </Text>
            );
        }

        return (
            <View>
                <View key="board">{tbody}</View>
                <View style={styles.info}>
                    {player}
                    {winner}
                    {disconnected}
                </View>
            </View>
        );
    }
}
export default Board;

// Redundant, but worth it for auto-complete
interface BoardStyles extends StyleObject {
    row: Partial<ComponentStyle>,
    cell: Partial<ComponentStyle>,
    value: Partial<ComponentStyle>,
    cell0: Partial<ComponentStyle>,
    cell1: Partial<ComponentStyle>,
    cell2: Partial<ComponentStyle>,
    cell3: Partial<ComponentStyle>,
    cell4: Partial<ComponentStyle>,
    cell5: Partial<ComponentStyle>,
    cell6: Partial<ComponentStyle>,
    cell7: Partial<ComponentStyle>,
    cell8: Partial<ComponentStyle>,
    cell9: Partial<ComponentStyle>,
    info: Partial<ComponentStyle>,
    infoText: Partial<ComponentStyle>,
}

const styles: BoardStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cell: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 96,
        height: 96,
        borderWidth: 4,
        borderColor: '#666',
        borderStyle: 'solid',
    },
    value: {
        fontSize: 48,
        fontWeight: '700',
        color: '#373748',
    },
    cell0: {
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
    },
    cell1: {
        borderTopColor: 'transparent',
    },
    cell2: {
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
    },
    cell3: {
        borderLeftColor: 'transparent',
    },
    cell4: {
    },
    cell5: {
        borderRightColor: 'transparent',
    },
    cell6: {
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
    },
    cell7: {
        borderBottomColor: 'transparent',
    },
    cell8: {
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderStyle: 'solid',
    },
    cell9: {
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginTop: 24,
    },
    infoText: {
        fontSize: 32,
        fontWeight: '700',
        color: '#373748',
    },
});
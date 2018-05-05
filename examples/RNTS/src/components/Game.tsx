// TODO: import redux, etc. and see whether things start to work
// ... Or just move src & declarations to dist, and import forked repo
import Game, { G } from 'boardgame.io/core';
import { Context } from 'boardgame.io/server';

export interface BoardG extends G {
    cells: PlayerId[]
}
export interface BoardContext extends Context {
    currentPlayer: PlayerId,
    gameover: PlayerId
}
export type PlayerId = keyof Marker;
export interface Marker {
    '0': 'X',
    '1': 'O'
}

function IsVictory(cells: PlayerId[]) {
    const positions: [number, number, number][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/12707
    for(let pos of positions){
        const symbol: PlayerId = cells[pos[0]];
        let winner: PlayerId|null = symbol;
        for (let i of pos) {
            if (cells[i] != symbol) {
                winner = null;
                break;
            }
        }
        if(winner !== null) return true;
    }

    return false;
}

const TicTacToe: BoardG = Game({
    name: 'tic-tac-toe',

    setup: () => ({
        // @ts-ignore This is available from ES2015, but somehow TypeScript is saying it doesn't exist. Don't ask me!
        cells: Array<null>(9).fill(null),
    }),

    moves: {
        clickCell(G: BoardG, ctx: BoardContext, id: number){
            // @ts-ignore https://github.com/Microsoft/TypeScript/issues/12707
            const cells: PlayerId[] = [...G.cells];

            if(cells[id] === null) cells[id] = ctx.currentPlayer;

            return { ...G, cells };
        },
    },

    flow: {
        movesPerTurn: 1,
        endGameIf: (G: BoardG, ctx: BoardContext) => {
            if(IsVictory(G.cells)) return ctx.currentPlayer;
            return void 0;
        },
    }
});
export default TicTacToe;

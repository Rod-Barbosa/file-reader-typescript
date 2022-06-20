import { MatchData } from "../MatchData";
import { MAtchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer{
    constructor(public team: string) {};

    run(matches: MatchData[]): string {
        let wins = 0;

        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === MAtchResult.HomeWin){
                wins++;
            } else if(
                match[2] === 'Man United' && 
                match[5] === MAtchResult.AwayWin
                ) {
                wins++;
            }
        }

        return `Team ${this.team} won ${wins} games`;
    };
}
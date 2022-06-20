import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reporterTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string;
};

export interface OutputTraget {
    print(report: string): void;
};

export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport()
        );
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTraget){}
        
        buildAndPrintReport(matches: MatchData[]): void {
           const output = this.analyzer.run(matches);
           this.outputTarget.print(output);
        }
};


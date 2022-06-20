import { OutputTraget } from "../Summary";

export class ConsoleReport implements OutputTraget {
    print(report: string): void {
        console.log(report);
    }
}
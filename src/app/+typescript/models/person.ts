export class Person {
  vorname: string;
  nachname: string;
  alter: number;

  constructor(vorname: string, nachname: string, alter: number) {
    this.vorname = vorname;
    this.nachname = nachname;
    this.alter = alter;
  }

  ganzerName(): string {
    return this.vorname + ' ' + this.nachname;
  }
}

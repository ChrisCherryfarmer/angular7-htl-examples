export class Guest {
  surname: string;
  name: string;
  age: number;
  gender: string;
  attending: boolean;

  constructor(surname: string, name: string, age: number, gender: string, attending: false) {
    this.surname = surname;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.attending = attending;
  }
}

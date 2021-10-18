export class NameSection {
    personId!:number;
    firstName!:string;
    lastName!:string;
    preferredName!:string;
    dateOfBirth!:string;
    gender!:string;
    ssn!: string;

    constructor(personId: number, firstName: string,lastName:string,preferredName:string,dateOfBirth:string,gender:string,ssn: string) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.preferredName = preferredName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.ssn = ssn;
    }

}

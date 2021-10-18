export class EmploymentSection {
    employeeId!:number;

    workAuthorization!:string;

    // work Authorization start date
    visaStartDate!:string;

    // work Authorization end date
    visaEndDate!:string;

    // Employment start date
    startDate!:string;

    // Employment end date
    endDate!:string;

    title!:string;

    constructor(employeeId:number,workAuthorization:string,visaStartDate:string,visaEndDate:string,startDate:string,endDate:string,title:string){
        this.employeeId = employeeId;
        this.workAuthorization = workAuthorization;
        this.visaStartDate = visaStartDate;
        this.visaEndDate = visaEndDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.title = title;
    }
}

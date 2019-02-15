export class Patient
{
    id: number;
    providerName:string;
    patientName:string;
    appointmentDate:Date;
    visit:
    {
        emergency:string;
        normal:string;
    };
    next_visit:Date;

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }

}
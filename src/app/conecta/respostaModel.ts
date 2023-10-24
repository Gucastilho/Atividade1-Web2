export class valores {
    id : number | undefined;
    email : string | undefined;
    first_name: string| undefined;
    last_name: string| undefined;
    avatar : string| undefined;
}

export class valoresPost {
    id? : number | undefined;//? pode ou não ter o id
    name : string | undefined;// | pode ser String ou não ter nada
    job: string| undefined;
    createdAt?: string| undefined;
   
}


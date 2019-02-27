export interface ITransaction {
    transactionId?: number;
    user: IDNameObject;
    date: Date;
    account: IDNameObject;
    description: string;
    group: IDNameObject;
    amount: number;
    type: IDNameObject;
    tags: [IDNameObject];
}

export interface IDNameObject {
    id: number;
    name: string;
}

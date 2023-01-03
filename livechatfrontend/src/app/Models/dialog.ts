import { Time } from "@angular/common";
import { Account } from "./account"

export interface Dialog {
    DialogID: Int32Array;
    Account1: Account;
    Account2: Account;
    dialogName : string;
    Status: string;
    CreationDate: Time;
}

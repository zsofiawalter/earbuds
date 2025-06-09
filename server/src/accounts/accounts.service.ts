import { Injectable } from '@nestjs/common';
import { IAccount } from './accounts.models';

@Injectable()
export class AccountsService {
  private readonly accounts: IAccount[] = [];

  create(account: IAccount) {
    this.accounts.push(account);
  }
}

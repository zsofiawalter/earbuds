import { Get, Controller, Param } from '@nestjs/common';

@Controller('account')
export class AccountsController {
  @Get()
  getAccounts(): string {
    return 'return all accounts';
  }

  @Get(':id')
  getAccountById(@Param() params: { id: string }): string {
    return `this returns a #${params.id} account`;
  }
}

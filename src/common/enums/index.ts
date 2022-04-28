import { registerEnumType } from '@nestjs/graphql';
export enum lendingStatus {
    PENDING ="PENDING",
    APPROVED ="APPROVED",
    REJECTED="REJECTED",
  }
  registerEnumType(lendingStatus,{
    name: 'lendingStatus',
    description: 'Book lending Status',
  });
// Uncomment the code below and write your tests
import { getBankAccount, InsufficientFundsError, TransferFailedError, SynchronizationFailedError } from '.';
import _ from 'lodash';

jest.mock('lodash', () => ({
  random: jest.fn(),
}));

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(1000);
    expect(account.getBalance()).toBe(1000)
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(1000);
    expect(() => account.withdraw(2000)).toThrowError(InsufficientFundsError)
  });

  test('should throw error when transferring more than balance', () => {
    const account1 = getBankAccount(1000);
    const account2 = getBankAccount(1000);
    expect(() => account1.transfer(2000, account2)).toThrowError(InsufficientFundsError)
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(1000);
    expect(() => account.transfer(1000, account)).toThrowError(TransferFailedError)
  });

  test('should deposit money', () => {
    const account = getBankAccount(1000);
    account.deposit(50);

    expect(account.getBalance()).toBe(1050);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(1000);
    account.withdraw(50);

    expect(account.getBalance()).toBe(950);
  });

  test('should transfer money', () => {
    const account1 = getBankAccount(1000);
    const account2 = getBankAccount(1000);

    account1.transfer(50, account2);

    expect(account1.getBalance()).toBe(950);
    expect(account2.getBalance()).toBe(1050);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const randomMock = jest.spyOn(_, 'random').mockReturnValue(1);
    const account = getBankAccount(0);

    const balance = await account.fetchBalance();

    expect(typeof balance).toBe('number');

    randomMock.mockRestore();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(1000);

    const randomMock = jest.spyOn(_, 'random').mockReturnValue(1);

    await account.synchronizeBalance();

    expect(account.getBalance()).toBe(1);

    randomMock.mockRestore();
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(1000);

    const randomMock = jest.spyOn(_, 'random').mockReturnValue(0);

    expect(account.synchronizeBalance()).rejects.toThrowError(SynchronizationFailedError)

    randomMock.mockRestore();
  });
});

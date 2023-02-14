// 문제 1) 은행계좌 객체를 설계하고, 입금, 출금, 조회기능을 구현하시오. (단, 생성자 함수 사용할 것)
// 속성: 잔액
// 행위: 입금, 출금, 잔액조회
{
    // 은행계좌 객체 생성
    function Account(balance){
        this.balance = balance;
    }
    
    let totalbalance = 0;
    // 입금
    Account.prototype.deposit = function(deposit){
        totalbalance = this.balance + deposit;
        console.log(`입금: ${deposit}원 잔액: ${totalbalance}원`);
    }
    // 출금
    Account.prototype.withdraw = function(withdraw){
       totalbalance = totalbalance - withdraw;
        console.log(`출금: ${withdraw} 잔액: ${totalbalance}원`);
    }
    // 잔액조회
    Account.prototype.search = function(){
        console.log(`잔액: ${totalbalance}원`);
    }

    const account1 = new Account(10000);
    console.log(account1.balance);
    account1.deposit(1000);
    account1.withdraw(500);
    account1.search();
}
// 문제2) 은행계좌 객체를 설계하고, 입금, 출금, 조회기능을 구현하시오. (단, class문법 사용할 것)
// 속성: 잔액
// 행위: 입금, 출금, 잔액조회
{
    let totalbalance = 0;
    // 은행계좌 객체 생성
    class Account{
        constructor(balance){
            this.balance = balance;
        }
        // 입금
        deposit(deposit){
            totalbalance = this.balance + deposit;
            console.log(`입금: ${deposit}원 잔액: ${totalbalance}원`);
        }
        // 출금
        withdraw(withdraw){
            totalbalance = totalbalance - withdraw;
            console.log(`출금: ${withdraw} 잔액: ${totalbalance}원`);
        }
        // 잔액조회
        search(){
            console.log(`잔액: ${totalbalance}원`);
        }
    }
    const account1 = new Account(0);

    console.log(account1.balance);
    account1.deposit(2000);
    account1.withdraw(100);
    account1.search();
}
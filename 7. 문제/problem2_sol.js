// 문제 1) 은행계좌 객체를 설계하고, 입금, 출금, 조회기능을 구현하시오. (단, 생성자 함수 사용할 것)
// 속성: 잔액
// 행위: 입금, 출금, 잔액조회
{
    function Account(){
        Account.count++;
        // 인스턴스 데이터 프로퍼티 
        this.balance = 0;
    }
    // 인스턴스 메소드 프로퍼티 
    Account.prototype.deposit = function(money){
        this.balance += money;
    }
    Account.prototype.withdraw = function(money){
        this.balance -= money;
    }
    Account.prototype.getBalance = function(){
        return this.balance;
    }

    // 정적 데이터 프로퍼티 
    Account.count = 0;
    // 정적 메소드 프로퍼티 
    Account.getCount = function(){
        return Account.count;
    }

    // 계좌 생성
    const account = new Account();
    // 잔액 조회
    console.log(account.balance);
    // 입금
    account.deposit(1000);
    account.deposit(2000);
    // 잔액 조회
    console.log(account.balance);
    // 출금
    account.withdraw(1000);
    // 잔액 조회
    console.log(account.balance);

    // 배열에 계좌 저장
    // const accounts = [new Account(),new Account(),new Account()];
    const accounts = [];
    // 계좌 객체를 3개 생성해서 배열에 저장
    for(let cnt = 1; cnt <= 3; cnt++){
        accounts.push(new Account());
    }
    // 첫번째 계좌에 1000원 입금
    accounts[0].deposit(1000);
    
    // 두번째 계좌에 2000원 입금
    accounts[1].deposit(2000);

    // 세번째 계좌에 3000원 입금
    accounts[2].deposit(3000);

    // 모든 계좌의 잔액 조회
    for(let account of accounts){
        console.log(account.getBalance());
    }

    console.log(Account.getCount());

}
// 문제2) 은행계좌 객체를 설계하고, 입금, 출금, 조회기능을 구현하시오. (단, class문법 사용할 것)
{
    class Account {
        // 생성자
        constructor(){
            Account.count++;
            this.balance = 0;
        }
        // 인스턴스 메소드
        deposit(money){
            this.balance += money;
        }
        withdraw(money){
            this.balance -= money;
        }
        getBalance(){
            return this.balance;
        }
        // 정적 데이터 프로퍼티
        static count = 0;
        // 정적 메소드 프로퍼티
        static getCount(){
                return Account.count;
        }
    }
    // 계좌 생성
    const account = new Account();
    // 입금
    account.deposit(1000);
    account.deposit(2000);
    // 잔액 조회
    console.log(account.balance);
    // 출금
    account.withdraw(1000);
    // 잔액 조회
    console.log(account.balance);
    console.log(Account.getCount());
}

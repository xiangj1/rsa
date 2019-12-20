class RSA {
    constructor(n = 255) {
        this.primeNums = RSA._getPrimeNums(n);
    }

    static _getPrimeNums(n) {
        let result = []
        let signs = new Uint8Array(n);

        for (let i = 2; i < n; i++) {
            if(signs[i-1]) continue;
            
            result.push(i);
            for (let j = i * i; j <= n; j += i) {
                signs[j - 1] = true;
            }
        }
        return result;
    }

    static _fastModularExponentiation(a, b, n) {
        a = a % n;
        let result = 1;
        let x = a;
        
        while(b > 0){
            let leastSignificantBit = b % 2;
            b = Math.floor(b / 2);
        
            if (leastSignificantBit == 1) {
                result = result * x;
                result = result % n;
            }
        
            x = x * x;
            x = x % n;
        }
        return result;
    };

    static _factorize(n = 1) { 
        for (let i = 2; i < n; i++) 
            if (n % i == 0) 
                return [i, n/i]; 
        return null; 
    }

    static _extractNum(nums = []) {
        let i = Math.floor(Math.random() * Math.floor(nums.length));

        return nums.splice(i, 1).pop();
    }

    static encrypt(str = '', e = 0, N = 0) {
        let result = [];

        for(let i = 0; i < str.length; ++i) {
            let c = RSA._fastModularExponentiation(str.charCodeAt(i), e, N);
            result.push(c);
        }

        return result.join();
    }

    static decrypt(str = '', d = 0, N = 0) {
        let arr = str.split(',')
        let result = [];

        for(let c of arr) {
            let m = RSA._fastModularExponentiation(c, d, N);
            result.push(m);
        }

        return String.fromCharCode(...result);
    }

    getKeys() {
        let N = 0, r = 0;
        while(N < 255) {
            let p1 = RSA._extractNum(this.primeNums);
            let p2 = RSA._extractNum(this.primeNums);
            N = p1 * p2;
            r = (p1-1) * (p2-1);
            this.primeNums.push(p1, p2);
        }

        let k = 1+r;
        let factors = RSA._factorize(k);
        while(!factors) {
            k += r;
            factors = RSA._factorize(k)
        }
        let [e, d] = factors;

        return { N, e, d };
    }
}
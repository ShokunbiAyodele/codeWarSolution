// Professor Chambouliard hast just discovered a new type of magnet material. 
// He put particles of this material in a box made of small boxes arranged in 
// K rows and N columns as a kind of 2D matrix K x N where K and N are postive integers.
//  He thinks that his calculations show that the force exerted by the particle in the small box (k, n) is:

// v(k,n)=1k(n+1)2k \displaystyle v(k,n) = \dfrac{1}{k(n+1)^{2k}}v(k,n)= 
// k(n+1) 
// 2k
 
// 1
// ​
 
// The total force exerted by the first row with k = 1 is:

// u(1,N)=∑n=1n=Nv(1,n)=11⋅22+11⋅32+⋯+11⋅(N+1)2 \displaystyle u(1, N)
//  = \sum_{n=1}^{n=N}v(1, n) = \dfrac{1}{1 \cdot 2^2}+\dfrac{1}{1\cdot 3^2} + \dots + \frac{1}{1 \cdot (N+1)^2}u(1,N)= 
// n=1
// ∑
// n=N
// ​
//  v(1,n)= 
// 1⋅2 
// 2
 
// 1
// ​
//  + 
// 1⋅3 
// 2
 
// 1
// ​
//  +⋯+ 
// 1⋅(N+1) 
// 2
 
// 1
// ​
 
// We can go on with k = 2 and then k = 3 etc ... and consider:

// S(K,N)=∑k=1k=Ku(k,N)=∑k=1k=K(∑n=1n=Nv(k,n))→(double(maxk,maxn))\displaystyle S(K, N) 
// = \sum_{k=1}^{k=K} u(k, N) = \sum_{k=1}^{k=K} \bigg(\sum_{n=1}^{n=N} v(k, n) \bigg) \to(double(max_k, max_n))S(K,N)= 
// k=1
// ∑
// k=K
// ​
//  u(k,N)= 
// k=1
// ∑
// k=K
// ​
//  ( 
// n=1
// ∑
// n=N
// ​
//  v(k,n))→(double(max 
// k
// ​
//  ,max 
// n
// ​
//  ))
// Task:
// To help Professor Chambouliard can we calculate the function doubles that will take as parameter maxk and maxn such that doubles(maxk, maxn) = S(maxk, maxn)? Experiences seems to show that this could be something around 0.7 when maxk and maxn are big enough.







function doubles(maxk, maxn) {
    var s = 0, p, q;
    for(let i = 1; i <= maxk; i++) {
        p = s;
        for(let j = 1; j <= maxn; j++) {
            q = s;
            s += 1/(i*(j + 1)**(2*i));
            if(Math.abs(q-s) < 1e-9/maxk/maxn) break;
        }
        if(Math.abs(p-s) < 1e-9/maxk) break;
    }

    return s;
}
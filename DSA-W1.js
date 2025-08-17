// const wekmap = new WeakMap()
// console.log(WeakMap);
// let obj = {name : "salim"};
// wekmap.set(obj,"sample data")
// console.log(wekmap.get(obj));

// let weakset = new WeakSet()
// const a = {}
// let obj = {id: 1};
// weakset.add(obj);
// a.sample = obj;
// console.log(weakset.has());
// obj = null
// console.log(weakset.has(obj));
// console.log(a);

// const obj = {name : "salim", place : "kochi"};
// console.log(Object.hasOwn(obj,"place"));
// const entries = [
//     ["name","salim"],
//     ["place","kochi"]
// ]
// console.log(Object.fromEntries(entries));

// const date = new Date();
// console.log(date);

// const hbd = new Date('2006-04-15')
// console.log(hbd);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// setTimeout(()=> {
//     console.log('haaaaaaai mf');
// },36000)

// console.log(date.toISOString());
// console.log(date.toLocaleString());

// function runAn5Pm(callback) {
//     const now = new Date();

//     const target =
// }

// function tommorowDate() {
//   return date.getDate() + 1;
// }

// function formatdate(date) {
//   const fdate = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth()).padStart(2, "0");
//   const year = date.getFullYear()
//   return `${fdate}/${month}/${year}`
// }

// console.log(formatdate(date));

// console.log(tommorowDate());

class Node {
    constructor(val){
        this.val =val;
        this.next=null 
    }
}
class Stack {
    constructor(){
        this.head = null;
        this.size = null;
    }

    push(val){
        const node = new Node(val);
        node.next=this.head;
        this.head = node;
        this.size++;
    }
    pop(){
        if(!this.head) return null;

        const val = this.head.val;
        this.head=this.head.next;
        this.size--;
        return val;
    }
    peek(){
        return this.head ? this.head.val : null;
    }
    isEmpty(){
        return this.size === 0;
    }
}


const st = new Stack()
// st.push(10)
// st.push(1)
// console.log(st.pop());
console.log(st);

// function reverseStr(str){
//     let res = '';
//     for(let char of str){
//         st.push(char);
//     }

//     for(let char of str){
//         res += st.pop()
//     }
//     return res;
// }

// console.log(reverseStr('madam'));


function balancedParan(para){
    let obj = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    };
    
}
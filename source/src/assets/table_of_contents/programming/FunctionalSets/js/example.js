const bound = 1000

let contains = (s, elem) => s(elem)
let singletonSet = (elem) => x => x == elem
    
let addOne = (s, elem) => (contains(s, elem)) ? s : x => x == elem | contains(s, x)
let add = (s, ...elements) => elements.reduce((prev, next) => addOne(prev, next), s)
    
let union = (s, t) => x => contains(s, x) | contains(t, x)
let intersect = (s, t) => x => contains(s, x) & contains(t, x)
let diff = (s, t) => x => contains(s, x) & !contains(t, x)
    
let filter = (s, p) => x => contains(s, x) && p(x)
let map = (s, f) => {
    let n = Array(bound * 2 + 1).fill().map((_, i) => i - bound);
    let nm = n.filter(i => contains(s, i)).map(r => f(r))
    return nm.reduce((prev, next) => add(prev, next), singletonSet(nm[0]))
}
    
let toStringFS = (s) => {
    let n = Array(bound * 2 + 1).fill().map((_, i) => i - bound);
    console.log( n.filter(i => contains(s, i)).join(',') )
}
    
let test = (func) => func(
    add( singletonSet(0), 1, 2, 3 ),
    add( singletonSet(5), 6, 2, 3 ),
)
    
toStringFS(test(union)) // {0,1,2,3,5,6}
toStringFS(test(intersect)) // {2,3}
toStringFS(test(diff)) // {0,1}
toStringFS(map(test(union), x=>x*x)) // {0,1,4,9,25,36}
const bound = 1000
 
let contains = (s, elem) => s(elem)
let singletonSet = (elem) = x => x == elem
 
let addOne = (s, elem) = (contains(s, elem)) ? s : x => x == elem | contains(s, x)
let add = (s, ...elements) => elements.foldLeft(s)((acc, c) => addOne(acc, c))
 
let union = (s, t) = x => contains(s, x) | contains(t, x)
let intersect = (s, t) = x => contains(s, x) & contains(t, x)
let diff = (s, t) = x => contains(s, x) & !contains(t, x)
 
let filter = (s, p) = x => contains(s, x) && p(x)
/*let map = (s, f) => {
    val xs = for (i <- -bound to bound if contains(s, i)) yield i
    xs.map(f).foldLeft(singletonSet(xs.head))((acc, c) => add(acc, c))
}*/
 
let toString = (s) => {
    let n = Array(bound * 2).fill().map((_, i) => i - bound);
    n.filter(i => contains(s, i)).join(',')
}
 
let test = (func) => func(
    add( singletonSet(0), 1, 2, 3 ),
    add( singletonSet(5), 6, 2, 3 ),
)
 
toString(test(union)) // {0,1,2,3,5,6}
toString(test(intersect)) // {2,3}
toString(test(diff)) // {0,1}
//toString(map(test(union), x=>x*x)) // {0,1,4,9,25,36}
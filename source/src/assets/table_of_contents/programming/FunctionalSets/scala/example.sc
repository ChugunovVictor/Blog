type FunSet = Int => Boolean
val bound = 1000

def contains(s: FunSet, elem: Int): Boolean = s(elem)
def singletonSet(elem: Int): FunSet = x => x == elem

def addOne(s: FunSet, elem: Int): FunSet = { if (contains(s, elem)) s else x => x == elem | contains(s, x) }
def add(s: FunSet, elements: Int*): FunSet = elements.foldLeft(s)((acc, c) => addOne(acc, c))

def union(s: FunSet, t: FunSet): FunSet = x => contains(s, x) | contains(t, x)
def intersect(s: FunSet, t: FunSet): FunSet = x => contains(s, x) & contains(t, x)
def diff(s: FunSet, t: FunSet): FunSet = x => contains(s, x) & !contains(t, x)

def filter(s: FunSet, p: Int => Boolean): FunSet = x => contains(s, x) && p(x)
def map(s: FunSet, f: Int => Int): FunSet = {
    val xs = for (i <- -bound to bound if contains(s, i)) yield i
    xs.map(f).foldLeft(singletonSet(xs.head))((acc, c) => add(acc, c))
}

def toStringFS(s: FunSet): String = {
    val xs = for (i <- -bound to bound if contains(s, i)) yield i
    xs.mkString("{", ",", "}")
}

def test(func: (FunSet, FunSet) => FunSet ) = func(
    add( singletonSet(0), 1, 2, 3 ),
    add( singletonSet(5), 6, 2, 3 ),
)

toStringFS(test(union)) // {0,1,2,3,5,6}
toStringFS(test(intersect)) // {2,3}
toStringFS(test(diff)) // {0,1}
toStringFS(map(test(union), x=>x*x)) // {0,1,4,9,25,36}
def M = (x: Float) => (y: Float) => println(s"Move to ($x,$y)");
def L = (x: Float) => (y: Float) => println(s"Line to ($x,$y)");
def C = (x1: Float) => (y1: Float) =>
  (cx: Float) => (cy: Float) =>
    (x2: Float) => (y2: Float) => println(s"Curve to ($x2,$y2)");

val PATH = "M 3.6258562,2.3535346 " +
  "L 5.0002355,3.7274432 " +
  "C 5.4987364,4.2257735 5.7742266,4.5012636 6.2725568,4.9997645 " +
  "L 7.6464652,6.3741439 " +
  "C 8.1447953,6.8726449 7.4325448,8 6.7276787,8 " +
  "L 3.2723216,8 " +
  "C 2.5674556,8 2,7.4325447 2,6.7276787 " +
  "L 2,3.2723213 " +
  "C 2,2.5674553 3.1273554,1.8552044 3.6258562,2.3535346 " +
  "Z"

PATH.split(Array(' ', ','))
  .foldLeft[Either[Any, Unit]]( Right(()) )((acc, c) => {
    acc match {
      case Left(function: (Any => Any)) => function(c.toFloat) match {
        case (unit: Unit) => Right(unit)
        case (function) => Left(function)
      }
      case Right(unit) => c match {
        case "M" => Left(M)
        case "L" => Left(L)
        case "C" => Left(C)
        case _ => Right(unit)
      }
    }
  })

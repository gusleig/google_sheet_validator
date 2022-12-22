function typeOf(obj) {
  return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}

function isNumeric(str) {
  if (isValidDate(str)) return false;
  var str_type = typeOf(str);
  if (str_type == "number") return true;
  if (typeof str == "string") 
  return !isNaN(str) && 
         !isNaN(parseFloat(str))
}

function isValidDate(date) {
  return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

function GetValue(cell)
{
  var cell_num = 0;

    if (isNumeric(cell)){
        cell_num = +cell;
        //do number stuff
      } else if (isValidDate(cell)) {
        cell_num = Date.parse(cell)
      } else {
        cell_num = cell.length;
      }
      return cell_num;
    

}
function RangeGetSum(values1)
{

var sum = 0;

var result = values1.reduce(function(array1, array2) {
  return array1.map(function(value, index) {
    var results1 = GetValue(array2[index]);
    return GetValue(value) + results1;
  });
});

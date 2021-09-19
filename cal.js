
function f(d) {
if (d == 'c') {
document.getElementById('res').value = "";
return;
} // neu nhan vao nut "c" => xoa het trong o res

res = document.getElementById('res').value; // lay gia tri trong o res


if (res == 0 && d == 0)
return;
if (d == '+' || d == '-' || d == '*' || d == '/') {
opr = d;
num = parseFloat(res); // lay gia tri dau tien va phep tinh
document.getElementById('res').value = d;
return;
}
if (d == '=') {
num1 = parseFloat(res);
switch (opr) {
case '+': ans = num + num1; break;
case '-': ans = num - num1; break;
case '*': ans = num * num1; break;
case '/': ans = parseInt(num / num1); break;
} // thuc hien phep tinh voi gia tri thu 2
document.getElementById('res').value = ans;
return;
}
if (d == '--') {
document.getElementById('res').value *= -1; // nhan voi -1
return;
}
if (!isNaN(document.getElementById('res').value))
document.getElementById('res').value += d;
else
document.getElementById('res').value = d;
}
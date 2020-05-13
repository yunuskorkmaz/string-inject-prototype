# String Inject Prototype

### Demo

[Demo](https://yunuskorkmaz.github.io/string-inject-prototype/)

```
"Merhaba {{ name }}".inject({"name":"Yunus"}
Result : Merhaba Yunus

"Toplam: {{ cost + profit }}".inject({"cost":2,"profit":5}
Result : Toplam: 7

"İsim: {{ firstName }}, Soyisim: {{ lastName }}".inject({"firstName":"Yunus","lastName":"Korkmaz"}
Result : İsim: Yunus , Soyisim: Korkmaz

"Toplam: {{ a }} + {{ b }}".inject({"a":2,"b":3}
Result : Toplam: 2 + 3

"Toplam: {{ a }} + {{ b }} = {{ sum(a, b) }}".inject({"a":4,"b":2}
Result : Toplam: 4 + 2 = 6

"Çarpım: {{ num1 }} * {{ num2 }} = {{ carpim(num1, num2) }}".inject({"num1":7,"num2":7}
Result : Çarpım: 7 * 7 = 49
```

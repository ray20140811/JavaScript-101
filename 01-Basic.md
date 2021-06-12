# String

String的內容是不可變的,但可以重新賦值
-------------------------------------

ex:
    
    var myStr = "Ray";
    myStr[0] = "J";
    myStr;              //Ray
    myStr = "Jay";  
    myStr;              //Jay

# Array的方法
push()  將元素添加在原來Array的最後面
pop()   從Array取出最後一個元素
shift() 從Array取出第一個元素
unshift() 將元素添加在Arra的第一個元素

ex:

    var myArray = ["Ray", 40, "Learing JavaScript"];
    myArray.push("Good");
    var popString = myArray.pop(); // popString為"Good", myArray為["Ray", 40, "Learing JavaScript"]
    var shiftString = myArray.shift(); // shiftString為"Ray", myArray為[40, "Learing JavaScript"]
    myArray.unshift("Happy");   // myArray為["Happy", 40, "Learing JavaScript"]

# JavaScript內建物件

Boolean物件
-----------
   
    objBoolean = new Boolean();
   
Function物件
-----------

    function mod(x, y) {
        return (x%y);
    }
    
    var mod = new Function("x", "y", "return(x%y)");
    
    value = mod(4, 5);

Global物件
-----------

Global物件不能使用new運算子建立.有2個屬性如下

| 屬性     | 說明                                 |
| -------- | ------------------------------------ |
| Infinity | 取得Number.POSITIVE_INFINITY的初始值 |
| NaN      | 取得Number.NaN的初始值               |

Global物件的屬性不用指名Global物件,直接使用屬性名稱即可.

    Infinity
    NaN

Number物件
-----------

    objnum = new Number(value);

Object物件
-----------

    objobject = new Object(value);

RegExp物件
-----------

## 5-2 JavaScript的String物件
### 5-2-1 建立String物件
### 5-2-5 子字串的處理

| 方法                      | 說明                                                               |
|:--------------------------|:-------------------------------------------------------------------|
| replace(string1, string2) | 將找到的string1子字串取代成string2                                 |
| split(string)             | 傳回Array物件,使用參數string作為分割字串,可以將字串轉換成Array物件 |
| substr(index, length)     | 從index開始取出length個字元                                        |
| substring(index1, index2) | 取出index1到index2之間的子字串                                     |
| concat(string)            | 將string字串新增到String物件的字串後                               |

    var word1 = "HelloWorld!";
    var word2 = new String("JavaScript");
    
    console.log("word1 : " + word1)
    console.log("word1.replace('World', 'JavaScript') : " + word1.replace('World', 'JavaScript'));
    console.log("word1.split('Wo') : " + word1.split('Wo'));
    console.log("word1.substr(3, 4) : " + word1.substr(3, 4));
    console.log("word1.substring(3, 5) : " + word1.substr(3, 5));
    console.log("word1.concat(word2) : " + word1.concat(word2));
## 5-3 JavaScript的Array物件
### 5-3-1 JavaScript的一維陣列

    var money = new Array(1, 2, 3);
    for (var i = 0; i < money.length; i++) {
        console.log(money[i]);
    }

    var people = new Array("Bill", "Job","Linus");
    for (var i = 0; i < people.length; i++) {
        console.log(people[i]);
    }

### 5-3-2 Array物件的屬性和方法

Array物件的屬性

| 屬性    | 說明                          |
|:--------|:------------------------------|
| length  | 取得陣列的元素個數,即陣列尺寸 |

Array物件的方法

| 方法           | 說明                                                       |
|:-------------- |:---------------------------------------------------------- |
| join()         | 將陣列的元素使用字串方式顯示,每個陣列元素是使用","符號分隔 |
| reverse()      | 將陣列元素反轉,本來是陣列的最後一個元素成為第一個元素      |
| sort()         | 將陣列所有元素進行排序                                     |

    var word = new Array("A", "B","C", "D");
    var newword = new Array("E", "F","G", "H");
    
    console.log(word.join());

    function printArray(word) {
        for (var i = 0; i < word.length; i++) {
            process.stdout.write(word[i] + ',');
        }
        console.log();
    }

    word.reverse();
    printArray(word);
    
    word.sort();
    printArray(word);
    
    word.sort();
    printArray(word);
    
    word = word.concat(newword);
    printArray(word);


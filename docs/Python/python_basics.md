版本：python3，注意，python3并没有考虑向下兼容。

## Python 简介

**Python** 是一种高级、解释型、通用的编程语言，由 **Guido van Rossum** 于 1991 年首次发布。Python 的设计哲学强调代码的可读性和简洁性，使用缩进来定义代码块，而不是像其他语言那样使用大括号。Python 支持多种编程范式，包括面向对象、命令式、函数式和过程式编程。

Python 的特点

1. **简单易学**：语法简洁明了，适合初学者。
2. **跨平台**：支持 Windows、macOS、Linux 等多种操作系统。
3. **丰富的库和框架**：拥有庞大的标准库和第三方库，适用于 Web 开发、数据分析、人工智能、科学计算等领域。
4. **解释型语言**：无需编译，直接运行代码。
5. **动态类型**：变量类型在运行时确定，无需显式声明。
6. **社区支持**：拥有庞大的开发者社区，资源丰富。

## Windows 下安装 Python

官网下载：https://www.python.org/downloads/，注意添加到环境变量中。

查看python版本：

```python
python --version
```

## 解释器

Python 解释器是一个程序，负责读取、解析和执行 Python 代码。它是 Python 语言的核心组件，将 Python 代码转换为计算机能够理解和执行的指令。Python 解释器的主要作用是实现 Python 的动态性和跨平台特性。

- Python 解释器是 Python 代码执行的核心组件，负责将代码转换为计算机能够执行的指令。
- 解释器的工作过程包括词法分析、语法分析、编译和执行。
- Python 的动态性、跨平台特性和易用性都依赖于解释器的实现。
- 常见的解释器实现包括 CPython、Jython、IronPython、PyPy 和 MicroPython。

## 基础语法

### 标识符

在 Python 里，标识符由字母、数字、下划线组成，但是不能以数字开头（比如：解释器将无法区分 `123` 是数字字面量还是变量名）。

标识符中的下划线有一些特殊的意义，如下：

- `_variable`：约定俗成的私有变量或模块级别的私有成员。
- `variable_`：避免与关键字冲突。
- `__variable`：名称改写，提供一定程度的“私有”保护。
- `__variable__`：特殊方法，用于操作符重载或其他特殊行为。
- `_`：临时变量或忽略变量。

### 行和缩进

在Python中，**行与缩进**是语法的重要组成部分，用于定义代码块的结构。与其他语言（如C、Java）使用大括号 `{}` 不同，Python通过缩进来表示代码块的层次关系。

**行的基本规则**

```python
# 一行一条语句：通常，Python代码每行只写一条语句。
print("Hello")

# 多行语句：如果一条语句过长，可以用反斜杠 \ 换行。
total = 1 + 2 + 3 + \
        4 + 5 + 6

# 多行语句：或者使用括号 ()、[]、{} 来隐式换行。
num = (1 + 2 + 3 +
       4 + 5 + 6)
```

**缩进规则**

```python
# 缩进定义代码块：Python使用缩进来表示代码块的层次关系，通常用 4个空格 作为标准缩进（也可以用Tab，但推荐使用空格）。
if x > 0:
    print("x is positive")  # 属于if代码块
    print("This is indented")  # 属于if代码块
print("This is not indented")  # 不属于if代码块

# 缩进必须一致：同一代码块的缩进必须相同，否则会引发 IndentationError。
if x > 0:
    print("x is positive")
  print("This will cause an error")  # 缩进不一致，报错

# 多级缩进：嵌套代码块需要多级缩进。
if x > 0:
    if y > 0:
        print("Both x and y are positive")
    print("This is still in the outer if block")
```

### 注释

```python
# 单行注释采用 # 开头。
print("Hello, Python!")  # 这里也可以注释

# 多行注释使用三个单引号 ''' 或三个双引号 """。
'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''

"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""
```

## 变量

变量是用来存储数据的容器。你可以把变量想象成一个标签，这个标签指向内存中的某个值。Python 是动态类型语言，不需要显式声明变量的类型。

```python
x = 10          # 整数
y = 3.14        # 浮点数
name = "Alice"  # 字符串
is_student = True  # 布尔值
```

## 数据类型

### 字符串

字符串是 Python 中最常用的数据类型。我们可以使用引号 ( **'** 或 **"** ) 来创建字符串。

```python
s1 = '这是一个字符串'
s2 = "这也是一个字符串"
s3 = '''这是一个
多行字符串'''
s4 = """这也是一个
多行字符串"""
```

**特点：**

- **不可变性**：字符串一旦创建，就不能修改其中的字符。如果需要修改，只能创建一个新的字符串。
- **有序性**：字符串中的字符是有顺序的，可以通过索引访问每个字符。
- **支持多种操作**：比如拼接、切片、查找、替换等。

**基本操作：**

```python
# 访问字符
s = "Hello"
print(s[0])  # 输出: H
print(s[1])  # 输出: e

# 字符串拼接
s1 = "Hello"
s2 = "World"
s3 = s1 + " " + s2
print(s3)  # 输出: Hello World

# 字符串长度
s = "Hello"
print(len(s))  # 输出: 5

# 字符串切片
s = "Hello, World!"
print(s[0:5])  # 输出: Hello
print(s[7:12])  # 输出: World

# 字符串查找
s = "Hello, World!"
print("World" in s)  # 输出: True
print("Python" in s)  # 输出: False

# 字符串替换
s = "Hello, World!"
new_s = s.replace("World", "Python")
print(new_s)  # 输出: Hello, Python!

# 字符串格式化
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")
# 输出: My name is Alice and I am 25 years old.

# 还有很多，转换大小写，取出前后空格，拆分，拼接，判断开头结尾等
```

### 数字

- 整数（`int`）：如 `10`, `-5`, `0`。
- 浮点数（`float`）：如 `3.14`, `-0.001`, `2.0`。
- 复数（`complex`）：如 `2 + 3j`, `1 - 4j`。
- 布尔值（`bool`）：如 `True`, `False`（本质是 `1` 和 `0`）。

```python
# 1. 数字类型
a = 10          # 整数
b = 3.14        # 浮点数
c = 2 + 3j      # 复数
d = True        # 布尔值

print(f"a = {a}, 类型是 {type(a)}")  # a = 10, 类型是 <class 'int'>
print(f"b = {b}, 类型是 {type(b)}")  # b = 3.14, 类型是 <class 'float'>
print(f"c = {c}, 类型是 {type(c)}")  # c = (2+3j), 类型是 <class 'complex'>
print(f"d = {d}, 类型是 {type(d)}")  # d = True, 类型是 <class 'bool'>

# 2. 类型转换
x = int(3.14)       # 浮点数转整数
y = float(10)       # 整数转浮点数
z = complex(2)      # 整数转复数
w = bool(0)         # 整数转布尔值

print(f"x = {x}, y = {y}, z = {z}, w = {w}")  # x = 3, y = 10.0, z = (2+0j), w = False

# 3. 数学运算
sum_result = 10 + 5         # 加法
diff_result = 10 - 5        # 减法
prod_result = 10 * 5        # 乘法
quot_result = 10 / 5        # 除法
mod_result = 10 % 3         # 取余
power_result = 2 ** 3       # 幂运算

print(f"sum = {sum_result}, diff = {diff_result}, prod = {prod_result}, quot = {quot_result}, mod = {mod_result}, power = {power_result}")
# 输出：sum = 15, diff = 5, prod = 50, quot = 2.0, mod = 1, power = 8

# 4. 数学函数
import math
sqrt_value = math.sqrt(16)          # 平方根
sin_value = math.sin(math.pi / 2)   # 正弦函数

print(f"sqrt(16) = {sqrt_value}, sin(pi/2) = {sin_value}")  # sqrt(16) = 4.0, sin(pi/2) = 1.0

# 5. 随机数
import random
random_number = random.randint(1, 100)  # 生成 1 到 100 的随机整数
print(f"随机数: {random_number}")

# 6. 格式化输出
pi = 3.14159
print(f"Pi 的值是 {pi:.2f}")  # Pi 的值是 3.14

# 7. 比较运算
print(10 == 10)  # True
print(10 != 20)  # True
print(10 > 20)   # False
print(10 <= 20)  # True
```

### 列表

列表是一个有序、可变的集合，用方括号 `[]` 表示，元素之间用逗号分隔，可以包含任意类型的元素（数字、字符串、列表等）。

```python
# 1. 列表的定义
my_list = [1, 2, 3, "Python", 3.14, True]  # 包含多种类型的元素
print(f"my_list: {my_list}")  # 输出: my_list: [1, 2, 3, 'Python', 3.14, True]

# 2. 访问元素
print(f"第一个元素: {my_list[0]}")  # 输出: 第一个元素: 1
print(f"最后一个元素: {my_list[-1]}")  # 输出: 最后一个元素: True

# 3. 修改元素
my_list[1] = 20  # 修改第二个元素
print(f"修改后的列表: {my_list}")  # 输出: 修改后的列表: [1, 20, 3, 'Python', 3.14, True]

# 4. 添加元素
my_list.append("New Item")  # 在末尾添加元素
my_list.insert(2, "Inserted Item")  # 在索引 2 处插入元素
my_list.extend([10, 20, 30])  # 扩展列表
print(f"添加元素后的列表: {my_list}")
# 输出: 添加元素后的列表: [1, 20, 'Inserted Item', 3, 'Python', 3.14, True, 'New Item', 10, 20, 30]

# 5. 删除元素
my_list.remove("Inserted Item")  # 删除指定元素
popped_item = my_list.pop(2)  # 删除并返回索引 2 的元素
del my_list[0]  # 删除索引 0 的元素
print(f"删除元素后的列表: {my_list}, 被删除的元素: {popped_item}")
# 输出: 删除元素后的列表: [20, 3, 'Python', 3.14, True, 'New Item', 10, 20, 30], 被删除的元素: 3

# 6. 切片操作
sub_list = my_list[1:5]  # 获取索引 1 到 4 的子列表
step_list = my_list[::2]  # 每隔一个元素取一个
print(f"子列表: {sub_list}, 步长列表: {step_list}")
# 输出: 子列表: [3, 'Python', 3.14, True], 步长列表: [20, 'Python', True, 10, 30]

# 7. 常用方法
print(f"列表长度: {len(my_list)}")  # 输出: 列表长度: 9
print(f"'Python' 的索引: {my_list.index('Python')}")  # 输出: 'Python' 的索引: 2
print(f"20 出现的次数: {my_list.count(20)}")  # 输出: 20 出现的次数: 2

# 8. 排序和反转
num_list = [3, 1, 4, 1, 5, 9, 2, 6]
num_list.sort()  # 排序
print(f"排序后的列表: {num_list}")  # 输出: 排序后的列表: [1, 1, 2, 3, 4, 5, 6, 9]
num_list.reverse()  # 反转
print(f"反转后的列表: {num_list}")  # 输出: 反转后的列表: [9, 6, 5, 4, 3, 2, 1, 1]

# 9. 遍历列表
print("遍历列表:")
for item in my_list:
    print(item, end=" ")  # 输出: 20 3 Python 3.14 True New Item 10 20 30
print()

# 10. 列表的嵌套
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(f"嵌套列表: {nested_list}")  # 输出: 嵌套列表: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(f"嵌套列表的第一个元素: {nested_list[0]}")  # 输出: 嵌套列表的第一个元素: [1, 2, 3]

# 11. 列表的复制
import copy
shallow_copy = my_list.copy()  # 浅拷贝
deep_copy = copy.deepcopy(my_list)  # 深拷贝
print(f"浅拷贝: {shallow_copy}, 深拷贝: {deep_copy}")
```

### 元组

元组是一个有序、不可变的集合，用圆括号 `()` 表示，元素之间用逗号分隔，同样可以包含任意类型的元素（数字、字符串、列表等）。

```python
# 1. 元组的定义
my_tuple = (1, 2, 3, "Python", 3.14, True)  # 包含多种类型的元素
print(f"my_tuple: {my_tuple}")  # 输出: my_tuple: (1, 2, 3, 'Python', 3.14, True)

# 2. 访问元素
print(f"第一个元素: {my_tuple[0]}")  # 输出: 第一个元素: 1
print(f"最后一个元素: {my_tuple[-1]}")  # 输出: 最后一个元素: True

# 3. 切片操作
sub_tuple = my_tuple[1:4]  # 获取索引 1 到 3 的子元组
step_tuple = my_tuple[::2]  # 每隔一个元素取一个
print(f"子元组: {sub_tuple}, 步长元组: {step_tuple}")
# 输出: 子元组: (2, 3, 'Python'), 步长元组: (1, 3, 3.14)

# 4. 元组的拼接
tuple1 = (1, 2, 3)
tuple2 = ("a", "b", "c")
combined_tuple = tuple1 + tuple2  # 拼接两个元组
print(f"拼接后的元组: {combined_tuple}")  # 输出: 拼接后的元组: (1, 2, 3, 'a', 'b', 'c')

# 5. 元组的重复
repeated_tuple = tuple1 * 3  # 重复元组
print(f"重复后的元组: {repeated_tuple}")  # 输出: 重复后的元组: (1, 2, 3, 1, 2, 3, 1, 2, 3)

# 6. 常用方法
print(f"元组长度: {len(my_tuple)}")  # 输出: 元组长度: 6
print(f"'Python' 的索引: {my_tuple.index('Python')}")  # 输出: 'Python' 的索引: 3
print(f"3 出现的次数: {my_tuple.count(3)}")  # 输出: 3 出现的次数: 1

# 7. 遍历元组
print("遍历元组:")
for item in my_tuple:
    print(item, end=" ")  # 输出: 1 2 3 Python 3.14 True
print()

# 8. 元组的嵌套
nested_tuple = ((1, 2, 3), (4, 5, 6), (7, 8, 9))
print(f"嵌套元组: {nested_tuple}")  # 输出: 嵌套元组: ((1, 2, 3), (4, 5, 6), (7, 8, 9))
print(f"嵌套元组的第一个元素: {nested_tuple[0]}")  # 输出: 嵌套元组的第一个元素: (1, 2, 3)

# 9. 元组的不可变性
# my_tuple[0] = 10  # 会报错，元组不可修改

# 10. 元组的解包
a, b, c, d, e, f = my_tuple  # 解包元组
print(f"解包后的变量: a={a}, b={b}, c={c}, d={d}, e={e}, f={f}")
# 输出: 解包后的变量: a=1, b=2, c=3, d=Python, e=3.14, f=True
```

### 字典

**定义：**

- 字典是一个无序、可变的键值对集合，用花括号 `{}` 表示，键值对之间用逗号分隔。
- 键必须是不可变类型（如字符串、数字、元组），值可以是任意类型。
- 字典的键是唯一的，值可以重复。

```python
# 1. 字典的定义
my_dict = {
    "name": "Alice",
    "age": 25,
    "is_student": False,
    "courses": ["Math", "Physics"],
    "address": {
        "city": "Beijing",
        "zipcode": "100000"
    }
}
print(f"my_dict: {my_dict}")
# 输出: my_dict: {'name': 'Alice', 'age': 25, 'is_student': False, 'courses': ['Math', 'Physics'], 'address': {'city': 'Beijing', 'zipcode': '100000'}}

# 2. 访问元素
print(f"姓名: {my_dict['name']}")  # 输出: 姓名: Alice
print(f"城市: {my_dict['address']['city']}")  # 输出: 城市: Beijing

# 3. 添加/修改元素
my_dict["age"] = 26  # 修改年龄
my_dict["gender"] = "Female"  # 添加性别
print(f"修改后的字典: {my_dict}")
# 输出: 修改后的字典: {'name': 'Alice', 'age': 26, 'is_student': False, 'courses': ['Math', 'Physics'], 'address': {'city': 'Beijing', 'zipcode': '100000'}, 'gender': 'Female'}

# 4. 删除元素
del my_dict["is_student"]  # 删除键值对
popped_value = my_dict.pop("gender")  # 删除并返回键对应的值
print(f"删除后的字典: {my_dict}, 被删除的值: {popped_value}")
# 输出: 删除后的字典: {'name': 'Alice', 'age': 26, 'courses': ['Math', 'Physics'], 'address': {'city': 'Beijing', 'zipcode': '100000'}}, 被删除的值: Female

# 5. 检查键是否存在
if "age" in my_dict:
    print("age 键存在")  # 输出: age 键存在

# 6. 常用方法
print(f"所有键: {my_dict.keys()}")  # 输出: 所有键: dict_keys(['name', 'age', 'courses', 'address'])
print(f"所有值: {my_dict.values()}")  # 输出: 所有值: dict_values(['Alice', 26, ['Math', 'Physics'], {'city': 'Beijing', 'zipcode': '100000'}])
print(f"所有键值对: {my_dict.items()}")  # 输出: 所有键值对: dict_items([('name', 'Alice'), ('age', 26), ('courses', ['Math', 'Physics']), ('address', {'city': 'Beijing', 'zipcode': '100000'})])

# 7. 安全获取值
print(f"获取不存在的键: {my_dict.get('height', '默认值')}")  # 输出: 获取不存在的键: 默认值

# 8. 合并字典
new_data = {"height": 170, "weight": 60}
my_dict.update(new_data)  # 合并字典
print(f"合并后的字典: {my_dict}")
# 输出: 合并后的字典: {'name': 'Alice', 'age': 26, 'courses': ['Math', 'Physics'], 'address': {'city': 'Beijing', 'zipcode': '100000'}, 'height': 170, 'weight': 60}

# 9. 清空字典
my_dict.clear()
print(f"清空后的字典: {my_dict}")  # 输出: 清空后的字典: {}

# 10. 遍历字典
my_dict = {"name": "Alice", "age": 25, "city": "Beijing"}
print("遍历字典:")
for key in my_dict:  # 遍历键
    print(f"键: {key}, 值: {my_dict[key]}")
# 输出:
# 键: name, 值: Alice
# 键: age, 值: 25
# 键: city, 值: Beijing

for key, value in my_dict.items():  # 遍历键值对
    print(f"键值对: {key} -> {value}")
# 输出:
# 键值对: name -> Alice
# 键值对: age -> 25
# 键值对: city -> Beijing

# 11. 字典的嵌套
nested_dict = {
    "person1": {"name": "Alice", "age": 25},
    "person2": {"name": "Bob", "age": 30}
}
print(f"嵌套字典: {nested_dict}")
# 输出: 嵌套字典: {'person1': {'name': 'Alice', 'age': 25}, 'person2': {'name': 'Bob', 'age': 30}}

# 12. 字典的复制
import copy
shallow_copy = my_dict.copy()  # 浅拷贝
deep_copy = copy.deepcopy(my_dict)  # 深拷贝
print(f"浅拷贝: {shallow_copy}, 深拷贝: {deep_copy}")
```

## 条件

由于 python 并不支持 switch 语句，所以多个条件判断，只能用 elif 来实现。

```python
# 1. 基本的 if 语句
# if 用于判断一个条件是否为真，如果为真则执行对应的代码块
x = 10
if x > 5:
    print("1. 基本的 if 语句: x 大于 5")  # 条件为真，执行此代码块

# 2. if-else 语句
# else 用于在 if 条件为假时执行另一个代码块
y = 3
if y > 5:
    print("2. if-else 语句: y 大于 5")  # 条件为假，跳过此代码块
else:
    print("2. if-else 语句: y 不大于 5")  # 条件为假，执行此代码块

# 3. if-elif-else 语句
# elif 用于检查多个条件，类似于 else if
z = 7
if z > 10:
    print("3. if-elif-else 语句: z 大于 10")  # 条件为假，跳过此代码块
elif z > 5:
    print("3. if-elif-else 语句: z 大于 5 但小于等于 10")  # 条件为真，执行此代码块
else:
    print("3. if-elif-else 语句: z 小于等于 5")  # 条件为假，跳过此代码块

# 4. 嵌套的 if 语句
# if 语句可以嵌套在另一个 if 语句中，用于处理更复杂的条件
a = 12
if a > 10:
    if a % 2 == 0:
        print("4. 嵌套的 if 语句: a 大于 10 且是偶数")  # 外层和内层条件均为真，执行此代码块
    else:
        print("4. 嵌套的 if 语句: a 大于 10 且是奇数")  # 外层条件为真，内层条件为假时执行
else:
    print("4. 嵌套的 if 语句: a 小于等于 10")  # 外层条件为假时执行

# 5. 简化的 if 语句（三元运算符）
# 三元运算符用于简化简单的 if-else 语句，适合单行表达式
b = 8
result = "5. 三元运算符: b 大于 5" if b > 5 else "5. 三元运算符: b 不大于 5"
print(result)  # 条件为真，输出 "b 大于 5"

# 6. 空代码块（pass 语句）
# 如果某个条件不需要执行任何操作，可以使用 pass 语句占位
c = 4
if c > 5:
    pass  # 条件为假，不执行任何操作
else:
    print("6. pass 语句: c 不大于 5")  # 条件为假，执行此代码块
```

## for 循环

```python
# 1. 遍历列表
# for 循环可以遍历列表中的每个元素
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)  # 输出: apple, banana, cherry

# 2. 遍历字符串
# for 循环可以遍历字符串中的每个字符
word = "Python"
for char in word:
    print(char)  # 输出: P, y, t, h, o, n

# 3. 遍历字典的键
# for 循环可以遍历字典的键
my_dict = {"name": "Alice", "age": 25, "city": "New York"}
for key in my_dict:
    print(key)  # 输出: name, age, city

# 4. 遍历字典的值
# for 循环可以遍历字典的值
for value in my_dict.values():
    print(value)  # 输出: Alice, 25, New York

# 5. 遍历字典的键值对
# for 循环可以遍历字典的键值对
for key, value in my_dict.items():
    print(f"{key}: {value}")  # 输出: name: Alice, age: 25, city: New York

# 6. 使用 range() 函数
# range() 生成一个数字序列，常用于控制循环次数
for i in range(5):
    print(i)  # 输出: 0, 1, 2, 3, 4

# 7. 嵌套 for 循环
# for 循环可以嵌套，用于处理多维数据结构
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in matrix:
    for num in row:
        print(num, end=" ")  # 输出: 1 2 3 4 5 6 7 8 9
    print()  # 换行

# 8. 使用 enumerate() 获取索引和值
# enumerate() 返回索引和对应的值
for index, value in enumerate(fruits):
    print(f"索引: {index}, 值: {value}")  # 输出: 索引: 0, 值: apple, 索引: 1, 值: banana, 索引: 2, 值: cherry

# 9. 使用 zip() 遍历多个序列
# zip() 将多个序列组合成一个可迭代对象
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} 的年龄是 {age}")  # 输出: Alice 的年龄是 25, Bob 的年龄是 30, Charlie 的年龄是 35

# 10. 列表推导式
# 列表推导式是一种简洁的创建列表的方式，基于 for 循环
squares = [x**2 for x in range(5)]
print(squares)  # 输出: [0, 1, 4, 9, 16]

# 11. 带条件的列表推导式
# 可以在列表推导式中添加条件
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)  # 输出: [0, 4, 16, 36, 64]

# 12. 遍历文件内容
# for 循环可以逐行遍历文件内容
with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())  # 输出文件每一行的内容（去除换行符）

# 13. 遍历生成器
# 生成器是一种惰性计算的迭代器，for 循环可以遍历生成器
def my_generator():
    yield 1
    yield 2
    yield 3

for value in my_generator():
    print(value)  # 输出: 1, 2, 3

# 14. 使用 else 子句
# for 循环可以带有 else 子句，当循环正常结束时执行
for i in range(3):
    print(i)
else:
    print("循环正常结束")  # 输出: 0, 1, 2, 循环正常结束

# 15. 使用 break 和 continue
# break 用于提前退出循环，continue 用于跳过当前迭代
for i in range(5):
    if i == 3:
        break  # 当 i 等于 3 时退出循环
    print(i)  # 输出: 0, 1, 2

for i in range(5):
    if i == 3:
        continue  # 当 i 等于 3 时跳过当前迭代
    print(i)  # 输出: 0, 1, 2, 4
```

## while 循环

```python
# 1. 基本的 while 循环
# while 循环在条件为真时重复执行代码块
count = 0
while count < 5:
    print("1. 当前计数:", count)
    count += 1  # 输出: 当前计数: 0, 1, 2, 3, 4

# 2. 使用 break 退出循环
# break 用于提前退出 while 循环
count = 0
while True:
    if count >= 5:
        break  # 当 count 大于等于 5 时退出循环
    print("2. 当前计数:", count)
    count += 1  # 输出: 当前计数: 0, 1, 2, 3, 4

# 3. 使用 continue 跳过当前迭代
# continue 用于跳过当前迭代，直接进入下一次循环
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue  # 当 count 等于 3 时跳过当前迭代
    print("3. 当前计数:", count)  # 输出: 当前计数: 1, 2, 4, 5

# 4. 使用 else 子句
# while 循环可以带有 else 子句，当循环正常结束时执行
count = 0
while count < 3:
    print("4. 当前计数:", count)
    count += 1
else:
    print("4. 循环正常结束")  # 输出: 当前计数: 0, 1, 2, 循环正常结束

# 5. 无限循环
# 如果条件永远为真，while 循环会无限执行
# 以下代码被注释掉，避免无限循环
# while True:
#     print("5. 这是一个无限循环")

# 6. 用户输入控制循环
# 使用用户输入来控制 while 循环的执行
while True:
    user_input = input("6. 请输入 'exit' 退出循环: ")
    if user_input == "exit":
        break
    print("6. 你输入了:", user_input)

# 7. 嵌套 while 循环
# while 循环可以嵌套，用于处理复杂逻辑
i = 1
while i <= 3:
    j = 1
    while j <= 3:
        print(f"7. i={i}, j={j}")
        j += 1
    i += 1  # 输出: i=1, j=1; i=1, j=2; i=1, j=3; i=2, j=1; ...

# 8. 使用标志变量控制循环
# 使用标志变量来控制 while 循环的执行
flag = True
count = 0
while flag:
    print("8. 当前计数:", count)
    count += 1
    if count >= 3:
        flag = False  # 当 count 大于等于 3 时退出循环
    # 输出: 当前计数: 0, 1, 2

# 9. 遍历列表直到条件满足
# 使用 while 循环遍历列表，直到满足特定条件
numbers = [1, 2, 3, 4, 5]
index = 0
while index < len(numbers):
    if numbers[index] == 3:
        print("9. 找到数字 3，退出循环")
        break
    print("9. 当前数字:", numbers[index])
    index += 1  # 输出: 当前数字: 1, 当前数字: 2, 找到数字 3，退出循环

# 10. 模拟 do-while 循环
# Python 没有 do-while 循环，但可以通过 while 循环模拟
count = 0
while True:
    print("10. 当前计数:", count)
    count += 1
    if count >= 3:
        break  # 输出: 当前计数: 0, 1, 2
```



## 函数

### 定义函数

```python
def function_name(param1, param2, param3):
    """函数说明"""
    function_content
    return [expression]
```

### 函数调用

```pyth
def print_num(a):
    print(f"入参数字是：{a}")

# 函数调用
print_num(10)
```

### 参数传递

重点要区分可变对象：``string, tuple, number``和不可变对象：``list, dict``。

* 不可变对象：``string, tuple, number``，传递的是对象的副本，函数内部对参数的修改不会影响原始对象。
* 可变对象：``list, dict``，传递的是对象的引用，函数内部对参数的修改会影响原始对象。

```python
def modify_number(num):
    # 传递的是 x 的副本，函数内部对 num 的修改不会影响外部的 x。
    num += 10
    print("函数内部:", num)  # 函数内部: 15


x = 5
modify_number(x)
print("函数外部:", x)  # 函数外部: 5


def modify_list(lst):
    # 传递的是 my_list 的引用。函数内部对 lst 的修改会直接影响外部的 my_list。
    lst.append(4)
    print("函数内部:", lst)  # 函数内部: [1, 2, 3, 4]


my_list = [1, 2, 3]
modify_list(my_list)
print("函数外部:", my_list)  # 函数外部: [1, 2, 3, 4]
```

### 参数类型

1. **必备参数**：按顺序传递，数量必须匹配。
2. **关键字参数**：通过 `参数名=值` 传递，顺序可任意。
3. **默认参数**：定义时指定默认值，调用时可省略。
4. **可变长度参数**：`*args` 接收任意位置参数，`**kwargs` 接收任意关键字参数。
5. **仅关键字参数**：在 `*` 或 `*args` 后，必须通过关键字传递。

```python
# 1. 必备参数
def func1(a, b):
    print(f"必备参数: a={a}, b={b}")
func1(1, 2)  # 输出: 必备参数: a=1, b=2

# 2. 关键字参数
def func2(a, b):
    print(f"关键字参数: a={a}, b={b}")
func2(b=2, a=1)  # 输出: 关键字参数: a=1, b=2

# 3. 默认参数
def func3(a, b=10):
    print(f"默认参数: a={a}, b={b}")
func3(1)  # 输出: 默认参数: a=1, b=10

# 4. 可变长度参数
def func4(*args, **kwargs):
    print(f"可变长度参数: args={args}, kwargs={kwargs}")
func4(1, 2, 3, name="Alice", age=20)  
# 输出: 可变长度参数: args=(1, 2, 3), kwargs={'name': 'Alice', 'age': 20}

# 5. 仅关键字参数
def func5(a, *, b):
    print(f"仅关键字参数: a={a}, b={b}")
func5(1, b=2)  # 输出: 仅关键字参数: a=1, b=2
```

### 匿名函数

使用 lambda 来创建匿名函数。适合简单、临时的操作。语法：

```python
lambda 参数1, 参数2, ...: 表达式
```

示例：

```python
# 示例
add = lambda x, y: x + y
print(add(2, 3))  # 输出: 5
```

## 文件

```python
# ==================== 文件的基本操作 ====================

# 1. 打开文件
# 使用 open() 函数打开文件，模式可以是 'r'（读取）、'w'（写入）、'a'（追加）等
file = open("example.txt", "r")  # 以只读模式打开文件
print("1. 文件已打开:", file.name)

# 2. 读取文件内容
# 使用 read() 方法读取文件的全部内容
content = file.read()
print("2. 文件内容如下:")
print(content)

# 3. 关闭文件
# 使用 close() 方法关闭文件
file.close()
print("3. 文件已关闭")

# 4. 使用 with 语句自动管理文件
# with 语句会在代码块执行完毕后自动关闭文件
with open("example.txt", "r") as file:
    content = file.read()
    print("4. 使用 with 语句读取文件内容:")
    print(content)

# 5. 逐行读取文件
# 使用 readline() 方法逐行读取文件
with open("example.txt", "r") as file:
    print("5. 逐行读取文件:")
    line = file.readline()
    while line:
        print(line.strip())  # 去除每行的换行符
        line = file.readline()

# 6. 读取所有行到列表
# 使用 readlines() 方法将文件的所有行读取到一个列表中
with open("example.txt", "r") as file:
    lines = file.readlines()
    print("6. 文件的所有行:")
    for line in lines:
        print(line.strip())

# 7. 写入文件
# 使用 'w' 模式打开文件并写入内容（会覆盖文件原有内容）
with open("output.txt", "w") as file:
    file.write("7. 这是写入的第一行内容。\n")
    file.write("7. 这是写入的第二行内容。\n")
    print("7. 内容已写入 output.txt")

# 8. 追加内容到文件
# 使用 'a' 模式打开文件并追加内容
with open("output.txt", "a") as file:
    file.write("8. 这是追加的内容。\n")
    print("8. 内容已追加到 output.txt")

# 9. 检查文件是否存在
# 使用 os.path.exists() 检查文件是否存在
import os
if os.path.exists("example.txt"):
    print("9. 文件 example.txt 存在")
else:
    print("9. 文件 example.txt 不存在")

# 10. 删除文件
# 使用 os.remove() 删除文件
if os.path.exists("output.txt"):
    os.remove("output.txt")
    print("10. 文件 output.txt 已删除")
else:
    print("10. 文件 output.txt 不存在")


# ==================== 文件的高级操作 ====================

# 11. 读取和写入二进制文件
# 使用 'rb' 和 'wb' 模式处理二进制文件
with open("binary_file.bin", "wb") as file:
    file.write(b"11. 这是二进制数据。\n")  # 写入二进制数据

with open("binary_file.bin", "rb") as file:
    content = file.read()
    print("11. 读取二进制文件内容:", content)

# 12. 使用 seek() 移动文件指针
# seek() 用于移动文件指针到指定位置
with open("example.txt", "r") as file:
    file.seek(10)  # 将文件指针移动到第 10 个字节
    content = file.read()
    print("12. 从第 10 个字节开始读取文件内容:")
    print(content)

# 13. 获取文件大小
# 使用 os.path.getsize() 获取文件大小（字节数）
file_size = os.path.getsize("example.txt")
print("13. 文件 example.txt 的大小:", file_size, "字节")

# 14. 遍历目录中的文件
# 使用 os.listdir() 获取目录中的所有文件
directory = "."
print("14. 目录中的文件:")
for file_name in os.listdir(directory):
    print(file_name)

# 15. 复制文件
# 使用 shutil.copy() 复制文件
import shutil
shutil.copy("example.txt", "example_copy.txt")
print("15. 文件 example.txt 已复制为 example_copy.txt")

# 16. 移动文件
# 使用 shutil.move() 移动文件
shutil.move("example_copy.txt", "backup/example_copy.txt")
print("16. 文件 example_copy.txt 已移动到 backup 目录")

# 17. 创建目录
# 使用 os.mkdir() 创建目录
if not os.path.exists("new_directory"):
    os.mkdir("new_directory")
    print("17. 目录 new_directory 已创建")

# 18. 删除目录
# 使用 os.rmdir() 删除空目录
if os.path.exists("new_directory"):
    os.rmdir("new_directory")
    print("18. 目录 new_directory 已删除")
```


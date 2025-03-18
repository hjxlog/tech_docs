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


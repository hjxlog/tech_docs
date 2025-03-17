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

官网下载：https://www.python.org/downloads/

查看python版本：

```python
python --version
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


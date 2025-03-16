版本：python3，注意，python3并没有考虑向下兼容。

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


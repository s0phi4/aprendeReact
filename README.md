# Aprende React

### The Virtual DOM

- For every DOM object there is a corresponding virtual DOM object.
- The diffing process:  When the virtual DOM is updated, react compares this one with the snapshot of the before updated virtual DOM. This comparison to realize elements that have changed is called diffing.
- Once changes found, react updates only the objects changed.

### JSX

- Use className instead of class

  - ``` <h1 className = 'categoryOne'>Syntax</h1>```
- Example <br><br>
  ```var React = require('react');```<br>
  ```var ReactDOM = require('react-dom');```
<br>
<br>
```var myDiv = <div className='big'>I am a big DIV</div>```
```ReactDOM.render(myDiv, document.getElementById('app')); ```

- Self-closing tags
  - Include slash in self-closing tags
    ``` <br />```

- Use of curly braces for JS expressions within HTML tags
  -  ```var React = require('react');```<br>
     ```var ReactDOM = require('react-dom');```
    <br><br>

``` ReactDOM.render(<h1>{2+3}</h1>, ```<br>
``` document.getElementById('app')); ```

This will display 5 as a H1  in the place where app is defined.

  ```var React = require('react');```<br>
  ```var ReactDOM = require('react-dom');```

  ```var math = <h1>2+3={2+3}</h1>```

  ``` ReactDOM.render(math, ``` ``` document.getElementById('app'));   ```

Display is 2+3 = 5

- Use variables to set attributes <br>
  - ```var sideLength = "200px";```

```var React = require('react');```<br>
```var ReactDOM = require('react-dom');```

```var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';```

``` var gooseImg = (<img
                  src={goose}
                  />); ```<br>
```ReactDOM.render(gooseImg, document.getElementById('app'));```

- Conditionals
  - 

# Aprende React

### The Virtual DOM

- For every DOM object there is a corresponding virtual DOM object.
- The diffing process:  When the virtual DOM is updated, react compares this one with the snapshot of the before updated virtual DOM. This comparison to realize elements that have changed is called diffing.
- Once changes found, react updates only the objects changed.

### JSX

- Use className instead of class

  ``` <h1 className = 'categoryOne'>Syntax</h1>```
- Example <br><br>
  ```var React = require('react');```<br>
  ```var ReactDOM = require('react-dom');```
<br>
<br>
```var myDiv = <div className='big'>I am a big DIV</div>```
```ReactDOM.render(myDiv, document.getElementById('app')); ```

# object_stringify
array json_object stringify for <ie8

#Use
```html
<script src="your_root/objStringify.js"></script>
```
    
```javascript
objStringify([1,3,4]) //param array or json_object
=>[1,3,4] //type of string
```
```javascript
objStringify([1,3,4,{a:123,b:[1,3,4]},[1,2,3,4]])
=>[1,3,4,{a:123,b:[1,3,4]},[1,2,3,4]] //type of string
```
```javascript
objStringify({a:[1,3,4],b:{c:[1,{e:[1,3,4],d:"js"}]},d:"hello"});
=>{a:[1,3,4],b:{c:[1,{e:[1,3,4],d:"js"}]},d:"hello"} //type of string
```

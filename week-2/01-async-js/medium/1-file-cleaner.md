## File cleaner

Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

```
hello     world    my    name   is       saif
```

After the program runs, the output should be

```
hello world my name is saif
```

function removeExtraSpaces(string){

let removedSpeaces = string.split(" ").filter(item=>item!=='').join(" ");
return removedSpeaces;
}

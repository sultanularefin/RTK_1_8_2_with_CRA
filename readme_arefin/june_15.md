

```js

  const myRequest = new Request('./numbers.json');

        fetch(myRequest).
        then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json();
        }).
        then((response) => {
            console.log("response: ",response);
            // myImage.src = URL.createObjectURL(response);
        });
```




```ts

  const data = await response.json();
                console.log("data: ",data);

                // console.log("Result: ",JSON.stringify(data));

                if ((response.status === 200)||(response.status === 201)) {


                    set_Numbers_State(data);

                    console.log("--done--");

                } else {
                    console.log("__data__ sent_phone_verify_to_Wexprez Response_ !==200: ",data);

                    // return thunkAPI.rejectWithValue(data);
                }



                // numbers[0]=data;
```

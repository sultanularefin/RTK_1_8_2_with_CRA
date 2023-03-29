import React from "react";
import {Node_Interface, Whiteboard} from "./Whiteboard";
// import {Linked_List_Testing_Props} from "./link_List_Testing/Link_LIst_Testing";

// White_Board_Link_LIst
export interface one_Item_Interface{
    id: string,
    lowerId: string|undefined,
    data: string,

}
export interface White_Board_Link_LIst_Props{


}



const White_Board_Link_LIst: React.FC<White_Board_Link_LIst_Props> = ({
                                                                          // navigation,
                                                                          // route
                                                                      }) => {








    const items:one_Item_Interface[] = [
        {
            id: 'dog',
            lowerId: undefined,
            data: 'ww'
        },
        {
            id: 'cat',
            lowerId: 'rabbit',
            data: 'xx'
        },
        {
            id: 'rabbit',
            lowerId: 'dog',
            data: 'yy'
        },
        {
            id: 'tortoise',
            lowerId: 'cat',
            data: 'zz'
        }
    ];

    const white_Board_Object = new Whiteboard(items);

    const len:number= white_Board_Object.list_length();

    console.log("len: ", len);


    // const rpg= white_Board_Object.items();


    // const item_2 =white_Board_Object.items();
    console.log("whiteboard items: length >>> >>> ",white_Board_Object.items());


    const top2:Node_Interface|undefined= white_Board_Object.top();

    console.log("top(removed last item ie tail item: ",top2);


    console.log("len: ", white_Board_Object.list_length());



    white_Board_Object.add({
        id: 'tortoise',
        lowerId: 'cat',
        data: 'new'
    });

    console.log("len: ", white_Board_Object.list_length());

    // whiteboard.add({ id: 'tortoise', lowerId: 'cat', data: 'new' });






    return(

        <p>Hello at White Board</p>

    );





};




export default White_Board_Link_LIst;




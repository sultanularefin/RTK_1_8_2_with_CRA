// import {Node} from "../link_List_Testing/Link_LIst_Testing";

export interface one_Item_Interface{
    id: string,
    lowerId: string|undefined,
    data: string,

}

export interface Node_Interface{
    value:one_Item_Interface,
    head?: null|Node_Interface;
    tail?: null|Node_Interface;
    next?: null|Node_Interface;


}


const create_1_Node=(value:one_Item_Interface)=> {
    return {
        value: value,
        next: null,
        tail: null,
        head: null,
    };
};



export class Whiteboard {

    draw_Able_Items:one_Item_Interface[];

    head?: null|Node_Interface;
    tail?: null|Node_Interface;
    length: number;
    next?: null|Node_Interface;






    constructor (items:one_Item_Interface[]) {

        this.draw_Able_Items= items;
        this.length=0;

        if (items.length>1) {

            this.head = null;
            this.tail = null;
            this.length +=items.length;


            const node:Node_Interface = create_1_Node(items[0]); // or use new Node(value);
            // eslint-disable-next-line no-multi-assign
            this.head= this.tail =node;
            for (let step = 1; step < items.length; step++) {
                // Runs 5 times, with values of step 0 through 4.
                // console.log('Walking east one step');
                const  node2: Node_Interface = create_1_Node(items[step]); // or use new Node(value);
                this.tail.next= node2;
                this.tail=node2;



                /*
                if (this.tail) {

                    // since head is the 1st item in a linked list, we are putting new values in tail
                    this.tail.next = node;
                    this.tail = node;
                    return node;
                }
                */


            }
            // this.tail.next=null;
        }
        else if (items.length===1){

            const node:Node_Interface = create_1_Node(items[0]); // or use new Node(value);
            this.length +=1;
            // eslint-disable-next-line no-multi-assign
            this.head = this.tail = node;
            // return node;
            // return;
        }



        // throw new Error("Not implemented");
    }


    list_length= ()=>{
        return this.length;
    };
    // items() {



    // Return all items that are on the whiteboard, sorted in the order they were added by users
    // i.e. from bottom to top.
    // FOR LINKED LIST IT SHOULD BE HEAD TO TAIL, traversing.
    items = () =>{




        let current = this.head;



        while (current) {
            //@ts-ignore
            console.log("current.value.id: ",current.value.id);

            //@ts-ignore
            current = current.next;
        }
        // console.log("]");
    };

    // Return the top item, i.e. the item most recently added to the whiteboard
    // FOR LINKED LIST IT SHOULD BE The TAIL Item.
    // Removes the last item----


    top =()=>{
    // top () {


        // if wew have tail present
        if (this.tail) {
            this.length--;

            const tailNode = this.tail;

            // search for the node before tail
            let currentNode = this.head;

            // @ts-ignore
            while (currentNode.next !== tailNode) {
                // @ts-ignore
                currentNode = currentNode.next;
            }
            const beforeTail = currentNode;
            this.tail = beforeTail;
            // @ts-ignore
            this.tail.next = null;

            return tailNode;
        }


        return undefined;
        // console.log("__this.draw_Able_Items__: ",this.draw_Able_Items.length);
        // console.log("at top: ",);




        // throw new Error("Not implemented");
    };





    /*
    Add an item to the whiteboard.
    The `id` of the item being added must not match the `id` of any existing item on the whiteboard.
    The `lowerId` of the item being added must match the `id` of the current top item.

    @param item The item to be added.
    */

    // insert normal method on link list, insert at tail position of linked list.
    add (item:one_Item_Interface) {
        // console.log("__this.draw_Able_Items__: ",this.draw_Able_Items.length);
        // throw new Error("Not implemented");


        // console.log("this.length: ",this.length);

        this.length++;
        const node = create_1_Node(item); // or use new Node(value);

        if (this.tail) {

            // since head is the 1st item in a linked list, we are putting new values in tail
            this.tail.next = node;
            this.tail = node;
            return node;
        }

        else{
            //1st item in the linked list
            // eslint-disable-next-line no-multi-assign
            this.head = this.tail = node;
            return node;
        }
    }



    extract (items:one_Item_Interface[]) {
        console.log("__this.draw_Able_Items__: ",this.draw_Able_Items.length);
        console.log("at top: ",);
        // throw new Error("Not implemented");
    }
}



import React from 'react';
// import Animal from "./Animal";


export interface Linked_List_Testing_Props{

}


export interface Node {
    value: number;
    next?: null|Node;
    head?: null|Node;
    tail?: null|Node;
}



const create_Node=(value:number)=> {
    return {
        value: value,
        next: null,
    };
};


const Linked_List_Testing: React.FC<Linked_List_Testing_Props> = ({
                                                                      // navigation,
                                                                      // route
                                                                  }) => {







    class LinkedList {

        head?: null|Node;
        tail?: null|Node;
        length: number;
        next?: null|Node;


        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }




        insert(value:number) {

            // console.log("this.length: ",this.length);

            this.length++;
            const node = create_Node(value); // or use new Node(value);

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

        insert_Head(value:number) {

            // head is typically the first element and tail is the last element in a linked list.

            this.length++;
            const node = create_Node(value);

            if (this.head) {
                // @ts-ignore
                node.next = this.head;
                this.head = node;
                return node;
            }

            // for the first time
            else{

                // eslint-disable-next-line no-multi-assign
                this.head = this.tail = node;
                return node;
            }

        }

        removeHead() {
            if (this.head) {
                this.length--;
                const removedNode = this.head;
                this.head = this.head.next;
                return removedNode;
            }
            return undefined;
        }

        // remvoves the last element:
        remove() {

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
        }

        print() {
            let current = this.head;
            console.log("[");
            while (current) {
                console.log((current.value===this.head?.value)?`${current.value}(Head)`:current.value);
                current = current.next;
            }
            console.log("]");
        }

        // Bonus functions
        // insert at specific index

        insertIndex(value:number, index:number) {
            if (index >= this.length) {
                throw new Error("Insert index out of bounds");
            }

            if (index === 0) {
                return this.insert_Head(value);
            }

            this.length++;
            let previousNode = null;
            let currentNode = this.head;
            for (let iterator = 0; iterator < index; iterator++) {
                previousNode = currentNode;
                // @ts-ignore
                currentNode = currentNode.next;
            }
            const newNode = create_Node(value);
            // @ts-ignore
            newNode.next = currentNode;
            // @ts-ignore
            previousNode.next = newNode;
            return newNode;
        }

        // remove at specific index

        remove_Index(index:number) {
            if (index >= this.length) {
                throw new Error("Remove index out of bounds");
            }

            if (index === 0) {
                return this.removeHead();// invokiing objects removeHead method(); that's why this keyword used.
            }


            else{

                this.length--;
                let previousNode = null;
                let currentNode = this.head;
                for (let iterator = 0; iterator < index; iterator++) {
                    previousNode = currentNode;
                    // @ts-ignore
                    currentNode = currentNode.next;
                }
                // @ts-ignore
                previousNode.next = currentNode.next;
                return currentNode;
            }
        }
    }

// Testing functions

    const linked_List_Object = new LinkedList();

    linked_List_Object.insert(7);
    linked_List_Object.insert(8); //8,7(head)
    linked_List_Object.insert_Head(9); //8,7,9(head)
    linked_List_Object.insert_Head(10);//8,7,9,10(head)
    linked_List_Object.print(); // 10 9 8
    linked_List_Object.remove_Index(2);// 0,1,2 , 0 index possible.-____---                        // 8,(7=index:2, removed),9,10(head) ==> (tail)8,9,10(head)
    console.log("length: NOW: ",linked_List_Object.length); // 3
    linked_List_Object.print(); //(tail)8,9,10(head)
    linked_List_Object.remove();

    linked_List_Object.print(); //9(tail),10(head)







    return(<>
        <p>Hello World [[Linked_List_Testing]]</p>
    </>);



};

export default Linked_List_Testing;

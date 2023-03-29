

import React from 'react';
import Animal from "./Animal";


export interface Linked_List_Testing_Props{

}



const Class_In_FC: React.FC<Linked_List_Testing_Props> = ({
                                            // navigation,
                                            // route
                                        }) => {







    class Dog extends Animal {
        // eslint-disable-next-line class-methods-use-this
        bark() {
            console.log("Woof! Woof!");
        }
    }
    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();



    return(<>
        <p>Hello World</p>
    </>);



};

export default Class_In_FC;

import React from "react";
// import {My_Component2_Props} from "../jach_Herring_Ton_Coding_Tech_UseEffect_Use_Callback_UseMemo/MD_Testing_Wth_Pkg";

import Markdown from 'markdown-to-jsx';
// import React from 'react';
// import { render } from 'react-dom';

// render(<Markdown># Hello world!</Markdown>, document.body);
export interface MD_Testing_Wth_Pkg_Props{

}

const some_Md_String=`
# This is Markdown

#### You can edit me!

[Markdown](http://daringfireball.net/projects/markdown/) lets you write content in a really natural way.

  1. You can have lists, like this one
  2. Make things **bold** or *italic*
  3. Embed snippets of \`code\`
  4. Create [links](/)
  * ...

<small>Sample content borrowed with thanks from [elm-markdown](http://elm-lang.org/examples/markdown) ❤️</small>

You can even include custom React components if you declare them in the "overrides" option.`;

const MD_Testing_Wth_Pkg: React.FC<MD_Testing_Wth_Pkg_Props> = ({})=>{




    // render(<Markdown># Hello world!</Markdown>, document.body);

    return(

        <>
            <h1>Hello world</h1>
            <Markdown># Hello world!</Markdown>
            <Markdown>{some_Md_String}</Markdown>
        </>





    );
};


export default MD_Testing_Wth_Pkg;

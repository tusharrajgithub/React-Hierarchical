import React from "react";
import TreeNode from "./TreeNode";

const Tree = ({ data = [] }) => {
    return (
        <div>
            {data.map((tree) =>  
                <TreeNode node={tree}/>
)}

        </div>
    );
}

export default Tree;
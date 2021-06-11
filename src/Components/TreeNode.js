import React from "react";
import Tree from "./Tree";

const TreeNode = ({ node }) => {
    console.log("node", node)
    const haschild = node.childCompany ? true :false;
        return (
            <div>
              {haschild && (
                  <div>
              <li>
              {node.companyname}
              {node.badge}
                  </li>   
                
                 </div>
              )}
              {
                  haschild && <Tree data ={node.childCompany} />
               }
            </div>
        );


}

export default TreeNode;
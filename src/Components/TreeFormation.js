import React from "react";
import Tree from "./Tree"

const inputTree = [{
    companyname: 'Arjun Infra pvt',
    badge: 'Red',
    childCompany: 
    [
        {
            companyname: 'Good Home ltd' ,
            badge: 'blue',
            childCompany: [
                {
                    companyname: 'Private build ltd',
                    badge: 'Green',
                    childCompany: [
                    {}
                    ]
                }
            ]
        },
        {
            companyname: 'Cheap Housing ltd',
            badge: 'blue',
            childCompany: [
            {
            }
            ]
        }
    ]
    }];

const TreeFormation = () =>  {
    return  <>
    <div className="row">
      <div className="col text-center">
        <h2>Tree Visualization component</h2>
        <p className="mt-3">
          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-lg-8 text-left text-dark">
              <Tree data={inputTree} />
            </div>
          </div>
        </p>
      </div>
    </div>
  </>
}


export default TreeFormation;
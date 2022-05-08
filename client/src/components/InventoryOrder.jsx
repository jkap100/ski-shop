import React from "react";
import useCollapse from "react-collapsed";

function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible is-hoverable">
      <div className="box">
        <div className="header is-hoverable" {...getToggleProps()}>
          <strong className="is-hoverable has-text-white">
            {isExpanded ? "Collapse" : "Order Inventory"}
          </strong>
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            Now you can see the hidden content. <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

function InventoryOrder() {
  return (
    <div>
      <Collapsible />
    </div>
  );
}

export default InventoryOrder;

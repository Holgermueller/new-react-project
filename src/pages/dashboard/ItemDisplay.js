import React, { Component } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Divider,
  Button,
} from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";

const ItemDisplay = ({ list }) => {
  return (
    <div>
      {list &&
        list.map((itemOnList) => {
          return (
            <Accordion key={itemOnList.id}>
              <AccordionSummary expandIcon={<ExpandLess />}>
                {itemOnList.title}
              </AccordionSummary>
              <AccordionDetails>{itemOnList.artist}</AccordionDetails>
              <Divider />
              <AccordionActions>
                <Button>Delete Item</Button>
              </AccordionActions>
            </Accordion>
          );
        })}
    </div>
  );
};

export default ItemDisplay;

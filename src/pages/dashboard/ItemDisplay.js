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

export default class ItemDisplay extends Component {
  render() {
    return (
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandLess />}>Info</AccordionSummary>
          <AccordionDetails>More info</AccordionDetails>
          <Divider />
          <AccordionActions>
            <Button>Delete Item</Button>
          </AccordionActions>
        </Accordion>
      </div>
    );
  }
}

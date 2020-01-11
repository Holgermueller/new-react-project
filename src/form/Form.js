import React from "react";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Button } from "@material-ui/core";

const formCard = {
  margin: "5% auto"
};

const formStyles = {
  margin: "auto"
};

function Form() {
  return (
    <div className="form">
      <Card style={formCard}>
        <CardContent style={formStyles}>
          <TextField
            id="outlined-basic"
            label="Check your message here..."
            variant="outlined"
            multiline
          ></TextField>
        </CardContent>
        <Divider />
        <CardActions>
          <Button>Submit</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Form;

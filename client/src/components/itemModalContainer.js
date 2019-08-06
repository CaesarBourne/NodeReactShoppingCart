//container is a component that uses redux
import React, { Component } from "react";
import {
  Button,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Modal
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";


class ItemModalContainer extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const addedItem = {
       name: this.state.name,  
    };
    console.log(` na item be this: ${addedItem}`)
    this.props.addItem(addedItem);
    this.toggle();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add an Item</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  onChange={this.onChange}
                  placeholder="Add Item"
                  name="name"
                  id="item"
                />
                <Button type="submit" style={{ marginTop: "2rem" }} block>
                  Save Item
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModalContainer);

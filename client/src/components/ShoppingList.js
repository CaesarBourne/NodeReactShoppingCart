import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
//connect alos us to get state fro redux into our component, which is used to export the component, and the map state tp props and the actions
import { connect } from "react-redux";
import { getItems, deleteItems } from "../actions/itemActions";
//proptypes to validate component poperties
import Proptypes from "prop-types";

class ShoppingList extends Component {
  //component did mount is used to dispatch actions to the reducers
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
     //when delete button is clicked it passes the id to the actions then reducer n
    this.props.deleteItems(id);
  };

  render() {
    //item represents the entire state object which is the INITIAL STATE object in the reducer, items is the array
    const { items } = this.props.item;
    // //state are mapped to props instead
    // const {items} = this.state
    return (
      <Container>
     
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition timeout={500} key={_id} classNames="fade">
                <ListGroupItem>
                  <Button
                    color="danger"
                    size="sm"
                    className="delete-btn"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

//this is used to validate the props of a componnt e.g for a function or object below
ShoppingList.propTypes = {
  getItems: Proptypes.func.isRequired,
  item: Proptypes.object.isRequired
};
const mapStateToProps = state => ({
  //the item name is used because thats the name of the reducer, and it rturns the object
  item: state.item
});
//map stte to props is mapping ab state of a component to the props argument for the componenet, i.t instead of this.state.money: it would be this.props.money

export default connect(
  mapStateToProps,
  { getItems, deleteItems }
)(ShoppingList);

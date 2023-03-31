import React from "react";
import Card from "./Card"
import Header from "./Header";
import contacts from "../contacts"
import Avatar from "./Avatar";

// Second implemetation
// function createCard(contact) {
//   return(
//     <Card
//       name={contact.name}
//       img={contact.imgURL}
//       phone={contact.phone}
//       email={contact.email}
//     />
//   )
// }


function App() {
  // First implemetation
  // let contactCardList = []
  // contacts.forEach( (contact) => {
  //   contactCardList.push(
  //     <Card
  //       name={contact.name}
  //       img={contact.imgURL}
  //       phone={contact.phone}
  //       email={contact.email}
  //     />
  //   )
  // })


  return (
    <div>
      <Header />
      <Avatar
        img="https://static.abeka.com/Shared/ABeka/ProductImages/ClipArt/218553/150x150y160fx160fh-w/218553-Glass-of-Ice-Water-with-a-straw-color-png.png"
      />
      {/* Final implemetation */}
      {contacts.map( (contact) => {
        return (
          <Card
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        )
      })}
    </div>
  );
}

export default App;
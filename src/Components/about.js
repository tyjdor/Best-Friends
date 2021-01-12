import React from 'react';


export default function About() {
    return (
      <div className = "w-75 mx-auto">
        <h2>Welcome to Best Friends!</h2>
        <div className ="divider"></div>
        <p>
          Best Friends is a social site where you can add your current 5 best friends
          to your BFF page. This list of friends can be updated and changed whenever you want.
          If one of your friends does something you dont like, remove them and give a reason why, 
          Best Friends will send them an email notification letting them know they're not one of your best 
          friends anymore. Same goes for adding friends, add a new friend and give a reason why, they will
          recieve an email letting them know that they are one of your best friends!
        </p>
      </div>
    );
  }
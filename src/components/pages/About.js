import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>About Page</h1>
        <p className="lead">
          CRUD is an acronym for the four basic types of SQL commands: Create ,
          Read , Update , Delete . Most applications have some kind of CRUD
          functionality, and we can assume that every programmer had to deal
          with CRUD at some point. A CRUD application is one that uses forms to
          get data into and out of a database.
        </p>
        
        <p className="lead">
          The CRUD concept was not originally conceived as a modern way to
          create APIs. CRUD actually has its roots in database records. Most
          modern web and mobile applications contain some form of CRUD
          functionality. In addition, most programmers have to deal with CRUD at
          some point. So, a CRUD application would be one that utilizes forms to
          retrieve and return data from a database.
        </p>
        <p>
          A relational database consists of tables with rows and columns. In a
          relational database, each row in a table is called a record, and each
          column in the table represents a specific attribute or field. Users
          can call four CRUD operations to perform different action types on
          selected data in the database. This can be done through code or
          through GUI. Now, let’s take a look at each function separately.
        </p>
      </div>
    </div>
  );
};

export default About;

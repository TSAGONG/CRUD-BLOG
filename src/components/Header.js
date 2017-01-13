import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="App-header">
      <div>
      <ul>
        <li>
          <Link
          to="/"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Home
          </Link>
        </li>
        <li>
          <Link
          to="/create"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Create
          </Link>
        </li>
        <li>
          <Link
          to="/view"
          activeOnlyWhenExact
          activeClassName="active"
        >
          View
          </Link>
        </li>
        <li>
          <Link
          to="/digest"
          activeOnlyWhenExact
          activeClassName="active"
        >
          Digest
          </Link>
        </li>
      </ul>
      </div>
  </div>
  );


export default Header;

import './App.css';
import {
  gql,
  useQuery
} from "@apollo/client";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:path" element={<Page />} />
      </Routes>
    </div>
  </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home of Thunder</h1>
    </div>
  );
}

function Page() {
  let { path } = useParams();

  const PAGE = gql`
    query($path: String!) {
      page(path: $path) {
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(PAGE, {
    variables: { path },
  });

  if (loading || !data.page) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      <h3>{data.page.name}</h3>
    </div>
  );
}

export default App;

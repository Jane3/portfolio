import React, { useState, useEffect ,lazy, Suspense } from "react";
import ApolloClient, { gql } from "apollo-boost";

import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() => import('../../components/githubProfileCard/GithubProfileCard.js'));
export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }
    return <Contact />;
}

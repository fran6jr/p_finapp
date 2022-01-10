import React from "react";
import useBudgetList from "../../hooks/useBudgetList";
import useFetchGit from "../../hooks/useFetchGit";

function Main(props) {

    const {budget:budgetlines} = useBudgetList();
  
    const {data, loading, error} = useFetchGit(props.login);
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>{JSON.stringify(error, null, 2)}</p>
  
    return (
      <section>
        <p>Your most explored budget lines are:</p>
        <ul style={{ textAlign: "left" }}>
          {budgetlines.map(budgetline =>
            <li key={budgetline.id}>
              {budgetline.title}
            </li>)}
        </ul>
        {data ?
          <>
            <p>{JSON.stringify(data)}</p>
            <p>{data.name}</p>
            <p>{data.url}</p>
            <p>{data.blog}</p>
            <img alt={data.login}
              src={data.avatar_url}
              height="200" />
          </>
          : <h1>No user available!</h1>}
      </section>
    );
  }

  export default Main;
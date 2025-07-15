import React, { useEffect, useState } from "react";

function IplPointsTable() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        const sorted = data.sort((a, b) => a.nrr - b.nrr);
        setTeams(sorted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading IPL Points Table...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>IPL 2022 Points Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
  {teams.map((team, index) => {
    console.log("Team details:", team);
    return (
      <tr key={team.Team}> {/* Using team.Team as key */}
        <td>{index + 1}</td>
        <td>{team.Team}</td>
        <td>{team.Matches}</td>
        <td>{team.Won}</td>
        <td>{team.Lost}</td>
        <td>{team.Tied}</td>
        <td>{team.NRR}</td>
        <td>{team.Points}</td>
      </tr>
    );
  })}
</tbody>
      </table>
    </div>
  );
}

export default IplPointsTable;

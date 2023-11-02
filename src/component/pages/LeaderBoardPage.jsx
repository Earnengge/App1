import React, { useEffect,useState } from "react"
import "./leaderBoard.css"
import Data from "./dataset.json"
function LeaderBoard() {
   const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the local file
    fetch('./src/component/pages/dataset.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching JSON data: ', error));
  }, []);

 console.log(jsonData)
  return (
    <>
    <div id="main">
    <div id="collapsible">Stat selector ▼</div>
    <table>
<thead>
<tr>
<th onclick="sortTable(0)"># <span style={{color: "lightgray"}}></span></th>
<th onclick="sortTable(1)">User <span style={{color: "lightgray"}}></span></th>
<th onclick="sortTable(2)" id="stat-column">Replies <span style={{color: "lightgray"}}></span></th>
<th onclick="sortTable(3)">Retweets<span style={{color: "lightgray"}}></span></th>
<th onclick="sortTable(4)">likes<span style={{color: "lightgray"}}></span></th>
<th onclick="sortTable(4)">points <span style={{color: "lightgray"}}></span></th>
</tr>
</thead>
<tbody>

{jsonData !== null
  ? jsonData.map((item, index) => (
      <tr key={index} className="bodyRow">
        <td>{index + 1}</td>
        <td>
          {item.user && item.user.screen_name ? (
            <a
              href={`https://twitter.com/${item.user.screen_name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.user?.name}
            </a>
          ) : (
            "N/A"
          )}
        </td>
        <td>{item.reply_count}</td>
        <td>{item.reply_count}</td>
        <td>{item.retweet_count}</td>
        <td>{item.favorite_count}</td>
      </tr>
    ))
  : (
    <tr>
      <td colSpan="4">Loading data...</td>
    </tr>
  )}



</tbody>
</table>
    </div>
      
    </>
  )
}

export default LeaderBoard
import React, { useState, useEffect } from "react";
import "./RecentList.css";
import Web3 from "web3";

function RecentList({ type }) {
  const [recentList, setRecentList] = useState([]);

  useEffect(() => {
    const web3 = new Web3(
      "https://mainnet.infura.io/v3/320147bac521449188ac7347ba389fb5"
    );
    // Replace <YOUR_INFURA_PROJECT_ID> with your Infura project ID

    const fetchRecentList = async () => {
      try {
        let result;
        if (type === "transactions") {
          result = await web3.eth.getBlock("latest");
        } else if (type === "blocks") {
          result = await web3.eth.getPastLogs({
            fromBlock: 0,
            toBlock: "latest",
            topics: [],
          });
        }
        setRecentList(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecentList();
  }, [type]);

  return (
    <div className="recent-list">
      <h2>Recent {type}</h2>
      <ul>
        {/* {recentList?.map((item) => (
          <li key={item.hash}>{item.hash}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default RecentList;

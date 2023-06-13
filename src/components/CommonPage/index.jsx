import React, { useCallback, useEffect, useState } from "react";
import Card from "../Card";
import { getData } from "../../data";

function CommonPage({ pageType }) {
  const [data, setData] = useState([]);
  // const [loader, setloader] = useState(true);

  let loadMoreData = useCallback(() => {
    const newdata = getData({
      ...(pageType === "your" ? { ownerId: 2 } : {}),
      ...(pageType === "blocked" ? { status: "block" } : {}),
    });
    setData([...newdata]);
    // setloader(false);
  }, [pageType]);

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div className="parent">
      <div className="commonPage">
        {data.length > 0
          ? data.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                budgetName={item.budget_name}
                cardType={item.card_type}
                expiry={item.expiry}
                limit={item.limit}
                status={item.status}
                spent={item.spent}
                availableSpent={item.available_to_spend}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default CommonPage;

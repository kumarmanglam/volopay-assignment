import React, { useCallback, useEffect, useState } from "react";
import Card from "../Card";
import { getData } from "../../data";
import FilterDropdown from "../FilterDropdown";

function CommonPage({ pageType }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  // const [loader, setloader] = useState(true);

  let loadMoreData = useCallback(() => {
    // setloader(true);
    const newdata = getData({
      searchQuery: search,
      cardType: filter,
      pageNumber,
      ...(pageType === "your" ? { ownerId: 2 } : {}),
      ...(pageType === "blocked" ? { status: "block" } : {}),
    });
    if (pageNumber === 1) {
      setData([...newdata]);
    } else {
      setData((prevData) => [...prevData, ...newdata]);
    }
    // setloader(false);
  }, [pageNumber, pageType, filter, search]);

  useEffect(() => {
    console.log("filter changed");
    setPageNumber(1);
    loadMoreData();
    console.log({ pageNumber });
  }, [filter, search]);

  // infinite scroll
  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      setPageNumber(pageNumber + 1);
      loadMoreData();
    }
  }, [loadMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="parent">
      <div className="actions flex">
        <input
          className="input"
          placeholder="Search here..."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter">
          <FilterDropdown
            onSelect={(option) => setFilter(option)}
            options={[
              { label: "All", value: "" },
              { label: "Burner", value: "burner" },
              { label: "Subscription", value: "subscription" },
            ]}
          />
        </div>
      </div>
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
        {/* {loader ? <div> Data Loading ....</div> : null}
        {!data.length && !loader ? <div>No Data Present ...</div> : null} */}
      </div>
    </div>
  );
}

export default CommonPage;

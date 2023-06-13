import React from "react";
import Card from "../Card";

function CommonPage() {
  const item = {
    name: "Linklinks",
    budget_name: "Charitable Donations",
    owner_id: 247,
    spent: {
      value: 963.62,
      currency: "SGD",
    },
    available_to_spend: {
      value: 4550.84,
      currency: "SGD",
    },
    card_type: "subscription",
    expiry: "2022-01-01T00:00:00Z",
    limit: 161.89,
    status: "active",
  };
  return (
    <div>
      <Card
        name={item.name}
        budgetName={item.budget_name}
        cardType={item.card_type}
        expiry={item.expiry}
        limit={item.limit}
        status={item.status}
        spent={item.spent}
        availableSpent={item.available_to_spend}
      />
    </div>
  );
}

export default CommonPage;

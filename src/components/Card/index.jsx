import React from "react";
import { formatDate } from "../../common/function";

function Card({
  name,
  budgetName,
  cardType,
  expiry,
  limit,
  status,
  spent,
  availableSpent,
}) {
  return (
    <div className="card">
      <div className="card-head">
        <div className="space-btw ">
          <p className="name">{name}</p>
          <p className={`${cardType} cardType flex ac`}>{cardType}</p>
        </div>
        <p className="budgetname">{budgetName}</p>
      </div>
      <div className="space-btw card-foot">
        <p className="flex ac gap-10 font-sm">
          <span className="spent dot"></span>
          Spent- {spent?.value}
          {spent?.currency}
        </p>
        <p className="flex ac gap-10 font-sm">
          <span className="available dot"></span>
          Available- {availableSpent?.value} {availableSpent?.currency}
        </p>
      </div>
      <div className="flex ac space-btw">
        {cardType === "burner" ? (
          <div className="expiry">Expiry {formatDate(expiry)}</div>
        ) : (
          <div className="expiry">
            Limit {limit} {spent?.currency}
          </div>
        )}
        <div className="volopay-name">Volopay</div>
      </div>
    </div>
  );
}

export default Card;

import API_DATA from "./data.json";

export const getData = (appliedFilter) => {
  const { searchQuery, cardType, pageNumber, ownerId, status, limit } = {
    searchQuery: "",
    cardType: "",
    pageNumber: 1,
    limit: 10,
    ownerId: null,
    status: null,
    ...appliedFilter,
  };
  console.log(appliedFilter);
  const filteredData = API_DATA.data.filter((item) => {
    const matchesSearchQuery =
      searchQuery.length === 0 ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCardType =
      cardType.length === 0 || cardType === item.card_type;
    const matchesOwnerId = ownerId === null || ownerId === item.owner_id;
    const matchesStatus = status === null || status === item.status;
    return (
      matchesSearchQuery && matchesCardType && matchesOwnerId && matchesStatus
    );
  });
  const data = filteredData.slice(
    (pageNumber - 1) * limit < 0 ? 0 : (pageNumber - 1) * limit,
    pageNumber * limit
  );

  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const newdata = { message: "Data fetched successfully", data.data };

  //     resolve(newdata);
  //   }, 0);
  // });

  return data;
};

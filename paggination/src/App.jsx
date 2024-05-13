import React from "react";

export default function App() {
  return (
    <div>
      <Search />
      <SortDropdown />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <DataTable />
          <PaginationBar />
        </>
      )}
    </div>
  );
}

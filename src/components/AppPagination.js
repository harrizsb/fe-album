import React from "react";
import { Pagination } from "antd";
import styled from "@emotion/styled";

const AppPaginationWrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`;

const AppPagination = ({ onChange, currentPage, total, pageSize }) => {
  return (
    <AppPaginationWrapper
      onChange={onChange}
      defaultCurrent={1}
      pageSize={pageSize}
      total={total}
      current={currentPage}
    />
  );
};

export default AppPagination;

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default function MyPagination() {
    return (
        <div id='paging'>
         <Pagination size="sm">
            <Pagination.First disabled />
            <Pagination.Prev disabled />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

        </div>
      );
}


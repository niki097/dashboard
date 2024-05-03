import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Use Link from react-router-dom

function BreadcrumbComponent() {
  return (
    <Breadcrumb separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink> {/* Navigates to Home */}
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/dashscreen">Dashboard</BreadcrumbLink> {/* Navigates to Docs */}
      </BreadcrumbItem>

    </Breadcrumb>
  );
}

export default BreadcrumbComponent;

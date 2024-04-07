import { Box, Button, Stack, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiUser";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../features/properties/Header";
import Content from "../features/properties/Content";

import Images from "../features/properties/Images";
import AmenityItems from "../features/properties/AmenityItems";
import LocationDetail from "../features/properties/LocationDetail";

import { useState } from "react";
import EditName from "../features/properties/EditName";
import { useNavigate } from "react-router-dom";
import EditDescription from "../features/properties/EditDescription";
import Property from "./Property";
import PropertyListsBody from "../features/properties/PropertyListsBody";
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "center",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

function PropertyLists() {
  const {
    isError,
    isLoading,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });
  // console.log(user?.property);
  // console.log(user);
  const navigate = useNavigate();

  // console.log(user);
  return (
    <>
      <Stack spacing={2}>
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <Spinner size="2rem" thick={7} />
          </Box>
        )}
        {user && user.data.property && (
          <Stack spacing={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                Welcome! {user.data.name}
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/become-a-host")}
                color="info"
                startIcon={
                  <AddCircleIcon
                    sx={{
                      transform: "scale(1.5)",
                    }}
                  />
                }
              >
                <Typography fontWeight="bold">New Property</Typography>
              </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>NAME</StyledTableCell>
                    <StyledTableCell>TYPE</StyledTableCell>
                    <StyledTableCell>CAPACITY</StyledTableCell>
                    <StyledTableCell>REVIEWS-SCORE</StyledTableCell>
                    <StyledTableCell>PRICE</StyledTableCell>
                    <StyledTableCell>&nbsp;</StyledTableCell>
                  </TableRow>
                </TableHead>
                <PropertyListsBody property={user.data.property} />
              </Table>
            </TableContainer>
          </Stack>
        )}
        {isError && (
          <ErrorMessage
            text="Something went wrong, Please try again. &#9888;"
            size="2rem"
          />
        )}
      </Stack>
    </>
  );
}

export default PropertyLists;

import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Stack, Typography } from "@mui/material";
import {
  styled,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { tableCellClasses } from "@mui/material/TableCell";

import ErrorMessage from "../components/ErrorMessage";
import Spinner from "../components/Spinner";
import NoProperty from "../components/NoProperty";
import PropertyListsBody from "../features/properties/PropertyListsBody";

import { getUserByEmail } from "../services/apiUser";
import { getHotelsOnUser } from "../services/apiHotel";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "center",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

function PropertyLists() {
  const navigate = useNavigate();
  const { user: authUser, getAccessTokenSilently } = useAuth0();

  // First: Fetch user based on Auth0 email
  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useQuery({
    queryKey: ["user", authUser?.email],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      return getUserByEmail(authUser!.email!, token);
    },
    enabled: !!authUser?.email,
  });

  // Second: Fetch properties AFTER user loaded

  const {
    data: propertyData,
    isLoading: isLoadingProperties,
    isError: isErrorProperties,
  } = useQuery({
    queryKey: ["properties", userData?.data._id],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      return getHotelsOnUser(userData!.data._id, token);
    },
    enabled: !!userData?.data._id,
  });

  // Helper states
  const isError = isErrorUser || isErrorProperties;
  const hasProperties =
    propertyData?.status === "success" &&
    propertyData?.data?.hotels?.length > 0;
  const noProperties =
    propertyData?.status === "success" &&
    propertyData?.data?.hotels?.length === 0;

  return (
    <Stack spacing={2}>
      <Stack spacing={6}>
        <Stack spacing={4}>
          <Box display="flex" justifyContent="space-between">
            {isLoadingUser || !authUser ? (
              <Spinner size="2rem" thick={7} />
            ) : (
              userData && (
                <>
                  <Typography variant="h4" fontWeight="bold">
                    Welcome! {userData.data.name}
                  </Typography>
                  <Button
                    variant="contained"
                    color="info"
                    onClick={() => navigate("/become-a-host")}
                    startIcon={
                      <AddCircleIcon sx={{ transform: "scale(1.5)" }} />
                    }
                  >
                    <Typography fontWeight="bold">New Property</Typography>
                  </Button>
                </>
              )
            )}
          </Box>

          {hasProperties && (
            <Typography>This is your Property list!</Typography>
          )}
        </Stack>

        {isLoadingProperties && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="50vh"
          >
            <Spinner size="2rem" thick={7} />
          </Box>
        )}

        {hasProperties && (
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
              <PropertyListsBody lists={propertyData.data.hotels} />
            </Table>
          </TableContainer>
        )}

        {noProperties && <NoProperty />}

        {isError && (
          <ErrorMessage
            text="Something went wrong, please try again ⚠️"
            size="2rem"
          />
        )}
      </Stack>
    </Stack>
  );
}
export default PropertyLists;

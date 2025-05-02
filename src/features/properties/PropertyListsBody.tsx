import { useNavigate } from "react-router-dom";
import { Button, TableCell, TableRow, Typography, styled } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

import { IProperties } from "../../services/apiHotel";

interface IProps {
  lists: IProperties[];
}
const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: "bold",
  textAlign: "center",

  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function PropertyListsBody({ lists }: IProps) {
  const navigate = useNavigate();

  return (
    <TableBody>
      {lists.map(
        ({
          name,
          propertyType,
          ratingsAverage,
          guestsQuantity,
          price,
          _id,
        }) => (
          <StyledTableRow key={_id}>
            <StyledTableCell component="th" scope="row">
              {name}
            </StyledTableCell>
            <StyledTableCell>{propertyType.name}</StyledTableCell>
            <StyledTableCell>Fits up to {guestsQuantity}</StyledTableCell>
            <StyledTableCell>
              {ratingsAverage === 0 ? "No review" : ratingsAverage}
            </StyledTableCell>
            <StyledTableCell>$ {price}</StyledTableCell>
            <StyledTableCell>
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate(_id)}
              >
                <Typography fontWeight="bold">See Detail</Typography>
              </Button>
            </StyledTableCell>
          </StyledTableRow>
        )
      )}
    </TableBody>
  );
}

export default PropertyListsBody;

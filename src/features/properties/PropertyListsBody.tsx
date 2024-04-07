import {
  Button,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { tableCellClasses } from "@mui/material/TableCell";
import { IProperty } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";

interface IProps {
  property: IProperty[];
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "center",

  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
    // backgroundColor: "red",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function PropertyListsBody({ property }: IProps) {
  const navigate = useNavigate();

  return (
    <TableBody>
      {property.map(
        ({
          name,
          propertyType,
          guestsQuantity,
          ratingsAverage,
          price,
          ratingsQuantity,
          _id,
        }) => (
          <StyledTableRow key={_id}>
            <StyledTableCell component="th" scope="row">
              {name}
            </StyledTableCell>
            <StyledTableCell>{propertyType.name}</StyledTableCell>
            <StyledTableCell>Fits up to {guestsQuantity}</StyledTableCell>
            <StyledTableCell>
              {ratingsQuantity === 0 ? "No review" : ratingsAverage}
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

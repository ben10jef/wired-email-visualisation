import {useState} from "react";
import {
    Card,
    Checkbox,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import {Label} from "@mui/icons-material";
import {filter} from "lodash";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import USERLIST from "../mock/user";

const TABLE_HEAD = [
    {id: '',},
    {id: 'name', label: 'NAME', alignRight: false},
    {id: 'company', label: 'COMPANY', alignRight: false},
    {id: 'type', label: 'TYPE', alignRight: false},
    {id: 'subscribe', label: 'SUSCRIBE', alignRight: false},
    {id: 'isVerified', label: 'VERIFIED', alignRight: false},
    {id: ''},
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    if (query) {
        return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}

const visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
};

const Users = () => {
    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('name');

    const [filterName, setFilterName] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

    const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

    return (
        <div>
            <Card>
                <TableContainer sx={{minWidth: 800}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {TABLE_HEAD.map((headCell) => (
                                    <TableCell
                                        key={headCell.id}
                                        align={headCell.alignRight ? 'right' : 'left'}
                                        sortDirection={orderBy === headCell.id ? order : false}
                                    >
                                        <TableSortLabel
                                            hideSortIcon
                                            active={orderBy === headCell.id}
                                            direction={orderBy === headCell.id ? order : 'asc'}
                                            onClick={createSortHandler(headCell.id)}
                                        >
                                            {headCell.label}
                                            {orderBy === headCell.id ? (
                                                <Box
                                                    sx={{...visuallyHidden}}>{order === 'desc' ? 'sorted descending' : 'sorted ascending'}</Box>
                                            ) : null}
                                        </TableSortLabel>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                debugger
                                const {id, name, type, subscribe, company, avatarUrl, isVerified} = row;
                                const isItemSelected = selected.indexOf(name) !== -1;

                                return (
                                    <TableRow
                                        hover
                                        key={id}
                                        tabIndex={-1}
                                        role="checkbox"
                                        selected={isItemSelected}
                                        aria-checked={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={isItemSelected}
                                                      onChange={(event) => handleClick(event, name)}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row" padding="none">
                                            <Stack direction="row" alignItems="center" spacing={2}>
                                                <Avatar alt={name} src={avatarUrl}/>
                                                <Typography variant="subtitle2" noWrap>
                                                    {name}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="left">{company}</TableCell>
                                        <TableCell align="left">{type}</TableCell>
                                        <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>
                                        <TableCell align="left">
                                            <Label variant="ghost"
                                                   color={(subscribe === false && 'error') || 'success'}>
                                            </Label>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button variant="contained" endIcon={<SendIcon/>}>
                                                SEND
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{height: 53 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={USERLIST.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card>
        </div>
    );
};

export default Users;
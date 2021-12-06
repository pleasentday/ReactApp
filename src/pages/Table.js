import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const Table = () => {
    const [users, setUsers] = useState([]);
// const [counter, useCounter] = useState(1);

useEffect(() => {
    axios.get("http://18.223.202.42:3001/api/users").then((response) => {
        setUsers(response.data);
    }).catch((e) => {
        console.log(e);
    });
});
  return (
    <div className="des">
        {users.map((user, index) => (
            <Link to={user.login}>
                <Card variant="outlined" className="card">
                    <React.Fragment>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {user.name}
                            </Typography>
                            <Typography variant="h5" component="div">
                                {user.login}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Age: {user.age}
                            </Typography>
                            <Typography variant="body2">
                                {user.address}
                                <br />
                                {user.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">{index+1}</Button>
                        </CardActions>
                    </React.Fragment>
                </Card>
            </Link>
        ))}
    </div>
  );
}

export default Table


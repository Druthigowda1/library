import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

const UserCard = () => {
    const [count, setCount] = useState(5);

    return (
        <Grid sx={{ display: 'flex', flexWrap: 'nowrap', gap: 4, p: 6 }}>
            <Typography variant="h5">Count: {count}</Typography>
            <Button
                variant="contained"
                onClick={() => setCount(count - 1)}
            >
                Decrease
            </Button>

            <Button
                variant="contained"
                onClick={() => setCount(count + 1)}
            >
                Increase
            </Button>
        </Grid>
    );
}
export default UserCard